"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createIncident = createIncident;
exports.default = newTipScreenSaga;
exports.uploadVideo = uploadVideo;
var api = _interopRequireWildcard(require("../../../../../api"));
var _saga = require("../../../../../containers/app/saga");
var _selectors = require("../../../../../containers/app/selectors");
var _actions = require("../../../../../containers/providers/RoutesProvider/actions");
var _effects = require("redux-saga/effects");
var _error = require("../../../../../utils/error");
var _actions2 = require("../SelectOrganizationScreen/actions");
var _actions3 = require("./actions");
var _constants = require("./constants");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 *
 * VideoRecordScreen saga
 *
 */

function* createIncident() {
  try {
    const response = yield (0, _effects.call)(api.incidents.createIncident);
    yield (0, _effects.put)((0, _actions3.createIncidentSuccess)(response.data));
    api.logger.debug('CreateIncident', 'Success', response.data);
  } catch (error) {
    api.logger.warn('CreateIncident', 'Create Failed', error);
    yield (0, _effects.put)((0, _actions3.createIncidentFailure)((0, _error.handleError)(error)));
  }
}
function* uploadVideo({
  payload
}) {
  yield (0, _effects.spawn)(uploadVideoInParallel, payload);
}
function* uploadVideoInParallel(filePath) {
  try {
    const options = yield (0, _effects.call)(getAmazonS3Options, filePath);

    // add empty video card
    yield (0, _effects.put)((0, _actions3.addIncidentVideo)({
      id: options.id,
      isUploaded: false
    }));
    yield (0, _effects.call)(api.incidents.uploadVideo, options);
    yield (0, _effects.call)(checkVideoUploadCompletion, options);
    yield (0, _effects.put)((0, _actions3.uploadVideoSuccess)());
    api.logger.debug('UploadVideo', 'Success');
  } catch (error) {
    api.logger.warn('UploadVideo', 'Upload Failed', error);
    yield (0, _effects.put)((0, _actions3.uploadVideoFailure)((0, _error.handleError)(error)));
  }
}
function* getAmazonS3Options(filePath) {
  let incident = yield (0, _effects.select)((0, _selectors.makeSelectNewTipIncident)());
  try {
    if (!incident) {
      yield (0, _effects.call)(createIncident);
      incident = yield (0, _effects.select)((0, _selectors.makeSelectNewTipIncident)());
    }

    // get amazon S3 authorization
    const amazonOptionsResponse = yield (0, _effects.call)(api.incidents.getAmazonOptions, incident, filePath);
    api.logger.debug('Get S3 options', 'Success', amazonOptionsResponse.data);
    return amazonOptionsResponse.data;
  } catch (error) {
    api.logger.warn('Get S3 options', 'Failed', error);
    yield (0, _effects.put)((0, _actions3.uploadVideoFailure)((0, _error.handleError)(error)));
    return null;
  }
}
function* checkVideoUploadCompletion(options) {
  for (let i = 0; i < 10; i += 1) {
    try {
      const response = yield (0, _effects.call)(api.incidents.getVideo, options.id);
      if (response.data.isUploaded) {
        yield (0, _effects.put)((0, _actions3.addIncidentVideo)(response.data));
        api.logger.debug('CheckVideoUpload', 'Success', response.data);
        return;
      }
    } catch (error) {
      api.logger.warn('CheckVideoUpload', 'Failed', error);
    } finally {
      yield (0, _effects.delay)(2000);
    }
  }
  throw new Error('Upload video to S3 failed');
}
function* deleteIncident() {
  try {
    const incident = yield (0, _effects.select)((0, _selectors.makeSelectNewTipIncident)());
    if (incident) {
      yield (0, _effects.call)(api.incidents.deleteIncident, incident.id);
    }
    yield (0, _effects.put)((0, _actions3.deleteIncidentSuccess)());
    yield (0, _effects.put)((0, _actions3.hideCancelIncidentModal)());
    yield (0, _effects.put)((0, _actions.removeScreenAction)());
  } catch (error) {
    api.logger.warn('Delete incident', 'Failed', error);
    yield (0, _effects.put)((0, _actions3.deleteIncidentFailure)((0, _error.handleError)(error)));
  }
}
function* getUserOrganizations() {
  try {
    const response = yield (0, _effects.call)(api.organizations.getUserOrganizations);
    yield (0, _effects.put)((0, _actions3.getUserOrganizationsSuccess)(response.data));
  } catch (error) {
    if (error.response.data.code === 'user_no_belong_organization') {
      yield* (0, _saga.triggerOnboardForInactiveUser)();
    }
    api.logger.warn('Get user organizations', 'Failed', error);
    yield (0, _effects.put)((0, _actions3.getUserOrganizationsFailure)((0, _error.handleError)(error)));
  }
}
function* createTipWithChat() {
  try {
    yield (0, _effects.call)(createIncident);
    yield (0, _effects.put)((0, _actions2.getIntersectOrganizationsRequest)());
    yield (0, _effects.put)((0, _actions3.createTipWithChatSuccess)());
  } catch (error) {
    yield (0, _effects.put)((0, _actions3.createTipWithChatFailure)((0, _error.handleError)(error)));
  }
}
function* getLastActiveTipOrganization({
  payload
}) {
  try {
    const organizationResponse = yield (0, _effects.call)(api.organizations.getOrganization, payload);
    yield (0, _effects.put)((0, _actions3.getLastTipOrganizationSuccess)(organizationResponse.data));
  } catch (error) {
    yield (0, _effects.put)((0, _actions3.getLastTipOrganizationFailure)((0, _error.handleError)(error)));
  }
}
function* newTipScreenSaga() {
  yield (0, _effects.takeLatest)(_constants.CREATE_INCIDENT_REQUEST, createIncident);
  yield (0, _effects.takeLatest)(_constants.UPLOAD_VIDEO_REQUEST, uploadVideo);
  yield (0, _effects.takeLatest)(_constants.DELETE_INCIDENT_REQUEST, deleteIncident);
  yield (0, _effects.takeLatest)(_constants.GET_USER_ORGANIZATIONS_REQUEST, getUserOrganizations);
  yield (0, _effects.takeLatest)(_constants.CREATE_TIP_WITH_CHAT_REQUEST, createTipWithChat);
  yield (0, _effects.takeLatest)(_constants.GET_LAST_ACTIVE_TIP_ORGANIZATION_REQUEST, getLastActiveTipOrganization);
}
//# sourceMappingURL=saga.js.map