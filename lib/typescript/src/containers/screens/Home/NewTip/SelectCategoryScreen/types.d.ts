/**
 *
 * SelectCategoryScreen types
 *
 */
import { IncidentCategoryConfig } from 'incident-code-core';
import { DeleteIncidentSuccessAction } from '../VideoRecordScreen/types';
import { SELECT_INCIDENT_CATEGORY } from './constants';
export interface IncidentCategoryState {
    category?: IncidentCategoryConfig;
}
export interface SelectCategoryAction {
    type: typeof SELECT_INCIDENT_CATEGORY;
    payload: IncidentCategoryConfig;
}
export type IncidentCategoryTypes = SelectCategoryAction | DeleteIncidentSuccessAction;
