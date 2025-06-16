"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialState = exports.default = void 0;
var _types = require("../../components/TipCamera/types");
var _screens = _interopRequireDefault(require("../../containers/providers/RoutesProvider/screens"));
var _constants = require("../../containers/screens/Onboarding/SignInCodeScreen/constants");
var _immer = _interopRequireDefault(require("immer"));
var _incidentCodeCore = require("incident-code-core");
var _assign = _interopRequireDefault(require("lodash/assign"));
var _findIndex = _interopRequireDefault(require("lodash/findIndex"));
var _map = _interopRequireDefault(require("lodash/map"));
var _constants2 = require("../screens/Home/NewTip/AddCommentScreen/constants");
var _constants3 = require("../screens/Home/NewTip/SelectCategoryScreen/constants");
var _constants4 = require("../screens/Home/NewTip/SelectOrganizationScreen/constants");
var _constants5 = require("../screens/Home/NewTip/VideoRecordScreen/constants");
var _constants6 = require("../screens/Menu/FeedbackScreen/constants");
var _constants7 = require("../screens/Menu/ManageContacts/AddContactScreen/constants");
var _constants8 = require("../screens/Menu/ManageContacts/ContactScreen/constants");
var _constants9 = require("../screens/Menu/MyAccountScreen/constants");
var _constants10 = require("../screens/Menu/SettingScreen/constants");
var _constants11 = require("../screens/Menu/OrganizationScreen/constants");
var _constants12 = require("../screens/Onboarding/PermissionScreen/constants");
var _constants13 = require("../screens/Onboarding/SelectOrganizationScreen/constants");
var _constants14 = require("../screens/Onboarding/UpdateNameScreen/constants");
var _constants15 = require("../screens/Onboarding/WelcomeScreen/constants");
var _constants16 = require("./constants");
var _constants17 = require("../../containers/screens/Onboarding/PermissionLocationScreen/constants");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* eslint-disable no-unused-expressions */
/**
 *
 * App reducer
 *
 */

