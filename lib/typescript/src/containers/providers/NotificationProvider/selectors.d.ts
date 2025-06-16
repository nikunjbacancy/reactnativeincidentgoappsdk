/**
 *
 * NotificationProvider selectors
 *
 */
import { RootState } from 'store/types';
/**
 * Direct selector to the NotificationProvider state domain
 */
declare const selectNotificationProviderStateDomain: (state: RootState) => import("./types").NotificationProviderState;
/**
 * Other specific selectors
 */
declare const makeSelectIOSForegroundNotification: () => ((state: RootState) => import("./types").IOSForegroundNotification | undefined) & import("reselect").OutputSelectorFields<(args_0: import("./types").NotificationProviderState) => import("./types").IOSForegroundNotification | undefined, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
/**
 * Default selector used by NotificationProvider
 */
declare const makeSelectNotificationProviderState: () => ((state: RootState) => import("./types").NotificationProviderState) & import("reselect").OutputSelectorFields<(args_0: import("./types").NotificationProviderState) => import("./types").NotificationProviderState, {
    clearCache: () => void;
}> & {
    clearCache: () => void;
};
export default makeSelectNotificationProviderState;
export { selectNotificationProviderStateDomain, makeSelectIOSForegroundNotification, };
