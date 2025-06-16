/**
 *
 * VideoRecordScreen reducer
 *
 */

import produce from 'immer';
import { IncidentType } from 'incident-code-core';
import { CREATE_TIP_WITH_CHAT_FAILURE, CREATE_TIP_WITH_CHAT_REQUEST, CREATE_TIP_WITH_CHAT_SUCCESS, DELETE_INCIDENT_REQUEST, DELETE_INCIDENT_SUCCESS, GET_LAST_ACTIVE_TIP_ORGANIZATION_SUCCESS, GET_USER_ORGANIZATIONS_SUCCESS, HIDE_CALL_MODAL, HIDE_CANCEL_INCIDENT_MODAL, HIDE_FAST_ACCESS_MODAL, HIDE_TIP_CREATED_MODAL, SHOW_CALL_MODAL, SHOW_CANCEL_INCIDENT_MODAL, SHOW_FAST_ACCESS_MODAL, SHOW_TIP_CREATED_MODAL, UPLOAD_VIDEO_FAILURE, UPLOAD_VIDEO_REQUEST, UPLOAD_VIDEO_SUCCESS } from './constants';
import { CreateTipMode } from './types';
export const initialState = {
  createTipMode: CreateTipMode.Video,
  shouldShowCancelIncidentModal: false,
  deletingIncident: false,
  shouldShowCallModal: false,
  userOrganizations: [],
  shouldShowTipCreatedModal: false,
  tipCreatedData: {
    organizationName: '',
    incident: {
      type: IncidentType.Normal
    }
  },
  creatingTipWithChat: false,
  uploadingVideo: false,
  shouldShowFastAccessModal: true,
  lastTipOrganization: undefined
};
const newTipReducer = produce((draft, action) => {
  switch (action.type) {
    case SHOW_CANCEL_INCIDENT_MODAL:
      draft.shouldShowCancelIncidentModal = true;
      break;
    case HIDE_CANCEL_INCIDENT_MODAL:
      draft.shouldShowCancelIncidentModal = false;
      break;
    case DELETE_INCIDENT_REQUEST:
      draft.deletingIncident = true;
      break;
    case DELETE_INCIDENT_SUCCESS:
      draft.deletingIncident = false;
      draft.uploadingVideo = false;
      break;
    case SHOW_CALL_MODAL:
      draft.shouldShowCallModal = true;
      break;
    case HIDE_CALL_MODAL:
      draft.shouldShowCallModal = false;
      break;
    case GET_USER_ORGANIZATIONS_SUCCESS:
      draft.userOrganizations = action.payload;
      break;
    case SHOW_TIP_CREATED_MODAL:
      draft.shouldShowTipCreatedModal = true;
      draft.tipCreatedData = action.payload;
      break;
    case HIDE_TIP_CREATED_MODAL:
      draft.shouldShowTipCreatedModal = false;
      draft.tipCreatedData = initialState.tipCreatedData;
      break;
    case CREATE_TIP_WITH_CHAT_REQUEST:
      draft.createTipMode = CreateTipMode.Chat;
      draft.creatingTipWithChat = true;
      break;
    case CREATE_TIP_WITH_CHAT_SUCCESS:
    case CREATE_TIP_WITH_CHAT_FAILURE:
      draft.creatingTipWithChat = false;
      break;
    case UPLOAD_VIDEO_REQUEST:
      draft.createTipMode = CreateTipMode.Video;
      draft.uploadingVideo = true;
      break;
    case UPLOAD_VIDEO_SUCCESS:
    case UPLOAD_VIDEO_FAILURE:
      draft.uploadingVideo = false;
      break;
    case SHOW_FAST_ACCESS_MODAL:
      draft.shouldShowFastAccessModal = true;
      break;
    case HIDE_FAST_ACCESS_MODAL:
      draft.shouldShowFastAccessModal = false;
      break;
    case GET_LAST_ACTIVE_TIP_ORGANIZATION_SUCCESS:
      draft.lastTipOrganization = action.payload;
      break;
    default:
  }
}, initialState);
export default newTipReducer;
//# sourceMappingURL=reducer.js.map