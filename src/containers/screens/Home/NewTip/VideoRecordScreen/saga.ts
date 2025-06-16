/**
 *
 * VideoRecordScreen saga
 *
 */

import * as api from '../../../../../api';
import { AxiosResponse } from 'axios';
import { triggerOnboardForInactiveUser } from '../../../../../containers/app/saga';
import { makeSelectNewTipIncident } from '../../../../../containers/app/selectors';
import { removeScreenAction } from '../../../../../containers/providers/RoutesProvider/actions';
import {
  Incident,
  IncidentVideo,
  IncidentVideoUploadOptions,
  Organization,
} from 'incident-code-core';
import {
  call,
  delay,
  put,
  select,
  spawn,
  takeLatest,
} from 'redux-saga/effects';
import { handleError } from '../../../../../utils/error';

import { getIntersectOrganizationsRequest } from '../SelectOrganizationScreen/actions';
import {
  addIncidentVideo,
  createIncidentFailure,
  createIncidentSuccess,
  createTipWithChatFailure,
  createTipWithChatSuccess,
  deleteIncidentFailure,
  deleteIncidentSuccess,
  getLastTipOrganizationFailure,
  getLastTipOrganizationSuccess,
  getUserOrganizationsFailure,
  getUserOrganizationsSuccess,
  hideCancelIncidentModal,
  uploadVideoFailure,
  uploadVideoSuccess,
} from './actions';
import {
  CREATE_INCIDENT_REQUEST,
  CREATE_TIP_WITH_CHAT_REQUEST,
  DELETE_INCIDENT_REQUEST,
  GET_LAST_ACTIVE_TIP_ORGANIZATION_REQUEST,
  GET_USER_ORGANIZATIONS_REQUEST,
  UPLOAD_VIDEO_REQUEST,
} from './constants';
import {
  GetLastActiveTipOrganizationRequestAction,
  UploadVideoRequestAction,
} from './types';

export function* createIncident() {
  try {
    const response: AxiosResponse<Incident> = yield call(
      api.incidents.createIncident,
    );
    yield put(createIncidentSuccess(response.data));
    api.logger.debug('CreateIncident', 'Success', response.data);
  } catch (error: any) {
    api.logger.warn('CreateIncident', 'Create Failed', error);
    yield put(createIncidentFailure(handleError(error)));
  }
}

export function* uploadVideo({ payload }: UploadVideoRequestAction) {
  yield spawn(uploadVideoInParallel, payload);
}

function* uploadVideoInParallel(filePath: string): any {
  try {
    const options = yield call(getAmazonS3Options, filePath);

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

function* getAmazonS3Options(filePath: string) {
  let incident: Incident = yield select(makeSelectNewTipIncident());
  try {
    if (!incident) {
      yield call(createIncident);
      incident = yield select(makeSelectNewTipIncident());
    }

    // get amazon S3 authorization
    const amazonOptionsResponse: AxiosResponse<IncidentVideoUploadOptions> = yield call(
      api.incidents.getAmazonOptions,
      incident,
      filePath,
    );

    api.logger.debug('Get S3 options', 'Success', amazonOptionsResponse.data);

    return amazonOptionsResponse.data;
  } catch (error: any) {
    api.logger.warn('Get S3 options', 'Failed', error);
    yield put(uploadVideoFailure(handleError(error)));
    return null;
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
    } catch (error) {
      api.logger.warn('CheckVideoUpload', 'Failed', error);
    } finally {
      yield delay(2000);
    }
  }
  throw new Error('Upload video to S3 failed');
}

function* deleteIncident() {
  try {
    const incident: Incident = yield select(makeSelectNewTipIncident());
    if (incident) {
      yield call(api.incidents.deleteIncident, incident.id);
    }
    yield put(deleteIncidentSuccess());
    yield put(hideCancelIncidentModal());
    yield put(removeScreenAction());
  } catch (error: any) {
    api.logger.warn('Delete incident', 'Failed', error);
    yield put(deleteIncidentFailure(handleError(error)));
  }
}

function* getUserOrganizations() {
  try {
    const response: AxiosResponse<Organization[]> = yield call(
      api.organizations.getUserOrganizations,
    );
    yield put(getUserOrganizationsSuccess(response.data));
  } catch (error: any) {
    if (error.response.data.code === 'user_no_belong_organization') {
      yield* triggerOnboardForInactiveUser();
    }
    api.logger.warn('Get user organizations', 'Failed', error);
    yield put(getUserOrganizationsFailure(handleError(error)));
  }
}

function* createTipWithChat() {
  try {
    yield call(createIncident);
    yield put(getIntersectOrganizationsRequest());
    yield put(createTipWithChatSuccess());
  } catch (error: any) {
    yield put(createTipWithChatFailure(handleError(error)));
  }
}

function* getLastActiveTipOrganization({
  payload,
}: GetLastActiveTipOrganizationRequestAction) {
  try {
    const organizationResponse: AxiosResponse<Organization> = yield call(
      api.organizations.getOrganization,
      payload,
    );
    yield put(getLastTipOrganizationSuccess(organizationResponse.data));
  } catch (error: any) {
    yield put(getLastTipOrganizationFailure(handleError(error)));
  }
}

export default function* newTipScreenSaga() {
  yield takeLatest(CREATE_INCIDENT_REQUEST, createIncident);
  yield takeLatest(UPLOAD_VIDEO_REQUEST, uploadVideo);
  yield takeLatest(DELETE_INCIDENT_REQUEST, deleteIncident);
  yield takeLatest(GET_USER_ORGANIZATIONS_REQUEST, getUserOrganizations);
  yield takeLatest(CREATE_TIP_WITH_CHAT_REQUEST, createTipWithChat);
  yield takeLatest(
    GET_LAST_ACTIVE_TIP_ORGANIZATION_REQUEST,
    getLastActiveTipOrganization,
  );
}
