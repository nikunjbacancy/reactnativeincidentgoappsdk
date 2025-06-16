import { TipCameraMode } from '../../components/TipCamera/types';
import {
  AccessToken,
  AppUser,
  Config,
  ErrorLog,
  Incident,
  IncidentCategoryConfig,
  IncidentEscort,
  Organization,
  OrganizationProcedure,
  OrganizationWithArea,
  Ref,
} from 'incident-code-core';
import { Location } from 'react-native-background-geolocation';
import { LocalIncident } from '../../types';

import { AddIncidentCommentAction } from '../screens/Home/NewTip/AddCommentScreen/types';
import { SelectCategoryAction } from '../screens/Home/NewTip/SelectCategoryScreen/types';
import { AddSelectedOrganizationSuccessAction } from '../screens/Home/NewTip/SelectOrganizationScreen/types';
import {
  AddIncidentVideoAction,
  CreateIncidentSuccessAction,
  DeleteIncidentSuccessAction,
} from '../screens/Home/NewTip/VideoRecordScreen/types';
import { UpdateUserEmailAction } from '../screens/Menu/FeedbackScreen/types';
import { AddContactSuccessAction } from '../screens/Menu/ManageContacts/AddContactScreen/types';
import {
  DeleteContactSuccessAction,
  ToggleContactNotificationSuccessAction,
} from '../screens/Menu/ManageContacts/ContactScreen/types';
import { UpdateMyAccountNameSuccessAction } from '../screens/Menu/MyAccountScreen/types';
import { ToggleUserNotificationSuccessAction } from '../screens/Menu/SettingScreen/types';
import { DeleteUserOrganizationSuccessAction } from '../screens/Menu/OrganizationScreen/types';
import { AllPermissionsSuccessAction } from '../screens/Onboarding/PermissionScreen/types';
import { UpdateOrganizationsSuccessAction } from '../screens/Onboarding/SelectOrganizationScreen/types';
import { LoginSuccessAction } from '../screens/Onboarding/SignInCodeScreen/types';
import { UpdateNameSuccessAction } from '../screens/Onboarding/UpdateNameScreen/types';
import { FinishWelcomeAction } from '../screens/Onboarding/WelcomeScreen/types';
import {
  CLEAR_APP_LOCATION,
  CLEAR_INCIDENT_ESCORT_DATA,
  CLEAR_PASSIVE_ESCORT_DATA,
  GET_CONFIGS_FAILURE,
  GET_CONFIGS_REQUEST,
  GET_CONFIGS_SUCCESS,
  GET_PROFILE_FAILURE,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_TWILIO_ACCESS_TOKEN_FAILURE,
  GET_TWILIO_ACCESS_TOKEN_REQUEST,
  GET_TWILIO_ACCESS_TOKEN_SUCCESS,
  LOG_ERROR,
  SET_APP_LOCATION,
  SET_INCIDENT_ESCORT_DATA,
  SET_PASSIVE_ESCORT_DATA,
  SET_TIP_CAMERA_MODE,
  SET_TIP_CAMERA_VIDEO_INDEX,
  UPDATE_USER_PORTRAIT,
  SELECTED_SITEKEY_LOCATION,
  UPDATE_PROFILE_REQUEST
} from './constants';

/**
 *
 * App types
 *
 */

export interface AppState {
  isLoadingConfigs: boolean;
  isLoadingProfile: boolean;
  isLoadingTwilioToken: boolean;
  user: AppUser;
  configs: Config;
  nextOnboardingScreen: string;
  newTip: {
    incident?: LocalIncident;
    organization?: OrganizationWithArea;
    category?: IncidentCategoryConfig;
    comment?: string;
  };
  tipCamera: {
    videoIndex: number;
    mode: TipCameraMode;
  };
  twilio: {
    initialized: boolean;
    accessToken: AccessToken;
  };
  incidentEscortData?: {
    incidentEscort: IncidentEscort;
    organization: Organization;
  };
  incidentPassiveEscortData?: PassiveEscortData;
  location?: Location;
}

export type PassiveEscortData = {
  id: Ref<Incident>;
  procedure: Ref<OrganizationProcedure>;
  isSafetyTimer: boolean;
};

export type SetIncidentEscortDataPayload = {
  incidentEscort: IncidentEscort;
  organization: Organization;
};

