import { RootState } from 'store/types';
declare const makeSelectProcedure: () => ((state: RootState) => import("incident-code-core").OrganizationProcedure | undefined) & import("reselect").OutputSelectorFields<(args_0: import("./types").CountdownState) => import("incident-code-core").OrganizationProcedure | undefined, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectProcedureActions: () => ((state: RootState) => import("../../../../../types").CountdownAction[] | undefined) & import("reselect").OutputSelectorFields<(args_0: import("./types").CountdownState) => import("../../../../../types").CountdownAction[] | undefined, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectProcedureTimer: () => ((state: RootState) => number | undefined) & import("reselect").OutputSelectorFields<(args_0: import("./types").CountdownState) => number | undefined, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectIsLoading: () => ((state: RootState) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("./types").CountdownState) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectEnableStartButton: () => ((state: RootState) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("./types").CountdownState) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectDisplaySetTimerModal: () => ((state: RootState) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("./types").CountdownState) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectIsUserDefinedTimer: () => ((state: RootState) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("./types").CountdownState) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectFinalActionCompleted: () => ((state: RootState) => boolean | undefined) & import("reselect").OutputSelectorFields<(args_0: import("./types").CountdownState) => boolean | undefined, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectShouldShowCallModal: () => ((state: RootState) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("./types").CountdownState) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectShouldShowSafeModal: () => ((state: RootState) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("./types").CountdownState) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectIsPanicMode: () => ((state: RootState) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("./types").CountdownState) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectRequestingImSafe: () => ((state: RootState) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("./types").CountdownState) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectShouldShowPanicInfo: () => ((state: RootState) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("./types").CountdownState) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectShouldShowExitPanicModal: () => ((state: RootState) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("./types").CountdownState) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectIsWarningActive: () => ((state: RootState) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("./types").CountdownState) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectIsRequestingEscort: () => ((state: RootState) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("./types").CountdownState) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectIncident: () => ((state: RootState) => import("incident-code-core").Incident | undefined) & import("reselect").OutputSelectorFields<(args_0: import("./types").CountdownState) => import("incident-code-core").Incident | undefined, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectCountdownIsActive: () => ((state: RootState) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("./types").CountdownState) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectError: () => ((state: RootState) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("./types").CountdownState) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectErrorMessage: () => ((state: RootState) => string) & import("reselect").OutputSelectorFields<(args_0: import("./types").CountdownState) => string, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectSafetyTimer: () => ((state: RootState) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("./types").CountdownState) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
/**
 * Default selector used by countdownScreen
 */
declare const makeSelectSelectCountdownScreenState: () => ((state: RootState) => import("./types").CountdownState) & import("reselect").OutputSelectorFields<(args_0: import("./types").CountdownState) => import("./types").CountdownState, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export default makeSelectSelectCountdownScreenState;
export { makeSelectProcedure, makeSelectProcedureActions, makeSelectProcedureTimer, makeSelectIsLoading, makeSelectEnableStartButton, makeSelectDisplaySetTimerModal, makeSelectIsUserDefinedTimer, makeSelectFinalActionCompleted, makeSelectShouldShowCallModal, makeSelectShouldShowSafeModal, makeSelectIsPanicMode, makeSelectRequestingImSafe, makeSelectShouldShowPanicInfo, makeSelectShouldShowExitPanicModal, makeSelectIsWarningActive, makeSelectIsRequestingEscort, makeSelectIncident, makeSelectCountdownIsActive, makeSelectError, makeSelectErrorMessage, makeSelectSafetyTimer, };
