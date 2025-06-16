"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _assets = require("../../../assets");
var _colors = _interopRequireDefault(require("../../../assets/colors"));
var _components = require("../../../components");
var _actions = require("../../../containers/app/actions");
var _constants = require("../../../containers/screens/Home/Escort/RequestScreen/constants");
var _actions2 = require("../../../containers/screens/Onboarding/WarningScreen/actions");
var _react = _interopRequireWildcard(require("react"));
var _reactIntl = require("react-intl");
var _reactNative = require("react-native");
var _reactNativePopupMenu = require("react-native-popup-menu");
var _device = require("../../../utils/device");
var _hooks = require("../../../utils/hooks");
var _navigation = _interopRequireDefault(require("../../../utils/navigation"));
var _styled = _interopRequireDefault(require("../../../utils/styled"));
var _actions3 = require("./actions");
var _messages = _interopRequireDefault(require("./messages"));
var _screens = _interopRequireDefault(require("./screens"));
var _selectors = require("./selectors");
var _selectors2 = require("../../../containers/app/selectors");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* eslint-disable react/jsx-props-no-spreading */

// interface TabButtonTextPropTypes {
//   focused?: Boolean;
// }

const BottomTabBar = props => {
  var _userDetails$organiza;
  const {
    formatMessage
  } = (0, _reactIntl.useIntl)();
  const [isKeyboardShow, setIsKeyboardShow] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    if (_device.isAndroid) {
      let subscriptions;
      subscriptions = [_reactNative.Keyboard.addListener('keyboardDidShow', () => setIsKeyboardShow(true)), _reactNative.Keyboard.addListener('keyboardDidHide', () => setIsKeyboardShow(false))];
      return () => {
        subscriptions.forEach(s => {
          var _s$remove;
          return s === null || s === void 0 || (_s$remove = s.remove) === null || _s$remove === void 0 ? void 0 : _s$remove.call(s);
        });
      };
    } else {
      return () => {};
    }
  }, []);
  const screenAction = (0, _hooks.useSelector)((0, _selectors.makeSelectScreenAction)());
  const renderScreenActionButton = () => {
    if (!screenAction) return;
    if ((screenAction === null || screenAction === void 0 ? void 0 : screenAction.type) === _constants.SHOW_CANCEL_ESCORT_MODAL) {
      return /*#__PURE__*/_react.default.createElement(CancelEscortScreenActionButton, {
        onCancel: screenAction.cancel,
        onPress: screenAction.action,
        text: screenAction.actionText,
        loading: screenAction.loading,
        disabled: screenAction.disabled
      });
    }
    return /*#__PURE__*/_react.default.createElement(ContinueScreenActionButton, {
      onCancel: screenAction.cancel,
      onPress: screenAction.action,
      text: screenAction.actionText,
      loading: screenAction.loading,
      disabled: screenAction.disabled
    });
  };

  // const setUpBeaconOption = () => {
  //   if (isAndroid) {
  //     return (
  //       <MenuOption onSelect={() =>
  //         NavigatorService.navigate(Screens.Menu.Beacons)
  //       }>
  //         <MenuOptionInner>
  //           <MenuOptionText>
  //             {formatMessage(messages.beacons)}
  //           </MenuOptionText>
  //           <MenuOptionIcon source={images.icFoward()} />
  //         </MenuOptionInner>
  //       </MenuOption>
  //     )
  //   }
  //   return null;
  // }

  const setLocation = (0, _hooks.useAction)(_actions.UpdateLocationData);
  const startDuressRequest = (0, _hooks.useAction)(_actions2.triggerDuressRequest);
  const showDuressInfo = (0, _hooks.useAction)(_actions3.showDuressInfoAction);
  const hideDuressInfo = (0, _hooks.useAction)(_actions3.hideDuressInfoAction);
  // const shouleShouldDuressInfo = useSelector(makeSelectShowDuressInfo());
  const userDetails = (0, _hooks.useSelector)((0, _selectors2.makeSelectUser)());
  const organizationUserConfig = (userDetails === null || userDetails === void 0 ? void 0 : userDetails.organizationGroups) != undefined ? userDetails === null || userDetails === void 0 || (_userDetails$organiza = userDetails.organizationGroups[0]) === null || _userDetails$organiza === void 0 ? void 0 : _userDetails$organiza.userConfig : {};
  const isShowEscortTab = (organizationUserConfig === null || organizationUserConfig === void 0 ? void 0 : organizationUserConfig.safetyTimer) == false && (organizationUserConfig === null || organizationUserConfig === void 0 ? void 0 : organizationUserConfig.liveSecurityEscort) == false && (organizationUserConfig === null || organizationUserConfig === void 0 ? void 0 : organizationUserConfig.timedChecklist) == false ? false : true;
  const isPanicButtonShow = organizationUserConfig === null || organizationUserConfig === void 0 ? void 0 : organizationUserConfig.panicButton;
  const triggerDuress = (0, _react.useCallback)(() => {
    startDuressRequest(setLocation);
  }, [startDuressRequest, setLocation]);
  const setShowDuressInfo = (0, _react.useCallback)(() => {
    showDuressInfo();
    setTimeout(hideDuressInfo, 3500);
  }, [hideDuressInfo, showDuressInfo]);
  const {
    navigation
  } = props;

  // const navigationHandler = (name: String) => {
  //   navigation.navigate(name);
  // };

  const call911Fun = () => (0, _device.makeCall)('911');
  (0, _hooks.useBackButton)(() => {
    if (!isShowEscortTab && navigation.isFocused()) {
      _reactNative.BackHandler.exitApp();
    }
    return true;
  });

  // const CustomTabBarItem = (route: Object, index: Number) => {
  //   return (
  //     <TabContainer onPress={() => navigationHandler(route.routeName)}>
  //       <BottomTabBarIcon
  //         focused={navigation.state.index === index}
  //         source={
  //           route.routeName === 'HomeNewTipVideoRecord'
  //             ? images.icNewTip()
  //             : images.icEscort()
  //         }
  //       />
  //       <TabButtonText focused={navigation.state.index === index}>
  //         {route.routeName === 'HomeNewTipVideoRecord' ? 'New Tip' : 'Escort'}
  //       </TabButtonText>
  //     </TabContainer>
  //   );
  // };

  //bottom button
  const bottomBar = () => {
    // //("==================isPanicButtonShow==================>", isPanicButtonShow)
    if (isPanicButtonShow) {
      return /*#__PURE__*/_react.default.createElement(Container, null, /*#__PURE__*/_react.default.createElement(DuressButtonContainer, null, /*#__PURE__*/_react.default.createElement(DuressButton, {
        text: "",
        onFill: triggerDuress,
        onPress: setShowDuressInfo,
        isPanicMode: false,
        withIcon: true
      })), !isKeyboardShow && /*#__PURE__*/_react.default.createElement(MenuContainer, null, /*#__PURE__*/_react.default.createElement(_reactNativePopupMenu.MenuTrigger, {
        customStyles: triggerStyles
      }, /*#__PURE__*/_react.default.createElement(HamburgerMenu, {
        source: _assets.images.icMenu()
      })), /*#__PURE__*/_react.default.createElement(_reactNativePopupMenu.MenuOptions, {
        customStyles: optionsStyles
      }, /*#__PURE__*/_react.default.createElement(_reactNativePopupMenu.MenuOption, {
        onSelect: () => _navigation.default.navigate(_screens.default.Menu.MyAccount)
      }, /*#__PURE__*/_react.default.createElement(MenuOptionInner, null, /*#__PURE__*/_react.default.createElement(MenuOptionText, null, formatMessage(_messages.default.myAccount)), /*#__PURE__*/_react.default.createElement(MenuOptionIcon, {
        source: _assets.images.icFoward()
      }))), /*#__PURE__*/_react.default.createElement(_reactNativePopupMenu.MenuOption, {
        onSelect: () => _navigation.default.navigate(_screens.default.Menu.Notification)
      }, /*#__PURE__*/_react.default.createElement(MenuOptionInner, null, /*#__PURE__*/_react.default.createElement(MenuOptionText, null, formatMessage(_messages.default.notifications)), /*#__PURE__*/_react.default.createElement(MenuOptionIcon, {
        source: _assets.images.icFoward()
      }))), /*#__PURE__*/_react.default.createElement(_reactNativePopupMenu.MenuOption, {
        onSelect: () => _navigation.default.navigate(_screens.default.Menu.Feedback.AddFeedback)
      }, /*#__PURE__*/_react.default.createElement(MenuOptionInner, null, /*#__PURE__*/_react.default.createElement(MenuOptionText, null, formatMessage(_messages.default.feedbacks)), /*#__PURE__*/_react.default.createElement(MenuOptionIcon, {
        source: _assets.images.icFoward()
      }))), /*#__PURE__*/_react.default.createElement(_reactNativePopupMenu.MenuOption, {
        onSelect: () => _navigation.default.navigate(_screens.default.Menu.Tips.MyTips.Index)
      }, /*#__PURE__*/_react.default.createElement(MenuOptionInner, null, /*#__PURE__*/_react.default.createElement(MenuOptionText, null, formatMessage(_messages.default.mytips)), /*#__PURE__*/_react.default.createElement(MenuOptionIcon, {
        source: _assets.images.icFoward()
      }))), /*#__PURE__*/_react.default.createElement(_reactNativePopupMenu.MenuOption, {
        onSelect: () => _navigation.default.navigate(_screens.default.Menu.ManageContact.ListContacts)
      }, /*#__PURE__*/_react.default.createElement(MenuOptionInner, null, /*#__PURE__*/_react.default.createElement(MenuOptionText, null, formatMessage(_messages.default.contacts)), /*#__PURE__*/_react.default.createElement(MenuOptionIcon, {
        source: _assets.images.icFoward()
      }))))));
    } else {
      return /*#__PURE__*/_react.default.createElement(Container, null, /*#__PURE__*/_react.default.createElement(DuressButtonContainer, null, /*#__PURE__*/_react.default.createElement(CallEmergency, {
        text: "Call 911",
        onPress: () => call911Fun()
      })));
    }
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !screenAction ?
  // {isPanicButtonShow ? () : ()}
  bottomBar() : renderScreenActionButton());
};
const triggerStyles = {
  triggerWrapper: {
    alignItems: 'center',
    paddingTop: 8,
    backgroundColor: _colors.default.nearWhite
  },
  TriggerTouchableComponent: _reactNative.TouchableOpacity
};
// const TabViewContainer = styled.View`
//   flex-direction: row;
//   width: 100%;
// `;

