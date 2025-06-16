/**
 *
 * TipDetailScreen saga
 *
 */

import * as api from '../../../../../api';
import { AxiosResponse } from 'axios';
import {
  geoDistance,
  Id,
  Incident,
  IncidentChat,
  IncidentVideo,
  IncidentVideoUploadOptions,
  LatLng,
  Organization,
  QueryResult,
} from 'incident-code-core';
import { GeoPoint } from 'incident-code-core/dist/types';
import map from 'lodash/map';
import reverse from 'lodash/reverse';
import { IMessage as GiftedChatMessage } from 'react-native-gifted-chat';
import { call, delay, put, spawn, takeLatest } from 'redux-saga/effects';
import { GeocodeResponse } from '../../../../../types';
import { convertToGiftedChatMessage } from '../../../../../utils/chat';
import { handleError } from '../../../../../utils/error';
import { getCachedFineGeoPoint, getCachedFineLatLng } from '../../../../../utils/location';

import { getTipsRequest, resetState } from '../MyTipsScreen/actions';
import { TipStatus } from '../MyTipsScreen/types';
import {
  addIncidentVideo,
  getIncidentFailure,
  getIncidentSuccess,
  getIncidentVideosFailure,
  getIncidentVideosSuccess,
  getMessagesFailure,
  getMessagesRequest,
  getMessagesSuccess,
  sendMessageFailure,
  sendMessageSuccess,
  uploadVideoFailure,
  uploadVideoSuccess,
} from './actions';
import {
  GET_INCIDENT_REQUEST,
  GET_INCIDENT_VIDEOS_REQUEST,
  GET_MESSAGES_REQUEST,
  SEND_MESSAGE_REQUEST,
  UPLOAD_VIDEO_REQUEST,
} from './constants';
import {
  GetIncidentRequestAction,
  GetIncidentVideosRequestAction,
  GetMessagesRequestAction,
  SendMessageRequestAction,
  UploadVideoRequestAction,
  UploadVideoRequestPayload,
} from './types';

function* getIncidentVideos({ payload }: GetIncidentVideosRequestAction) {
  try {
    const videosResponse: AxiosResponse<QueryResult<
      IncidentVideo
    >> = yield call(api.incidents.getVideos, payload.incident.id);

    const organizationResponse: AxiosResponse<Organization> = yield call(
      api.organizations.getOrganization,
      payload.organizationId,
    );

    yield put(
      getMessagesRequest({
        incident: payload.incident,
        organization: organizationResponse.data,
      }),
    );

    yield put(
      getIncidentVideosSuccess({
        videos: reverse(videosResponse.data.data || []),
        organization: organizationResponse.data,
      }),
    );
  } catch (error: any) {
    yield put(getIncidentVideosFailure(handleError(error)));
  }
}

export function* uploadVideo({ payload }: UploadVideoRequestAction) {
  yield spawn(uploadVideoInParallel, payload);
}

function* uploadVideoInParallel(payload: UploadVideoRequestPayload):any {
  try {
    const options = yield call(getAmazonS3Options, payload);

    // add empty video card
    yield put(addIncidentVideo({ id: options.id, isUploaded: false }));

    yield call(api.incidents.uploadVideo, options);

    yield call(checkVideoUploadCompletion, options);

    yield put(uploadVideoSuccess());

    api.logger.debug('UploadVideo', 'Success');
  } catch (error: any) {
    api.logger.warn('UploadVideo', 'Upload Failed', error);
    yield put(uploadVideoFailure(handleError(error)));
  }
}

function* getAmazonS3Options(payload: UploadVideoRequestPayload) {
  try {
    // get amazon S3 authorization
    const amazonOptionsResponse: AxiosResponse<IncidentVideoUploadOptions> = yield call(
      api.incidents.getAmazonOptions,
      payload.incident,
      payload.videoUri,
    );

    api.logger.debug('Get S3 options', 'Success', amazonOptionsResponse.data);

    return amazonOptionsResponse.data;
  } catch (error: any) {
    api.logger.warn('Get S3 options', 'Failed', error);
    yield put(uploadVideoFailure(handleError(error)));
    return;
  }
}

