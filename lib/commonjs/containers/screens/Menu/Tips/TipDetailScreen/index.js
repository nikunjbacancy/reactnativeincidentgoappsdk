"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _api = require("../../../../../api");
var _event = _interopRequireDefault(require("../../../../../api/event"));
var _components = require("../../../../../components");
var _types = require("../../../../../components/TipCamera/types");
var _selectors = require("../../../../../containers/app/selectors");
var _screens = _interopRequireDefault(require("../../../../../containers/providers/RoutesProvider/screens"));
var _filter = _interopRequireDefault(require("lodash/filter"));
var _forEach = _interopRequireDefault(require("lodash/forEach"));
var _react = _interopRequireWildcard(require("react"));
var _reactIntl = require("react-intl");
var _reactNative = require("react-native");
var _hooks = require("../../../../../utils/hooks");
var _navigation = _interopRequireDefault(require("../../../../../utils/navigation"));
var _notification = require("../../../../../utils/notification");
var _actions = require("./actions");
var _messages = _interopRequireDefault(require("./messages"));
var _selectors2 = require("./selectors");
var _styles = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* eslint-disable no-unused-expressions,@typescript-eslint/no-misused-promises */

const TipDetailScreen = ({
  navigation: {
    getParam
  }
}) => {
  const incidentParam = getParam('incident');
  const showChat = getParam('showChat');
  const tipId = getParam('tipId');
  const {
    formatMessage
  } = (0, _reactIntl.useIntl)();
  const [badges, setBadges] = (0, _react.useState)([]);
  const cameraRef = (0, _react.useRef)(null);
  const getIncidentVideosAction = (0, _hooks.useAction)(_actions.getIncidentVideosRequest);
  const showCallModalAction = (0, _hooks.useAction)(_actions.showCallModal);
  const hideCallModalAction = (0, _hooks.useAction)(_actions.hideCallModal);
  const showChatModalAction = (0, _hooks.useAction)(_actions.showChatModal);
  const hideChatModalAction = (0, _hooks.useAction)(_actions.hideChatModal);
  const uploadVideoAction = (0, _hooks.useAction)(_actions.uploadVideoRequest);
  const addMessageAction = (0, _hooks.useAction)(_actions.addMessage);
  const sendMessageAction = (0, _hooks.useAction)(_actions.sendMessageRequest);
  const getIncidentAction = (0, _hooks.useAction)(_actions.getIncidentRequest);
  const incidentVideos = (0, _hooks.useSelector)((0, _selectors2.makeSelectIncidentVideos)());
  const organization = (0, _hooks.useSelector)((0, _selectors2.makeSelectOrganization)());
  const isLoading = (0, _hooks.useSelector)((0, _selectors2.makeSelectIsLoading)());
  const shouldShowCallModal = (0, _hooks.useSelector)((0, _selectors2.makeSelectShouldShowCallModal)());
  const shouldShowChatModal = (0, _hooks.useSelector)((0, _selectors2.makeSelectShouldShowChatModal)());
  const tipCameraMode = (0, _hooks.useSelector)((0, _selectors.makeSelectTipCameraMode)());
  const messages = (0, _hooks.useSelector)((0, _selectors2.makeSelectMessages)());
  const incident = (0, _hooks.useSelector)((0, _selectors2.makeSelectIncident)());
  const [isVideoPaused, setIsVideoPaused] = (0, _react.useState)(false);
  const categoryConfig = (0, _hooks.useIncidentCategoryConfig)(incident === null || incident === void 0 ? void 0 : incident.category);
  (0, _react.useEffect)(() => {
    if (incidentParam == null) {
      getIncidentAction(tipId);
    } else {
      getIncidentAction(incidentParam.id);
    }
  }, []);
  (0, _react.useEffect)(() => {
    if (incident) {
      getIncidentVideosAction({
        incident,
        organizationId: incident.organization
      });
      (0, _notification.getBadges)().then(notificationBadges => {
        setBadges((0, _filter.default)(notificationBadges, n => n === incident.id));
      });
      const notificationAdded = notificationBadges => {
        setBadges((0, _filter.default)(notificationBadges, n => n === incident.id));
      };
      _event.default.on(_api.AppEvent.OnNotificationBadge, notificationAdded);
      const messageAdded = async message => {
        //("================ tip detail screen index message added ================",message)
        await (0, _notification.addBadge)(incident.id);
        addMessageAction(message);
      };
      _event.default.on(_api.AppEvent.OnMessageAdded, messageAdded);
      const onIncidentUpdated = incidentId => {
        if (incident.id === incidentId) {
          hideChatModalAction();
          setTimeout(() => {
            _reactNative.Alert.alert(formatMessage(_messages.default.tipClosed), formatMessage(_messages.default.tipClosedDetail), [{
              text: formatMessage(_messages.default.ok),
              onPress: () => backToMyTips({
                resolved: true
              })
            }], {
              cancelable: false
            });
          }, shouldShowChatModal ? 5000 : 1500);
        }
      };
      _event.default.on(_api.AppEvent.OnIncidentUpdated, onIncidentUpdated);
      return function clean() {
        var _incident$id;
        _event.default.off(_api.AppEvent.OnNotificationBadge, notificationAdded);
        _event.default.off(_api.AppEvent.OnMessageAdded, messageAdded);
        _event.default.off(_api.AppEvent.OnIncidentUpdated, onIncidentUpdated);
        _api.twilio.removeChannelEvents(((_incident$id = incident.id) === null || _incident$id === void 0 ? void 0 : _incident$id.toString()) || '');
      };
    }
    return;
  }, [incident, setBadges]);
  (0, _react.useEffect)(() => {
    if (!isLoading && showChat) {
      setTimeout(() => {
        showChatModalAction();
      }, 1300);
    }
  }, [isLoading]);
  const handleRecordFinished = (0, _react.useCallback)(videoUri => {
    uploadVideoAction({
      videoUri,
      incident
    });
  }, [incident]);
  const handleShowChatModal = (0, _react.useCallback)(async () => {
    if (tipCameraMode === _types.TipCameraMode.video) {
      return setIsVideoPaused(true);
    }
    setTimeout(() => {
      var _cameraRef$current;
      cameraRef === null || cameraRef === void 0 || (_cameraRef$current = cameraRef.current) === null || _cameraRef$current === void 0 || _cameraRef$current.pausePreview();
    }, 100);
    await (0, _notification.removeBadge)(incident === null || incident === void 0 ? void 0 : incident.id);
  }, [incident, tipCameraMode]);
  const handleHideChatModal = (0, _react.useCallback)(async () => {
    var _cameraRef$current2;
    if (tipCameraMode === _types.TipCameraMode.video) {
      return setIsVideoPaused(false);
    }
    cameraRef === null || cameraRef === void 0 || (_cameraRef$current2 = cameraRef.current) === null || _cameraRef$current2 === void 0 || _cameraRef$current2.resumePreview();
    await (0, _notification.removeBadge)(incident === null || incident === void 0 ? void 0 : incident.id);
  }, [incident, tipCameraMode]);
  const backToMyTips = (0, _react.useCallback)(tipEvent => {
    const myTips = _screens.default.Menu.Tips.MyTips;
    const incidentResolved = (tipEvent === null || tipEvent === void 0 ? void 0 : tipEvent.resolved) || (incident === null || incident === void 0 ? void 0 : incident.isResolved);
    _navigation.default.navigate(incidentResolved ? myTips.Closed : myTips.Active);
  }, [incident]);
  const handleSendMessage = (0, _react.useCallback)(messagesToSent => {
    (0, _forEach.default)(messagesToSent, message => {
      sendMessageAction({
        incident,
        message
      });
    });
  }, [incident]);
  if (isLoading) return /*#__PURE__*/_react.default.createElement(_components.LoadingIndicator, null);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.StatusBar, {
    barStyle: "dark-content",
    backgroundColor: "white"
  }), /*#__PURE__*/_react.default.createElement(_components.SafeAreaContainer, null, /*#__PURE__*/_react.default.createElement(_styles.BackButtonContainer, null, /*#__PURE__*/_react.default.createElement(_styles.BackButton, {
    back: backToMyTips
  }), /*#__PURE__*/_react.default.createElement(_styles.CategoryContainer, null, /*#__PURE__*/_react.default.createElement(_styles.CategoryImage, {
    source: {
      uri: categoryConfig.imageUrl
    }
  })), /*#__PURE__*/_react.default.createElement(_styles.OrganizationContainer, null, /*#__PURE__*/_react.default.createElement(_styles.OrganizationName, null, organization.name), /*#__PURE__*/_react.default.createElement(_styles.CategoryContent, null, /*#__PURE__*/_react.default.createElement(_components.TipStatusIcon, {
    active: !(incident !== null && incident !== void 0 && incident.isResolved)
  }), /*#__PURE__*/_react.default.createElement(_styles.CategoryName, null, categoryConfig.display)))), /*#__PURE__*/_react.default.createElement(_components.TipCamera, {
    ref: cameraRef,
    isRecordEnabled: !(incident !== null && incident !== void 0 && incident.isResolved),
    tipCameraMode: _types.TipCameraMode.camera,
    incidentVideos: incidentVideos,
    onPhonePress: showCallModalAction,
    onChatPress: showChatModalAction,
    onRecordFinished: handleRecordFinished,
    isVideoPaused: isVideoPaused,
    badges: badges
  }), /*#__PURE__*/_react.default.createElement(_components.CallModal, {
    onShow: handleShowChatModal,
    onHide: handleHideChatModal,
    isVisible: shouldShowCallModal,
    hideModal: hideCallModalAction,
    organization: organization
  }), /*#__PURE__*/_react.default.createElement(_components.ChatModal, {
    isReadMode: incident === null || incident === void 0 ? void 0 : incident.isResolved,
    onShow: handleShowChatModal,
    onHide: handleHideChatModal,
    isVisible: shouldShowChatModal,
    hideModal: hideChatModalAction,
    organization: organization,
    messages: messages,
    onMessageSent: handleSendMessage
  })));
};
var _default = exports.default = TipDetailScreen;
//# sourceMappingURL=index.js.map