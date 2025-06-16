/**
 *
 * AddContactScreen reducer
 *
 */
import { NotificationListState, NotificationListActionTypes } from './types';
export declare const initialState: NotificationListState;
declare const notificationListReducer: <Base extends {
    readonly isLoading: boolean;
    readonly listData: any;
    readonly unreadCount: number;
    readonly notiReadData: any;
}>(base?: Base | undefined, action: NotificationListActionTypes) => Base;
export default notificationListReducer;
