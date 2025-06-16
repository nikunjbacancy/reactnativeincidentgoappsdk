"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rootSaga = rootSaga;
var _saga = _interopRequireDefault(require("../containers/app/saga"));
var _saga2 = _interopRequireDefault(require("../containers/screens/Home/Escort/CountdownScreen/saga"));
var _saga3 = _interopRequireDefault(require("../containers/screens/Home/Escort/RecordScreen/saga"));
var _saga4 = _interopRequireDefault(require("../containers/screens/Home/Escort/RequestScreen/saga"));
var _saga5 = _interopRequireDefault(require("../containers/screens/Home/Escort/SelectOrganizationScreen/saga"));
var _saga6 = _interopRequireDefault(require("../containers/screens/Home/Escort/TimedEscortScreen/saga"));
var _saga7 = _interopRequireDefault(require("../containers/screens/Home/NewTip/AddCommentScreen/saga"));
var _saga8 = _interopRequireDefault(require("../containers/screens/Home/NewTip/SelectOrganizationScreen/saga"));
var _saga9 = _interopRequireDefault(require("../containers/screens/Home/NewTip/VideoRecordScreen/saga"));
var _saga10 = _interopRequireDefault(require("../containers/screens/Menu/FeedbackScreen/saga"));
var _saga11 = _interopRequireDefault(require("../containers/screens/Menu/ManageContacts/AddContactScreen/saga"));
var _saga12 = _interopRequireDefault(require("../containers/screens/Menu/ManageContacts/ContactScreen/saga"));
var _saga13 = _interopRequireDefault(require("../containers/screens/Menu/MyAccountScreen/saga"));
var _saga14 = _interopRequireDefault(require("../containers/screens/Menu/SettingScreen/saga"));
var _saga15 = _interopRequireDefault(require("../containers/screens/Menu/OrganizationScreen/saga"));
var _saga16 = _interopRequireDefault(require("../containers/screens/Menu/Tips/MyTipsScreen/saga"));
var _saga17 = _interopRequireDefault(require("../containers/screens/Menu/Tips/TipDetailScreen/saga"));
var _saga18 = _interopRequireDefault(require("../containers/screens/Onboarding/AddUserPortraitScreen/saga"));
var _saga19 = _interopRequireDefault(require("../containers/screens/Onboarding/PermissionScreen/saga"));
var _saga20 = _interopRequireDefault(require("../containers/screens/Onboarding/PermissionLocationScreen/saga"));
var _saga21 = _interopRequireDefault(require("../containers/screens/Onboarding/SelectOrganizationScreen/saga"));
var _saga22 = _interopRequireDefault(require("../containers/screens/Onboarding/SignInCodeScreen/saga"));
var _saga23 = _interopRequireDefault(require("../containers/screens/Onboarding/SignInScreen/saga"));
var _saga24 = _interopRequireDefault(require("../containers/screens/Onboarding/PromocodeScreen/saga"));
var _saga25 = _interopRequireDefault(require("../containers/screens/Onboarding/UpdateNameScreen/saga"));
var _saga26 = _interopRequireDefault(require("../containers/screens/Home/Settings/saga"));
var _saga27 = _interopRequireDefault(require("../containers/screens/Onboarding/WarningScreen/saga"));
var _saga28 = _interopRequireDefault(require("../containers/screens/Menu/NotificationListScreen/saga"));
var _saga29 = _interopRequireDefault(require("../utils/location/saga"));
var _effects = require("redux-saga/effects");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function* rootSaga() {
  yield (0, _effects.fork)(_saga.default);
  yield (0, _effects.fork)(_saga23.default);
  yield (0, _effects.fork)(_saga22.default);
  yield (0, _effects.fork)(_saga24.default);
  yield (0, _effects.fork)(_saga25.default);
  yield (0, _effects.fork)(_saga21.default);
  yield (0, _effects.fork)(_saga19.default);
  yield (0, _effects.fork)(_saga20.default);
  yield (0, _effects.fork)(_saga9.default);
  yield (0, _effects.fork)(_saga8.default);
  yield (0, _effects.fork)(_saga7.default);
  yield (0, _effects.fork)(_saga16.default);
  yield (0, _effects.fork)(_saga13.default);
  yield (0, _effects.fork)(_saga10.default);
  yield (0, _effects.fork)(_saga15.default);
  yield (0, _effects.fork)(_saga12.default);
  yield (0, _effects.fork)(_saga11.default);
  yield (0, _effects.fork)(_saga14.default);
  yield (0, _effects.fork)(_saga17.default);
  yield (0, _effects.fork)(_saga5.default);
  yield (0, _effects.fork)(_saga3.default);
  yield (0, _effects.fork)(_saga6.default);
  yield (0, _effects.fork)(_saga2.default);
  yield (0, _effects.fork)(_saga18.default);
  yield (0, _effects.fork)(_saga26.default);
  yield (0, _effects.fork)(_saga27.default);
  yield (0, _effects.fork)(_saga4.default);
  yield (0, _effects.fork)(_saga28.default);
  yield (0, _effects.fork)(_saga29.default);
}

// function* rootSaga() {
//   yield all([
//     appSaga(),
//     signInScreenSaga(),
//     signInCodeScreenSaga(),
//     registerUserScreenSaga(),
//     updateNameScreenSaga(),
//     selectOrganizationScreenSaga(),
//   ])

// }
//# sourceMappingURL=sagas.js.map