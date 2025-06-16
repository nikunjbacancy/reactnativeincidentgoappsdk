"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.endpoints = exports.default = void 0;
var _replace = _interopRequireDefault(require("lodash/replace"));
var _rnFetchBlob = _interopRequireDefault(require("rn-fetch-blob"));
var _device = require("../../utils/device");
var _location = require("../../utils/location");
var _video = require("../../utils/video");
var _axios = _interopRequireDefault(require("../axios"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* eslint-disable no-console */

const endpoints = exports.endpoints = {
  incidents: 'incidents'
};
var _default = exports.default = {
  getAmazonOptions: async (incident, filePath) => {
    const newFilePath = _device.isIos ? (0, _replace.default)(filePath, 'file://', '') : filePath;
    const fileStat = await _rnFetchBlob.default.fs.stat(newFilePath);
    const geoPoint = await (0, _location.getCachedFineGeoPoint)();

    // @ts-ignore
    const amazonOptionsResponse = await _axios.default.post(`${endpoints.incidents}/video`, {
      format: (0, _video.getFileExtension)(filePath),
      size: fileStat.size,
      incident: incident.id,
      location: geoPoint
    });
    amazonOptionsResponse.data.filePath = newFilePath;
    return amazonOptionsResponse;
  },
  createIncident: async (request = {}) => {
    const geoPoint = await (0, _location.getCachedFineGeoPoint)();
    return _axios.default.post(endpoints.incidents, {
      ...request,
      location: geoPoint
    });
  },
  getVideo: videoId => _axios.default.get(`${endpoints.incidents}/videos/${videoId}`),
  getVideos: incidentId => _axios.default.get(`${endpoints.incidents}/${incidentId}/videos/`),
  uploadVideo: async options => {
    if (!options.filePath) return;
    // upload to s3
    await _rnFetchBlob.default.fetch(options.method, `https://${options.host}${options.path}`, options.headers, _rnFetchBlob.default.wrap(options.filePath));

    // delete video after upload
    await (0, _video.deleteLocalVideo)(options.filePath);
  },
  deleteIncident: id => _axios.default.delete(`${endpoints.incidents}/${id}`),
  doIncidentAction: incidentActionRequest => _axios.default.post(`${endpoints.incidents}/action`, incidentActionRequest),
  getIncidents: query => _axios.default.get(`${endpoints.incidents}/self`, {
    params: query
  }),
  getIncident: id => _axios.default.get(`${endpoints.incidents}/${id}`),
  startChat: incidentChatRequest => _axios.default.post(`${endpoints.incidents}/chat`, incidentChatRequest),
  getChat: id => _axios.default.get(`${endpoints.incidents}/${id}/chat`),
  addLocation: (id, latLng) => _axios.default.post(`${endpoints.incidents}/${id}/location`, latLng),
  startEscort: async request => _axios.default.post(`${endpoints.incidents}/escort`, request),
  getEscort: async incidentId => _axios.default.get(`${endpoints.incidents}/${incidentId}/escort`),
  updateEscortState: (incidentEscortId, request) => _axios.default.patch(`${endpoints.incidents}/${incidentEscortId}/escort/state`, request),
  getPassiveEscort: async incidentId => _axios.default.get(`${endpoints.incidents}/${incidentId}/escort/passive`),
  createPassiveEscort: async (request = {}) => {
    return _axios.default.post(`${endpoints.incidents}/escort/passive`, {
      ...request
    });
  },
  passiveToActiveEscort: async request => {
    return _axios.default.post(`${endpoints.incidents}/escort/passive/expired`, {
      ...request
    });
  },
  passiveToPanicEscort: async request => {
    return _axios.default.post(`${endpoints.incidents}/escort/passive/panic`, {
      ...request
    });
  },
  updatePassiveEscortLog: async (request = {}) => {
    return _axios.default.post(`${endpoints.incidents}/escort/passive/log`, {
      ...request
    });
  },
  updatePassiveEscortState: async (incidentEscortId, request) => _axios.default.patch(`${endpoints.incidents}/${incidentEscortId}/escort/passive/state`, request),
  updateIncidentChatHistory: async (incidentId, request) => _axios.default.post(`${endpoints.incidents}/${incidentId}/history`, request)
};
//# sourceMappingURL=index.js.map