import 'react-native-gesture-handler';
import { colors, fonts } from '../../../assets';
import { ActivateGPSScreen, AddCommentScreen, AddContactScreen, AddUserPortraitScreen, ContactScreen, EscortCountdownScreen, EscortRecordScreen, EscortRequestScreen, EscortSelectOrganizationScreen, EscortTimedEscortScreen, EscortTypeScreen, FeedbackScreen, MyAccountScreen, MyTipsScreen, NewTipSelectOrganizationScreen, NotificationScreen, OnboardingSelectOrganizationScreen, PermissionScreen, PermissionLocationScreen, SelectCategoryScreen, SignInCodeScreen, PromoCodeScreen, PrivacyPolicyScreen, SignInScreen, TipDetailScreen, UpdateNameScreen, VideoRecordScreen, WarningScreen, WelcomeScreen, NotificationListScreen, NotificationDetailScreen } from '../../../containers/screens';
import { TipStatus } from '../../../containers/screens/Menu/Tips/MyTipsScreen/types';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { isIos } from '../../../utils/device';
import { sdkConfigs } from '../../../sdkConfigs';
import BottomTabBar from './BottomTabBar';
import Screens from './screens';
import TopTabBar from './TopTabBar';
import SettingScreen from '../../../containers/screens/Home/Settings';
if (isIos) {
  // //("isIOS==>", isIos)
}
const MyTipsTab = createMaterialTopTabNavigator({
  [Screens.Menu.Tips.MyTips.Active]: {
    screen: MyTipsScreen,
    params: {
      tipStatus: TipStatus.Active
    },
    navigationOptions: {
      tabBarLabel: 'ACTIVE'
    }
  },
  [Screens.Menu.Tips.MyTips.Closed]: {
    screen: MyTipsScreen,
    params: {
      tipStatus: TipStatus.Closed
    },
    navigationOptions: {
      tabBarLabel: 'CLOSED'
    }
  }
}, {
  initialRouteName: Screens.Menu.Tips.MyTips.Active,
  tabBarOptions: {
    activeTintColor: colors.dark,
    inactiveTintColor: colors.lightGrey,
    indicatorStyle: {
      backgroundColor: colors.dark
    },
    pressColor: colors.transparent,
    contentContainerStyle: {
      backgroundColor: sdkConfigs.colors.backgroundColor
    },
    style: {
      marginLeft: 30,
      marginRight: 30,
      backgroundColor: sdkConfigs.colors.backgroundColor
    },
    labelStyle: {
      fontFamily: fonts.defaultBoldFamily,
      fontSize: 17
    }
  },
  tabBarComponent: TopTabBar
});
const BottomTabNavigator = createBottomTabNavigator({
  [Screens.Home.Escort.EscortType]: EscortTypeScreen,
  [Screens.Home.NewTip.VideoRecord]: VideoRecordScreen
}, {
  initialRouteName: Screens.Home.Escort.EscortType,
  tabBarComponent: BottomTabBar,
  lazy: true
});
const OnboardingNavigator = createStackNavigator({
  [Screens.Onboarding.Warning]: WarningScreen,
  [Screens.Onboarding.Welcome]: WelcomeScreen,
  [Screens.Onboarding.PrivacyPolicy]: PrivacyPolicyScreen,
  [Screens.Onboarding.SignIn]: SignInScreen,
  [Screens.Onboarding.SignInCode]: SignInCodeScreen,
  [Screens.Onboarding.PromoCode]: PromoCodeScreen,
  [Screens.Onboarding.UpdateName]: UpdateNameScreen,
  [Screens.Onboarding.AddUserPortrait]: AddUserPortraitScreen,
  [Screens.Onboarding.SelectOrganization]: OnboardingSelectOrganizationScreen,
  [Screens.Onboarding.Permission]: PermissionScreen,
  [Screens.Onboarding.PermissionLocation]: PermissionLocationScreen,
  [Screens.Onboarding.ActivateGPS]: ActivateGPSScreen
}, {
  initialRouteName: Screens.Onboarding.Warning,
  headerMode: 'none',
  cardStyle: {
    backgroundColor: colors.white
  },
  defaultNavigationOptions: {
    gesturesEnabled: false
  }
});
const HomeNavigator = createStackNavigator({
  [Screens.BottomTab]: BottomTabNavigator,
  [Screens.Menu.MyTips]: MyTipsScreen,
  [Screens.Menu.Contacts]: ContactScreen,
  [Screens.Menu.Beacons]: SettingScreen,
  [Screens.Menu.MyAccount]: MyAccountScreen,
  [Screens.Menu.Notification]: NotificationScreen,
  [Screens.Menu.NotificationList]: NotificationListScreen,
  [Screens.Menu.NotificationDetail]: NotificationDetailScreen,
  [Screens.Menu.Feedback.AddFeedback]: FeedbackScreen,
  [Screens.Menu.Feedback.QuickStartGuide]: {
    screen: WelcomeScreen,
    params: {
      fromFeedback: true
    }
  },
  [Screens.Menu.Tips.MyTips.Index]: MyTipsTab,
  [Screens.Menu.Tips.TipDetail]: TipDetailScreen,
  [Screens.Menu.ManageContact.ListContacts]: ContactScreen,
  [Screens.Menu.ManageContact.AddContact]: AddContactScreen,
  [Screens.Home.NewTip.SelectOrganization]: NewTipSelectOrganizationScreen,
  [Screens.Home.NewTip.SelectCategory]: SelectCategoryScreen,
  [Screens.Home.NewTip.AddComment]: AddCommentScreen,
  [Screens.Home.Escort.SelectOrganization]: EscortSelectOrganizationScreen,
  [Screens.Home.Escort.EscortRequest]: EscortRequestScreen,
  [Screens.Home.Escort.TimedEscort]: EscortTimedEscortScreen,
  [Screens.Home.Escort.Countdown]: EscortCountdownScreen,
  [Screens.Home.Escort.Record]: EscortRecordScreen
}, {
  initialRouteName: Screens.BottomTab,
  headerMode: 'none',
  cardStyle: {
    backgroundColor: sdkConfigs.colors.backgroundColor
  },
  defaultNavigationOptions: {
    gesturesEnabled: false
  }
});
const AppNavigator = createSwitchNavigator({
  [Screens.Onboarding.Index]: OnboardingNavigator,
  [Screens.Home.Index]: HomeNavigator
}, {
  initialRouteName: Screens.Onboarding.Index
});
const Routes = createAppContainer(AppNavigator);

// const Routes = () => {
//   return (<View style={{ flex: 1, backgroundColor: 'purple' }}></View>)
// }

export { Routes };
//# sourceMappingURL=index.js.map