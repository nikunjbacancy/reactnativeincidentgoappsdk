import appSaga from '../containers/app/saga';
import escortCountdownScreenSaga from '../containers/screens/Home/Escort/CountdownScreen/saga';
import escortRecordScreenSaga from '../containers/screens/Home/Escort/RecordScreen/saga';
import escortRequestScreenSaga from '../containers/screens/Home/Escort/RequestScreen/saga';
import escortSelectOrganizationScreenSaga from '../containers/screens/Home/Escort/SelectOrganizationScreen/saga';
import escortTimedEscortScreenSaga from '../containers/screens/Home/Escort/TimedEscortScreen/saga';
import addCommentScreenSaga from '../containers/screens/Home/NewTip/AddCommentScreen/saga';
import organizationNotifyScreenSaga from '../containers/screens/Home/NewTip/SelectOrganizationScreen/saga';
import newTipScreenSaga from '../containers/screens/Home/NewTip/VideoRecordScreen/saga';
import feedbackScreenSaga from '../containers/screens/Menu/FeedbackScreen/saga';
import addContactScreenSaga from '../containers/screens/Menu/ManageContacts/AddContactScreen/saga';
import contactScreenSaga from '../containers/screens/Menu/ManageContacts/ContactScreen/saga';
import myAccountScreenSaga from '../containers/screens/Menu/MyAccountScreen/saga';
import notificationScreenSaga from '../containers/screens/Menu/SettingScreen/saga';
import organizationScreenSaga from '../containers/screens/Menu/OrganizationScreen/saga';
import myTipsScreenSaga from '../containers/screens/Menu/Tips/MyTipsScreen/saga';
import tipDetailScreenSaga from '../containers/screens/Menu/Tips/TipDetailScreen/saga';
import addUserPortraitScreenSaga from '../containers/screens/Onboarding/AddUserPortraitScreen/saga';
import permissionScreenSaga from '../containers/screens/Onboarding/PermissionScreen/saga';
import permissionLocationScreenSaga from '../containers/screens/Onboarding/PermissionLocationScreen/saga';
import selectOrganizationScreenSaga from '../containers/screens/Onboarding/SelectOrganizationScreen/saga';
import signInCodeScreenSaga from '../containers/screens/Onboarding/SignInCodeScreen/saga';
import signInScreenSaga from '../containers/screens/Onboarding/SignInScreen/saga';
import registerUserScreenSaga from '../containers/screens/Onboarding/PromocodeScreen/saga';
import updateNameScreenSaga from '../containers/screens/Onboarding/UpdateNameScreen/saga';
import updateSettingScreenSaga from '../containers/screens/Home/Settings/saga'
import warningScreenSaga from '../containers/screens/Onboarding/WarningScreen/saga';
import notificationListScreenSaga from '../containers/screens/Menu/NotificationListScreen/saga';
import locationTrackSaga from '../utils/location/saga';

import { fork } from 'redux-saga/effects';

function* rootSaga() {
  yield fork(appSaga);
  yield fork(signInScreenSaga);
  yield fork(signInCodeScreenSaga);
  yield fork(registerUserScreenSaga);
  yield fork(updateNameScreenSaga);
  yield fork(selectOrganizationScreenSaga);
  yield fork(permissionScreenSaga);
  yield fork(permissionLocationScreenSaga);
  yield fork(newTipScreenSaga);
  yield fork(organizationNotifyScreenSaga);
  yield fork(addCommentScreenSaga);
  yield fork(myTipsScreenSaga);
  yield fork(myAccountScreenSaga);
  yield fork(feedbackScreenSaga);
  yield fork(organizationScreenSaga);
  yield fork(contactScreenSaga);
  yield fork(addContactScreenSaga);
  yield fork(notificationScreenSaga);
  yield fork(tipDetailScreenSaga);
  yield fork(escortSelectOrganizationScreenSaga);
  yield fork(escortRecordScreenSaga);
  yield fork(escortTimedEscortScreenSaga);
  yield fork(escortCountdownScreenSaga);
  yield fork(addUserPortraitScreenSaga);
  yield fork(updateSettingScreenSaga);
  yield fork(warningScreenSaga);
  yield fork(escortRequestScreenSaga);
  yield fork(notificationListScreenSaga);
  yield fork(locationTrackSaga);
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

export { rootSaga };
