"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _asyncStorage = _interopRequireDefault(require("@react-native-async-storage/async-storage"));
var _api = _interopRequireWildcard(require("../../../../../api"));
var api = _api;
var _assets = require("../../../../../assets");
var _components = require("../../../../../components");
var _actions = require("../../../../../containers/app/actions");
var _selectors = require("../../../../../containers/app/selectors");
var _filter = _interopRequireDefault(require("lodash/filter"));
var _forEach = _interopRequireDefault(require("lodash/forEach"));
var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));
var _react = _interopRequireWildcard(require("react"));
var _reactIntl = require("react-intl");
var _reactNative = require("react-native");
var _reactNativeKeepAwake = _interopRequireDefault(require("react-native-keep-awake"));
var _reactNativeTwilioVideoWebrtc = require("react-native-twilio-video-webrtc");
var _hooks = require("../../../../../utils/hooks");
var _backgroundGeolocation = require("../../../../../utils/location/backgroundGeolocation");
var _notification = require("../../../../../utils/notification");
var _token = require("../../../../../utils/token");
var _permission = require("../../../../../utils/permission");
var _actions2 = require("./actions");
var _constants = require("./constants");
var _ExitPanicModal = _interopRequireDefault(require("./ExitPanicModal"));
var _messages = _interopRequireDefault(require("./messages"));
var _RecordAudio = _interopRequireDefault(require("./RecordAudio"));
var _SafeModal = _interopRequireDefault(require("./SafeModal"));
var _selectors2 = require("./selectors");
var _styles = require("./styles");
var _TimerExpired = _interopRequireDefault(require("./TimerExpired"));
var _types = require("./types");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* eslint-disable simple-import-sort/sort */
/* eslint-disable no-unused-expressions,@typescript-eslint/no-misused-promises */
var PermissionStatus = /*#__PURE__*/function (PermissionStatus) {
  PermissionStatus[PermissionStatus["Checking"] = 0] = "Checking";
  PermissionStatus[PermissionStatus["Granted"] = 1] = "Granted";
  PermissionStatus[PermissionStatus["Blocked"] = 2] = "Blocked";
  return PermissionStatus;
}(PermissionStatus || {});
var connectionTypes = /*#__PURE__*/function (connectionTypes) {
  connectionTypes["disconnected"] = "disconnected";
  connectionTypes["connecting"] = "connnecting";
  connectionTypes["connnected"] = "connected";
  return connectionTypes;
}(connectionTypes || {});
const EscortScreen = ({
  navigation: {
    getParam
  }
}) => {
  const [permissionStatus, setPermissionStatus] = (0, _react.useState)(PermissionStatus.Checking);
  const incidentEscort = getParam('incidentEscort');
  const organization = getParam('organization');
  const fromPassive = getParam('fromPassive');
  const [badges, setBadges] = (0, _react.useState)([]);
  const [showTimerExpired, setShowTimerExpired] = (0, _react.useState)(false);
  const [connectionState, setConnectionState] = (0, _react.useState)(connectionTypes.disconnected);
  const locationRef = (0, _react.useRef)();
  const {
    formatMessage
  } = (0, _reactIntl.useIntl)();
  const showCallModalAction = (0, _hooks.useAction)(_actions2.showCallModal);
  const hideCallModalAction = (0, _hooks.useAction)(_actions2.hideCallModal);
  const showSafeModalAction = (0, _hooks.useAction)(_actions2.showSafeModal);
  const hideSafeModalAction = (0, _hooks.useAction)(_actions2.hideSafeModal);
  const toggleRecordTypeAction = (0, _hooks.useAction)(_actions2.toggleRecordType);
  const startChatAction = (0, _hooks.useAction)(_actions2.startChat);
  const showChatModalAction = (0, _hooks.useAction)(_actions2.showChatModal);
  const hideChatModalAction = (0, _hooks.useAction)(_actions2.hideChatModal);
  const sendMessageAction = (0, _hooks.useAction)(_actions2.sendMessageRequest);
  const addMessageAction = (0, _hooks.useAction)(_actions2.addMessage);
  const imSafeAction = (0, _hooks.useAction)(_actions2.imSafeRequest);
  const showPanicInfoAction = (0, _hooks.useAction)(_actions2.showPanicInfo);
  const enterPanicModeAction = (0, _hooks.useAction)(_actions2.enterPanicMode);
  const exitPanicModeAction = (0, _hooks.useAction)(_actions2.exitPanicMode);
  const showExitPanicModalAction = (0, _hooks.useAction)(_actions2.showExitPanicModal);
  const hideExitPanicModalAction = (0, _hooks.useAction)(_actions2.hideExitPanicModal);
  const clearDataAndGoBackAction = (0, _hooks.useAction)(_actions2.clearDataAndGoBack);
  const setTriggeredFromPassiveAction = (0, _hooks.useAction)(_actions2.setEscortFromPassive);
  const clearLocation = (0, _hooks.useAction)(_actions.ClearLocationData);
  const logError = (0, _hooks.useAction)(_actions.LogErrorToDb);
  const appStateStatusChange = (0, _hooks.useAction)(_actions2.appStateChangeAction);
  const shouldShowCallModal = (0, _hooks.useSelector)((0, _selectors2.makeSelectShouldShowCallModal)());
  const shouldShowSafeModal = (0, _hooks.useSelector)((0, _selectors2.makeSelectShouldShowSafeModal)());
  const recordType = (0, _hooks.useSelector)((0, _selectors2.makeSelectRecordType)());
  const shouldShowChatModal = (0, _hooks.useSelector)((0, _selectors2.makeSelectShouldShowChatModal)());
  const chatMessages = (0, _hooks.useSelector)((0, _selectors2.makeSelectMessages)());
  const requestingImSafe = (0, _hooks.useSelector)((0, _selectors2.makeSelectRequestingImSafe)());
  const shouldShowPanicInfo = (0, _hooks.useSelector)((0, _selectors2.makeSelectShouldShowPanicInfo)());
  const shouldShowExitPanicModal = (0, _hooks.useSelector)((0, _selectors2.makeSelectShouldShowExitPanicModal)());
  const accessToken = (0, _hooks.useSelector)((0, _selectors.makeSelectTwilioAccessToken)());
  const isPanicMode = (0, _hooks.useSelector)((0, _selectors2.makeSelectIsPanicMode)());
  const location = (0, _hooks.useSelector)((0, _selectors.makeSelectAppLocation)());
  const appState = (0, _hooks.useSelector)((0, _selectors2.makeSelectAppState)());
  const twilioVideoRef = (0, _react.useRef)(null);
  const panicModeRef = (0, _react.useRef)(false);

  // console.log("isPanicMode ====>",isPanicMode)

  (0, _hooks.useBackButton)(() => {
    showSafeModalAction();
    return true;
  });
  const tryRequestCameraPermissions = () => {
    (0, _permission.requestCameraPermissions)().then(() => {
      // console.log("camera permission granted")
      setPermissionStatus(PermissionStatus.Granted);
    }).catch(() => {
      // console.log("camera permission blocked")
      setPermissionStatus(PermissionStatus.Blocked);
    });
  };
  const onEscortClosed = () => {
    hideChatModalAction();
    exitPanicModeAction(incidentEscort);
    panicModeRef.current = false;
    setTimeout(async () => {
      _reactNative.Alert.alert(formatMessage(_messages.default.escortClosed), formatMessage(_messages.default.escortClosedDetail), [{
        text: formatMessage(_messages.default.ok),
        onPress: clearDataAndGoBackAction
      }], {
        cancelable: false
      });
      await (0, _backgroundGeolocation.stopBackgroundGeolocation)(clearLocation);
    }, shouldShowChatModal ? 5000 : 1500);
  };
  const handleAppStateChange = state => {
    appStateStatusChange({
      state,
      incidentEscort
    });
  };

  //initialize twilio video
  const initTwilioVideo = async () => {
    if (showTimerExpired === true && connectionState !== connectionTypes.connnected) {
      var _twilioVideoRef$curre, _incidentEscort$twili;
      // console.log("initTwilioVideo===>")
      let token = accessToken;
      if ((0, _token.isTokenExpired)(accessToken)) {
        token = await (0, _token.refreshTwilioAccessToken)();
      }
      // console.log("incidentEscort.twilio?.roomId===>",incidentEscort.twilio?.roomId)
      (_twilioVideoRef$curre = twilioVideoRef.current) === null || _twilioVideoRef$curre === void 0 || _twilioVideoRef$curre.connect({
        roomName: (_incidentEscort$twili = incidentEscort.twilio) === null || _incidentEscort$twili === void 0 ? void 0 : _incidentEscort$twili.roomId,
        accessToken: token.access_token || '',
        maintainVideoTrackInBackground: true,
        enableAudio: true,
        enableRemoteAudio: true
      });
      // console.log("-initTwilioVideo Connecting--->")
      setConnectionState(connectionTypes.connecting);
    }
  };
  (0, _react.useEffect)(function initEffects() {
    _reactNativeKeepAwake.default.activate(); // sync
    _api.event.on(_api.AppEvent.OnEscortClosed, onEscortClosed); // sync
    handleAppStateChange(_reactNative.AppState.currentState); // if app is restart mid escort, need to update AppState to 'active'
    _reactNative.AppState.addEventListener('change', handleAppStateChange); // sync
    tryRequestCameraPermissions();
    const asyncInit = async () => {
      try {
        const panicMode = await _asyncStorage.default.getItem(_constants.PANIC_MODE_KEY);
        // console.log("=panicMode======>", panicMode)
        if (panicMode === _types.PanicMode.Active) {
          panicModeRef.current = true;
          enterPanicModeAction(incidentEscort);
        } else {
          panicModeRef.current = false;
        }
        await _asyncStorage.default.setItem(_constants.ESCORT_STATE_KEY, _types.EscortState.Started);

        // console.log("=panicMode======>", panicMode)
        // console.log("=isPanicMode======>", isPanicMode)
        // let token = accessToken;
        // if (isTokenExpired(accessToken)) {
        //   token = await refreshTwilioAccessToken();
        // }
        // twilioVideoRef.current?.connect({
        //   roomName: incidentEscort.twilio?.roomId,
        //   accessToken: token.access_token || '',
        //   maintainVideoTrackInBackground: true,
        //   enableAudio: true,
        //   enableRemoteAudio:true
        // });
        // console.log("-Connecting--->")
        // setConnectionState(connectionTypes.connecting);

        if (_reactNative.AppState.currentState === 'active' && showTimerExpired === false && isPanicMode === false) {
          var _incidentEscort$twili2, _twilioVideoRef$curre2, _incidentEscort$twili3;
          let token = accessToken;
          if ((0, _token.isTokenExpired)(accessToken)) {
            token = await (0, _token.refreshTwilioAccessToken)();
          }
          console.log("-incidentEscort.twilio?.roomId 2--->", (_incidentEscort$twili2 = incidentEscort.twilio) === null || _incidentEscort$twili2 === void 0 ? void 0 : _incidentEscort$twili2.roomId);
          (_twilioVideoRef$curre2 = twilioVideoRef.current) === null || _twilioVideoRef$curre2 === void 0 || _twilioVideoRef$curre2.connect({
            roomName: (_incidentEscort$twili3 = incidentEscort.twilio) === null || _incidentEscort$twili3 === void 0 ? void 0 : _incidentEscort$twili3.roomId,
            accessToken: token.access_token || '',
            maintainVideoTrackInBackground: true,
            enableAudio: true,
            enableRemoteAudio: true
          });
          // console.log("-initEffects Connectin g--->")
          setConnectionState(connectionTypes.connecting);
        }
      } catch (err) {
        api.logger.log('Record Screen async init', err);
      }
    };
    asyncInit();
    return function initEffectCleanUp() {
      _api.event.off(_api.AppEvent.OnEscortClosed, onEscortClosed); // sync
      _reactNativeKeepAwake.default.deactivate(); // sync
      _reactNative.AppState.removeEventListener('change', handleAppStateChange); // sync
      const asyncCleanup = async () => {
        try {
          var _twilioVideoRef$curre3;
          await _asyncStorage.default.setItem(_constants.ESCORT_STATE_KEY, _types.EscortState.Finished); // async
          (_twilioVideoRef$curre3 = twilioVideoRef.current) === null || _twilioVideoRef$curre3 === void 0 || _twilioVideoRef$curre3.disconnect();
        } catch (err) {
          api.logger.log('Record Screen async cleanup', err.message);
        }
      };
      asyncCleanup();
    };
  }, []);

  // Manage toggle sideEffect
  (0, _react.useEffect)(() => {
    (async () => {
      try {
        if (!isPanicMode && connectionState === connectionTypes.connnected) {
          var _twilioVideoRef$curre4;
          await ((_twilioVideoRef$curre4 = twilioVideoRef.current) === null || _twilioVideoRef$curre4 === void 0 ? void 0 : _twilioVideoRef$curre4.setLocalVideoEnabled(recordType === _types.RecordType.Video));
        }
      } catch (err) {
        api.logger.log('Toggle video enabled ERR: ', err.message);
      }
    })();
  }, [recordType, isPanicMode]);

  // // Manage toggle sideEffect
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       console.log("isPanicMode****==>",isPanicMode)
  //       if (isPanicMode && connectionState !== connectionTypes.connnected) {
  //         let token = accessToken;
  //         if (isTokenExpired(accessToken)) {
  //           token = await refreshTwilioAccessToken();
  //         }
  //         twilioVideoRef.current?.connect({
  //           roomName: incidentEscort.twilio?.roomId,
  //           accessToken: token.access_token || '',
  //           maintainVideoTrackInBackground: true,
  //           enableAudio: true,
  //           enableRemoteAudio: true
  //         });
  //         console.log("-useEffect Connecting--->")
  //         setConnectionState(connectionTypes.connecting);
  //       }
  //     } catch (err) {
  //       api.logger.log('Toggle video enabled ERR: ', err);
  //     }
  //   })();
  // }, [isPanicMode]);

  (0, _react.useEffect)(function manageChatNotifications() {
    startChatAction(incidentEscort);
    const notificationAdded = notificationBadges => {
      setBadges((0, _filter.default)(notificationBadges, n => n === incidentEscort.id));
    };
    _api.event.on(_api.AppEvent.OnNotificationBadge, notificationAdded);
    const messageAdded = async message => {
      await (0, _notification.addBadge)(incidentEscort.id);
      addMessageAction(message);
    };
    _api.event.on(_api.AppEvent.OnMessageAdded, messageAdded);
    const onMessageOpenChatBox = async message => {
      console.log("open chat box===>", message);
      showChatModalAction();
    };
    _api.event.on(_api.AppEvent.OnChatMessageTap, onMessageOpenChatBox);
    return function clean() {
      var _incidentEscort$id;
      _api.event.off(_api.AppEvent.OnNotificationBadge, notificationAdded);
      _api.event.off(_api.AppEvent.OnMessageAdded, messageAdded);
      _api.twilio.removeChannelEvents(((_incidentEscort$id = incidentEscort.id) === null || _incidentEscort$id === void 0 ? void 0 : _incidentEscort$id.toString()) || '').then().catch(e => api.logger.log('Remove chat channel event', e));
    };
  }, [addMessageAction, incidentEscort, startChatAction]);
  (0, _react.useEffect)(() => {
    (() => {
      if (connectionState === connectionTypes.connnected) {
        if (panicModeRef.current) {
          try {
            // console.log("Video Enable")
            setTimeout(async () => {
              var _twilioVideoRef$curre5, _twilioVideoRef$curre6;
              toggleRecordTypeAction(incidentEscort);
              await ((_twilioVideoRef$curre5 = twilioVideoRef.current) === null || _twilioVideoRef$curre5 === void 0 ? void 0 : _twilioVideoRef$curre5.setLocalAudioEnabled(true));
              await ((_twilioVideoRef$curre6 = twilioVideoRef.current) === null || _twilioVideoRef$curre6 === void 0 ? void 0 : _twilioVideoRef$curre6.setLocalVideoEnabled(true));
            }, 5000);
          } catch (err) {
            api.logger.log('Enter panic ERR: ', err.message);
          }
        }
      }
    })();
  }, [incidentEscort, toggleRecordTypeAction, connectionState]);
  (0, _react.useEffect)(() => {
    setShowTimerExpired(!!incidentEscort.fromTimerExpired);
  }, [incidentEscort]);
  (0, _react.useEffect)(() => {
    if (fromPassive) {
      setTriggeredFromPassiveAction();
    }
  }, [fromPassive, setTriggeredFromPassiveAction]);
  (0, _react.useEffect)(() => {
    locationRef.current = location;
  }, [location]);
  (0, _react.useEffect)(() => {
    (async () => {
      if (!panicModeRef.current && appState === 'active') {
        var _twilioVideoRef$curre7, _twilioVideoRef$curre8;
        initTwilioVideo(); // initialize twilio video
        await ((_twilioVideoRef$curre7 = twilioVideoRef.current) === null || _twilioVideoRef$curre7 === void 0 ? void 0 : _twilioVideoRef$curre7.setLocalAudioEnabled(true));
        await ((_twilioVideoRef$curre8 = twilioVideoRef.current) === null || _twilioVideoRef$curre8 === void 0 ? void 0 : _twilioVideoRef$curre8.setLocalVideoEnabled(recordType === _types.RecordType.Video));
      }
    })();
  }, [appState, recordType]);
  const handleSendMessage = (0, _react.useCallback)(messagesToSent => {
    (0, _forEach.default)(messagesToSent, message => {
      sendMessageAction({
        incidentEscort,
        message,
        location: locationRef.current
      });
    });
  }, [incidentEscort, sendMessageAction]);
  const handleSafeModalContinue = (0, _react.useCallback)(comment => {
    var _twilioVideoRef$curre9;
    exitPanicModeAction(incidentEscort);
    panicModeRef.current = false;
    imSafeAction({
      incidentEscort,
      comment
    });
    (_twilioVideoRef$curre9 = twilioVideoRef.current) === null || _twilioVideoRef$curre9 === void 0 || _twilioVideoRef$curre9.disconnect();
    if (!fromPassive) {
      (async () => {
        await (0, _backgroundGeolocation.stopBackgroundGeolocation)(clearLocation);
      })();
    }
  }, [imSafeAction, incidentEscort, fromPassive]);
  const handleEnterPanicModeAction = (0, _react.useCallback)(() => {
    enterPanicModeAction(incidentEscort);
    panicModeRef.current = true;
    if (recordType === _types.RecordType.Audio && connectionState === connectionTypes.connnected) {
      var _twilioVideoRef$curre10;
      toggleRecordTypeAction(incidentEscort);
      (_twilioVideoRef$curre10 = twilioVideoRef.current) === null || _twilioVideoRef$curre10 === void 0 || _twilioVideoRef$curre10.setLocalVideoEnabled(true);
    }
  }, [enterPanicModeAction, incidentEscort, recordType, toggleRecordTypeAction, connectionState]);
  const handleExitPanicModeAction = (0, _react.useCallback)(() => {
    exitPanicModeAction(incidentEscort);
    panicModeRef.current = false;
  }, [exitPanicModeAction, incidentEscort]);
  const clearBadges = (0, _react.useCallback)(async () => {
    await (0, _notification.removeBadge)(incidentEscort.id);
  }, [incidentEscort]);
  const onFlipButtonClick = (0, _react.useCallback)(() => {
    // console.log("-connectionState->", connectionState)
    // console.log("-twilioVideoRef.current?->", twilioVideoRef.current)
    if (connectionState === connectionTypes.connnected) {
      var _twilioVideoRef$curre11;
      (_twilioVideoRef$curre11 = twilioVideoRef.current) === null || _twilioVideoRef$curre11 === void 0 || _twilioVideoRef$curre11.flipCamera();
    }
  }, [connectionState]);
  const handleRoomDidConnect = (0, _react.useCallback)(async () => {
    try {
      var _twilioVideoRef$curre12, _twilioVideoRef$curre13, _twilioVideoRef$curre14, _twilioVideoRef$curre15;
      console.log("-Connected--->");
      setConnectionState(connectionTypes.connnected);
      await ((_twilioVideoRef$curre12 = twilioVideoRef.current) === null || _twilioVideoRef$curre12 === void 0 ? void 0 : _twilioVideoRef$curre12.setRemoteAudioEnabled(true));
      await ((_twilioVideoRef$curre13 = twilioVideoRef.current) === null || _twilioVideoRef$curre13 === void 0 ? void 0 : _twilioVideoRef$curre13.setLocalAudioEnabled(true));
      await ((_twilioVideoRef$curre14 = twilioVideoRef.current) === null || _twilioVideoRef$curre14 === void 0 ? void 0 : _twilioVideoRef$curre14.setLocalVideoEnabled(false));
      (_twilioVideoRef$curre15 = twilioVideoRef.current) === null || _twilioVideoRef$curre15 === void 0 || _twilioVideoRef$curre15.flipCamera();
    } catch (e) {
      logError({
        source: 'handleRoomDidConnect',
        message: e.message,
        raw: JSON.stringify(e)
      });
    }
  }, [logError]);
  const handleRoomDisconnect = (0, _react.useCallback)(payload => {
    console.log("-DisConnected--->");
    setConnectionState(connectionTypes.disconnected);
    logError({
      source: 'Record Screen: OnRoomDidDisconnect',
      message: payload.error,
      raw: JSON.stringify(payload)
    });
  }, [logError]);

  // const reconnect = async () => {

  //   let token = accessToken;
  //   if (isTokenExpired(accessToken)) {
  //     token = await refreshTwilioAccessToken();
  //   }
  //   twilioVideoRef.current?.connect({
  //     roomName: incidentEscort.twilio?.roomId,
  //     accessToken: token.access_token || '',
  //     maintainVideoTrackInBackground: true,
  //     encodingParameters: { enableH264Codec: true }
  //   });
  //   console.log("-Connecting--->")
  //   setConnectionState(connectionTypes.connecting);
  // }

  const handleRoomConnectionFail = (0, _react.useCallback)(payload => {
    console.log("-Connection Failed--->", payload);
    setConnectionState(connectionTypes.disconnected);
    // reconnect()
    logError({
      source: 'Record Screen: OnRoomDidFailToConnect',
      message: payload.error,
      raw: JSON.stringify(payload)
    });
  }, [logError]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.StatusBar, {
    barStyle: "dark-content",
    backgroundColor: "white"
  }), /*#__PURE__*/_react.default.createElement(_components.SafeAreaContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.RecordContainer, null, connectionState === connectionTypes.connnected && /*#__PURE__*/_react.default.createElement(_reactNativeTwilioVideoWebrtc.TwilioVideoLocalView, {
    applyZOrder: true,
    enabled: recordType === _types.RecordType.Video,
    style: {
      flex: 1
    }
  }), recordType === _types.RecordType.Audio && /*#__PURE__*/_react.default.createElement(_RecordAudio.default, {
    location: location
  }), /*#__PURE__*/_react.default.createElement(_styles.Logo, null), /*#__PURE__*/_react.default.createElement(_styles.OrganizationName, null, formatMessage(_messages.default.escort, {
    organizationName: organization.name
  })), showTimerExpired && /*#__PURE__*/_react.default.createElement(_TimerExpired.default, null), /*#__PURE__*/_react.default.createElement(_styles.SharingText, null, formatMessage(recordType === _types.RecordType.Audio ? _messages.default.sharingAudio : _messages.default.shareVideo)), recordType === _types.RecordType.Audio && /*#__PURE__*/_react.default.createElement(_styles.AudioStream, null), recordType === _types.RecordType.Video && /*#__PURE__*/_react.default.createElement(_styles.RecordDot, null), shouldShowPanicInfo && /*#__PURE__*/_react.default.createElement(_styles.PanicInfoContainer, null), recordType === _types.RecordType.Video && /*#__PURE__*/_react.default.createElement(_styles.CameraFlipButton, {
    onPress: onFlipButtonClick,
    image: _assets.images.icFlip()
  })), /*#__PURE__*/_react.default.createElement(_styles.MiddleControls, null, /*#__PURE__*/_react.default.createElement(_styles.SafeButton, {
    onPress: isPanicMode ? showExitPanicModalAction : showSafeModalAction
  }, /*#__PURE__*/_react.default.createElement(_styles.SafeButtonText, null, formatMessage(isPanicMode ? _messages.default.endPanic : _messages.default.imSafe))), /*#__PURE__*/_react.default.createElement(_components.PanicButton, {
    isPanicMode: isPanicMode,
    onPress: showPanicInfoAction,
    onFill: handleEnterPanicModeAction,
    text: formatMessage(_messages.default.panic)
  })), /*#__PURE__*/_react.default.createElement(_styles.BottomControls, null, /*#__PURE__*/_react.default.createElement(_styles.PhoneButton, {
    onPress: showCallModalAction,
    image: _assets.images.icPhoneCall()
  }), /*#__PURE__*/_react.default.createElement(_styles.ToggleContainer, {
    disabled: isPanicMode,
    recordType: recordType,
    onPress: () => toggleRecordTypeAction(incidentEscort)
  }, /*#__PURE__*/_react.default.createElement(_styles.ToggleImageContainer, null, /*#__PURE__*/_react.default.createElement(_styles.ToggleImage, {
    source: recordType === _types.RecordType.Audio ? _assets.images.icMicrophone() : _assets.images.icCamera()
  })), /*#__PURE__*/_react.default.createElement(_styles.ToggleText, null, recordType === _types.RecordType.Audio ? formatMessage(_messages.default.shareVideo) : formatMessage(_messages.default.audioOnly))), /*#__PURE__*/_react.default.createElement(_styles.ChatContainer, null, /*#__PURE__*/_react.default.createElement(_styles.ChatButton, {
    onPress: showChatModalAction,
    image: _assets.images.icChat()
  }), !(0, _isEmpty.default)(badges) && /*#__PURE__*/_react.default.createElement(_styles.StyledBadge, {
    length: badges.length
  })))), /*#__PURE__*/_react.default.createElement(_components.CallModal, {
    isVisible: shouldShowCallModal,
    hideModal: hideCallModalAction,
    organization: organization
  }), /*#__PURE__*/_react.default.createElement(_SafeModal.default, {
    isVisible: shouldShowSafeModal,
    hideModal: hideSafeModalAction,
    onContinue: handleSafeModalContinue,
    requestingImSafe: requestingImSafe
  }), location && /*#__PURE__*/_react.default.createElement(_components.ChatModal, {
    isVisible: shouldShowChatModal,
    hideModal: hideChatModalAction,
    organization: organization,
    messages: chatMessages,
    onMessageSent: handleSendMessage,
    onShow: clearBadges,
    onHide: clearBadges
  }), /*#__PURE__*/_react.default.createElement(_ExitPanicModal.default, {
    isVisible: shouldShowExitPanicModal,
    hideModal: hideExitPanicModalAction,
    onConfirm: handleExitPanicModeAction
  }), /*#__PURE__*/_react.default.createElement(_reactNativeTwilioVideoWebrtc.TwilioVideo, {
    ref: twilioVideoRef,
    onRoomDidConnect: handleRoomDidConnect,
    onRoomDidDisconnect: handleRoomDisconnect,
    onRoomDidFailToConnect: handleRoomConnectionFail
  })), isPanicMode && /*#__PURE__*/_react.default.createElement(_styles.PanicOverlay, null));
};
var _default = exports.default = EscortScreen;
//# sourceMappingURL=index.js.map