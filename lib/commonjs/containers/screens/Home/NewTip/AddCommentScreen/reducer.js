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
 * AddCommentScreen reducer
 *
 */

const initialState = exports.initialState = {
  creatingTip: false
};
const addCommentScreenReducer = (0, _immer.default)((draft, action) => {
  switch (action.type) {
    case _constants.CREATE_TIP_REQUEST:
      draft.creatingTip = true;
      break;
    case _constants.CREATE_TIP_SUCCESS:
    case _constants.CREATE_TIP_FAILURE:
      draft.creatingTip = false;
      break;
    default:
  }
}, initialState);
var _default = exports.default = addCommentScreenReducer;
//# sourceMappingURL=reducer.js.map