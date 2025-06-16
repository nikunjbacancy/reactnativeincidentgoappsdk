/**
 *
 * VideoRecordScreen selectors
 *
 */
import { RootState } from '../../../../../store/types';
/**
 * Direct selector to the VideoRecordScreen state domain
 */
declare const selectNewTipScreenStateDomain: (state: RootState) => import("./types").NewTipState;
/**
 * Other specific selectors
 */
declare const makeSelectShouldShowBottomScreenAction: () => ((state: RootState) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("incident-code-core").IncidentVideo[]) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectShouldShowCancelTipModal: () => ((state: RootState) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("./types").NewTipState) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectDeletingIncident: () => ((state: RootState) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("./types").NewTipState) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectShouldShowCallModal: () => ((state: RootState) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("./types").NewTipState) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectUserOrganizations: () => ((state: RootState) => import("incident-code-core").Organization[]) & import("reselect").OutputSelectorFields<(args_0: import("./types").NewTipState) => import("incident-code-core").Organization[], {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectTipCreatedData: () => ((state: RootState) => import("./types").TipCreatedData) & import("reselect").OutputSelectorFields<(args_0: import("./types").NewTipState) => import("./types").TipCreatedData, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectShouldShowTipCreatedModal: () => ((state: RootState) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("./types").NewTipState) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectCreateTipMode: () => ((state: RootState) => import("./types").CreateTipMode) & import("reselect").OutputSelectorFields<(args_0: import("./types").NewTipState) => import("./types").CreateTipMode, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectCreatingTipWithChat: () => ((state: RootState) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("./types").NewTipState) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectUploadingVideo: () => ((state: RootState) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("./types").NewTipState) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectLastTipOrganization: () => ((state: RootState) => import("incident-code-core").Organization | undefined) & import("reselect").OutputSelectorFields<(args_0: import("./types").NewTipState) => import("incident-code-core").Organization | undefined, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectShouldShowFastAccessModal: () => ((state: RootState) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("./types").NewTipState) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
/**
 * Default selector used by VideoRecordScreen
 */
declare const makeSelectNewTipScreenState: () => ((state: RootState) => import("./types").NewTipState) & import("reselect").OutputSelectorFields<(args_0: import("./types").NewTipState) => import("./types").NewTipState, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export default makeSelectNewTipScreenState;
export { selectNewTipScreenStateDomain, makeSelectShouldShowBottomScreenAction, makeSelectShouldShowCancelTipModal, makeSelectDeletingIncident, makeSelectShouldShowCallModal, makeSelectUserOrganizations, makeSelectTipCreatedData, makeSelectShouldShowTipCreatedModal, makeSelectCreateTipMode, makeSelectCreatingTipWithChat, makeSelectUploadingVideo, makeSelectLastTipOrganization, makeSelectShouldShowFastAccessModal, };
