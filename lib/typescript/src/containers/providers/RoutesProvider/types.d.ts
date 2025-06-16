/**
 *
 * RoutesProvider types
 *
 */
import { ADD_SCREEN_ACTION, HIDE_DURESS_INFO_ACTION, REMOVE_SCREEN_ACTION, SHOW_DURESS_INFO_ACTION } from './constants';
export interface RoutesProviderState {
    screenAction?: ScreenAction;
    showDuressInfo: boolean;
}
export type ScreenAction = {
    type?: string;
    action(): void;
    actionText: string;
    cancel(): void;
    loading?: boolean;
    disabled?: boolean;
};
export interface AddScreenAction {
    type: typeof ADD_SCREEN_ACTION;
    payload: ScreenAction;
}
export interface RemoveScreenAction {
    type: typeof REMOVE_SCREEN_ACTION;
}
export interface ShowDuressInfoAction {
    type: typeof SHOW_DURESS_INFO_ACTION;
}
export interface HideDuressInfoAction {
    type: typeof HIDE_DURESS_INFO_ACTION;
}
export type RoutesProviderActionTypes = AddScreenAction | RemoveScreenAction | ShowDuressInfoAction | HideDuressInfoAction;
