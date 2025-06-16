"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = permissionLocationScreenSaga;
exports.requestLocationAlwaysPermissionsSaga = requestLocationAlwaysPermissionsSaga;
var _screens = _interopRequireDefault(require("../../../../containers/providers/RoutesProvider/screens"));
var _navigation = _interopRequireDefault(require("../../../../utils/navigation"));
var _effects = require("redux-saga/effects");
var _action = require("./action");
var _constants = require("./constants");
var _actions = require("../../../../utils/location/actions");
var _selectors = require("../../../../containers/app/selectors");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function* requestLocationAlwaysPermissionsSaga({
  payload
}) {
  const userData = yield (0, _effects.select)((0, _selectors.makeSelectUser)());
  yield (0, _effects.put)((0, _action.locationAlwaysPermissionsSuccess)());
  yield (0, _effects.call)(_navigation.default.navigate, _screens.default.Home.Index);
  yield (0, _effects.put)((0, _actions.getAllGeofenceRequest)(userData.id));
}
function* permissionLocationScreenSaga() {
  yield (0, _effects.takeLatest)(_constants.LOCATION_ALWAYS_PERMISSIONS_REQUEST, requestLocationAlwaysPermissionsSaga);
}
//# sourceMappingURL=saga.js.map