/**
 *
 * WelcomeScreen types
 *
 */
import { CHANGE_PAGE, FINISH_WELCOME, NEXT_PAGE, RESET_CURRENT_PAGE } from './constants';
export interface WelcomeItem {
    index: number;
    titleKey: string;
    textKey: string;
    imageKey: string;
}
export interface WelcomeState {
    currentPage: number;
    welcomeItems: WelcomeItem[];
}
export interface ChangePageAction {
    type: typeof CHANGE_PAGE;
    payload: number;
}
export interface NextPageAction {
    type: typeof NEXT_PAGE;
}
export interface FinishWelcomeAction {
    type: typeof FINISH_WELCOME;
}
export interface ResetCurrentPageAction {
    type: typeof RESET_CURRENT_PAGE;
}
export type WelcomeActionTypes = ChangePageAction | NextPageAction | FinishWelcomeAction | ResetCurrentPageAction;
