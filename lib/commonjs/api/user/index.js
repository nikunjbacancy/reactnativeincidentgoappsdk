"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.endpoints = exports.default = void 0;
var _incidentCodeCore = require("incident-code-core");
var _replace = _interopRequireDefault(require("lodash/replace"));
var _rnFetchBlob = _interopRequireDefault(require("rn-fetch-blob"));
var _device = require("../../utils/device");
var _axios = _interopRequireDefault(require("../axios"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const endpoints = exports.endpoints = {
  user: 'user',
  usernotifications: 'usernotifications'
};
var _default = exports.default = {
  updateName: updateNameData => _axios.default.patch(endpoints.user, updateNameData),
  addContact: contact => _axios.default.post(`${endpoints.user}/contact`, contact),
  updateContact: contact => _axios.default.patch(`${endpoints.user}/contact`, contact),
  deleteContact: contactId => _axios.default.delete(`${endpoints.user}/contact/${contactId}`),
  updateOrganizations: organizationsIds => _axios.default.patch(endpoints.user, {
    organizations: organizationsIds
  }),
  getProfile: () => _axios.default.get(endpoints.user),
  setSetting: (key, value) => _axios.default.patch(`${endpoints.user}/setting`, {
    key,
    value
  }),
  getAddress: (lat, lng) => _axios.default.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${lat},${lng}&key=AIzaSyDQEfg7mKFvmYzQWFUYpRzv1PlwI6HuikI`),
  getAmazonUploadOptions: async filePath => {
    const newFilePath = _device.isIos ? (0, _replace.default)(filePath, 'file://', '') : filePath;
    const fileStat = await _rnFetchBlob.default.fs.stat(newFilePath);

    // @ts-ignore
    const amazonOptionsResponse = await _axios.default.post(`${endpoints.user}/profile-image`, {
      format: (0, _incidentCodeCore.getFileExtension)(filePath),
      size: fileStat.size
    });
    amazonOptionsResponse.data.filePath = newFilePath;
    return amazonOptionsResponse;
  },
  uploadPortrait: async options => {
    if (!options.filePath) return;
    // upload to s3
    await _rnFetchBlob.default.fetch(options.method, `https://${options.host}${options.path}`, options.headers, _rnFetchBlob.default.wrap(options.filePath));
  },
  completeUpload: options => _axios.default.patch(`${endpoints.user}/set-portrait`, options),
  deletePortrait: () => _axios.default.delete(`${endpoints.user}/remove-portrait`),
  getNotificationList: userId => _axios.default.get(`${endpoints.usernotifications}/${userId}`),
  readAllNotification: userId => _axios.default.put(`${endpoints.usernotifications}/${"markallnotificationasread"}/${userId}`),
  updateReadUnreadNotificationStatus: payload => _axios.default.patch(`${endpoints.usernotifications}/${"usernotification"}/${payload.notiId}`, {
    isRead: payload.isRead,
    userID: payload.userID
  }),
  updateLocationTrackData: payload => _axios.default.post(`geocreds/setdata`, payload),
  updateGeoCredStatus: payload => _axios.default.post(`/geocreds/updateUserGeocredsResponse`, payload),
  setSiteKeyStatus: payload => _axios.default.put(`sitekey/onsite/${payload.locationId}/${payload.userId}`, payload.body),
  getAllUserGeofences: userId => _axios.default.get(`${"adminPortal/orglocation/userloc"}/${userId}`)
};
//# sourceMappingURL=index.js.map