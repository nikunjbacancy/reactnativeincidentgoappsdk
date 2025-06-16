"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _logger = _interopRequireDefault(require("../../api/logger"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const onSuccess = (resolve, position, isManual, coarseLocation) => {
  // appNative.event.emit(AppEvent.LocationUpdated)
  const type = coarseLocation == null ? 'fine' : 'coarse';
  const from = isManual == null ? 'watcher' : 'manual';
  _logger.default.debug('LocationService', `receive a ${type} location by ${from}`, position);
  resolve(position);
};
var _default = exports.default = onSuccess;
//# sourceMappingURL=onSuccess.js.map