/* eslint-disable no-case-declarations */
/**
 *
 * TipDetailScreen reducer
 *
 */

import produce, { Draft } from 'immer';
import findIndex from 'lodash/findIndex';

import {
  ADD_INCIDENT_VIDEO,
  ADD_MESSAGE,
  GET_INCIDENT_FAILURE,
  GET_INCIDENT_REQUEST,
  GET_INCIDENT_SUCCESS,
  GET_INCIDENT_VIDEOS_FAILURE,
  GET_INCIDENT_VIDEOS_REQUEST,
  GET_INCIDENT_VIDEOS_SUCCESS,
  GET_MESSAGES_SUCCESS,
  HIDE_CALL_MODAL,
  HIDE_CHAT_MODAL,
  SHOW_CALL_MODAL,
  SHOW_CHAT_MODAL,
} from './constants';
import { TipDetailActionTypes, TipDetailState } from './types';

export const initialState: TipDetailState = {
  incident: undefined,
  incidentVideos: [],
  organization: {},
  isLoadingVideos: true,
  isLoadingIncident: true,
  shouldShowCallModal: false,
  shouldShowChatModal: false,
  messages: [],
};

const tipDetailScreenReducer = produce(
  (draft: Draft<TipDetailState>, action: TipDetailActionTypes) => {
    switch (action.type) {
      case GET_INCIDENT_VIDEOS_REQUEST:
        draft.isLoadingVideos = true;
        break;
      case GET_INCIDENT_VIDEOS_SUCCESS:
        draft.incidentVideos = action.payload.videos;
        draft.organization = action.payload.organization;
        draft.isLoadingVideos = false;
        break;
      case GET_INCIDENT_VIDEOS_FAILURE:
        draft.isLoadingVideos = false;
        break;
      case GET_INCIDENT_REQUEST:
        draft.isLoadingIncident = true;
        break;
      case GET_INCIDENT_SUCCESS:
        draft.incident = action.payload;
        draft.isLoadingIncident = false;
        break;
      case GET_INCIDENT_FAILURE:
        draft.isLoadingIncident = false;
        break;
      case SHOW_CALL_MODAL:
        draft.shouldShowCallModal = true;
        break;
      case HIDE_CALL_MODAL:
        draft.shouldShowCallModal = false;
        break;
      case SHOW_CHAT_MODAL:
        draft.shouldShowChatModal = true;
        break;
      case HIDE_CHAT_MODAL:
        draft.shouldShowChatModal = false;
        break;
      case ADD_INCIDENT_VIDEO:
        const oldIndex = findIndex(draft.incidentVideos, {
          id: action.payload.id,
        });
        if (oldIndex > -1) {
          draft.incidentVideos.splice(oldIndex, 1);
        }
        draft.incidentVideos.push(action.payload);
        break;
      case GET_MESSAGES_SUCCESS:
        draft.messages = action.payload;
        break;
      case ADD_MESSAGE:
        draft.messages.unshift(action.payload);
        break;
      default:
    }
  },
  initialState,
);

export default tipDetailScreenReducer;
