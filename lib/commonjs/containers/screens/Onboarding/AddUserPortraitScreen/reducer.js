"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialState = exports.default = void 0;
var _ImageUpload = require("../../../../components/ImageUpload");
var _immer = _interopRequireDefault(require("immer"));
var _constants = require("./constants");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 *
 * MyAccountScreen reducer
 *
 */

const initialState = exports.initialState = {
  isUpdating: false,
  uploadMessageType: undefined
};
const addUserPortraitScreenReducer = (0, _immer.default)((draft, action) => {
  switch (action.type) {
    case _constants.UPDATE_PORTRAIT_REQUEST:
      draft.isUpdating = true;
      break;
    case _constants.UPDATE_PORTRAIT_SUCCESS:
      draft.isUpdating = false;
      draft.uploadMessageType = _ImageUpload.PortraitMessageType.UploadSuccess;
      break;
    case _constants.UPDATE_PORTRAIT_FAILURE:
      draft.isUpdating = false;
      draft.uploadMessageType = _ImageUpload.PortraitMessageType.UploadFail;
      break;
    case _constants.CLEAR_MESSAGE_TYPE:
      draft.uploadMessageType = undefined;
      break;
    default:
      break;
  }
}, initialState);
var _default = exports.default = addUserPortraitScreenReducer;
//# sourceMappingURL=reducer.js.map