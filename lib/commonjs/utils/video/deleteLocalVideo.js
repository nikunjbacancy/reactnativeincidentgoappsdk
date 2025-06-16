"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _replace = _interopRequireDefault(require("lodash/replace"));
var _rnFetchBlob = _interopRequireDefault(require("rn-fetch-blob"));
var _device = require("../device");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const deleteLocalVideo = filePath => {
  const path = _device.isIos ? (0, _replace.default)(filePath, 'file://', '') : filePath;
  return _rnFetchBlob.default.fs.unlink(path);
};
var _default = exports.default = deleteLocalVideo;
//# sourceMappingURL=deleteLocalVideo.js.map