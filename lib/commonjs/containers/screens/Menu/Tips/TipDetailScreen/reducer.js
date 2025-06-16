"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialState = exports.default = void 0;
var _immer = _interopRequireDefault(require("immer"));
var _findIndex = _interopRequireDefault(require("lodash/findIndex"));
var _constants = require("./constants");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* eslint-disable no-case-declarations */
/**
 *
 * TipDetailScreen reducer
 *
 */

const initialState = exports.initialState = {
  incident: undefined,
  incidentVideos: [],
  organization: {},
  isLoadingVideos: true,
  isLoadingIncident: true,
  shouldShowCallModal: false,
  shouldShowChatModal: false,
  messages: []
};
const tipDetailScreenReducer = (0, _immer.default)((draft, action) => {
  switch (action.type) {
    case _constants.GET_INCIDENT_VIDEOS_REQUEST:
      draft.isLoadingVideos = true;
      break;
    case _constants.GET_INCIDENT_VIDEOS_SUCCESS:
      draft.incidentVideos = action.payload.videos;
      draft.organization = action.payload.organization;
      draft.isLoadingVideos = false;
      break;
    case _constants.GET_INCIDENT_VIDEOS_FAILURE:
      draft.isLoadingVideos = false;
      break;
    case _constants.GET_INCIDENT_REQUEST:
      draft.isLoadingIncident = true;
      break;
    case _constants.GET_INCIDENT_SUCCESS:
      draft.incident = action.payload;
      draft.isLoadingIncident = false;
      break;
    case _constants.GET_INCIDENT_FAILURE:
      draft.isLoadingIncident = false;
      break;
    case _constants.SHOW_CALL_MODAL:
      draft.shouldShowCallModal = true;
      break;
    case _constants.HIDE_CALL_MODAL:
      draft.shouldShowCallModal = false;
      break;
    case _constants.SHOW_CHAT_MODAL:
      draft.shouldShowChatModal = true;
      break;
    case _constants.HIDE_CHAT_MODAL:
      draft.shouldShowChatModal = false;
      break;
    case _constants.ADD_INCIDENT_VIDEO:
      const oldIndex = (0, _findIndex.default)(draft.incidentVideos, {
        id: action.payload.id
      });
      if (oldIndex > -1) {
        draft.incidentVideos.splice(oldIndex, 1);
      }
      draft.incidentVideos.push(action.payload);
      break;
    case _constants.GET_MESSAGES_SUCCESS:
      draft.messages = action.payload;
      break;
    case _constants.ADD_MESSAGE:
      draft.messages.unshift(action.payload);
      break;
    default:
  }
}, initialState);
var _default = exports.default = tipDetailScreenReducer;
//# sourceMappingURL=reducer.js.map