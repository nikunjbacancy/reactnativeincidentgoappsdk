"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Routes = void 0;
require("react-native-gesture-handler");
var _assets = require("../../../assets");
var _screens = require("../../../containers/screens");
var _types = require("../../../containers/screens/Menu/Tips/MyTipsScreen/types");
var _reactNavigation = require("react-navigation");
var _reactNavigationStack = require("react-navigation-stack");
var _reactNavigationTabs = require("react-navigation-tabs");
var _device = require("../../../utils/device");
var _sdkConfigs = require("../../../sdkConfigs");
var _BottomTabBar = _interopRequireDefault(require("./BottomTabBar"));
var _screens2 = _interopRequireDefault(require("./screens"));
var _TopTabBar = _interopRequireDefault(require("./TopTabBar"));
var _Settings = _interopRequireDefault(require("../../../containers/screens/Home/Settings"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
if (_device.isIos) {
  // //("isIOS==>", isIos)
}
const MyTipsTab = (0, _reactNavigationTabs.createMaterialTopTabNavigator)({
  [_screens2.default.Menu.Tips.MyTips.Active]: {
    screen: _screens.MyTipsScreen,
    params: {
      tipStatus: _types.TipStatus.Active
    },
    navigationOptions: {
      tabBarLabel: 'ACTIVE'
    }
  },
  [_screens2.default.Menu.Tips.MyTips.Closed]: {
    screen: _screens.MyTipsScreen,
    params: {
      tipStatus: _types.TipStatus.Closed
    },
    navigationOptions: {
      tabBarLabel: 'CLOSED'
    }
  }
}, {
  initialRouteName: _screens2.default.Menu.Tips.MyTips.Active,
  tabBarOptions: {
    activeTintColor: _assets.colors.dark,
    inactiveTintColor: _assets.colors.lightGrey,
    indicatorStyle: {
      backgroundColor: _assets.colors.dark
    },
    pressColor: _assets.colors.transparent,
    contentContainerStyle: {
      backgroundColor: _sdkConfigs.sdkConfigs.colors.backgroundColor
    },
    style: {
      marginLeft: 30,
      marginRight: 30,
      backgroundColor: _sdkConfigs.sdkConfigs.colors.backgroundColor
    },
    labelStyle: {
      fontFamily: _assets.fonts.defaultBoldFamily,
      fontSize: 17
    }
  },
  tabBarComponent: _TopTabBar.default
});
const BottomTabNavigator = (0, _reactNavigationTabs.createBottomTabNavigator)({
  [_screens2.default.Home.Escort.EscortType]: _screens.EscortTypeScreen,
  [_screens2.default.Home.NewTip.VideoRecord]: _screens.VideoRecordScreen
}, {
  initialRouteName: _screens2.default.Home.Escort.EscortType,
  tabBarComponent: _BottomTabBar.default,
  lazy: true
});
const OnboardingNavigator = (0, _reactNavigationStack.createStackNavigator)({
  [_screens2.default.Onboarding.Warning]: _screens.WarningScreen,
  [_screens2.default.Onboarding.Welcome]: _screens.WelcomeScreen,
  [_screens2.default.Onboarding.PrivacyPolicy]: _screens.PrivacyPolicyScreen,
  [_screens2.default.Onboarding.SignIn]: _screens.SignInScreen,
  [_screens2.default.Onboarding.SignInCode]: _screens.SignInCodeScreen,
  [_screens2.default.Onboarding.PromoCode]: _screens.PromoCodeScreen,
  [_screens2.default.Onboarding.UpdateName]: _screens.UpdateNameScreen,
  [_screens2.default.Onboarding.AddUserPortrait]: _screens.AddUserPortraitScreen,
  [_screens2.default.Onboarding.SelectOrganization]: _screens.OnboardingSelectOrganizationScreen,
  [_screens2.default.Onboarding.Permission]: _screens.PermissionScreen,
  [_screens2.default.Onboarding.PermissionLocation]: _screens.PermissionLocationScreen,
  [_screens2.default.Onboarding.ActivateGPS]: _screens.ActivateGPSScreen
}, {
  initialRouteName: _screens2.default.Onboarding.Warning,
  headerMode: 'none',
  cardStyle: {
    backgroundColor: _assets.colors.white
  },
  defaultNavigationOptions: {
    gesturesEnabled: false
  }
});
const HomeNavigator = (0, _reactNavigationStack.createStackNavigator)({
  [_screens2.default.BottomTab]: BottomTabNavigator,
  [_screens2.default.Menu.MyTips]: _screens.MyTipsScreen,
  [_screens2.default.Menu.Contacts]: _screens.ContactScreen,
  [_screens2.default.Menu.Beacons]: _Settings.default,
  [_screens2.default.Menu.MyAccount]: _screens.MyAccountScreen,
  [_screens2.default.Menu.Notification]: _screens.NotificationScreen,
  [_screens2.default.Menu.NotificationList]: _screens.NotificationListScreen,
  [_screens2.default.Menu.NotificationDetail]: _screens.NotificationDetailScreen,
  [_screens2.default.Menu.Feedback.AddFeedback]: _screens.FeedbackScreen,
  [_screens2.default.Menu.Feedback.QuickStartGuide]: {
    screen: _screens.WelcomeScreen,
    params: {
      fromFeedback: true
    }
  },
  [_screens2.default.Menu.Tips.MyTips.Index]: MyTipsTab,
  [_screens2.default.Menu.Tips.TipDetail]: _screens.TipDetailScreen,
  [_screens2.default.Menu.ManageContact.ListContacts]: _screens.ContactScreen,
  [_screens2.default.Menu.ManageContact.AddContact]: _screens.AddContactScreen,
  [_screens2.default.Home.NewTip.SelectOrganization]: _screens.NewTipSelectOrganizationScreen,
  [_screens2.default.Home.NewTip.SelectCategory]: _screens.SelectCategoryScreen,
  [_screens2.default.Home.NewTip.AddComment]: _screens.AddCommentScreen,
  [_screens2.default.Home.Escort.SelectOrganization]: _screens.EscortSelectOrganizationScreen,
  [_screens2.default.Home.Escort.EscortRequest]: _screens.EscortRequestScreen,
  [_screens2.default.Home.Escort.TimedEscort]: _screens.EscortTimedEscortScreen,
  [_screens2.default.Home.Escort.Countdown]: _screens.EscortCountdownScreen,
  [_screens2.default.Home.Escort.Record]: _screens.EscortRecordScreen
}, {
  initialRouteName: _screens2.default.BottomTab,
  headerMode: 'none',
  cardStyle: {
    backgroundColor: _sdkConfigs.sdkConfigs.colors.backgroundColor
  },
  defaultNavigationOptions: {
    gesturesEnabled: false
  }
});
const AppNavigator = (0, _reactNavigation.createSwitchNavigator)({
  [_screens2.default.Onboarding.Index]: OnboardingNavigator,
  [_screens2.default.Home.Index]: HomeNavigator
}, {
  initialRouteName: _screens2.default.Onboarding.Index
});
const Routes = exports.Routes = (0, _reactNavigation.createAppContainer)(AppNavigator);

// const Routes = () => {
//   return (<View style={{ flex: 1, backgroundColor: 'purple' }}></View>)
// }
//# sourceMappingURL=index.js.map