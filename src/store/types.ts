import { AppState } from '../containers/app/types';
import { LanguageProviderState } from '../containers/providers/LanguageProvider/types';
import { NotificationProviderState } from '../containers/providers/NotificationProvider/types';
import { RoutesProviderState } from '../containers/providers/RoutesProvider/types';
import { CountdownState } from '../containers/screens/Home/Escort/CountdownScreen/types';
import { EscortTypeState } from 'containers/screens/Home/Escort/EscortTypeScreen/types';
import { RecordState as EscortRecordState } from '../containers/screens/Home/Escort/RecordScreen/types';
import { SelectOrganizationState as EscortSelectOrganizationState } from '../containers/screens/Home/Escort/SelectOrganizationScreen/types';
import { TimedEscortState } from '../containers/screens/Home/Escort/TimedEscortScreen/types';
import { AddContactState } from '../containers/screens/Menu/ManageContacts/AddContactScreen/types';
import { AddCommentState } from '../containers/screens/Home/NewTip/AddCommentScreen/types';
import { IncidentCategoryState } from '../containers/screens/Home/NewTip/SelectCategoryScreen/types';
import { OrganizationNotifyState } from '../containers/screens/Home/NewTip/SelectOrganizationScreen/types';
import { NewTipState } from '../containers/screens/Home/NewTip/VideoRecordScreen/types';
import { MyTipsState } from '../containers/screens/Menu/Tips/MyTipsScreen/types';
import { TipDetailState } from '../containers/screens/Menu/Tips/TipDetailScreen/types';
import { FeedbackState } from '../containers/screens/Menu/FeedbackScreen/types';
import { MyAccountState } from '../containers/screens/Menu/MyAccountScreen/types';
import { OrganizationState } from '../containers/screens/Menu/OrganizationScreen/types';
import { AddUserPortraitState } from '../containers/screens/Onboarding/AddUserPortraitScreen/types';
import { SelectOrganizationState } from '../containers/screens/Onboarding/SelectOrganizationScreen/types';
import { WarningScreenState } from '../containers/screens/Onboarding/WarningScreen/types';
import { WelcomeState } from '../containers/screens/Onboarding/WelcomeScreen/types';
import { SettingsState } from '../containers/screens/Home/Settings/types'
import { SendCodeState } from '../containers/screens/Onboarding/SignInScreen/types'
import { RegisterUserState } from '../containers/screens/Onboarding/PromocodeScreen/types'
// import { RequestEscortState } from '../containers/screens/Home/Escort/RequestScreen/types';
import { NotificationListState } from '../containers/screens/Menu/NotificationListScreen/types';
import { GetAllGeofencesState } from '../utils/location/types';

export interface RootState {
  app: AppState;
  languageProvider: LanguageProviderState;
  routesProvider: RoutesProviderState;
  welcomeScreen: WelcomeState;
  warningScreen: WarningScreenState;
  selectOrganizationScreen: SelectOrganizationState;
  newTipScreen: NewTipState;
  organizationNotifyScreen: OrganizationNotifyState;
  incidentCategoryScreen: IncidentCategoryState;
  addCommentScreen: AddCommentState;
  myTipsScreen: MyTipsState;
  tipDetailScreen: TipDetailState;
  myAccountScreen: MyAccountState;
  feedbackScreen: FeedbackState;
  organizationScreen: OrganizationState;
  addContactScreen: AddContactState;
  escortSelectOrganizationScreen: EscortSelectOrganizationState;
  escortRecordScreen: EscortRecordState;
  escortTimedEscortScreen: TimedEscortState;
  escortCountdownScreen: CountdownState;
  escortTypeScreen: EscortTypeState;
  notificationProvider: NotificationProviderState;
  addUserPortraitScreen: AddUserPortraitState;
  settingsScreen: SettingsState;
  sendCodeScreen:SendCodeState;
  registerUserState:RegisterUserState;
  notificationListState:NotificationListState;
  getAllGeofence:GetAllGeofencesState
}
