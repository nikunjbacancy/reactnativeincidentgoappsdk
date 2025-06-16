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
 
 const registerUserScreenStateDomain = (state: RootState) =>
   state.registerUserState || initialState;
 
 /**
  * Default selector used by send code
  */
 
 const sendCodeScreenState = () =>
   createSelector(registerUserScreenStateDomain, subState => subState);
 
 export default sendCodeScreenState;
 