function* checkVideoUploadCompletion(options: IncidentVideoUploadOptions) {
  for (let i = 0; i < 10; i += 1) {
    try {
      const response: AxiosResponse<IncidentVideo> = yield call(
        api.incidents.getVideo,
        options.id,
      );
      if (response.data.isUploaded) {
        yield put(addIncidentVideo(response.data));
        api.logger.debug('CheckVideoUpload', 'Success', response.data);
        return;
      }
    } catch (error: any) {
      api.logger.warn('CheckVideoUpload', 'Failed', error);
    } finally {
      yield delay(2000);
    }
  }
  throw new Error('Upload video to S3 failed');
}

function* getMessages({
  payload: { incident, organization },
}: GetMessagesRequestAction):any {
  try {
    if (incident.isResolved) {
      const response: AxiosResponse<IncidentChat> = yield call(
        api.incidents.getChat,
        incident.id as Id,
      );
      if (response.data && response.data.messages) {
        // //("-response.data.messages--->",JSON.stringify(response.data.messages))
        const messages: GiftedChatMessage[] = map(
          response.data.messages,
          message => convertToGiftedChatMessage(message),
        );
        yield put(getMessagesSuccess(messages));
      }
    } else {
      if (!incident.hasChat) {
        const location = yield call(getCachedFineGeoPoint);
        yield call(api.incidents.startChat, {
          incident: incident.id as Id,
          organization: organization.id as Id,
          category: incident.category,
          comment: incident.comment,
          location,
        });
      }
      const messages: GiftedChatMessage[] = yield call(
        api.twilio.getMessages,
        incident.id?.toString() || '',
      );
      yield put(getMessagesSuccess(messages));
      yield put(resetState());
      yield put(getTipsRequest({ tipStatus: TipStatus.Active, paging: false }));
      yield put(getTipsRequest({ tipStatus: TipStatus.Closed, paging: false }));
    }
  } catch (error: any) {
    yield put(getMessagesFailure(handleError(error)));
  }
}

function* sendMessage({ payload }: SendMessageRequestAction) {
  try {
    const location: GeoPoint = yield call(getCachedFineGeoPoint);
    const geocodeResponse: AxiosResponse<GeocodeResponse> = yield call(
      api.user.getAddress,
      location.coordinates?.[1] || 0,
      location.coordinates?.[0] || 0,
    );
    const address = geocodeResponse.data.results[0]?.formatted_address || '';
    const messageAttributes = {
      location,
      address,
    };
    yield call(
      api.twilio.sendMessage,
      payload.incident.id?.toString() || '',
      payload.message.text,
      messageAttributes,
    );
    yield call(addLocation, payload.incident);
    yield put(sendMessageSuccess());
  } catch (error: any) {
    yield put(sendMessageFailure(handleError(error)));
  }
}

function* addLocation(incident: Incident) {
  const l1: LatLng = yield call(getCachedFineLatLng);
  const l2: LatLng = {
    lng: incident.location?.coordinates?.[0] || l1.lng,
    lat: incident.location?.coordinates?.[1] || l1.lat,
  };

  const distance = geoDistance(l1.lat, l1.lng, l2.lat, l2.lng);

  // don't send if the change is no more than 20 meter
  if (distance >= 20) {
    yield call(api.incidents.addLocation, incident.id as Id, l1);
  }
}

function* getIncident({ payload }: GetIncidentRequestAction) {
  try {
    const response: AxiosResponse<Incident> = yield call(
      api.incidents.getIncident,
      payload || '',
    );
    yield put(getIncidentSuccess(response.data));
  } catch (error: any) {
    yield put(getIncidentFailure(handleError(error)));
  }
}

export default function* tipDetailScreenSaga() {
  yield takeLatest(GET_INCIDENT_VIDEOS_REQUEST, getIncidentVideos);
  yield takeLatest(UPLOAD_VIDEO_REQUEST, uploadVideo);
  yield takeLatest(GET_MESSAGES_REQUEST, getMessages);
  yield takeLatest(SEND_MESSAGE_REQUEST, sendMessage);
  yield takeLatest(GET_INCIDENT_REQUEST, getIncident);
}
