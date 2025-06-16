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
 * Routes reducer
 *
 */

const initialState = exports.initialState = {
  screenAction: undefined,
  showDuressInfo: false
};
const routesProviderReducer = (0, _immer.default)((draft, action) => {
  switch (action.type) {
    case _constants.ADD_SCREEN_ACTION:
      draft.screenAction = action.payload;
      break;
    case _constants.REMOVE_SCREEN_ACTION:
      draft.screenAction = undefined;
      break;
    case _constants.SHOW_DURESS_INFO_ACTION:
      draft.showDuressInfo = true;
      break;
    case _constants.HIDE_DURESS_INFO_ACTION:
      draft.showDuressInfo = false;
      break;
    default:
  }
}, initialState);
var _default = exports.default = routesProviderReducer;
//# sourceMappingURL=reducer.js.map