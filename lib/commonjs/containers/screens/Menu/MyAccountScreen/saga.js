"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = myAccountScreenSaga;
exports.updateName = updateName;
exports.updatePortrait = updatePortrait;
var api = _interopRequireWildcard(require("../../../../api"));
var _actions = require("../../../../containers/app/actions");
var _incidentCodeCore = require("incident-code-core");
var _effects = require("redux-saga/effects");
var _error = require("../../../../utils/error");
var _actions2 = require("./actions");
var _constants = require("./constants");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 *
 * MyAccountScreen saga
 *
 */

function* updateName({
  payload
}) {
  try {
    yield (0, _effects.call)(api.user.updateName, payload);
    yield (0, _effects.put)((0, _actions2.updateNameSuccess)(payload));
  } catch (error) {
    yield (0, _effects.put)((0, _actions2.updateNameFailure)((0, _error.handleError)(error)));
  }
}
function* updatePortrait({
  payload
}) {
  try {
    const options = yield (0, _effects.call)(getAmazonS3Options, payload);
    yield (0, _effects.call)(api.user.uploadPortrait, options);
    yield (0, _effects.call)(CompletePortraitUpload, options);
    yield (0, _effects.put)((0, _actions2.updatePortraitSuccess)());
  } catch (error) {
    yield (0, _effects.put)((0, _actions2.updatePortraitFailure)((0, _error.handleError)(error)));
  }
}
function* getAmazonS3Options(filePath) {
  try {
    // get amazon S3 authorization
    const amazonOptionsResponse = yield (0, _effects.call)(api.user.getAmazonUploadOptions, filePath);
    api.logger.debug('Get S3 options', 'Success', amazonOptionsResponse.data);
    return amazonOptionsResponse.data;
  } catch (error) {
    api.logger.warn('Get S3 options', 'Failed', error);
    yield (0, _effects.put)((0, _actions2.updatePortraitFailure)((0, _error.handleError)(error)));
    return;
  }
}
function* CompletePortraitUpload(options) {
  try {
    const response = yield (0, _effects.call)(api.user.completeUpload, options);
    if (response.data) {
      api.logger.debug('ImageUpload', 'Success');
      yield (0, _effects.put)((0, _actions.updateUserPortrait)(response.data));
      return;
    }
  } catch (error) {
    api.logger.warn('ImageUpload', 'Failed', error);
  } finally {
    yield (0, _incidentCodeCore.delay)(2000);
  }
  throw new Error('Upload image to S3 failed');
}
function* deletePortrait() {
  try {
    yield (0, _effects.call)(api.user.deletePortrait);
    yield (0, _effects.put)((0, _actions2.deletePortraitSuccess)());
    yield (0, _effects.put)((0, _actions.updateUserPortrait)(undefined));
  } catch (error) {
    yield (0, _effects.put)((0, _actions2.deletePortraitFailure)((0, _error.handleError)(error)));
  }
}
function* myAccountScreenSaga() {
  yield (0, _effects.takeLatest)(_constants.UPDATE_MY_ACCOUNT_NAME_REQUEST, updateName);
  yield (0, _effects.takeLatest)(_constants.UPDATE_PORTRAIT_REQUEST, updatePortrait);
  yield (0, _effects.takeLatest)(_constants.DELETE_PORTRAIT, deletePortrait);
}
//# sourceMappingURL=saga.js.map