export interface GetConfigsRequestAction {
  type: typeof GET_CONFIGS_REQUEST;
}

export interface GetConfigsSuccessAction {
  type: typeof GET_CONFIGS_SUCCESS;
  payload: Config;
}

export interface GetConfigsFailureAction {
  type: typeof GET_CONFIGS_FAILURE;
  payload: Error;
  error: boolean;
}

export interface GetProfileRequestAction {
  type: typeof GET_PROFILE_REQUEST;
}

export interface UpdateProfileRequestAction {
  type: typeof UPDATE_PROFILE_REQUEST;
}

export interface GetProfileSuccessAction {
  type: typeof GET_PROFILE_SUCCESS;
  payload: AppUser;
}

export interface GetProfileFailureAction {
  type: typeof GET_PROFILE_FAILURE;
  payload: Error;
  error: boolean;
}

export interface SetTipCameraModeAction {
  type: typeof SET_TIP_CAMERA_MODE;
  payload: TipCameraMode;
}

export interface SetTipCameraVideoIndexAction {
  type: typeof SET_TIP_CAMERA_VIDEO_INDEX;
  payload: number;
}

export interface GetTwilioAccessTokenRequestAction {
  type: typeof GET_TWILIO_ACCESS_TOKEN_REQUEST;
}

export interface GetTwilioAccessTokenSuccessAction {
  type: typeof GET_TWILIO_ACCESS_TOKEN_SUCCESS;
  payload: AccessToken;
}

export interface GetTwilioAccessTokenFailureAction {
  type: typeof GET_TWILIO_ACCESS_TOKEN_FAILURE;
  payload: Error;
  error: boolean;
}

export interface SelectedSiteKeyLocation {
  type: typeof SELECTED_SITEKEY_LOCATION;
  payload: any;
}


export interface SetIncidentEscortDataAction {
  type: typeof SET_INCIDENT_ESCORT_DATA;
  payload: SetIncidentEscortDataPayload;
}

export interface ClearIncidentEscortDataAction {
  type: typeof CLEAR_INCIDENT_ESCORT_DATA;
}

export interface SetPassiveEscortDataAction {
  type: typeof SET_PASSIVE_ESCORT_DATA;
  payload: PassiveEscortData;
}

export interface ClearPassiveEscortDataAction {
  type: typeof CLEAR_PASSIVE_ESCORT_DATA;
}

export interface UpdateUserPortraitAction {
  type: typeof UPDATE_USER_PORTRAIT;
  payload: string | undefined;
}

export interface UpdateLocationAction {
  type: typeof SET_APP_LOCATION;
  payload: Location | undefined;
}

export interface ClearLocationAction {
  type: typeof CLEAR_APP_LOCATION;
}

export interface LogErrorAction {
  type: typeof LOG_ERROR;
  payload: ErrorLog;
}

export type AppActionTypes =
  | GetConfigsRequestAction
  | GetConfigsSuccessAction
  | GetConfigsFailureAction
  | UpdateProfileRequestAction

  | GetProfileRequestAction
  | GetProfileSuccessAction
  | GetProfileFailureAction
  | SetTipCameraModeAction
  | SetTipCameraVideoIndexAction
  | FinishWelcomeAction
  | LoginSuccessAction
  | UpdateNameSuccessAction
  | UpdateOrganizationsSuccessAction
  | AllPermissionsSuccessAction
  | CreateIncidentSuccessAction
  | AddIncidentVideoAction
  | DeleteIncidentSuccessAction
  | AddSelectedOrganizationSuccessAction
  | SelectCategoryAction
  | AddIncidentCommentAction
  | UpdateMyAccountNameSuccessAction
  | UpdateUserEmailAction
  | DeleteUserOrganizationSuccessAction
  | DeleteContactSuccessAction
  | AddContactSuccessAction
  | ToggleUserNotificationSuccessAction
  | ToggleContactNotificationSuccessAction
  | GetTwilioAccessTokenRequestAction
  | GetTwilioAccessTokenSuccessAction
  | GetTwilioAccessTokenFailureAction
  | SelectedSiteKeyLocation
  | SetIncidentEscortDataAction
  | ClearIncidentEscortDataAction
  | SetPassiveEscortDataAction
  | ClearPassiveEscortDataAction
  | UpdateUserPortraitAction
  | UpdateLocationAction
  | ClearLocationAction
  | LogErrorAction;
