"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = tipDetailScreenSaga;
exports.uploadVideo = uploadVideo;
var api = _interopRequireWildcard(require("../../../../../api"));
var _incidentCodeCore = require("incident-code-core");
var _map = _interopRequireDefault(require("lodash/map"));
var _reverse = _interopRequireDefault(require("lodash/reverse"));
var _effects = require("redux-saga/effects");
var _chat = require("../../../../../utils/chat");
var _error = require("../../../../../utils/error");
var _location = require("../../../../../utils/location");
var _actions = require("../MyTipsScreen/actions");
var _types = require("../MyTipsScreen/types");
var _actions2 = require("./actions");
var _constants = require("./constants");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 *
 * TipDetailScreen saga
 *
 */

function* getIncidentVideos({
  payload
}) {
  try {
    const videosResponse = yield (0, _effects.call)(api.incidents.getVideos, payload.incident.id);
    const organizationResponse = yield (0, _effects.call)(api.organizations.getOrganization, payload.organizationId);
    yield (0, _effects.put)((0, _actions2.getMessagesRequest)({
      incident: payload.incident,
      organization: organizationResponse.data
    }));
    yield (0, _effects.put)((0, _actions2.getIncidentVideosSuccess)({
      videos: (0, _reverse.default)(videosResponse.data.data || []),
      organization: organizationResponse.data
    }));
  } catch (error) {
    yield (0, _effects.put)((0, _actions2.getIncidentVideosFailure)((0, _error.handleError)(error)));
  }
}
function* uploadVideo({
  payload
}) {
  yield (0, _effects.spawn)(uploadVideoInParallel, payload);
}
function* uploadVideoInParallel(payload) {
  try {
    const options = yield (0, _effects.call)(getAmazonS3Options, payload);

    // add empty video card
    yield (0, _effects.put)((0, _actions2.addIncidentVideo)({
      id: options.id,
      isUploaded: false
    }));
    yield (0, _effects.call)(api.incidents.uploadVideo, options);
    yield (0, _effects.call)(checkVideoUploadCompletion, options);
    yield (0, _effects.put)((0, _actions2.uploadVideoSuccess)());
    api.logger.debug('UploadVideo', 'Success');
  } catch (error) {
    api.logger.warn('UploadVideo', 'Upload Failed', error);
    yield (0, _effects.put)((0, _actions2.uploadVideoFailure)((0, _error.handleError)(error)));
  }
}
function* getAmazonS3Options(payload) {
  try {
    // get amazon S3 authorization
    const amazonOptionsResponse = yield (0, _effects.call)(api.incidents.getAmazonOptions, payload.incident, payload.videoUri);
    api.logger.debug('Get S3 options', 'Success', amazonOptionsResponse.data);
    return amazonOptionsResponse.data;
  } catch (error) {
    api.logger.warn('Get S3 options', 'Failed', error);
    yield (0, _effects.put)((0, _actions2.uploadVideoFailure)((0, _error.handleError)(error)));
    return;
  }
}
function* checkVideoUploadCompletion(options) {
  for (let i = 0; i < 10; i += 1) {
    try {
      const response = yield (0, _effects.call)(api.incidents.getVideo, options.id);
      if (response.data.isUploaded) {
        yield (0, _effects.put)((0, _actions2.addIncidentVideo)(response.data));
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
function* getMessages({
  payload: {
    incident,
    organization
  }
}) {
  try {
    if (incident.isResolved) {
      const response = yield (0, _effects.call)(api.incidents.getChat, incident.id);
      if (response.data && response.data.messages) {
        // //("-response.data.messages--->",JSON.stringify(response.data.messages))
        const messages = (0, _map.default)(response.data.messages, message => (0, _chat.convertToGiftedChatMessage)(message));
        yield (0, _effects.put)((0, _actions2.getMessagesSuccess)(messages));
      }
    } else {
      var _incident$id;
      if (!incident.hasChat) {
        const location = yield (0, _effects.call)(_location.getCachedFineGeoPoint);
        yield (0, _effects.call)(api.incidents.startChat, {
          incident: incident.id,
          organization: organization.id,
          category: incident.category,
          comment: incident.comment,
          location
        });
      }
      const messages = yield (0, _effects.call)(api.twilio.getMessages, ((_incident$id = incident.id) === null || _incident$id === void 0 ? void 0 : _incident$id.toString()) || '');
      yield (0, _effects.put)((0, _actions2.getMessagesSuccess)(messages));
      yield (0, _effects.put)((0, _actions.resetState)());
      yield (0, _effects.put)((0, _actions.getTipsRequest)({
        tipStatus: _types.TipStatus.Active,
        paging: false
      }));
      yield (0, _effects.put)((0, _actions.getTipsRequest)({
        tipStatus: _types.TipStatus.Closed,
        paging: false
      }));
    }
  } catch (error) {
    yield (0, _effects.put)((0, _actions2.getMessagesFailure)((0, _error.handleError)(error)));
  }
}
function* sendMessage({
  payload
}) {
  try {
    var _location$coordinates, _location$coordinates2, _geocodeResponse$data, _payload$incident$id;
    const location = yield (0, _effects.call)(_location.getCachedFineGeoPoint);
    const geocodeResponse = yield (0, _effects.call)(api.user.getAddress, ((_location$coordinates = location.coordinates) === null || _location$coordinates === void 0 ? void 0 : _location$coordinates[1]) || 0, ((_location$coordinates2 = location.coordinates) === null || _location$coordinates2 === void 0 ? void 0 : _location$coordinates2[0]) || 0);
    const address = ((_geocodeResponse$data = geocodeResponse.data.results[0]) === null || _geocodeResponse$data === void 0 ? void 0 : _geocodeResponse$data.formatted_address) || '';
    const messageAttributes = {
      location,
      address
    };
    yield (0, _effects.call)(api.twilio.sendMessage, ((_payload$incident$id = payload.incident.id) === null || _payload$incident$id === void 0 ? void 0 : _payload$incident$id.toString()) || '', payload.message.text, messageAttributes);
    yield (0, _effects.call)(addLocation, payload.incident);
    yield (0, _effects.put)((0, _actions2.sendMessageSuccess)());
  } catch (error) {
    yield (0, _effects.put)((0, _actions2.sendMessageFailure)((0, _error.handleError)(error)));
  }
}
function* addLocation(incident) {
  var _incident$location, _incident$location2;
  const l1 = yield (0, _effects.call)(_location.getCachedFineLatLng);
  const l2 = {
    lng: ((_incident$location = incident.location) === null || _incident$location === void 0 || (_incident$location = _incident$location.coordinates) === null || _incident$location === void 0 ? void 0 : _incident$location[0]) || l1.lng,
    lat: ((_incident$location2 = incident.location) === null || _incident$location2 === void 0 || (_incident$location2 = _incident$location2.coordinates) === null || _incident$location2 === void 0 ? void 0 : _incident$location2[1]) || l1.lat
  };
  const distance = (0, _incidentCodeCore.geoDistance)(l1.lat, l1.lng, l2.lat, l2.lng);

  // don't send if the change is no more than 20 meter
  if (distance >= 20) {
    yield (0, _effects.call)(api.incidents.addLocation, incident.id, l1);
  }
}
function* getIncident({
  payload
}) {
  try {
    const response = yield (0, _effects.call)(api.incidents.getIncident, payload || '');
    yield (0, _effects.put)((0, _actions2.getIncidentSuccess)(response.data));
  } catch (error) {
    yield (0, _effects.put)((0, _actions2.getIncidentFailure)((0, _error.handleError)(error)));
  }
}
function* tipDetailScreenSaga() {
  yield (0, _effects.takeLatest)(_constants.GET_INCIDENT_VIDEOS_REQUEST, getIncidentVideos);
  yield (0, _effects.takeLatest)(_constants.UPLOAD_VIDEO_REQUEST, uploadVideo);
  yield (0, _effects.takeLatest)(_constants.GET_MESSAGES_REQUEST, getMessages);
  yield (0, _effects.takeLatest)(_constants.SEND_MESSAGE_REQUEST, sendMessage);
  yield (0, _effects.takeLatest)(_constants.GET_INCIDENT_REQUEST, getIncident);
}
//# sourceMappingURL=saga.js.map