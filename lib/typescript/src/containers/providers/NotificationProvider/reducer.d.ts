/**
 *
 * App reducer
 *
 */
import { NotificationProviderActionTypes, NotificationProviderState } from './types';
export declare const initialState: NotificationProviderState;
declare const notificationProviderReducer: <Base extends {
    readonly iosForegroundNotification?: {
        readonly title: string;
        readonly message: string;
        readonly action: () => void;
    } | undefined;
}>(base?: Base | undefined, action: NotificationProviderActionTypes) => Base;
export default notificationProviderReducer;
