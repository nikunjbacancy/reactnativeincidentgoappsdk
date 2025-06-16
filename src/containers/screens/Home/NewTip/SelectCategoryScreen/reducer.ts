/**
 *
 * SelectCategoryScreen reducer
 *
 */

import produce, { Draft } from 'immer';

import { DELETE_INCIDENT_SUCCESS } from '../VideoRecordScreen/constants';
import { SELECT_INCIDENT_CATEGORY } from './constants';
import { IncidentCategoryState, IncidentCategoryTypes } from './types';

export const initialState: IncidentCategoryState = {
  category: undefined,
};

const incidentCategoryScreenReducer = produce(
  (draft: Draft<IncidentCategoryState>, action: IncidentCategoryTypes) => {
    switch (action.type) {
      case SELECT_INCIDENT_CATEGORY:
        draft.category = action.payload;
        break;
      case DELETE_INCIDENT_SUCCESS:
        draft.category = undefined;
        break;
      default:
    }
  },
  initialState,
);

export default incidentCategoryScreenReducer;
