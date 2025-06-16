/**
 *
 * SelectCategoryScreen selectors
 *
 */

import { selectAppStateDomain } from '../../../../../containers/app/selectors';
import { IncidentCategoryConfig } from 'incident-code-core';
import filter from 'lodash/filter';
import { createSelector } from 'reselect';
import { RootState } from '../../../../../store/types';

import { initialState } from './reducer';

/**
 * Direct selector to the SelectCategoryScreen state domain
 */

const selectIncidentCategoryScreenStateDomain = (state: RootState) =>
  state.incidentCategoryScreen || initialState;

/**
 * Other specific selectors
 */

const makeSelectIncidentCategories = () =>
  createSelector(selectAppStateDomain, ({ configs }) => {
    const result: IncidentCategoryConfig[][] = [];
    const categories = filter(configs.incidentCategories, 'enabled');
    for (let i = 0; i < categories.length; i += 3) {
      const row: IncidentCategoryConfig[] = [];
      for (let j = 0; j < 3; j += 1) {
        const category = categories[i + j];
        if (category) {
          row.push(category);
        }
      }

      result.push(row);
    }
    return result;
  });

const makeSelectSelectedCategory = () =>
  createSelector(
    selectIncidentCategoryScreenStateDomain,
    ({ category }) => category,
  );

/**
 * Default selector used by SelectCategoryScreen
 */

const makeSelectIncidentCategoryScreenState = () =>
  createSelector(selectIncidentCategoryScreenStateDomain, subState => subState);

export default makeSelectIncidentCategoryScreenState;
export { makeSelectIncidentCategories, makeSelectSelectedCategory };
