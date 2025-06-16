/**
 *
 * RecordScreen selectors
 *
 */
import { RootState } from 'store/types';
/**
 * Other specific selectors
 */
declare const makeSelectShouldShowCallModal: () => ((state: RootState) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("./types").RecordState) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectShouldShowSafeModal: () => ((state: RootState) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("./types").RecordState) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectShouldShowChatModal: () => ((state: RootState) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("./types").RecordState) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectShouldShowExitPanicModal: () => ((state: RootState) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("./types").RecordState) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectShouldShowPanicInfo: () => ((state: RootState) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("./types").RecordState) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectRecordType: () => ((state: RootState) => import("./types").RecordType) & import("reselect").OutputSelectorFields<(args_0: import("./types").RecordState) => import("./types").RecordType, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectMessages: () => ((state: RootState) => import("react-native-gifted-chat").IMessage[]) & import("reselect").OutputSelectorFields<(args_0: import("./types").RecordState) => import("react-native-gifted-chat").IMessage[], {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectRequestingImSafe: () => ((state: RootState) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("./types").RecordState) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectIsPanicMode: () => ((state: RootState) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("./types").RecordState) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectFromPassiveEscort: () => ((state: RootState) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("./types").RecordState) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectAppState: () => ((state: RootState) => import("react-native").AppStateStatus) & import("reselect").OutputSelectorFields<(args_0: import("./types").RecordState) => import("react-native").AppStateStatus, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
/**
 * Default selector used by RecordScreen
 */
declare const makeSelectRecordScreenState: () => ((state: RootState) => import("./types").RecordState) & import("reselect").OutputSelectorFields<(args_0: import("./types").RecordState) => import("./types").RecordState, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export default makeSelectRecordScreenState;
export { makeSelectShouldShowCallModal, makeSelectShouldShowSafeModal, makeSelectShouldShowChatModal, makeSelectRecordType, makeSelectMessages, makeSelectRequestingImSafe, makeSelectShouldShowExitPanicModal, makeSelectShouldShowPanicInfo, makeSelectIsPanicMode, makeSelectFromPassiveEscort, makeSelectAppState, };