// const TabContainer = styled.TouchableOpacity`
//   margin-top: 5px;
//   flex: 1;
//   height: 60px;
//   padding-right: 3px;
//   align-items: center;
//   justify-content: center;
//   background-color: ${colors.nearWhite};
// `;

// const TabButtonText = styled.Text<TabButtonTextPropTypes>`
//   font-family: ${({ theme }) => theme.fonts.defaultBoldFamily};
//   font-size: 15px;
//   line-height: 28px;
//   color: ${({ focused }) => (focused ? colors.blue : colors.black)};
//   text-align: center;
// `;

const optionsStyles = {
  optionsContainer: {
    backgroundColor: _colors.default.nearWhite,
    width: 'auto',
    flexDirection: 'row-reverse',
    borderTopLeftRadius: 15
  },
  optionWrapper: {
    width: 270,
    padding: 0,
    margin: 0
  },
  optionTouchable: {
    activeOpacity: 70
  },
  OptionTouchableComponent: _reactNative.TouchableHighlight
};
const Container = _styled.default.View`
  display: flex;
  flex-direction: row;
`;

// const BottomBarContainer = styled.View`
//   width: 50%;
// `;

// const PressDuressInfo = styled(PanicInfo)`
//   bottom: 40%;
// `;

const DuressButtonContainer = _styled.default.View`
  width: 100%;
  border-top-color: ${({
  theme
}) => theme.colors.lightGrey};
  border-top-width: 0.25px;
  justify-content: center;
  background-color: ${({
  theme
}) => theme.sdkBackgroundColor};
`;
const DuressButton = (0, _styled.default)(_components.PanicButton).attrs({
  textStyle: {
    fontSize: 18,
    alignSelf: 'center'
  }
})`
  margin: 5% auto;
  width: 90%;
  height: 60px;
  flex-direction: row;
  
`;
const CallEmergency = (0, _styled.default)(_components.Call911Button).attrs({
  textStyle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center'
    // marginBottom: '8.5%'
  }
})`
  margin: 5% auto;
  width: 90%;
  height: 60px;
  flex-direction: row;
`;

