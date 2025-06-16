/**
 *
 * Send code screen selectors
 *
 */
 import { createSelector } from 'reselect';
 import { RootState } from 'store/types';
 import { initialState } from './reducer';
 
 /**
  * Direct selector to the send code state domain
  */
 
 const sendCodeScreenStateDomain = (state: RootState) =>
   state.sendCodeScreen || initialState;
 
 /**
  * Default selector used by send code
  */
 
 const sendCodeScreenState = () =>
   createSelector(sendCodeScreenStateDomain, subState => subState);
 
 export default sendCodeScreenState;
 