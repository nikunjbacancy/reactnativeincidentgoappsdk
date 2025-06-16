"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _components = require("../../../../../components");
var _types = require("../../../../../components/TipCamera/types");
var _selectors = require("../../../../../containers/app/selectors");
var _actions = require("../../../../../containers/providers/RoutesProvider/actions");
var _screens = _interopRequireDefault(require("../../../../../containers/providers/RoutesProvider/screens"));
var _selectors2 = require("../../../../../containers/providers/RoutesProvider/selectors");
var _noop = _interopRequireDefault(require("lodash/noop"));
var _react = _interopRequireWildcard(require("react"));
var _reactIntl = require("react-intl");
var _reactNative = require("react-native");
var _reactNativePermissions = require("react-native-permissions");
var _reactNavigation = require("react-navigation");
var _device = require("../../../../../utils/device");
var _hooks = require("../../../../../utils/hooks");
var _navigation = _interopRequireDefault(require("../../../../../utils/navigation"));
var _permission = require("../../../../../utils/permission");
var _actions2 = require("../../../Menu/Tips/MyTipsScreen/actions");
var _selectors3 = require("../../../Menu/Tips/MyTipsScreen/selectors");
var _types2 = require("../../../Menu/Tips/MyTipsScreen/types");
var _actions3 = require("../SelectOrganizationScreen/actions");
var _selectors4 = require("../SelectOrganizationScreen/selectors");
var _actions4 = require("./actions");
var _CancelTipModal = _interopRequireDefault(require("./CancelTipModal"));
var _FastAccessModal = _interopRequireDefault(require("./FastAccessModal"));
var _messages = _interopRequireDefault(require("./messages"));
var _selectors5 = require("./selectors");
var _styles = require("./styles");
var _types3 = require("./types");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/* eslint-disable no-unused-expressions */
var PermissionStatus = /*#__PURE__*/function (PermissionStatus) {
  PermissionStatus[PermissionStatus["Checking"] = 0] = "Checking";
  PermissionStatus[PermissionStatus["Granted"] = 1] = "Granted";
  PermissionStatus[PermissionStatus["Blocked"] = 2] = "Blocked";
  return PermissionStatus;
}(PermissionStatus || {});
const VideoRecordScreen = ({
  isFocused
}) => {
  const {
    formatMessage
  } = (0, _reactIntl.useIntl)();
  const [permissionStatus, setPermissionStatus] = (0, _react.useState)(PermissionStatus.Checking);
  const incidentVideos = (0, _hooks.useSelector)((0, _selectors.makeSelectNewTipIncidentVideos)());
  const shouldShowCancelTipModal = (0, _hooks.useSelector)((0, _selectors5.makeSelectShouldShowCancelTipModal)());
  const shouldShowBottomScreenAction = (0, _hooks.useSelector)((0, _selectors5.makeSelectShouldShowBottomScreenAction)());
  const userOrganizations = (0, _hooks.useSelector)((0, _selectors5.makeSelectUserOrganizations)());
  const shouldShowCallModal = (0, _hooks.useSelector)((0, _selectors5.makeSelectShouldShowCallModal)());
  const requestingOrganizations = (0, _hooks.useSelector)((0, _selectors4.makeSelectRequestingOrganizations)());
  const shouldShowTipCreatedModal = (0, _hooks.useSelector)((0, _selectors5.makeSelectShouldShowTipCreatedModal)());
  const tipCreatedData = (0, _hooks.useSelector)((0, _selectors5.makeSelectTipCreatedData)());
  const screenAction = (0, _hooks.useSelector)((0, _selectors2.makeSelectScreenAction)());
  const creatingTipWithChat = (0, _hooks.useSelector)((0, _selectors5.makeSelectCreatingTipWithChat)());
  const uploadingVideo = (0, _hooks.useSelector)((0, _selectors5.makeSelectUploadingVideo)());
  const createTipMode = (0, _hooks.useSelector)((0, _selectors5.makeSelectCreateTipMode)());
  const lastActiveTip = (0, _hooks.useSelector)((0, _selectors3.makeSelectLastActiveTip)());
  const lastTipOrganization = (0, _hooks.useSelector)((0, _selectors5.makeSelectLastTipOrganization)());
  const shouldShowFastAccessModal = (0, _hooks.useSelector)((0, _selectors5.makeSelectShouldShowFastAccessModal)());
  const uploadVideoRequestAction = (0, _hooks.useAction)(_actions4.uploadVideoRequest);
  const addNewTipScreenAction = (0, _hooks.useAction)(_actions.addScreenAction);
  const getUserOrganizationsAction = (0, _hooks.useAction)(_actions4.getUserOrganizationsRequest);
  const showCancelIncidentModalAction = (0, _hooks.useAction)(_actions4.showCancelIncidentModal);
  const showCallModalAction = (0, _hooks.useAction)(_actions4.showCallModal);
  const hideModalAction = (0, _hooks.useAction)(_actions4.hideCallModal);
  const getIntersectOrganizationsRequestAction = (0, _hooks.useAction)(_actions3.getIntersectOrganizationsRequest);
  const hideTipCreatedModalAction = (0, _hooks.useAction)(_actions4.hideTipCreatedModal);
  const createTipWithChatAction = (0, _hooks.useAction)(_actions4.createTipWithChatRequest);
  const getTipsRequestAction = (0, _hooks.useAction)(_actions2.getTipsRequest);
  const resetStateAction = (0, _hooks.useAction)(_actions2.resetState);
  const getLastActiveTipOrganizationAction = (0, _hooks.useAction)(_actions4.getLastActiveTipOrganization);
  const hideFastAccessModalAction = (0, _hooks.useAction)(_actions4.hideFastAccessModal);
  const showFastAccessModalAction = (0, _hooks.useAction)(_actions4.showFastAccessModal);
  const cameraRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(() => {
    //("New Tip screen")
    if (shouldShowBottomScreenAction) {
      hideFastAccessModalAction();
      addNewTipScreenAction({
        actionText: formatMessage(_messages.default.continue),
        cancel: showCancelIncidentModalAction,
        action: getIntersectOrganizationsRequestAction,
        loading: requestingOrganizations
      });
    }
  }, [hideFastAccessModalAction, requestingOrganizations, shouldShowBottomScreenAction]);
  const tryRequestCameraPermissions = () => {
    (0, _permission.requestCameraPermissions)().then(() => {
      setPermissionStatus(PermissionStatus.Granted);
    }).catch(() => {
      setPermissionStatus(PermissionStatus.Blocked);
    });
  };
  (0, _react.useEffect)(() => {
    if (isFocused) {
      tryRequestCameraPermissions();
      getUserOrganizationsAction();
      resetStateAction();
      getTipsRequestAction({
        tipStatus: _types2.TipStatus.Active,
        paging: false
      });
    }
  }, [isFocused]);
  (0, _react.useEffect)(() => {
    if (lastActiveTip) {
      getLastActiveTipOrganizationAction(lastActiveTip.organization);
    }
  }, [lastActiveTip]);
  const stopCamera = (0, _react.useCallback)(() => {
    var _cameraRef$current;
    (_cameraRef$current = cameraRef.current) === null || _cameraRef$current === void 0 || _cameraRef$current.pausePreview();
  }, []);
  const startCamera = (0, _react.useCallback)(() => {
    var _cameraRef$current2;
    (_cameraRef$current2 = cameraRef.current) === null || _cameraRef$current2 === void 0 || _cameraRef$current2.resumePreview();
  }, []);
  const onRecordFinished = (0, _react.useCallback)(filePath => {
    uploadVideoRequestAction(filePath);
  }, []);
  const goToTipDetail = (0, _react.useCallback)(() => {
    hideTipCreatedModalAction();
    _navigation.default.navigate(_screens.default.Menu.Tips.TipDetail, {
      incident: tipCreatedData.incident,
      showChat: createTipMode === _types3.CreateTipMode.Chat
    });
  }, [tipCreatedData, createTipMode]);
  const goToLastTipDetail = (0, _react.useCallback)(() => {
    hideFastAccessModalAction();
    _navigation.default.navigate(_screens.default.Menu.Tips.TipDetail, {
      incident: lastActiveTip
    });
  }, [hideFastAccessModalAction, lastActiveTip]);
  const handleOnRecordStarted = (0, _react.useCallback)(() => {
    hideFastAccessModalAction();
  }, [hideFastAccessModalAction]);
  const renderCamera = () => {
    if (permissionStatus === PermissionStatus.Checking) {
      return /*#__PURE__*/_react.default.createElement(_components.LoadingIndicator, {
        message: formatMessage(_messages.default.checkingPermissions)
      });
    }
    if (permissionStatus === PermissionStatus.Granted) {
      return /*#__PURE__*/_react.default.createElement(_styles.TipCameraContainer, null, /*#__PURE__*/_react.default.createElement(_components.TipCamera, {
        isRecordEnabled: userOrganizations.length > 0,
        tipCameraMode: _types.TipCameraMode.camera,
        incidentVideos: incidentVideos,
        ref: cameraRef,
        isFocused: isFocused,
        isChatDisabled: !!screenAction || creatingTipWithChat || uploadingVideo || userOrganizations.length === 0,
        onRecordStarted: handleOnRecordStarted,
        onRecordFinished: onRecordFinished,
        onPhonePress: showCallModalAction,
        onChatPress: createTipWithChatAction
      }), /*#__PURE__*/_react.default.createElement(_FastAccessModal.default, {
        onOpen: goToLastTipDetail,
        isVisible: shouldShowFastAccessModal && !!lastActiveTip,
        hideModal: hideFastAccessModalAction,
        incident: lastActiveTip,
        organization: lastTipOrganization
      }));
    }
    if (permissionStatus === PermissionStatus.Blocked) {
      return /*#__PURE__*/_react.default.createElement(_styles.BlockedPermissionContainer, null, /*#__PURE__*/_react.default.createElement(_styles.BlockedPermissionMessage, null, formatMessage(_messages.default.permissionsBlockedMessage)), /*#__PURE__*/_react.default.createElement(_components.GradientButton, {
        text: _device.isAndroid ? formatMessage(_messages.default.tryAgain) : formatMessage(_messages.default.openSettings),
        onPress: _device.isAndroid ? tryRequestCameraPermissions : _reactNativePermissions.openSettings
      }));
    }
    return null;
  };
  return isFocused ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.StatusBar, {
    barStyle: "dark-content",
    backgroundColor: "white"
  }), /*#__PURE__*/_react.default.createElement(_components.SafeAreaContainer, null, renderCamera(), /*#__PURE__*/_react.default.createElement(_CancelTipModal.default, {
    onShow: stopCamera,
    onHide: startCamera,
    onPressYes: showFastAccessModalAction,
    isVisible: shouldShowCancelTipModal
  }), /*#__PURE__*/_react.default.createElement(_components.CallModal, {
    onShow: stopCamera,
    onHide: startCamera,
    isVisible: shouldShowCallModal,
    hideModal: hideModalAction,
    organizations: userOrganizations
  }), /*#__PURE__*/_react.default.createElement(_components.ScreenActionModal, {
    isVisible: shouldShowTipCreatedModal,
    title: formatMessage(_messages.default.tipCreatedTitle, {
      organizationName: tipCreatedData.organizationName
    }),
    message: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.Message, null, formatMessage(_messages.default.tipCreatedMessage)), /*#__PURE__*/_react.default.createElement(_styles.AcknowledgmentText, null, formatMessage(_messages.default.acknowledgment))),
    actionText: formatMessage(_messages.default.seeMyTip),
    onAction: goToTipDetail,
    onHide: createTipMode !== _types3.CreateTipMode.Chat ? hideTipCreatedModalAction : _noop.default
  }))) : null;
};
var _default = exports.default = (0, _reactNavigation.withNavigationFocus)(VideoRecordScreen);
//# sourceMappingURL=index.js.map