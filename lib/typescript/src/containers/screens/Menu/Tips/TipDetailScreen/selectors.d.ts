/**
 *
 * TipDetailScreen selectors
 *
 */
import { RootState } from 'store/types';
/**
 * Direct selector to the TipDetailScreen state domain
 */
declare const selectTipDetailScreenStateDomain: (state: RootState) => import("./types").TipDetailState;
/**
 * Other specific selectors
 */
declare const makeSelectIncidentVideos: () => ((state: RootState) => import("incident-code-core").IncidentVideo[]) & import("reselect").OutputSelectorFields<(args_0: import("./types").TipDetailState) => import("incident-code-core").IncidentVideo[], {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectOrganization: () => ((state: RootState) => import("incident-code-core").Organization) & import("reselect").OutputSelectorFields<(args_0: import("./types").TipDetailState) => import("incident-code-core").Organization, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectIsLoading: () => ((state: RootState) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("./types").TipDetailState) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectShouldShowCallModal: () => ((state: RootState) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("./types").TipDetailState) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectShouldShowChatModal: () => ((state: RootState) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("./types").TipDetailState) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectMessages: () => ((state: RootState) => import("react-native-gifted-chat").IMessage[]) & import("reselect").OutputSelectorFields<(args_0: import("./types").TipDetailState) => import("react-native-gifted-chat").IMessage[], {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectIncident: () => ((state: RootState) => import("incident-code-core").Incident | undefined) & import("reselect").OutputSelectorFields<(args_0: import("./types").TipDetailState) => import("incident-code-core").Incident | undefined, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
/**
 * Default selector used by TipDetailScreen
 */
declare const makeSelectTipDetailScreenState: () => ((state: RootState) => import("./types").TipDetailState) & import("reselect").OutputSelectorFields<(args_0: import("./types").TipDetailState) => import("./types").TipDetailState, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export default makeSelectTipDetailScreenState;
export { selectTipDetailScreenStateDomain, makeSelectIncidentVideos, makeSelectOrganization, makeSelectIsLoading, makeSelectShouldShowCallModal, makeSelectShouldShowChatModal, makeSelectMessages, makeSelectIncident, };
