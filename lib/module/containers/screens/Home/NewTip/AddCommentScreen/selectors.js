/**
 *
 * AddCommentScreen selectors
 *
 */

import { makeSelectNewTipIncidentVideos } from '../../../../../containers/app/selectors';
import every from 'lodash/every';
import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the AddCommentScreen state domain
 */

const selectAddCommentScreenStateDomain = state => state.addCommentScreen || initialState;

/**
 * Other specific selectors
 */

const makeSelectCreatingTip = () => createSelector(selectAddCommentScreenStateDomain, ({
  creatingTip
}) => creatingTip);
const makeSelectUploadingIncidentVideo = () => createSelector(makeSelectNewTipIncidentVideos(), videos => every(videos, {
  isUploaded: false
}));

/**
 * Default selector used by AddCommentScreen
 */

const makeSelectAddCommentScreenState = () => createSelector(selectAddCommentScreenStateDomain, subState => subState);
export default makeSelectAddCommentScreenState;
export { selectAddCommentScreenStateDomain, makeSelectCreatingTip, makeSelectUploadingIncidentVideo };
//# sourceMappingURL=selectors.js.map