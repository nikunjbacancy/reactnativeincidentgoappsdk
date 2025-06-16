/**
 *
 * App selectors
 *
 */
/// <reference types="react-native-background-geolocation/src/declarations/types" />
/// <reference types="react-native-background-geolocation/src/declarations/interfaces/locationauthorizationalert" />
/// <reference types="react-native-background-geolocation/src/declarations/interfaces/permissionrationale" />
/// <reference types="react-native-background-geolocation/src/declarations/interfaces/config" />
/// <reference types="react-native-background-geolocation/src/declarations/interfaces/connectivitychangeevent" />
/// <reference types="react-native-background-geolocation/src/declarations/interfaces/currentpositionrequest" />
/// <reference types="react-native-background-geolocation/src/declarations/interfaces/geofence" />
/// <reference types="react-native-background-geolocation/src/declarations/interfaces/geofenceevent" />
/// <reference types="react-native-background-geolocation/src/declarations/interfaces/geofenceschangeevent" />
/// <reference types="react-native-background-geolocation/src/declarations/interfaces/heartbeatevent" />
/// <reference types="react-native-background-geolocation/src/declarations/interfaces/headlessevent" />
/// <reference types="react-native-background-geolocation/src/declarations/interfaces/httpevent" />
/// <reference types="react-native-background-geolocation/src/declarations/interfaces/motionactivityevent" />
/// <reference types="react-native-background-geolocation/src/declarations/interfaces/providerchangeevent" />
/// <reference types="react-native-background-geolocation/src/declarations/interfaces/location" />
/// <reference types="react-native-background-geolocation/src/declarations/interfaces/sqlquery" />
/// <reference types="react-native-background-geolocation/src/declarations/interfaces/logger" />
/// <reference types="react-native-background-geolocation/src/declarations/interfaces/motionchangeevent" />
/// <reference types="react-native-background-geolocation/src/declarations/interfaces/sensors" />
/// <reference types="react-native-background-geolocation/src/declarations/interfaces/state" />
/// <reference types="react-native-background-geolocation/src/declarations/interfaces/watchpositionrequest" />
/// <reference types="react-native-background-geolocation/src/declarations/interfaces/devicesettings" />
/// <reference types="react-native-background-geolocation/src/declarations/interfaces/notification" />
/// <reference types="react-native-background-geolocation/src/declarations/interfaces/deviceinfo" />
/// <reference types="react-native-background-geolocation/src/declarations/interfaces/authorization" />
/// <reference types="react-native-background-geolocation/src/declarations/interfaces/authorizationevent" />
/// <reference types="react-native-background-geolocation/src/declarations/interfaces/transistorauthorizationtoken" />
/// <reference types="react-native-background-geolocation/src/declarations/interfaces/subscription" />
/// <reference types="react-native-background-geolocation/src/declarations/backgroundgeolocation" />
import { IncidentActionRequest } from 'incident-code-core';
import { User } from 'react-native-gifted-chat';
import { RootState } from 'store/types';
/**
 * Direct selector to the App state domain
 */
declare const selectAppStateDomain: (state: RootState) => import("./types").AppState;
/**
 * Other specific selectors
 */