const initialState = exports.initialState = {
  isLoadingConfigs: true,
  isLoadingProfile: false,
  isLoadingTwilioToken: false,
  user: {
    contacts: [],
    settings: {},
    organizationGroups: []
  },
  configs: new _incidentCodeCore.Config(),
  nextOnboardingScreen: _screens.default.Onboarding.Welcome,
  newTip: {
    incident: undefined,
    organization: undefined,
    category: undefined,
    comment: undefined
  },
  tipCamera: {
    mode: _types.TipCameraMode.camera,
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
const appReducer = (0, _immer.default)((draft, action) => {
  var _draft$user$contacts, _draft$user$contacts2, _draft$user$contacts3;
  switch (action.type) {
    case _constants15.FINISH_WELCOME:
      draft.nextOnboardingScreen = _screens.default.Onboarding.SignIn;
      break;
    case _constants.LOGIN_SUCCESS:
      draft.nextOnboardingScreen = _screens.default.Onboarding.UpdateName;
      break;
    case _constants14.UPDATE_NAME_SUCCESS:
      draft.user = {
        ...draft.user,
        ...action.payload
      };
      draft.nextOnboardingScreen = _screens.default.Onboarding.Permission;
      break;
    case _constants13.UPDATE_ORGANIZATIONS_SUCCESS:
      draft.user.organizations = action.payload.data;
      if (!action.payload.fromMenu) {
        draft.nextOnboardingScreen = _screens.default.Onboarding.Permission;
      }
      break;
    case _constants12.ALL_PERMISSIONS_SUCCESS:
      draft.nextOnboardingScreen = _screens.default.Onboarding.PermissionLocation;
      break;
    case _constants17.LOCATION_ALWAYS_PERMISSIONS_SUCCESS:
      draft.nextOnboardingScreen = _screens.default.Home.Index;
      break;
    case _constants5.CREATE_INCIDENT_SUCCESS:
      draft.newTip.incident = action.payload;
      break;
    case _constants5.ADD_INCIDENT_VIDEO:
      if (draft.newTip.incident) {
        if (draft.newTip.incident.videos) {
          const oldIndex = (0, _findIndex.default)(draft.newTip.incident.videos, {
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
    case _constants5.DELETE_INCIDENT_SUCCESS:
      draft.newTip = initialState.newTip;
      break;
    case _constants4.SELECT_INCIDENT_ORGANIZATION_SUCCESS:
      draft.newTip.organization = action.payload;
      break;
    case _constants3.SELECT_INCIDENT_CATEGORY:
      draft.newTip.category = action.payload;
      break;
    case _constants2.ADD_INCIDENT_COMMENT:
      draft.newTip.comment = action.payload;
      break;
    case _constants9.UPDATE_MY_ACCOUNT_NAME_SUCCESS:
      (0, _assign.default)(draft.user, action.payload);
      break;
    case _constants6.UPDATE_USER_EMAIL:
      (0, _assign.default)(draft.user, {
        email: action.payload
      });
      break;
    case _constants16.UPDATE_USER_PORTRAIT:
      (0, _assign.default)(draft.user, {
        portraitUrl: action.payload
      });
      break;
    case _constants16.GET_CONFIGS_REQUEST:
      draft.isLoadingConfigs = true;
      break;
    case _constants16.GET_CONFIGS_SUCCESS:
      draft.isLoadingConfigs = false;
      (0, _assign.default)(draft.configs, action.payload);
      break;
    case _constants16.GET_CONFIGS_FAILURE:
      draft.isLoadingConfigs = false;
      break;
    case _constants16.GET_PROFILE_REQUEST:
      draft.isLoadingProfile = false;
      break;
    case _constants16.UPDATE_PROFILE_REQUEST:
      draft.isLoadingProfile = false;
      break;
    case _constants16.GET_PROFILE_SUCCESS:
      draft.user = action.payload;
      draft.isLoadingProfile = false;
      break;
    case _constants16.GET_PROFILE_FAILURE:
      draft.isLoadingProfile = false;
      break;
    case _constants11.DELETE_USER_ORGANIZATION_SUCCESS:
      draft.user.organizations = (0, _map.default)(action.payload, 'id');
      break;
    case _constants8.TOGGLE_CONTACT_NOTIFICATION_SUCCESS:
      (_draft$user$contacts = draft.user.contacts) === null || _draft$user$contacts === void 0 || _draft$user$contacts.splice((0, _findIndex.default)(draft.user.contacts, {
        id: action.payload.id
      }), 1, action.payload);
      break;
    case _constants8.DELETE_CONTACT_SUCCESS:
      (_draft$user$contacts2 = draft.user.contacts) === null || _draft$user$contacts2 === void 0 || _draft$user$contacts2.splice((0, _findIndex.default)(draft.user.contacts, {
        id: action.payload
      }), 1);
      break;
    case _constants7.ADD_CONTACT_SUCCESS:
      (_draft$user$contacts3 = draft.user.contacts) === null || _draft$user$contacts3 === void 0 || _draft$user$contacts3.push(action.payload);
      break;
    case _constants10.TOGGLE_USER_NOTIFICATION_SUCCESS:
      draft.user.settings = {
        ...draft.user.settings,
        notificationEnabled: action.payload
      };
      break;
    case _constants16.SET_TIP_CAMERA_MODE:
      draft.tipCamera.mode = action.payload;
      break;
    case _constants16.SET_TIP_CAMERA_VIDEO_INDEX:
      draft.tipCamera.videoIndex = action.payload;
      break;
    case _constants16.GET_TWILIO_ACCESS_TOKEN_REQUEST:
      draft.isLoadingTwilioToken = true;
      break;
    case _constants16.GET_TWILIO_ACCESS_TOKEN_SUCCESS:
      draft.twilio.accessToken = action.payload;
      draft.twilio.initialized = true;
      draft.isLoadingTwilioToken = false;
      break;
    case _constants16.GET_TWILIO_ACCESS_TOKEN_FAILURE:
      draft.isLoadingTwilioToken = false;
      break;
    case _constants16.SET_INCIDENT_ESCORT_DATA:
      draft.incidentEscortData = action.payload;
      break;
    case _constants16.CLEAR_INCIDENT_ESCORT_DATA:
      draft.incidentEscortData = undefined;
      break;
    case _constants16.SELECTED_SITEKEY_LOCATION:
      console.log("SELECTED_SITEKEY_LOCATION===>", action.payload);
      break;
    case _constants16.SET_PASSIVE_ESCORT_DATA:
      draft.incidentPassiveEscortData = action.payload;
      break;
    case _constants16.CLEAR_PASSIVE_ESCORT_DATA:
      draft.incidentPassiveEscortData = undefined;
      break;
    case _constants16.SET_APP_LOCATION:
      draft.location = action.payload;
      break;
    case _constants16.CLEAR_APP_LOCATION:
      draft.location = undefined;
      break;
    default:
  }
}, initialState);
var _default = exports.default = appReducer;
//# sourceMappingURL=reducer.js.map