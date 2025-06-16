/**
 *
 * SelectCategoryScreen actions
 *
 */

import { IncidentCategoryConfig } from 'incident-code-core';

import { SELECT_INCIDENT_CATEGORY } from './constants';
import { IncidentCategoryTypes } from './types';

export const selectIncidentCategory = (
  category: IncidentCategoryConfig,
): IncidentCategoryTypes => ({
  type: SELECT_INCIDENT_CATEGORY,
  payload: category,
});
