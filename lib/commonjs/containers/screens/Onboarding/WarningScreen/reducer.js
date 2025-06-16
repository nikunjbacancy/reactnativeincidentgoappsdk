"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialState = exports.default = void 0;
var _immer = _interopRequireDefault(require("immer"));
var _constants = require("./constants");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const initialState = exports.initialState = {
  showPanicInfo: false,
  error: false,
  errorMessage: undefined
};
const warningScreenReducer = (0, _immer.default)((draft, action) => {
  switch (action.type) {
    case _constants.SHOW_PANIC_INFO:
      draft.showPanicInfo = true;
      break;
    case _constants.HIDE_PANIC_INFO:
      draft.showPanicInfo = false;
      break;
    case _constants.TRIGGER_DURESS_REQUEST:
      draft.showPanicInfo = false;
      break;
    case _constants.TRIGGER_DURESS_ERROR:
      draft.error = true;
      draft.errorMessage = action.payload.errorMessage;
      break;
    default:
      break;
  }
}, initialState);
var _default = exports.default = warningScreenReducer;
//# sourceMappingURL=reducer.js.map