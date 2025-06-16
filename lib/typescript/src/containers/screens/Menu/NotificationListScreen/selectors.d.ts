import { RootState } from 'store/types';
declare const makeSelectIsLoading: () => ((state: RootState) => boolean) & import("reselect").OutputSelectorFields<(args_0: import("./types").NotificationListState) => boolean, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectNotificatioons: () => ((state: RootState) => any) & import("reselect").OutputSelectorFields<(args_0: import("./types").NotificationListState) => any, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
declare const makeSelectNotificationListState: () => ((state: RootState) => import("./types").NotificationListState) & import("reselect").OutputSelectorFields<(args_0: import("./types").NotificationListState) => import("./types").NotificationListState, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export default makeSelectNotificationListState;
export { makeSelectIsLoading, makeSelectNotificatioons };
