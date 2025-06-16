/**
 *
 * Combine all reducers in this file and export the combined reducers.
 *
 */

import appReducer from '../containers/app/reducer';
import languageProviderReducer from '../containers/providers/LanguageProvider/reducer';
import notificationProviderReducer from '../containers/providers/NotificationProvider/reducer';
import routesProviderReducer from '../containers/providers/RoutesProvider/reducer';
import esCountdownScreenReducer from '../containers/screens/Home/Escort/CountdownScreen/reducer';
import esTypeScreenReducer from '../containers/screens/Home/Escort/EscortTypeScreen/reducer';
import esRecordScreenReducer from '../containers/screens/Home/Escort/RecordScreen/reducer';
import esRequestEscortScreenReducuer from '../containers/screens/Home/Escort/RequestScreen/reducer';
import esSelectOrganizationScreenReducer from '../containers/screens/Home/Escort/SelectOrganizationScreen/reducer';
import esTimedEscortScreenReducer from '../containers/screens/Home/Escort/TimedEscortScreen/reducer';
import addCommentScreenReducer from '../containers/screens/Home/NewTip/AddCommentScreen/reducer';
import incidentCategoryScreenReducer from '../containers/screens/Home/NewTip/SelectCategoryScreen/reducer';
import organizationNotifyScreenReducer from '../containers/screens/Home/NewTip/SelectOrganizationScreen/reducer';
import newTipScreenReducer from '../containers/screens/Home/NewTip/VideoRecordScreen/reducer';
import feedbackScreenReducer from '../containers/screens/Menu/FeedbackScreen/reducer';
import addContactScreenReducer from '../containers/screens/Menu/ManageContacts/AddContactScreen/reducer';
import myAccountScreenReducer from '../containers/screens/Menu/MyAccountScreen/reducer';
import organizationScreenReducer from '../containers/screens/Menu/OrganizationScreen/reducer';
import myTipsScreenReducer from '../containers/screens/Menu/Tips/MyTipsScreen/reducer';
import tipDetailScreenReducer from '../containers/screens/Menu/Tips/TipDetailScreen/reducer';
import addUserPortraitScreenReducer from '../containers/screens/Onboarding/AddUserPortraitScreen/reducer';
import selectOrganizationScreenReducer from '../containers/screens/Onboarding/SelectOrganizationScreen/reducer';
import warningScreenReducer from '../containers/screens/Onboarding/WarningScreen/reducer';
import welcomeScreenReducer from '../containers/screens/Onboarding/WelcomeScreen/reducer';
import settingsScreenReducer from '../containers/screens/Home/Settings/reducer';
import notificationListReducer from '../containers/screens/Menu/NotificationListScreen/reducer';
import getAllGeofence from '../utils/location/reducer';
import { combineReducers } from 'redux';

/**
 * Merges the main reducer with the router state
 */
const combinedReducer = combineReducers({
  app: appReducer,
  languageProvider: languageProviderReducer,
  routesProvider: routesProviderReducer,
  welcomeScreen: welcomeScreenReducer,
  selectOrganizationScreen: selectOrganizationScreenReducer,
  newTipScreen: newTipScreenReducer,
  organizationNotifyScreen: organizationNotifyScreenReducer,
  incidentCategoryScreen: incidentCategoryScreenReducer,
  addCommentScreen: addCommentScreenReducer,
  myTipsScreen: myTipsScreenReducer,
  myAccountScreen: myAccountScreenReducer,
  feedbackScreen: feedbackScreenReducer,
  organizationScreen: organizationScreenReducer,
  addContactScreen: addContactScreenReducer,
  tipDetailScreen: tipDetailScreenReducer,
  escortTypeScreen: esTypeScreenReducer,
  escortSelectOrganizationScreen: esSelectOrganizationScreenReducer,
  escortRecordScreen: esRecordScreenReducer,
  escortTimedEscortScreen: esTimedEscortScreenReducer,
  escortCountdownScreen: esCountdownScreenReducer,
  notificationProvider: notificationProviderReducer,
  addUserPortraitScreen: addUserPortraitScreenReducer,
  settingsScreen: settingsScreenReducer,
  warningScreen: warningScreenReducer,
  requestEscortScreen: esRequestEscortScreenReducuer,
  notificationListState: notificationListReducer,
  getAllGeofence: getAllGeofence
});
const rootReducer = (state, action) => {
  if (action.type === 'USER_DELETED') {
    state = undefined;
    return combinedReducer(state, action);
  }
  return combinedReducer(state, action);
};
export default rootReducer;
//# sourceMappingURL=reducers.js.map