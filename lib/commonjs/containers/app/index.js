"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IncidentGoPackage = void 0;
var _asyncStorage = _interopRequireDefault(require("@react-native-async-storage/async-storage"));
var _components = require("../../components");
var _providers = require("../../containers/providers");
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _reactNativePopupMenu = require("react-native-popup-menu");
var _hooks = require("../../utils/hooks");
var _navigation = _interopRequireDefault(require("../../utils/navigation"));
var _token = require("../../utils/token");
var _constants = require("../providers/NotificationProvider/constants");
var _selectors = require("../providers/NotificationProvider/selectors");
var _screens = _interopRequireDefault(require("../providers/RoutesProvider/screens"));
var _actions = require("./actions");
var _common = require("../../utils/common");
var _selectors2 = require("./selectors");
var _actions2 = require("../../containers/app/actions");
var _actions3 = require("../../containers/screens/Onboarding/WarningScreen/actions");
var _actions4 = require("../../containers/screens/Menu/NotificationListScreen/actions");
var _api = require("../../api");
var _reactNativeToastMessage = _interopRequireDefault(require("react-native-toast-message"));
var _reactNativeRootSiblings = require("react-native-root-siblings");
var _lodash = require("lodash");
var _reactNativePushNotification = _interopRequireDefault(require("react-native-push-notification"));
var _PanicActionModal = _interopRequireDefault(require("../../components/PanicActionModal"));
var _backgroundGeolocation = require("../../utils/location/backgroundGeolocation");
var _actions5 = require("../../utils/location/actions");
var _reactNativeBackgroundGeolocation = _interopRequireDefault(require("react-native-background-geolocation"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
if (__DEV__) Promise.resolve().then(() => _interopRequireWildcard(require('../../core/reactotron')));
// LogBox.ignoreLogs(["EventEmitter.removeListener"]);

const NPMModule = () => {
  const isLoading = (0, _hooks.useSelector)((0, _selectors2.makeSelectIsLoading)());
  const iOSForegroundNotification = (0, _hooks.useSelector)((0, _selectors.makeSelectIOSForegroundNotification)());
  const [showPanicActionPopup, setPanicActionPopup] = (0, _react.useState)(false);
  const userData = (0, _hooks.useSelector)((0, _selectors2.makeSelectUser)());
  const geoCredStatusUpdate = (0, _hooks.useAction)(_actions5.geoCredStatusRequest);
  const getAllGeofenceRequestAction = (0, _hooks.useAction)(_actions5.getAllGeofenceRequest);
  const getConfigsRequestAction = (0, _hooks.useAction)(_actions.getConfigsRequest);
  const getProfileRequestAction = (0, _hooks.useAction)(_actions.getProfileRequest);
  const updateProfileRequestAction = (0, _hooks.useAction)(_actions.updateProfileRequest);
  const getTwilioAccessTokenAction = (0, _hooks.useAction)(_actions.getTwilioAccessTokenRequest);
  const setLocation = (0, _hooks.useAction)(_actions2.UpdateLocationData);
  const startDuressRequest = (0, _hooks.useAction)(_actions3.triggerDuressRequest);
  var isLogoutNotReceived = false;
  var logoutObject = {
    title: "",
    body: ""
  };
  var isBackgroundState = false;
  const updateReadUnreadStatus = (0, _hooks.useAction)(_actions4.notificationReadUnreadStatusRequest);
  const [geoCredPNObject, setGeoCredPNObject] = (0, _react.useState)({});
  const [siteKeyNotificationId, setSiteKeyNotificationId] = (0, _react.useState)("");
  // const readUnReadresult = useSelector((state) => { return state.notificationListState.notiReadData });

  (0, _react.useEffect)(() => {
    _reactNative.Platform.OS == 'android' && _reactNative.NativeModules.NetworkModule.startNetworkListener();
    _reactNativePushNotification.default.popInitialNotification(notification => {
      var _notification$data, _notification$data2, _notification$data3, _notification$data4, _notification$data5, _notification$data6;
      if ((notification === null || notification === void 0 ? void 0 : notification.data.event) === "LocationQuestion" && (notification === null || notification === void 0 ? void 0 : notification.data.type) === "Location") {
        _api.event.emit(_api.AppEvent.OnLocationQuestion, notification.data);
      }
      // Handle site key notifications
      if ((notification === null || notification === void 0 || (_notification$data = notification.data) === null || _notification$data === void 0 ? void 0 : _notification$data.type) === "SiteKey" && (notification === null || notification === void 0 || (_notification$data2 = notification.data) === null || _notification$data2 === void 0 ? void 0 : _notification$data2.event) === "SiteKey" || (notification === null || notification === void 0 || (_notification$data3 = notification.data) === null || _notification$data3 === void 0 || (_notification$data3 = _notification$data3.data) === null || _notification$data3 === void 0 ? void 0 : _notification$data3.type) === "SiteKey" && (notification === null || notification === void 0 || (_notification$data4 = notification.data) === null || _notification$data4 === void 0 || (_notification$data4 = _notification$data4.data) === null || _notification$data4 === void 0 ? void 0 : _notification$data4.event) === "SiteKey") {
        _api.event.emit(_api.AppEvent.OnSiteKeyNotificataionReceived, notification.data);
      }
      // Handle chat message notifications
      if ((notification === null || notification === void 0 || (_notification$data5 = notification.data) === null || _notification$data5 === void 0 ? void 0 : _notification$data5.event) === "Message" && (notification === null || notification === void 0 || (_notification$data6 = notification.data) === null || _notification$data6 === void 0 ? void 0 : _notification$data6.type) === "chat") {
        var _notification$data7;
        _api.event.emit(_api.AppEvent.OnChatMessageTap, (_notification$data7 = notification.data) === null || _notification$data7 === void 0 ? void 0 : _notification$data7.data);
      }
    });
    getConfigsRequestAction();
    console.log("Line ===== 103");
    console.log("userData?.id ===>", userData === null || userData === void 0 ? void 0 : userData.id);
    (userData === null || userData === void 0 ? void 0 : userData.id) && getAllGeofenceRequestAction(userData === null || userData === void 0 ? void 0 : userData.id);
    (0, _token.isTokenValid)().then(isValid => {
      //("isTokenValid-->", isValid)
      if (isValid) {
        getProfileRequestAction();
        getTwilioAccessTokenAction();
      }
    });

    // //("logout event register")
    // event.on(AppEvent.OnBeaconUpdated, onBeaconClosed);
    _api.event.on(_api.AppEvent.OnReceiveAlert, onAlertReceived);
    _api.event.on(_api.AppEvent.OnOrganizationGroupUpdated, onOrganizationGroupUpdated);
    _api.event.on(_api.AppEvent.OnLogout, OnLogout);
    _api.event.on(_api.AppEvent.OnLocationQuestion, OnLocationQuestion);
    _api.event.on(_api.AppEvent.OnSiteKeyNotificataionReceived, onSiteKeyNotificationReceived);
    _asyncStorage.default.getItem(_constants.ANDROID_HEADLESS_NOTIFICATION_KEY).then(async incidentId => {
      if (incidentId) {
        await _asyncStorage.default.removeItem(_constants.ANDROID_HEADLESS_NOTIFICATION_KEY);
        _navigation.default.navigate(_screens.default.Menu.Tips.TipDetail, {
          incident: {
            id: incidentId
          },
          showChat: true
        });
      }
    });
    _reactNative.AppState.addEventListener('change', handleAppStateChange);
    (0, _backgroundGeolocation.updateUserLocation)();
  }, []);
  (0, _react.useEffect)(() => {
    // Add geofence listener

    const onLocationChange = _reactNativeBackgroundGeolocation.default.onLocation(async location => {
      if (_reactNative.Platform.OS == 'ios') {
        (0, _backgroundGeolocation.checkCurrentLatLongWithGeofence)(location.coords.latitude, location.coords.longitude);
      }
    });
    const geofenceListener = _reactNativeBackgroundGeolocation.default.onGeofence(async geofence => {
      console.log("app foregorund : ==>", geofence);
      try {
        if (_reactNative.Platform.OS == 'ios') {
          return;
        }
        // Retrieve user data safely
        let userId = "";
        try {
          const userData = await _asyncStorage.default.getItem('userData');
          userId = userData ? JSON.parse(userData).id : "";
        } catch (error) {
          console.log("Error retrieving user data from AsyncStorage:", error);
          // writeLog("Error retrieving user data from AsyncStorage:"+error)
        }
        // Handle geofence entry and exit events
        if (geofence.action === "ENTER") {
          console.log("app foregorund geofence.action: ==>", geofence.action);
          try {
            (0, _backgroundGeolocation.updateEventOnGeofenceCross)(geofence, true, userId);
            (0, _backgroundGeolocation.updateUserLocation)();
          } catch (error) {
            console.log("Error handling geofence ENTER event:", error);
            // writeLog("Error handling geofence ENTER event:"+error)
          }
        } else if (geofence.action === "EXIT") {
          console.log("app foregorund geofence.action: ==>", geofence.action);
          try {
            (0, _backgroundGeolocation.updateEventOnGeofenceCross)(geofence, false, userId);
            (0, _backgroundGeolocation.updateUserLocation)();
          } catch (error) {
            console.log("Error handling geofence EXIT event:", error);
            // writeLog("Error handling geofence EXIT event:"+error)
          }
        }
      } catch (error) {
        console.log("Error in geofenceListener:", error);
        // writeLog("Error in geofenceListener:"+error)
      }
    });

    // Cleanup function to remove the listener
    return () => {
      geofenceListener.remove();
      onLocationChange.remove();
    };
  }, []);

  // on sitekey notification received
  const onSiteKeyNotificationReceived = async event => {
    setSiteKeyNotificationId(event.locationId == undefined ? event.data.locationId : event.locationId);
  };
  const OnLocationQuestion = async event => {
    const gmtDateStr = (0, _common.getLocalTime)(event.sentAt);
    if ((0, _common.getTimeAgo)(gmtDateStr) <= 30) {
      if (userData) {
        setGeoCredPNObject(event);
        let payload = {
          isRead: true,
          userID: userData != null ? userData.id : "0",
          notiId: event != null ? event.notificationId : "",
          readFrom: "app"
        };
        updateReadUnreadStatus(payload);
      }
    } else {}
  };
  const handleAppStateChange = newState => {
    isBackgroundState = newState == 'active' ? false : true;
    if (newState == 'active') {
      if (isLogoutNotReceived) {
        isLogoutNotReceived = false;
        _reactNative.Alert.alert(logoutObject.title, logoutObject.body, [{
          text: 'OK',
          onPress: () => {
            _asyncStorage.default.setItem("isLogout", "true");
            _navigation.default.navigate(_screens.default.Onboarding.Index);
          }
        }], {
          cancelable: false
        });
      }
    }
  };
  const onAlertReceived = () => {
    triggerDuress();
  };
  const onOrganizationGroupUpdated = async () => {
    // //("event called onOrganizationGroupUpdated-->")
    updateProfileRequestAction();
  };

  // geocred feature ::: call on Click YES Button 
  const onYesTap = async () => {
    setPanicActionPopup(false);
    const location = await (0, _backgroundGeolocation.fetchLocation)();
    // console.log("onYesTap location--==>", JSON.stringify(location))
    if (location) {
      const locationId = geoCredPNObject != null ? +geoCredPNObject.locationId : 0;
      let payload = {
        userId: userData.id,
        locationId: locationId,
        incidentId: geoCredPNObject != null ? geoCredPNObject === null || geoCredPNObject === void 0 ? void 0 : geoCredPNObject.incidentId : "",
        response: "yes",
        lat: location.coords.latitude.toString(),
        lng: location.coords.longitude.toString()
      };
      // console.log("onNoTap onYesTap--==>", payload)
      geoCredStatusUpdate(payload);
      (0, _backgroundGeolocation.updateUserLoctionData)(location);
    }
  };

  // geocred feature ::: call on Click NO Button 
  const onNoTap = async () => {
    setPanicActionPopup(false);
    const location = await (0, _backgroundGeolocation.fetchLocation)();
    if (location) {
      const locationId = geoCredPNObject != null ? +geoCredPNObject.locationId : 0;
      let payload = {
        userId: userData.id,
        locationId: locationId,
        incidentId: geoCredPNObject != null ? geoCredPNObject === null || geoCredPNObject === void 0 ? void 0 : geoCredPNObject.incidentId : "",
        response: "no",
        lat: location.coords.latitude.toString(),
        lng: location.coords.longitude.toString()
      };
      // console.log("onNoTap payload--==>", payload)
      geoCredStatusUpdate(payload);
      (0, _backgroundGeolocation.updateUserLoctionData)(location);
    }
  };
  const OnLogout = async event => {
    // //("on logout received data -->",JSON.stringify(event))
    if (isBackgroundState) {
      isLogoutNotReceived = true;
      logoutObject = event;
    }
    _reactNative.Alert.alert(event.title, event.body, [{
      text: 'OK',
      onPress: () => {
        _asyncStorage.default.setItem("isLogout", "true");
        // NavigatorService.navigate(Screens.Onboarding.Index);
      }
    }], {
      cancelable: false
    });
  };
  const triggerDuress = (0, _react.useCallback)(() => {
    startDuressRequest(setLocation);
  }, [startDuressRequest, setLocation]);
  return /*#__PURE__*/_react.default.createElement(_reactNativeRootSiblings.RootSiblingParent, null, /*#__PURE__*/_react.default.createElement(_providers.LanguageProvider, null, /*#__PURE__*/_react.default.createElement(_providers.ThemeProvider, null, /*#__PURE__*/_react.default.createElement(_reactNativePopupMenu.MenuProvider, null, isLoading ? /*#__PURE__*/_react.default.createElement(_components.LoadingIndicator, null) : /*#__PURE__*/_react.default.createElement(_providers.Routes, {
    ref: _navigation.default.setTopLevelNavigator,
    onNavigationStateChange: _navigation.default.logScreen
  }), /*#__PURE__*/_react.default.createElement(_reactNativeToastMessage.default, {
    ref: ref => _reactNativeToastMessage.default.setRef(ref)
  }), /*#__PURE__*/_react.default.createElement(_components.InAppNotification, {
    title: iOSForegroundNotification === null || iOSForegroundNotification === void 0 ? void 0 : iOSForegroundNotification.title,
    message: iOSForegroundNotification === null || iOSForegroundNotification === void 0 ? void 0 : iOSForegroundNotification.message,
    onPress: iOSForegroundNotification === null || iOSForegroundNotification === void 0 ? void 0 : iOSForegroundNotification.action
  }), /*#__PURE__*/_react.default.createElement(_PanicActionModal.default, {
    isVisible: showPanicActionPopup,
    title: !(0, _lodash.isEmpty)(geoCredPNObject) ? JSON.parse(geoCredPNObject.data).title : "",
    message: !(0, _lodash.isEmpty)(geoCredPNObject) ? JSON.parse(geoCredPNObject.data).message : "",
    actionPositiveText: "Yes",
    actionNagetiveText: "No",
    onAction: () => onYesTap(),
    onHide: () => onNoTap(),
    showIcon: true,
    showActionIcon: true
  }), /*#__PURE__*/_react.default.createElement(_components.SiteKeyModal, {
    isVisible: siteKeyNotificationId == "" ? false : true,
    userData: userData,
    hideModal: () => setSiteKeyNotificationId(""),
    isFromNotification: true,
    notification_id: siteKeyNotificationId
  })))));
};
const IncidentGoPackage = () => {
  return /*#__PURE__*/_react.default.createElement(_providers.ReduxProvider, null, /*#__PURE__*/_react.default.createElement(NPMModule, null));
};
exports.IncidentGoPackage = IncidentGoPackage;
//# sourceMappingURL=index.js.map