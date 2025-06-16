/**
 *
 * SelectOrganizationScreen selectors
 *
 */

import filter from 'lodash/filter';
import some from 'lodash/some';
import { createSelector } from 'reselect';
import { RootState } from 'store/types';

import { initialState } from './reducer';

/**
 * Direct selector to the SelectOrganizationScreen state domain
 */

const selectOrganizationScreenStateDomain = (state: RootState) =>
  state.selectOrganizationScreen || initialState;

/**
 * Other specific selectors
 */

const makeSelectOrganizations = () =>
  createSelector(
    selectOrganizationScreenStateDomain,
    ({ organizations }) => organizations,
  );

const makeSelectSelectedOrganizations = () =>
  createSelector(selectOrganizationScreenStateDomain, ({ organizations }) =>
    filter(organizations, { isSelected: true }),
  );

const makeSelectEnableNextButton = () =>
  createSelector(selectOrganizationScreenStateDomain, ({ organizations }) =>
    some(organizations, { isSelected: true }),
  );

const makeSelectError = () =>
  createSelector(selectOrganizationScreenStateDomain, ({ error }) => error);

const makeSelectErrorMessage = () =>
  createSelector(
    selectOrganizationScreenStateDomain,
    ({ errorMessage }) => errorMessage,
  );

/**
 * Default selector used by SelectOrganizationScreen
 */

const makeSelectSelectOrganizationScreenState = () =>
  createSelector(selectOrganizationScreenStateDomain, subState => subState);

export default makeSelectSelectOrganizationScreenState;
export {
  selectOrganizationScreenStateDomain,
  makeSelectOrganizations,
  makeSelectSelectedOrganizations,
  makeSelectEnableNextButton,
  makeSelectError,
  makeSelectErrorMessage,
};
