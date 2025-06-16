"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialState = exports.default = void 0;
var _immer = _interopRequireDefault(require("immer"));
var _constants = require("./constants");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 *
 * App reducer
 *
 */

const initialState = exports.initialState = {
  iosForegroundNotification: undefined
};
const notificationProviderReducer = (0, _immer.default)((draft, action) => {
  switch (action.type) {
    case _constants.SHOW_IOS_FOREGROUND_NOTIFICATION:
      draft.iosForegroundNotification = action.payload;
      break;
    case _constants.HIDE_IOS_FOREGROUND_NOTIFICATION:
      draft.iosForegroundNotification = undefined;
      break;
    default:
  }
}, initialState);
var _default = exports.default = notificationProviderReducer;
//# sourceMappingURL=reducer.js.map