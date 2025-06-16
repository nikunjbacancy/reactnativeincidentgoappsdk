/**
 *
 * WelcomeScreen actions
 *
 */

import {
  CHANGE_PAGE,
  FINISH_WELCOME,
  NEXT_PAGE,
  RESET_CURRENT_PAGE,
} from './constants';
import { WelcomeActionTypes } from './types';

export const changePage = (index: number): WelcomeActionTypes => ({
  type: CHANGE_PAGE,
  payload: index,
});

export const nextPage = (): WelcomeActionTypes => ({
  type: NEXT_PAGE,
});

export const finishWelcome = (): WelcomeActionTypes => ({
  type: FINISH_WELCOME,
});

export const resetCurrentPage = (): WelcomeActionTypes => ({
  type: RESET_CURRENT_PAGE,
});
