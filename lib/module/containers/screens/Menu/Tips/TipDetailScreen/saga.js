/**
 *
 * TipDetailScreen saga
 *
 */

import * as api from '../../../../../api';
import { geoDistance } from 'incident-code-core';
import map from 'lodash/map';
import reverse from 'lodash/reverse';
import { call, delay, put, spawn, takeLatest } from 'redux-saga/effects';
import { convertToGiftedChatMessage } from '../../../../../utils/chat';
import { handleError } from '../../../../../utils/error';
import { getCachedFineGeoPoint, getCachedFineLatLng } from '../../../../../utils/location';
import { getTipsRequest, resetState } from '../MyTipsScreen/actions';
import { TipStatus } from '../MyTipsScreen/types';
import { addIncidentVideo, getIncidentFailure, getIncidentSuccess, getIncidentVideosFailure, getIncidentVideosSuccess, getMessagesFailure, getMessagesRequest, getMessagesSuccess, sendMessageFailure, sendMessageSuccess, uploadVideoFailure, uploadVideoSuccess } from './actions';
import { GET_INCIDENT_REQUEST, GET_INCIDENT_VIDEOS_REQUEST, GET_MESSAGES_REQUEST, SEND_MESSAGE_REQUEST, UPLOAD_VIDEO_REQUEST } from './constants';
function* getIncidentVideos({
  payload
}) {
  try {
    const videosResponse = yield call(api.incidents.getVideos, payload.incident.id);
    const organizationResponse = yield call(api.organizations.getOrganization, payload.organizationId);
    yield put(getMessagesRequest({
      incident: payload.incident,
      organization: organizationResponse.data
    }));
    yield put(getIncidentVideosSuccess({
      videos: reverse(videosResponse.data.data || []),
      organization: organizationResponse.data
    }));
  } catch (error) {
    yield put(getIncidentVideosFailure(handleError(error)));
  }
}
export function* uploadVideo({
  payload
}) {
  yield spawn(uploadVideoInParallel, payload);
}
function* uploadVideoInParallel(payload) {
  try {
    const options = yield call(getAmazonS3Options, payload);

    // add empty video card
    yield put(addIncidentVideo({
      id: options.id,
      isUploaded: false
    }));
    yield call(api.incidents.uploadVideo, options);
    yield call(checkVideoUploadCompletion, options);
    yield put(uploadVideoSuccess());
    api.logger.debug('UploadVideo', 'Success');
  } catch (error) {
    api.logger.warn('UploadVideo', 'Upload Failed', error);
    yield put(uploadVideoFailure(handleError(error)));
  }
}
function* getAmazonS3Options(payload) {
  try {
    // get amazon S3 authorization
    const amazonOptionsResponse = yield call(api.incidents.getAmazonOptions, payload.incident, payload.videoUri);
    api.logger.debug('Get S3 options', 'Success', amazonOptionsResponse.data);
    return amazonOptionsResponse.data;
  } catch (error) {
    api.logger.warn('Get S3 options', 'Failed', error);
    yield put(uploadVideoFailure(handleError(error)));
    return;
  }
}
function* checkVideoUploadCompletion(options) {
  for (let i = 0; i < 10; i += 1) {
    try {
      const response = yield call(api.incidents.getVideo, options.id);
      if (response.data.isUploaded) {
        yield put(addIncidentVideo(response.data));
        api.logger.debug('CheckVideoUpload', 'Success', response.data);
        return;
      }
    } catch (error) {
      api.logger.warn('CheckVideoUpload', 'Failed', error);
    } finally {
      yield delay(2000);
    }
  }
  throw new Error('Upload video to S3 failed');
}
function* getMessages({
  payload: {
    incident,
    organization
  }
}) {
  try {
    if (incident.isResolved) {
      const response = yield call(api.incidents.getChat, incident.id);
      if (response.data && response.data.messages) {
        // //("-response.data.messages--->",JSON.stringify(response.data.messages))
        const messages = map(response.data.messages, message => convertToGiftedChatMessage(message));
        yield put(getMessagesSuccess(messages));
      }
    } else {
      var _incident$id;
      if (!incident.hasChat) {
        const location = yield call(getCachedFineGeoPoint);
        yield call(api.incidents.startChat, {
          incident: incident.id,
          organization: organization.id,
          category: incident.category,
          comment: incident.comment,
          location
        });
      }
      const messages = yield call(api.twilio.getMessages, ((_incident$id = incident.id) === null || _incident$id === void 0 ? void 0 : _incident$id.toString()) || '');
      yield put(getMessagesSuccess(messages));
      yield put(resetState());
      yield put(getTipsRequest({
        tipStatus: TipStatus.Active,
        paging: false
      }));
      yield put(getTipsRequest({
        tipStatus: TipStatus.Closed,
        paging: false
      }));
    }
  } catch (error) {
    yield put(getMessagesFailure(handleError(error)));
  }
}
function* sendMessage({
  payload
}) {
  try {
    var _location$coordinates, _location$coordinates2, _geocodeResponse$data, _payload$incident$id;
    const location = yield call(getCachedFineGeoPoint);
    const geocodeResponse = yield call(api.user.getAddress, ((_location$coordinates = location.coordinates) === null || _location$coordinates === void 0 ? void 0 : _location$coordinates[1]) || 0, ((_location$coordinates2 = location.coordinates) === null || _location$coordinates2 === void 0 ? void 0 : _location$coordinates2[0]) || 0);
    const address = ((_geocodeResponse$data = geocodeResponse.data.results[0]) === null || _geocodeResponse$data === void 0 ? void 0 : _geocodeResponse$data.formatted_address) || '';
    const messageAttributes = {
      location,
      address
    };
    yield call(api.twilio.sendMessage, ((_payload$incident$id = payload.incident.id) === null || _payload$incident$id === void 0 ? void 0 : _payload$incident$id.toString()) || '', payload.message.text, messageAttributes);
    yield call(addLocation, payload.incident);
    yield put(sendMessageSuccess());
  } catch (error) {
    yield put(sendMessageFailure(handleError(error)));
  }
}
function* addLocation(incident) {
  var _incident$location, _incident$location2;
  const l1 = yield call(getCachedFineLatLng);
  const l2 = {
    lng: ((_incident$location = incident.location) === null || _incident$location === void 0 || (_incident$location = _incident$location.coordinates) === null || _incident$location === void 0 ? void 0 : _incident$location[0]) || l1.lng,
    lat: ((_incident$location2 = incident.location) === null || _incident$location2 === void 0 || (_incident$location2 = _incident$location2.coordinates) === null || _incident$location2 === void 0 ? void 0 : _incident$location2[1]) || l1.lat
  };
  const distance = geoDistance(l1.lat, l1.lng, l2.lat, l2.lng);

  // don't send if the change is no more than 20 meter
  if (distance >= 20) {
    yield call(api.incidents.addLocation, incident.id, l1);
  }
}
function* getIncident({
  payload
}) {
  try {
    const response = yield call(api.incidents.getIncident, payload || '');
    yield put(getIncidentSuccess(response.data));
  } catch (error) {
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
//# sourceMappingURL=saga.js.map