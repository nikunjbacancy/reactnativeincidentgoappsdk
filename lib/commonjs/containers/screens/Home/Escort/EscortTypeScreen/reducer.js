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
 * EscortTypeScreen reducer
 *
 */

const initialState = exports.initialState = {
  escortType: undefined,
  showSiteKeyModel: undefined
};
const escortTypeScreenReducer = (0, _immer.default)((draft, action) => {
  switch (action.type) {
    case _constants.TOGGLE_ESCORT_TYPE:
      draft.escortType = action.payload;
      break;
    case _constants.SHOW_SITE_KEY_MODAL:
      draft.showSiteKeyModel = true;
      break;
    case _constants.HIDE_SITE_KEY_MODAL:
      draft.showSiteKeyModel = false;
      break;
    default:
      break;
  }
}, initialState);
var _default = exports.default = escortTypeScreenReducer;
//# sourceMappingURL=reducer.js.map