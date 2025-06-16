/**
 *
 * WelcomeScreen reducer
 *
 */

import produce, { Draft } from 'immer';

import { CHANGE_PAGE, NEXT_PAGE, RESET_CURRENT_PAGE } from './constants';
import { WelcomeActionTypes, WelcomeState } from './types';

export const initialState: WelcomeState = {
  currentPage: 0,
  welcomeItems: [
    {
      index: 0,
      titleKey: 'emergencyTitle',
      textKey: 'emergencyText',
      imageKey: 'welcomeEmergencyCall',
    },
    {
      index: 1,
      titleKey: 'liveTitle',
      textKey: 'liveText',
      imageKey: 'welcomeNotify',
    },
    {
      index: 2,
      titleKey: 'safetyTitle',
      textKey: 'safetyText',
      imageKey: 'welcomeMap',
    },
    {
      index: 3,
      titleKey: 'panicTitle',
      textKey: 'panicText',
      imageKey: 'welcomeTimer',
    },
    {
      index: 4,
      titleKey: 'tipTitle',
      textKey: 'tipText',
      imageKey: 'welcomeTimer',
    },
  ],
};

const welcomeScreenReducer = produce(
  (draft: Draft<WelcomeState>, action: WelcomeActionTypes) => {
    switch (action.type) {
      case CHANGE_PAGE:
        draft.currentPage = action.payload;
        break;
      case NEXT_PAGE:
        draft.currentPage += 1;
        break;
      case RESET_CURRENT_PAGE:
        draft.currentPage = 0;
        break;
      default:
    }
  },
  initialState,
);

export default welcomeScreenReducer;