declare const makeSelectIsLoading: () => ((state: RootState) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("./types").AppState) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectUser: () => ((state: RootState) => import("incident-code-core").AppUser) & import("reselect").OutputSelectorFields<(args_0: import("./types").AppState) => import("incident-code-core").AppUser, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectAppUserContacts: () => ((state: RootState) => import("incident-code-core").AppUserContact[]) & import("reselect").OutputSelectorFields<(args_0: import("incident-code-core").AppUser) => import("incident-code-core").AppUserContact[], {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectNextOnboardingScreen: () => ((state: RootState) => string) & import("reselect").OutputSelectorFields<(args_0: import("./types").AppState) => string, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectConfigs: () => ((state: RootState) => import("incident-code-core").Config) & import("reselect").OutputSelectorFields<(args_0: import("./types").AppState) => import("incident-code-core").Config, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectNewTipIncident: () => ((state: RootState) => import("../../types").LocalIncident | undefined) & import("reselect").OutputSelectorFields<(args_0: import("./types").AppState) => import("../../types").LocalIncident | undefined, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectNewTipIncidentVideos: () => ((state: RootState) => import("incident-code-core").IncidentVideo[]) & import("reselect").OutputSelectorFields<(args_0: import("../../types").LocalIncident | undefined) => import("incident-code-core").IncidentVideo[], {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectNewTipIncidentLocation: () => ((state: RootState) => import("incident-code-core").GeoPoint | undefined) & import("reselect").OutputSelectorFields<(args_0: import("../../types").LocalIncident | undefined) => import("incident-code-core").GeoPoint | undefined, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectNewTipIncidentExpired: () => ((state: RootState) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("../../types").LocalIncident | undefined) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectNewTipOrganization: () => ((state: RootState) => import("incident-code-core").OrganizationWithArea) & import("reselect").OutputSelectorFields<(args_0: import("./types").AppState) => import("incident-code-core").OrganizationWithArea, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectNewTipOrganizationName: () => ((state: RootState) => string) & import("reselect").OutputSelectorFields<(args_0: import("./types").AppState) => string, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectNewTipCategoryName: () => ((state: RootState) => string) & import("reselect").OutputSelectorFields<(args_0: import("./types").AppState) => string, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectNewTipIncidentActionRequest: () => ((state: RootState) => IncidentActionRequest | undefined) & import("reselect").OutputSelectorFields<(args_0: import("./types").AppState) => IncidentActionRequest | undefined, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectTipCameraMode: () => ((state: RootState) => import("../../components/TipCamera/types").TipCameraMode) & import("reselect").OutputSelectorFields<(args_0: import("./types").AppState) => import("../../components/TipCamera/types").TipCameraMode, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectTipVideoIndex: () => ((state: RootState) => number) & import("reselect").OutputSelectorFields<(args_0: import("./types").AppState) => number, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectGiftedChatUser: () => ((state: RootState) => User) & import("reselect").OutputSelectorFields<(args_0: import("incident-code-core").AppUser) => User, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectTwilioInitialized: () => ((state: RootState) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("./types").AppState) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectIncidentEscortData: () => ((state: RootState) => {
    incidentEscort: import("incident-code-core").IncidentEscort;
    organization: import("incident-code-core").Organization;
} | undefined) & import("reselect").OutputSelectorFields<(args_0: import("./types").AppState) => {
    incidentEscort: import("incident-code-core").IncidentEscort;
    organization: import("incident-code-core").Organization;
} | undefined, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectTwilioAccessToken: () => ((state: RootState) => import("incident-code-core").AccessToken) & import("reselect").OutputSelectorFields<(args_0: import("./types").AppState) => import("incident-code-core").AccessToken, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectPassiveEscortData: () => ((state: RootState) => import("./types").PassiveEscortData | undefined) & import("reselect").OutputSelectorFields<(args_0: import("./types").AppState) => import("./types").PassiveEscortData | undefined, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectAppLocation: () => ((state: RootState) => import("react-native-background-geolocation").Location | undefined) & import("reselect").OutputSelectorFields<(args_0: import("./types").AppState) => import("react-native-background-geolocation").Location | undefined, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
/**
 * Default selector used by App
 */
declare const makeSelectAppState: () => ((state: RootState) => import("./types").AppState) & import("reselect").OutputSelectorFields<(args_0: import("./types").AppState) => import("./types").AppState, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export default makeSelectAppState;
export { makeSelectIsLoading, selectAppStateDomain, makeSelectUser, makeSelectAppUserContacts, makeSelectNextOnboardingScreen, makeSelectConfigs, makeSelectNewTipIncident, makeSelectNewTipIncidentVideos, makeSelectNewTipIncidentLocation, makeSelectNewTipIncidentExpired, makeSelectNewTipOrganization, makeSelectNewTipOrganizationName, makeSelectNewTipCategoryName, makeSelectNewTipIncidentActionRequest, makeSelectTipCameraMode, makeSelectTipVideoIndex, makeSelectGiftedChatUser, makeSelectTwilioInitialized, makeSelectIncidentEscortData, makeSelectTwilioAccessToken, makeSelectPassiveEscortData, makeSelectAppLocation, };
