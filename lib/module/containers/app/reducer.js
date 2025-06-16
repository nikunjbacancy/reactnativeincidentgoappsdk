/* eslint-disable no-unused-expressions */
/**
 *
 * App reducer
 *
 */

import { TipCameraMode } from '../../components/TipCamera/types';
import Screens from '../../containers/providers/RoutesProvider/screens';
import { LOGIN_SUCCESS } from '../../containers/screens/Onboarding/SignInCodeScreen/constants';
import produce from 'immer';
import { Config } from 'incident-code-core';
import assign from 'lodash/assign';
import findIndex from 'lodash/findIndex';
import map from 'lodash/map';
import { ADD_INCIDENT_COMMENT } from '../screens/Home/NewTip/AddCommentScreen/constants';
import { SELECT_INCIDENT_CATEGORY } from '../screens/Home/NewTip/SelectCategoryScreen/constants';
import { SELECT_INCIDENT_ORGANIZATION_SUCCESS } from '../screens/Home/NewTip/SelectOrganizationScreen/constants';
import { ADD_INCIDENT_VIDEO, CREATE_INCIDENT_SUCCESS, DELETE_INCIDENT_SUCCESS } from '../screens/Home/NewTip/VideoRecordScreen/constants';
import { UPDATE_USER_EMAIL } from '../screens/Menu/FeedbackScreen/constants';
import { ADD_CONTACT_SUCCESS } from '../screens/Menu/ManageContacts/AddContactScreen/constants';
import { DELETE_CONTACT_SUCCESS, TOGGLE_CONTACT_NOTIFICATION_SUCCESS } from '../screens/Menu/ManageContacts/ContactScreen/constants';
import { UPDATE_MY_ACCOUNT_NAME_SUCCESS } from '../screens/Menu/MyAccountScreen/constants';
import { TOGGLE_USER_NOTIFICATION_SUCCESS } from '../screens/Menu/SettingScreen/constants';
import { DELETE_USER_ORGANIZATION_SUCCESS } from '../screens/Menu/OrganizationScreen/constants';
import { ALL_PERMISSIONS_SUCCESS } from '../screens/Onboarding/PermissionScreen/constants';
import { UPDATE_ORGANIZATIONS_SUCCESS } from '../screens/Onboarding/SelectOrganizationScreen/constants';
import { UPDATE_NAME_SUCCESS } from '../screens/Onboarding/UpdateNameScreen/constants';
import { FINISH_WELCOME } from '../screens/Onboarding/WelcomeScreen/constants';
import { CLEAR_APP_LOCATION, CLEAR_INCIDENT_ESCORT_DATA, CLEAR_PASSIVE_ESCORT_DATA, GET_CONFIGS_FAILURE, GET_CONFIGS_REQUEST, GET_CONFIGS_SUCCESS, GET_PROFILE_FAILURE, GET_PROFILE_REQUEST, UPDATE_PROFILE_REQUEST, GET_PROFILE_SUCCESS, GET_TWILIO_ACCESS_TOKEN_FAILURE, GET_TWILIO_ACCESS_TOKEN_REQUEST, GET_TWILIO_ACCESS_TOKEN_SUCCESS, SET_APP_LOCATION, SET_INCIDENT_ESCORT_DATA, SET_PASSIVE_ESCORT_DATA, SET_TIP_CAMERA_MODE, SET_TIP_CAMERA_VIDEO_INDEX, UPDATE_USER_PORTRAIT, SELECTED_SITEKEY_LOCATION } from './constants';
import { LOCATION_ALWAYS_PERMISSIONS_SUCCESS } from '../../containers/screens/Onboarding/PermissionLocationScreen/constants';
export const initialState = {
  isLoadingConfigs: true,
  isLoadingProfile: false,
  isLoadingTwilioToken: false,
  user: {
    contacts: [],
    settings: {},
    organizationGroups: []
  },
  configs: new Config(),
  nextOnboardingScreen: Screens.Onboarding.Welcome,
  newTip: {
    incident: undefined,
    organization: undefined,
    category: undefined,
    comment: undefined
  },
  tipCamera: {
    mode: TipCameraMode.camera,
    videoIndex: 0
  },
  twilio: {
    initialized: false,
    accessToken: {}
  },
  incidentEscortData: undefined,
  incidentPassiveEscortData: undefined,
  location: undefined
};
const appReducer = produce((draft, action) => {
  var _draft$user$contacts, _draft$user$contacts2, _draft$user$contacts3;
  switch (action.type) {
    case FINISH_WELCOME:
      draft.nextOnboardingScreen = Screens.Onboarding.SignIn;
      break;
    case LOGIN_SUCCESS:
      draft.nextOnboardingScreen = Screens.Onboarding.UpdateName;
      break;
    case UPDATE_NAME_SUCCESS:
      draft.user = {
        ...draft.user,
        ...action.payload
      };
      draft.nextOnboardingScreen = Screens.Onboarding.Permission;
      break;
    case UPDATE_ORGANIZATIONS_SUCCESS:
      draft.user.organizations = action.payload.data;
      if (!action.payload.fromMenu) {
        draft.nextOnboardingScreen = Screens.Onboarding.Permission;
      }
      break;
    case ALL_PERMISSIONS_SUCCESS:
      draft.nextOnboardingScreen = Screens.Onboarding.PermissionLocation;
      break;
    case LOCATION_ALWAYS_PERMISSIONS_SUCCESS:
      draft.nextOnboardingScreen = Screens.Home.Index;
      break;
    case CREATE_INCIDENT_SUCCESS:
      draft.newTip.incident = action.payload;
      break;
    case ADD_INCIDENT_VIDEO:
      if (draft.newTip.incident) {
        if (draft.newTip.incident.videos) {
          const oldIndex = findIndex(draft.newTip.incident.videos, {
            id: action.payload.id
          });
          if (oldIndex > -1) {
            draft.newTip.incident.videos.splice(oldIndex, 1);
          }
          draft.newTip.incident.videos.push(action.payload);
        } else {
          draft.newTip.incident.videos = [action.payload];
        }
      }
      break;
    case DELETE_INCIDENT_SUCCESS:
      draft.newTip = initialState.newTip;
      break;
    case SELECT_INCIDENT_ORGANIZATION_SUCCESS:
      draft.newTip.organization = action.payload;
      break;
    case SELECT_INCIDENT_CATEGORY:
      draft.newTip.category = action.payload;
      break;
    case ADD_INCIDENT_COMMENT:
      draft.newTip.comment = action.payload;
      break;
    case UPDATE_MY_ACCOUNT_NAME_SUCCESS:
      assign(draft.user, action.payload);
      break;
    case UPDATE_USER_EMAIL:
      assign(draft.user, {
        email: action.payload
      });
      break;
    case UPDATE_USER_PORTRAIT:
      assign(draft.user, {
        portraitUrl: action.payload
      });
      break;
    case GET_CONFIGS_REQUEST:
      draft.isLoadingConfigs = true;
      break;
    case GET_CONFIGS_SUCCESS:
      draft.isLoadingConfigs = false;
      assign(draft.configs, action.payload);
      break;
    case GET_CONFIGS_FAILURE:
      draft.isLoadingConfigs = false;
      break;
    case GET_PROFILE_REQUEST:
      draft.isLoadingProfile = false;
      break;
    case UPDATE_PROFILE_REQUEST:
      draft.isLoadingProfile = false;
      break;
    case GET_PROFILE_SUCCESS:
      draft.user = action.payload;
      draft.isLoadingProfile = false;
      break;
    case GET_PROFILE_FAILURE:
      draft.isLoadingProfile = false;
      break;
    case DELETE_USER_ORGANIZATION_SUCCESS:
      draft.user.organizations = map(action.payload, 'id');
      break;
    case TOGGLE_CONTACT_NOTIFICATION_SUCCESS:
      (_draft$user$contacts = draft.user.contacts) === null || _draft$user$contacts === void 0 || _draft$user$contacts.splice(findIndex(draft.user.contacts, {
        id: action.payload.id
      }), 1, action.payload);
      break;
    case DELETE_CONTACT_SUCCESS:
      (_draft$user$contacts2 = draft.user.contacts) === null || _draft$user$contacts2 === void 0 || _draft$user$contacts2.splice(findIndex(draft.user.contacts, {
        id: action.payload
      }), 1);
      break;
    case ADD_CONTACT_SUCCESS:
      (_draft$user$contacts3 = draft.user.contacts) === null || _draft$user$contacts3 === void 0 || _draft$user$contacts3.push(action.payload);
      break;
    case TOGGLE_USER_NOTIFICATION_SUCCESS:
      draft.user.settings = {
        ...draft.user.settings,
        notificationEnabled: action.payload
      };
      break;
    case SET_TIP_CAMERA_MODE:
      draft.tipCamera.mode = action.payload;
      break;
    case SET_TIP_CAMERA_VIDEO_INDEX:
      draft.tipCamera.videoIndex = action.payload;
      break;
    case GET_TWILIO_ACCESS_TOKEN_REQUEST:
      draft.isLoadingTwilioToken = true;
      break;
    case GET_TWILIO_ACCESS_TOKEN_SUCCESS:
      draft.twilio.accessToken = action.payload;
      draft.twilio.initialized = true;
      draft.isLoadingTwilioToken = false;
      break;
    case GET_TWILIO_ACCESS_TOKEN_FAILURE:
      draft.isLoadingTwilioToken = false;
      break;
    case SET_INCIDENT_ESCORT_DATA:
      draft.incidentEscortData = action.payload;
      break;
    case CLEAR_INCIDENT_ESCORT_DATA:
      draft.incidentEscortData = undefined;
      break;
    case SELECTED_SITEKEY_LOCATION:
      console.log("SELECTED_SITEKEY_LOCATION===>", action.payload);
      break;
    case SET_PASSIVE_ESCORT_DATA:
      draft.incidentPassiveEscortData = action.payload;
      break;
    case CLEAR_PASSIVE_ESCORT_DATA:
      draft.incidentPassiveEscortData = undefined;
      break;
    case SET_APP_LOCATION:
      draft.location = action.payload;
      break;
    case CLEAR_APP_LOCATION:
      draft.location = undefined;
      break;
    default:
  }
}, initialState);
export default appReducer;
//# sourceMappingURL=reducer.js.map