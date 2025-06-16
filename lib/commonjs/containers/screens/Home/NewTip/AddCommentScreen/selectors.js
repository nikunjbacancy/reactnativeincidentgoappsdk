"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectAddCommentScreenStateDomain = exports.makeSelectUploadingIncidentVideo = exports.makeSelectCreatingTip = exports.default = void 0;
var _selectors = require("../../../../../containers/app/selectors");
var _every = _interopRequireDefault(require("lodash/every"));
var _reselect = require("reselect");
var _reducer = require("./reducer");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 *
 * AddCommentScreen selectors
 *
 */

/**
 * Direct selector to the AddCommentScreen state domain
 */

const selectAddCommentScreenStateDomain = state => state.addCommentScreen || _reducer.initialState;

/**
 * Other specific selectors
 */
exports.selectAddCommentScreenStateDomain = selectAddCommentScreenStateDomain;
const makeSelectCreatingTip = () => (0, _reselect.createSelector)(selectAddCommentScreenStateDomain, ({
  creatingTip
}) => creatingTip);
exports.makeSelectCreatingTip = makeSelectCreatingTip;
const makeSelectUploadingIncidentVideo = () => (0, _reselect.createSelector)((0, _selectors.makeSelectNewTipIncidentVideos)(), videos => (0, _every.default)(videos, {
  isUploaded: false
}));

/**
 * Default selector used by AddCommentScreen
 */
exports.makeSelectUploadingIncidentVideo = makeSelectUploadingIncidentVideo;
const makeSelectAddCommentScreenState = () => (0, _reselect.createSelector)(selectAddCommentScreenStateDomain, subState => subState);
var _default = exports.default = makeSelectAddCommentScreenState;
//# sourceMappingURL=selectors.js.map