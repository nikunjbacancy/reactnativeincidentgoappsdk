/**
 *
 * AddUserPortraitScreen saga
 *
 */
import * as api from '../../../../api';
import { updateUserPortrait } from '../../../../containers/app/actions';
import { delay } from 'incident-code-core';
import { call, put, takeLatest } from 'redux-saga/effects';
import { handleError } from '../../../../utils/error';
import { updatePortraitFailure, updatePortraitSuccess } from './actions';
import { UPDATE_PORTRAIT_REQUEST } from './constants';
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
export default function* myAccountScreenSaga() {
  yield takeLatest(UPDATE_PORTRAIT_REQUEST, updatePortrait);
}
//# sourceMappingURL=saga.js.map