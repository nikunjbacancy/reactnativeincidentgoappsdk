import { createSelector } from 'reselect';
import { initialState } from './reducer';
const warningScreenStateDomain = state => state.warningScreen || initialState;
const makeSelectShowPanicInfo = () => createSelector(warningScreenStateDomain, ({
  showPanicInfo
}) => showPanicInfo);
const makeSelectWarningScreenState = () => createSelector(warningScreenStateDomain, subState => subState);
export default makeSelectWarningScreenState;
export { makeSelectShowPanicInfo };
//# sourceMappingURL=selectors.js.map