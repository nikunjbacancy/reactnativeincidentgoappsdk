/**
 *
 * MyAccountScreen saga
 *
 */

import * as api from '../../../../api';
import { updateUserPortrait } from '../../../../containers/app/actions';
import { delay } from 'incident-code-core';
import { call, put, takeLatest } from 'redux-saga/effects';
import { handleError } from '../../../../utils/error';
import { deletePortraitFailure, deletePortraitSuccess, updateNameFailure, updateNameSuccess, updatePortraitFailure, updatePortraitSuccess } from './actions';
import { DELETE_PORTRAIT, UPDATE_MY_ACCOUNT_NAME_REQUEST, UPDATE_PORTRAIT_REQUEST } from './constants';
export function* updateName({
  payload
}) {
  try {
    yield call(api.user.updateName, payload);
    yield put(updateNameSuccess(payload));
  } catch (error) {
    yield put(updateNameFailure(handleError(error)));
  }
}
export function* updatePortrait({
  payload
}) {
  try {
    const options = yield call(getAmazonS3Options, payload);
    yield call(api.user.uploadPortrait, options);
    yield call(CompletePortraitUpload, options);
    yield put(updatePortraitSuccess());
  } catch (error) {
    yield put(updatePortraitFailure(handleError(error)));
  }
}
function* getAmazonS3Options(filePath) {
  try {
    // get amazon S3 authorization
    const amazonOptionsResponse = yield call(api.user.getAmazonUploadOptions, filePath);
    api.logger.debug('Get S3 options', 'Success', amazonOptionsResponse.data);
    return amazonOptionsResponse.data;
  } catch (error) {
    api.logger.warn('Get S3 options', 'Failed', error);
    yield put(updatePortraitFailure(handleError(error)));
    return;
  }
}
function* CompletePortraitUpload(options) {
  try {
    const response = yield call(api.user.completeUpload, options);
    if (response.data) {
      api.logger.debug('ImageUpload', 'Success');
      yield put(updateUserPortrait(response.data));
      return;
    }
  } catch (error) {
    api.logger.warn('ImageUpload', 'Failed', error);
  } finally {
    yield delay(2000);
  }
  throw new Error('Upload image to S3 failed');
}
function* deletePortrait() {
  try {
    yield call(api.user.deletePortrait);
    yield put(deletePortraitSuccess());
    yield put(updateUserPortrait(undefined));
  } catch (error) {
    yield put(deletePortraitFailure(handleError(error)));
  }
}
export default function* myAccountScreenSaga() {
  yield takeLatest(UPDATE_MY_ACCOUNT_NAME_REQUEST, updateName);
  yield takeLatest(UPDATE_PORTRAIT_REQUEST, updatePortrait);
  yield takeLatest(DELETE_PORTRAIT, deletePortrait);
}
//# sourceMappingURL=saga.js.map