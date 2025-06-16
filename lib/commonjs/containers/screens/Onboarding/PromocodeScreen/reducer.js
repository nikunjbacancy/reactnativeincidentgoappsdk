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
 * MyAccountScreen reducer
 *
 */

const initialState = exports.initialState = {
  access_token: ''
};
const RegisterUserScreenReducer = (0, _immer.default)((draft, action) => {
  console.log(draft);
  switch (action.type) {
    case _constants.REGISTER_USER_REQUEST:
      // draft.isUpdating = true;
      break;
    case _constants.REGISTER_USER_SUCCESS:
      // draft.isUpdating = false;
      // draft.uploadMessageType = PortraitMessageType.UploadSuccess;
      break;
    case _constants.REGISTER_USER_FAILURE:
      // draft.isUpdating = false;
      // draft.uploadMessageType = PortraitMessageType.UploadFail;
      break;
    default:
      break;
  }
}, initialState);
var _default = exports.default = RegisterUserScreenReducer;
//# sourceMappingURL=reducer.js.map