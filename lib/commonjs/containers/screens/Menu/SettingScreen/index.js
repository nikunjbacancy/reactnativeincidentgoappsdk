"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _assets = require("../../../../assets");
var _components = require("../../../../components");
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactIntl = require("react-intl");
var _hooks = require("../../../../utils/hooks");
var _navigation = _interopRequireDefault(require("../../../../utils/navigation"));
var _asyncStorage = _interopRequireDefault(require("@react-native-async-storage/async-storage"));
var _screens = _interopRequireDefault(require("../../../providers/RoutesProvider/screens"));
var _actions = require("./actions");
var _messages = _interopRequireDefault(require("./messages"));
var _styles = require("./styles");
var _reactNativePermissions = require("react-native-permissions");
var _styled = _interopRequireDefault(require("../../../../utils/styled"));
var _selectors = require("../../../app/selectors");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// import NavigatorService from 'utils/navigation';

// import { getDeviceName, getModel, getBrand, getDeviceId } from 'react-native-device-info'

const SettingScreen = () => {
  const {
    phone
  } = (0, _hooks.useSelector)((0, _selectors.makeSelectUser)());
  const {
    formatMessage
  } = (0, _reactIntl.useIntl)();
  const [notificationSetting, setNotificationSetting] = (0, _react.useState)(true);
  const accountDeleteRequestAction = (0, _hooks.useAction)(_actions.deleteUserRequest);
  const notificationEnabled = notificationSetting == null ? true : notificationSetting;
  (0, _react.useEffect)(() => {
    (0, _reactNativePermissions.checkNotifications)().then(({
      status,
      settings
    }) => {
      if (status === "blocked") {
        setNotificationSetting(false);
      } else {
        setNotificationSetting(true);
      }
    });
  });

  // useEffect(() => {
  //   // console.log("result===>", result)

  //   if (result !== null) {
  //     Toast.show(result.message, {
  //       position: Toast.positions.CENTER,
  //       duration: 3000
  //     });
  //     resetDeleteAccountUserAction()
  //     AsyncStorage.setItem("isLogout", "true");
  //     NavigatorService.navigate(Screens.Onboarding.Index);
  //   }

  // }, [result])

  const onNotificationValueChange = () => {
    console.log("notificationSetting:" + notificationSetting);
    switch (notificationSetting) {
      case true:
        break;
      case false:
        _reactNative.Alert.alert('Permission Required', 'This app needs notification permission to receive notifications', [{
          text: 'Open settings',
          onPress: _reactNativePermissions.openSettings
        }, {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        }]);
        break;
    }
  };
  const setWarning = () => {
    // console.log("=formatMessage(messages.warning)=>",formatMessage(messages.warning))
    switch (notificationSetting) {
      case true:
        return null;
      case false:
        return /*#__PURE__*/_react.default.createElement(Text, null, formatMessage(_messages.default.warning));
      default:
        return null;
    }
  };
  const showDeleteAccountAlert = () => {
    _reactNative.Alert.alert(formatMessage(_messages.default.deleteAccount), formatMessage(_messages.default.deleteAccountMsg), [{
      text: formatMessage(_messages.default.no),
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel'
    }, {
      text: formatMessage(_messages.default.yes),
      onPress: () => handleLogout()
    }]);
  };
  const handleLogout = () => {
    accountDeleteRequestAction(phone);
    // resetDeleteAccountUserAction()
    // console.log("Result Is===>", result)
    // AsyncStorage.setItem("isLogout", "true");
    // NavigatorService.navigate(Screens.Onboarding.Index);
  };
  const showLogoutAlert = () => {
    _reactNative.Alert.alert(formatMessage(_messages.default.logout), formatMessage(_messages.default.logoutMessage), [{
      text: formatMessage(_messages.default.no),
      onPress: () => console.log('Cancel Pressed'),
      style: 'cancel'
    }, {
      text: formatMessage(_messages.default.yes),
      onPress: () => {
        _asyncStorage.default.setItem("isLogout", "true");
        _navigation.default.navigate(_screens.default.Onboarding.Index);
      }
    }]);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.StatusBar, {
    barStyle: "dark-content",
    backgroundColor: "white"
  }), /*#__PURE__*/_react.default.createElement(_components.SafeAreaContainer, null, /*#__PURE__*/_react.default.createElement(_components.Header, {
    title: formatMessage(_messages.default.title)
  }), /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.SwitchContainer, null, /*#__PURE__*/_react.default.createElement(_styles.SwitchText, null, formatMessage(_messages.default.description)), /*#__PURE__*/_react.default.createElement(_styles.SwitchButton, {
    value: notificationEnabled,
    onValueChange: onNotificationValueChange,
    trackColor: {
      false: _assets.colors.lightGrey,
      true: _assets.colors.highlight
    },
    thumbColor: _assets.colors.nearWhite
  })), setWarning(), /*#__PURE__*/_react.default.createElement(_styles.LogoutButtonRow, null, /*#__PURE__*/_react.default.createElement(_styles.LogoutButton, {
    onPress: showLogoutAlert
  }, /*#__PURE__*/_react.default.createElement(_styles.LogoutButtonText, null, formatMessage(_messages.default.logout))))), /*#__PURE__*/_react.default.createElement(_styles.BackButtonRow, null, /*#__PURE__*/_react.default.createElement(_components.ScreenActionButton, {
    onCancel: _navigation.default.back,
    tintColor: _assets.colors.white
  }))));
};
const Text = _styled.default.Text`
  color: ${({
  theme
}) => theme.colors.black};
  font-family: ${({
  theme
}) => theme.fonts.defaultBoldFamily};
  font-size: ${({
  theme
}) => theme.fonts.normalSize};
  text-align: center;
  padding: 20px 20px 0;
`;
var _default = exports.default = SettingScreen;
//# sourceMappingURL=index.js.map