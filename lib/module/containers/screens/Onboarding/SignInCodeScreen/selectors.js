/**
 *
 * Send code screen selectors
 *
 */
import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the send code state domain
 */

const sendCodeScreenStateDomain = state => state.sendCodeScreen || initialState;

/**
 * Default selector used by send code
 */

const sendCodeScreenState = () => createSelector(sendCodeScreenStateDomain, subState => subState);
export default sendCodeScreenState;
//# sourceMappingURL=selectors.js.map