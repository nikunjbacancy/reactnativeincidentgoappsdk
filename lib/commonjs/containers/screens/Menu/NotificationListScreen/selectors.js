"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSelectNotificatioons = exports.makeSelectIsLoading = exports.default = void 0;
var _reselect = require("reselect");
var _reducer = require("./reducer");
const notificationListStateDomain = state => state.notificationListState || _reducer.initialState;
const makeSelectIsLoading = () => (0, _reselect.createSelector)(notificationListStateDomain, ({
  isLoading
}) => isLoading);
exports.makeSelectIsLoading = makeSelectIsLoading;
const makeSelectNotificatioons = () => (0, _reselect.createSelector)(notificationListStateDomain, ({
  listData
}) => listData);
exports.makeSelectNotificatioons = makeSelectNotificatioons;
const makeSelectNotificationListState = () => (0, _reselect.createSelector)(notificationListStateDomain, object => object);
var _default = exports.default = makeSelectNotificationListState;
//# sourceMappingURL=selectors.js.map