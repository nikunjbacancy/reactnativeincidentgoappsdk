"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialState = exports.default = void 0;
var _immer = _interopRequireDefault(require("immer"));
var _incidentCodeCore = require("incident-code-core");
var _constants = require("./constants");
var _types = require("./types");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 *
 * VideoRecordScreen reducer
 *
 */

const initialState = exports.initialState = {
  createTipMode: _types.CreateTipMode.Video,
  shouldShowCancelIncidentModal: false,
  deletingIncident: false,
  shouldShowCallModal: false,
  userOrganizations: [],
  shouldShowTipCreatedModal: false,
  tipCreatedData: {
    organizationName: '',
    incident: {
      type: _incidentCodeCore.IncidentType.Normal
    }
  },
  creatingTipWithChat: false,
  uploadingVideo: false,
  shouldShowFastAccessModal: true,
  lastTipOrganization: undefined
};
const newTipReducer = (0, _immer.default)((draft, action) => {
  switch (action.type) {
    case _constants.SHOW_CANCEL_INCIDENT_MODAL:
      draft.shouldShowCancelIncidentModal = true;
      break;
    case _constants.HIDE_CANCEL_INCIDENT_MODAL:
      draft.shouldShowCancelIncidentModal = false;
      break;
    case _constants.DELETE_INCIDENT_REQUEST:
      draft.deletingIncident = true;
      break;
    case _constants.DELETE_INCIDENT_SUCCESS:
      draft.deletingIncident = false;
      draft.uploadingVideo = false;
      break;
    case _constants.SHOW_CALL_MODAL:
      draft.shouldShowCallModal = true;
      break;
    case _constants.HIDE_CALL_MODAL:
      draft.shouldShowCallModal = false;
      break;
    case _constants.GET_USER_ORGANIZATIONS_SUCCESS:
      draft.userOrganizations = action.payload;
      break;
    case _constants.SHOW_TIP_CREATED_MODAL:
      draft.shouldShowTipCreatedModal = true;
      draft.tipCreatedData = action.payload;
      break;
    case _constants.HIDE_TIP_CREATED_MODAL:
      draft.shouldShowTipCreatedModal = false;
      draft.tipCreatedData = initialState.tipCreatedData;
      break;
    case _constants.CREATE_TIP_WITH_CHAT_REQUEST:
      draft.createTipMode = _types.CreateTipMode.Chat;
      draft.creatingTipWithChat = true;
      break;
    case _constants.CREATE_TIP_WITH_CHAT_SUCCESS:
    case _constants.CREATE_TIP_WITH_CHAT_FAILURE:
      draft.creatingTipWithChat = false;
      break;
    case _constants.UPLOAD_VIDEO_REQUEST:
      draft.createTipMode = _types.CreateTipMode.Video;
      draft.uploadingVideo = true;
      break;
    case _constants.UPLOAD_VIDEO_SUCCESS:
    case _constants.UPLOAD_VIDEO_FAILURE:
      draft.uploadingVideo = false;
      break;
    case _constants.SHOW_FAST_ACCESS_MODAL:
      draft.shouldShowFastAccessModal = true;
      break;
    case _constants.HIDE_FAST_ACCESS_MODAL:
      draft.shouldShowFastAccessModal = false;
      break;
    case _constants.GET_LAST_ACTIVE_TIP_ORGANIZATION_SUCCESS:
      draft.lastTipOrganization = action.payload;
      break;
    default:
  }
}, initialState);
var _default = exports.default = newTipReducer;
//# sourceMappingURL=reducer.js.map