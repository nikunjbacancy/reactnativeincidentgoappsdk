"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _components = require("../../../../../components");
var _assets = require("../../../../../assets");
var _colors = _interopRequireDefault(require("../../../../../assets/colors"));
var _reactNativePopupMenu = require("react-native-popup-menu");
var _screens = _interopRequireDefault(require("../../../../../containers/providers/RoutesProvider/screens"));
var _react = _interopRequireWildcard(require("react"));
var _reactIntl = require("react-intl");
var _reactNative = require("react-native");
var _reactNativePermissions = require("react-native-permissions");
var _reactNavigation = require("react-navigation");
var _device = require("../../../../../utils/device");
var _hooks = require("../../../../../utils/hooks");
var _navigation = _interopRequireDefault(require("../../../../../utils/navigation"));
var _permission = require("../../../../../utils/permission");
var _AntDesign = _interopRequireDefault(require("react-native-vector-icons/AntDesign"));
var _MaterialCommunityIcons = _interopRequireDefault(require("react-native-vector-icons/MaterialCommunityIcons"));
var _Octicons = _interopRequireDefault(require("react-native-vector-icons/Octicons"));
var _MaterialIcons = _interopRequireDefault(require("react-native-vector-icons/MaterialIcons"));
var _api = require("../../../../../api");
var _CancelEscortModal = _interopRequireDefault(require("../RequestScreen/CancelEscortModal"));
var _selectors = require("../RequestScreen/selectors");
var _actions = require("./actions");
var _selectors2 = require("./selectors");
var _messages = _interopRequireDefault(require("./messages"));
var _styles = require("./styles");
var _types = require("./types");
var _selectors3 = require("../../../../../containers/app/selectors");
var _sdkConfigs = require("../../../../../sdkConfigs");
var _actions2 = require("../../../Menu/NotificationListScreen/actions");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var PermissionStatus = /*#__PURE__*/function (PermissionStatus) {
  PermissionStatus[PermissionStatus["Checking"] = 0] = "Checking";
  PermissionStatus[PermissionStatus["Granted"] = 1] = "Granted";
  PermissionStatus[PermissionStatus["Blocked"] = 2] = "Blocked";
  return PermissionStatus;
}(PermissionStatus || {});
const EscortTypeScreen = ({
  isFocused
}) => {
  const {
    formatMessage
  } = (0, _reactIntl.useIntl)();
  const userDetails = (0, _hooks.useSelector)((0, _selectors3.makeSelectUser)());
  const organizationUserConfig = userDetails.organizationGroups[0].userConfig;
  const [permissionStatus, setPermissionStatus] = (0, _react.useState)(PermissionStatus.Checking);
  const shouldShowSiteKeyModal = (0, _hooks.useSelector)((0, _selectors2.makeSelectShouldShowSiteKeyModal)());
  const getNotificationAction = (0, _hooks.useAction)(_actions2.notificationListRequest);
  const unreadNotyCount = (0, _hooks.useSelector)(state => {
    return state.notificationListState.unreadCount;
  });
  const showSiteKeyModalAction = (0, _hooks.useAction)(_actions.showSiteKeyModal);
  const hideSiteKeyModalAction = (0, _hooks.useAction)(_actions.hideSiteKeyModal);
  const gotoLiveEscortAction = () => {
    _navigation.default.navigate(_screens.default.Home.Escort.SelectOrganization);
  };
  const gotoTimedEscortAction = () => {
    _navigation.default.navigate(_screens.default.Home.Escort.TimedEscort);
  };
  const gotoSafetyEscortAction = () => {
    _navigation.default.navigate(_screens.default.Home.Escort.TimedEscort, {
      safetyTimer: true
    });
  };
  const gotoNewTipAction = () => {
    _navigation.default.navigate(_screens.default.Home.NewTip.VideoRecord);
  };
  const gotoNotifications = () => {
    _navigation.default.navigate(_screens.default.Menu.NotificationList);
  };

  // necessary to have modal be available from any screen for canceling
  const shouldShowCancelEscortModal = (0, _hooks.useSelector)((0, _selectors.makeSelectShouldShowCancelEscortModal)());
  const toggleEscortTypeAction = (0, _hooks.useAction)(_actions.toggleEscortType);
  const tryRequestCameraPermissions = () => {
    (0, _permission.requestCameraPermissions)().then(() => {
      setPermissionStatus(PermissionStatus.Granted);
    }).catch(() => {
      setPermissionStatus(PermissionStatus.Blocked);
    });
  };
  (0, _react.useEffect)(() => {
    getNotifications();
    _api.event.on(_api.AppEvent.OnRefreshNotificationList, getNotifications);
  }, []);
  const getNotifications = () => {
    getNotificationAction(userDetails.id);
  };
  (0, _react.useEffect)(() => {
    if (isFocused) {
      tryRequestCameraPermissions();
    }
  }, [isFocused]);
  const handlePress = escortType => {
    toggleEscortTypeAction(escortType);
    switch (escortType) {
      case _types.EscortType.Timed:
        gotoTimedEscortAction();
        break;
      case _types.EscortType.Live:
        gotoLiveEscortAction();
        break;
      case _types.EscortType.Safety:
        gotoSafetyEscortAction();
        break;
      case _types.EscortType.NewTip:
        gotoNewTipAction();
        break;
      case _types.EscortType.Notification:
        gotoNotifications();
        break;
      case _types.EscortType.SiteKey:
        showSiteKeyModalAction();
        break;
      default:
        break;
    }
  };
  const isServiceEnabled = () => {
    if (organizationUserConfig.safetyTimer === true || organizationUserConfig.liveSecurityEscort === true || organizationUserConfig.timedChecklist === true || organizationUserConfig.securityTips == true) {
      return /*#__PURE__*/_react.default.createElement(_styles.Container, {
        showsVerticalScrollIndicator: false
      }, /*#__PURE__*/_react.default.createElement(_styles.InfoText, null, formatMessage(_messages.default.yourServices)), showSiteKey(), showSafetyTimer(), showLiveSecurityEscort(), TimeCheckList(), showSecurityTips(), showNotifications());
    } else {
      return /*#__PURE__*/_react.default.createElement(_styles.Container, {
        showsVerticalScrollIndicator: false
      }, /*#__PURE__*/_react.default.createElement(_styles.InfoText, null, formatMessage(_messages.default.yourServices)), showSiteKey(), showNotifications());
    }
  };
  const showSafetyTimer = () => {
    if (organizationUserConfig.safetyTimer == true) {
      return /*#__PURE__*/_react.default.createElement(_styles.ButtonRow, {
        onPress: () => handlePress(_types.EscortType.Safety)
      }, /*#__PURE__*/_react.default.createElement(_AntDesign.default, {
        name: "Safety",
        size: 30,
        color: "#000000"
      }), /*#__PURE__*/_react.default.createElement(_styles.Title, null, formatMessage(_messages.default.safetyEscortButton), " "));
    }
  };
  const showLiveSecurityEscort = () => {
    if (organizationUserConfig.liveSecurityEscort == true) {
      return /*#__PURE__*/_react.default.createElement(_styles.ButtonRow, {
        onPress: () => handlePress(_types.EscortType.Live)
      }, /*#__PURE__*/_react.default.createElement(_MaterialCommunityIcons.default, {
        name: "shield-lock-outline",
        size: 30,
        color: "#000000"
      }), /*#__PURE__*/_react.default.createElement(_styles.Title, null, formatMessage(_messages.default.liveEscortButton)));
    } else {
      return null;
    }
  };
  const TimeCheckList = () => {
    if (organizationUserConfig.timedChecklist == true) {
      return /*#__PURE__*/_react.default.createElement(_styles.ButtonRow, {
        onPress: () => handlePress(_types.EscortType.Timed)
      }, /*#__PURE__*/_react.default.createElement(_Octicons.default, {
        name: "checklist",
        size: 30,
        color: "#000000"
      }), /*#__PURE__*/_react.default.createElement(_styles.Title, null, formatMessage(_messages.default.timedEscortButton)));
    } else {
      return null;
    }
  };
  const showSecurityTips = () => {
    if (organizationUserConfig.securityTips == true) {
      return /*#__PURE__*/_react.default.createElement(_styles.ButtonRow, {
        onPress: () => handlePress(_types.EscortType.NewTip)
      }, /*#__PURE__*/_react.default.createElement(_MaterialIcons.default, {
        name: "privacy-tip",
        size: 30,
        color: "#000000"
      }), /*#__PURE__*/_react.default.createElement(_styles.Title, null, formatMessage(_messages.default.newTip)));
    } else {
      return null;
    }
  };
  const showNotifications = () => {
    return /*#__PURE__*/_react.default.createElement(_styles.ButtonRow, {
      onPress: () => handlePress(_types.EscortType.Notification)
    }, /*#__PURE__*/_react.default.createElement(_MaterialIcons.default, {
      name: "notifications-active",
      size: 30,
      color: "#000000"
    }), /*#__PURE__*/_react.default.createElement(_styles.Title, null, formatMessage(_messages.default.notifications), " ", unreadNotyCount > 0 && /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'red'
      }
    })));
  };
  const showSiteKey = () => {
    return /*#__PURE__*/_react.default.createElement(_styles.ButtonRow, {
      onPress: () => showSiteKeyModalAction()
    }, /*#__PURE__*/_react.default.createElement(_MaterialCommunityIcons.default, {
      name: "cellphone-key",
      size: 30,
      color: "#000000"
    }), /*#__PURE__*/_react.default.createElement(_styles.Title, null, formatMessage(_messages.default.siteKey)));
  };
  const setUpBeaconOption = () => {
    // if (isAndroid) {
    //   return (
    //     <MenuOption onSelect={() =>
    //       NavigatorService.navigate(Screens.Menu.Beacons)
    //     }>
    //       <MenuOptionInner>
    //         <MenuOptionText>
    //           {formatMessage(messages.beacons)}
    //         </MenuOptionText>
    //         <MenuOptionIcon source={images.icFoward()} />
    //       </MenuOptionInner>
    //     </MenuOption>
    //   )
    // }
  };
  const render = () => {
    if (permissionStatus === PermissionStatus.Checking) {
      return /*#__PURE__*/_react.default.createElement(_components.LoadingIndicator, {
        message: formatMessage(_messages.default.checkingPermissions)
      });
    }
    if (permissionStatus === PermissionStatus.Blocked) {
      return /*#__PURE__*/_react.default.createElement(_styles.BlockedPermissionContainer, null, /*#__PURE__*/_react.default.createElement(_styles.BlockedPermissionMessage, null, formatMessage(_messages.default.permissionsBlockedMessage)), /*#__PURE__*/_react.default.createElement(_components.GradientButton, {
        text: _device.isAndroid ? formatMessage(_messages.default.tryAgain) : formatMessage(_messages.default.openSettings),
        onPress: _device.isAndroid ? tryRequestCameraPermissions : _reactNativePermissions.openSettings
      }));
    }
    if (permissionStatus === PermissionStatus.Granted) {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.StatusBar, {
        barStyle: "dark-content",
        backgroundColor: "white"
      }), /*#__PURE__*/_react.default.createElement(_components.SafeAreaContainer, null, /*#__PURE__*/_react.default.createElement(_components.Header, {
        title: _sdkConfigs.sdkConfigs.sdkName === '' ? formatMessage(_messages.default.incidentCo) : _sdkConfigs.sdkConfigs.sdkName
      }), /*#__PURE__*/_react.default.createElement(_components.HorizontalRule, null), /*#__PURE__*/_react.default.createElement(_styles.UserView, null, /*#__PURE__*/_react.default.createElement(_styles.UserName, null, "Hi ", userDetails.firstName, " ", userDetails.lastName, ","), /*#__PURE__*/_react.default.createElement(_styles.MenuContainer, null, /*#__PURE__*/_react.default.createElement(_reactNativePopupMenu.MenuTrigger, null, /*#__PURE__*/_react.default.createElement(_styles.HamburgerMenu, {
        source: _assets.images.icMenu()
      })), /*#__PURE__*/_react.default.createElement(_reactNativePopupMenu.MenuOptions, {
        customStyles: optionsStyles
      }, setUpBeaconOption(), /*#__PURE__*/_react.default.createElement(_reactNativePopupMenu.MenuOption, {
        onSelect: () => _navigation.default.navigate(_screens.default.Menu.MyAccount)
      }, /*#__PURE__*/_react.default.createElement(_styles.MenuOptionInner, null, /*#__PURE__*/_react.default.createElement(_styles.MenuOptionText, null, formatMessage(_messages.default.myAccount)), /*#__PURE__*/_react.default.createElement(_styles.MenuOptionIcon, {
        source: _assets.images.icFoward()
      }))), /*#__PURE__*/_react.default.createElement(_reactNativePopupMenu.MenuOption, {
        onSelect: () => _navigation.default.navigate(_screens.default.Menu.Notification)
      }, /*#__PURE__*/_react.default.createElement(_styles.MenuOptionInner, null, /*#__PURE__*/_react.default.createElement(_styles.MenuOptionText, null, formatMessage(_messages.default.settings)), /*#__PURE__*/_react.default.createElement(_styles.MenuOptionIcon, {
        source: _assets.images.icFoward()
      }))), /*#__PURE__*/_react.default.createElement(_reactNativePopupMenu.MenuOption, {
        onSelect: () => _navigation.default.navigate(_screens.default.Menu.Feedback.AddFeedback)
      }, /*#__PURE__*/_react.default.createElement(_styles.MenuOptionInner, null, /*#__PURE__*/_react.default.createElement(_styles.MenuOptionText, null, formatMessage(_messages.default.feedbacks)), /*#__PURE__*/_react.default.createElement(_styles.MenuOptionIcon, {
        source: _assets.images.icFoward()
      }))), /*#__PURE__*/_react.default.createElement(_reactNativePopupMenu.MenuOption, {
        onSelect: () => _navigation.default.navigate(_screens.default.Menu.Tips.MyTips.Index)
      }, /*#__PURE__*/_react.default.createElement(_styles.MenuOptionInner, null, /*#__PURE__*/_react.default.createElement(_styles.MenuOptionText, null, formatMessage(_messages.default.mytips)), /*#__PURE__*/_react.default.createElement(_styles.MenuOptionIcon, {
        source: _assets.images.icFoward()
      }))), /*#__PURE__*/_react.default.createElement(_reactNativePopupMenu.MenuOption, {
        onSelect: () => _navigation.default.navigate(_screens.default.Menu.ManageContact.ListContacts)
      }, /*#__PURE__*/_react.default.createElement(_styles.MenuOptionInner, null, /*#__PURE__*/_react.default.createElement(_styles.MenuOptionText, null, formatMessage(_messages.default.contacts)), /*#__PURE__*/_react.default.createElement(_styles.MenuOptionIcon, {
        source: _assets.images.icFoward()
      })))))), isServiceEnabled(), /*#__PURE__*/_react.default.createElement(_CancelEscortModal.default, {
        isVisible: shouldShowCancelEscortModal
      }), console.log("shouldShowSiteKeyModal===>", shouldShowSiteKeyModal), /*#__PURE__*/_react.default.createElement(_components.SiteKeyModal, {
        isVisible: shouldShowSiteKeyModal,
        userData: userDetails,
        hideModal: hideSiteKeyModalAction,
        isFromNotification: false,
        notification_id: 0
      })));
    }
  };
  return isFocused ? render() : null;
};
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
var _default = exports.default = (0, _reactNavigation.withNavigationFocus)(EscortTypeScreen);
//# sourceMappingURL=index.js.map