"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _assets = require("../../../../assets");
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _components = require("../../../../components");
var _reactIntl = require("react-intl");
var _screens = _interopRequireDefault(require("../../../../containers/providers/RoutesProvider/screens"));
var _actions = require("../../../../utils/location/actions");
var _selectors = require("../../../../containers/app/selectors");
var _requestLocationPermission = _interopRequireDefault(require("../../../../utils/permission/requestLocationPermission"));
var _styles = require("./styles");
var _messages = _interopRequireDefault(require("./messages"));
var _reactNativePermissions = require("react-native-permissions");
var _action = require("./action");
var _hooks = require("../../../../utils/hooks");
var _navigation = _interopRequireDefault(require("../../../../utils/navigation"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const PermissionLocationScreen = () => {
  const {
    formatMessage
  } = (0, _reactIntl.useIntl)();
  const userData = (0, _hooks.useSelector)((0, _selectors.makeSelectUser)());
  const locationAlwaysPermissionsAction = (0, _hooks.useAction)(_action.locationAlwaysPermissionsRequest);
  const getAllGeofenceRequestAction = (0, _hooks.useAction)(_actions.getAllGeofenceRequest);
  const handleAlreadyEnabled = () => {
    console.log("handleAlreadyEnabled");
    if (_reactNative.Platform.OS === "ios") {
      _reactNative.NativeModules.Location.checkLocationAlwaysPermission("Test", "Location", response => {
        console.log("response:" + response);
        if (response === 'RNPermissionStatusAuthorized') {
          locationAlwaysPermissionsAction(formatMessage(_messages.default.enabled));
          // NavigatorService.navigate(Screens.Home.Index);
        } else {
          (0, _reactNativePermissions.openSettings)();
        }
      });
    } else {
      _navigation.default.navigate(_screens.default.Home.Index);
      getAllGeofences();
    }
  };

  // handle allow
  const handleAllow = () => {
    (0, _requestLocationPermission.default)().then(() => {
      _navigation.default.navigate(_screens.default.Home.Index);
      locationAlwaysPermissionsAction(formatMessage(_messages.default.enabled));
      getAllGeofences();
    }).catch(error => {
      console.log("request error==>", error);
    });
  };
  const getAllGeofences = () => {
    //getAllGeofenceRequest
    if (userData.id) {
      getAllGeofenceRequestAction(userData.id);
    } else {
      // Handle the case when userData.id is not available
    }
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.StatusBar, {
    barStyle: "dark-content",
    backgroundColor: "white"
  }), /*#__PURE__*/_react.default.createElement(_styles.Background, null), /*#__PURE__*/_react.default.createElement(_components.SafeAreaContainer, null, /*#__PURE__*/_react.default.createElement(_reactNative.ScrollView, null, /*#__PURE__*/_react.default.createElement(_styles.LogoRow, null, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: _assets.images.logoWithText()
  })), /*#__PURE__*/_react.default.createElement(_styles.TitleRow, null, /*#__PURE__*/_react.default.createElement(_styles.TitleText, null, formatMessage(_messages.default.title))), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.ItemRow, null, /*#__PURE__*/_react.default.createElement(_styles.ItemIcon, {
    source: _assets.images.icLocation()
  }), /*#__PURE__*/_react.default.createElement(_styles.ItemText, null, _reactNative.Platform.OS == 'android' ? formatMessage(_messages.default.location).replace("ALWAYS", formatMessage(_messages.default.allowAllTime)) : formatMessage(_messages.default.location))), /*#__PURE__*/_react.default.createElement(_components.PaddingView, {
    size: 1
  })), _reactNative.Platform.OS == 'android' ? /*#__PURE__*/_react.default.createElement(_styles.ButtonRow, null, /*#__PURE__*/_react.default.createElement(_styles.AllowButton, {
    onPress: handleAllow,
    text: formatMessage(_messages.default.allow)
  }), /*#__PURE__*/_react.default.createElement(_styles.AlreadyAllowed, {
    onPress: handleAlreadyEnabled,
    text: formatMessage(_messages.default.enabled)
  })) : /*#__PURE__*/_react.default.createElement(_styles.ButtonRow, null, /*#__PURE__*/_react.default.createElement(_styles.AlreadyAllowed, {
    onPress: handleAlreadyEnabled,
    text: formatMessage(_messages.default.enabled)
  }), /*#__PURE__*/_react.default.createElement(_styles.SettingButton, {
    onPress: _reactNativePermissions.openSettings,
    text: formatMessage(_messages.default.settings)
  })))));
};
var _default = exports.default = PermissionLocationScreen;
//# sourceMappingURL=index.js.map