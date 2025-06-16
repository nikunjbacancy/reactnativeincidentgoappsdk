"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.triggerDuressRequest = exports.makeSetShowPanicInfo = exports.hidePanicInfo = exports.duressRequestError = void 0;
var _constants = require("./constants");
const makeSetShowPanicInfo = () => ({
  type: _constants.SHOW_PANIC_INFO
});
exports.makeSetShowPanicInfo = makeSetShowPanicInfo;
const hidePanicInfo = () => ({
  type: _constants.HIDE_PANIC_INFO
});
exports.hidePanicInfo = hidePanicInfo;
const triggerDuressRequest = onLocation => ({
  type: _constants.TRIGGER_DURESS_REQUEST,
  payload: {
    onLocation
  }
});
exports.triggerDuressRequest = triggerDuressRequest;
const duressRequestError = errorMessage => ({
  type: _constants.TRIGGER_DURESS_ERROR,
  payload: {
    errorMessage
  }
});
exports.duressRequestError = duressRequestError;
//# sourceMappingURL=actions.js.map