"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reducer = _interopRequireDefault(require("../containers/app/reducer"));
var _reducer2 = _interopRequireDefault(require("../containers/providers/LanguageProvider/reducer"));
var _reducer3 = _interopRequireDefault(require("../containers/providers/NotificationProvider/reducer"));
var _reducer4 = _interopRequireDefault(require("../containers/providers/RoutesProvider/reducer"));
var _reducer5 = _interopRequireDefault(require("../containers/screens/Home/Escort/CountdownScreen/reducer"));
var _reducer6 = _interopRequireDefault(require("../containers/screens/Home/Escort/EscortTypeScreen/reducer"));
var _reducer7 = _interopRequireDefault(require("../containers/screens/Home/Escort/RecordScreen/reducer"));
var _reducer8 = _interopRequireDefault(require("../containers/screens/Home/Escort/RequestScreen/reducer"));
var _reducer9 = _interopRequireDefault(require("../containers/screens/Home/Escort/SelectOrganizationScreen/reducer"));
var _reducer10 = _interopRequireDefault(require("../containers/screens/Home/Escort/TimedEscortScreen/reducer"));
var _reducer11 = _interopRequireDefault(require("../containers/screens/Home/NewTip/AddCommentScreen/reducer"));
var _reducer12 = _interopRequireDefault(require("../containers/screens/Home/NewTip/SelectCategoryScreen/reducer"));
var _reducer13 = _interopRequireDefault(require("../containers/screens/Home/NewTip/SelectOrganizationScreen/reducer"));
var _reducer14 = _interopRequireDefault(require("../containers/screens/Home/NewTip/VideoRecordScreen/reducer"));
var _reducer15 = _interopRequireDefault(require("../containers/screens/Menu/FeedbackScreen/reducer"));
var _reducer16 = _interopRequireDefault(require("../containers/screens/Menu/ManageContacts/AddContactScreen/reducer"));
var _reducer17 = _interopRequireDefault(require("../containers/screens/Menu/MyAccountScreen/reducer"));
var _reducer18 = _interopRequireDefault(require("../containers/screens/Menu/OrganizationScreen/reducer"));
var _reducer19 = _interopRequireDefault(require("../containers/screens/Menu/Tips/MyTipsScreen/reducer"));
var _reducer20 = _interopRequireDefault(require("../containers/screens/Menu/Tips/TipDetailScreen/reducer"));
var _reducer21 = _interopRequireDefault(require("../containers/screens/Onboarding/AddUserPortraitScreen/reducer"));
var _reducer22 = _interopRequireDefault(require("../containers/screens/Onboarding/SelectOrganizationScreen/reducer"));
var _reducer23 = _interopRequireDefault(require("../containers/screens/Onboarding/WarningScreen/reducer"));
var _reducer24 = _interopRequireDefault(require("../containers/screens/Onboarding/WelcomeScreen/reducer"));
var _reducer25 = _interopRequireDefault(require("../containers/screens/Home/Settings/reducer"));
var _reducer26 = _interopRequireDefault(require("../containers/screens/Menu/NotificationListScreen/reducer"));
var _reducer27 = _interopRequireDefault(require("../utils/location/reducer"));
var _redux = require("redux");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 *
 * Combine all reducers in this file and export the combined reducers.
 *
 */

/**
 * Merges the main reducer with the router state
 */
const combinedReducer = (0, _redux.combineReducers)({
  app: _reducer.default,
  languageProvider: _reducer2.default,
  routesProvider: _reducer4.default,
  welcomeScreen: _reducer24.default,
  selectOrganizationScreen: _reducer22.default,
  newTipScreen: _reducer14.default,
  organizationNotifyScreen: _reducer13.default,
  incidentCategoryScreen: _reducer12.default,
  addCommentScreen: _reducer11.default,
  myTipsScreen: _reducer19.default,
  myAccountScreen: _reducer17.default,
  feedbackScreen: _reducer15.default,
  organizationScreen: _reducer18.default,
  addContactScreen: _reducer16.default,
  tipDetailScreen: _reducer20.default,
  escortTypeScreen: _reducer6.default,
  escortSelectOrganizationScreen: _reducer9.default,
  escortRecordScreen: _reducer7.default,
  escortTimedEscortScreen: _reducer10.default,
  escortCountdownScreen: _reducer5.default,
  notificationProvider: _reducer3.default,
  addUserPortraitScreen: _reducer21.default,
  settingsScreen: _reducer25.default,
  warningScreen: _reducer23.default,
  requestEscortScreen: _reducer8.default,
  notificationListState: _reducer26.default,
  getAllGeofence: _reducer27.default
});
const rootReducer = (state, action) => {
  if (action.type === 'USER_DELETED') {
    state = undefined;
    return combinedReducer(state, action);
  }
  return combinedReducer(state, action);
};
var _default = exports.default = rootReducer;
//# sourceMappingURL=reducers.js.map