// const StyledBottomTabBar = styled(NavBottomTabBar).attrs(({ theme }) => ({
//   activeTintColor: theme.colors.highlight,
//   inactiveTintColor: theme.colors.dark,
//   labelStyle: {
//     fontFamily: theme.fonts.defaultFamily,
//   },
//   tabStyle: {
//     topPadding: 12,
//   },
// }))`
//   background-color: ${({ theme }) => theme.colors.white};
//   border-top-color: ${({ theme }) => theme.colors.lightGrey};
//   height: 60px;
// `;

const MenuContainer = (0, _styled.default)(_reactNativePopupMenu.Menu)`
  width: 25%;
  display: flex;
  align-items: stretch;
  background-color: ${({
  theme
}) => theme.colors.nearWhite};
  border-left-color: ${({
  theme
}) => theme.colors.lightGrey};
`;
const HamburgerMenu = _styled.default.Image`
  width: 40px;
  height: 40px;
`;
const MenuOptionInner = _styled.default.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 15px 20px;
  border-bottom-width: 1px;
  border-color: ${({
  theme
}) => theme.colors.white};
`;
const MenuOptionText = _styled.default.Text`
  font-size: 16px;
  color: ${({
  theme
}) => theme.colors.dark};
`;
const MenuOptionIcon = _styled.default.Image`
  margin-left: auto;
`;
const ContinueScreenActionButton = (0, _styled.default)(_components.ScreenActionTabButton).attrs(({
  theme
}) => ({
  continueButtonTextStyle: {
    color: theme.colors.dark,
    textTransform: 'uppercase'
  }
}))``;
const CancelEscortScreenActionButton = (0, _styled.default)(_components.ScreenActionTabButton).attrs(({
  theme
}) => ({
  continueButtonStyle: {
    backgroundColor: theme.colors.highlight2,
    borderRadius: 6
  },
  continueButtonTextStyle: {
    color: theme.colors.white
  }
}))`
  margin: 20px 30px 35px;
`;
var _default = exports.default = BottomTabBar;
//# sourceMappingURL=BottomTabBar.js.map