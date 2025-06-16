"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _assets = require("../../../../assets");
var _components = require("../../../../components");
var _constants = require("../../../../containers/app/constants");
var _screens = _interopRequireDefault(require("../../../../containers/providers/RoutesProvider/screens"));
var _react = _interopRequireDefault(require("react"));
var _reactIntl = require("react-intl");
var _reactNative = require("react-native");
var _reactNativeRootToast = _interopRequireDefault(require("react-native-root-toast"));
var _hooks = require("../../../../utils/hooks");
var _navigation = _interopRequireDefault(require("../../../../utils/navigation"));
var _promise = require("../../../../utils/promise");
var _sdkConfigs = require("../../../../sdkConfigs");
var _actions = require("./actions");
var _constants2 = require("./constants");
var _messages = _interopRequireDefault(require("./messages"));
var _selectors = require("./selectors");
var _styles = require("./styles");
var _validator = _interopRequireDefault(require("./validator"));
var _reactNativeBackgroundGeolocation = _interopRequireDefault(require("react-native-background-geolocation"));
var _api = require("../../../../api");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const FeedbackScreen = () => {
  const showEmailButton = _sdkConfigs.sdkConfigs.configs.sdkEnvironment !== 'PROD' ? true : false;
  const {
    formatMessage
  } = (0, _reactIntl.useIntl)();
  const isSending = (0, _hooks.useSelector)((0, _selectors.makeSelectIsSending)());
  const shouldShowModal = (0, _hooks.useSelector)((0, _selectors.makeSelectShowSuccessModal)());
  const showSuccessModalAction = (0, _hooks.useAction)(_actions.showSuccessModal);
  const hideSuccessModalAction = (0, _hooks.useAction)(_actions.hideSuccessModal);
  const schema = (0, _validator.default)(formatMessage);
  const initialValues = {
    email: '',
    comment: ''
  };
  const openFaq = () => _reactNative.Linking.openURL(_constants.LINKS.faq);
  const openTos = () => _reactNative.Linking.openURL(_constants.LINKS.tos);
  const openPrivacy = () => _reactNative.Linking.openURL(_constants.LINKS.privacy);
  const openQuickStartGuide = () => _navigation.default.navigate(_screens.default.Menu.Feedback.QuickStartGuide, {
    fromFeedback: true
  });
  const goBack = async () => {
    hideSuccessModalAction();
    await (0, _promise.delay)(300);
    _navigation.default.back();
  };
  const sendLocationLogs = () => {
    _reactNativeBackgroundGeolocation.default.logger.emailLog(_sdkConfigs.sdkConfigs.configs.email).then(() => {}, err => {
      _api.logger.error('Email Location Logs Error', 'emailLog Error: ' + (err === null || err === void 0 ? void 0 : err.message), err);
    });
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.StatusBar, {
    barStyle: "dark-content",
    backgroundColor: "white"
  }), /*#__PURE__*/_react.default.createElement(_components.SafeAreaContainer, null, /*#__PURE__*/_react.default.createElement(_reactNative.ScrollView, {
    contentContainerStyle: {
      flex: 1
    },
    keyboardShouldPersistTaps: "always",
    keyboardDismissMode: "on-drag"
  }, /*#__PURE__*/_react.default.createElement(_components.Header, {
    title: formatMessage(_messages.default.title)
  }), /*#__PURE__*/_react.default.createElement(_styles.InfoRow, null, /*#__PURE__*/_react.default.createElement(_styles.InfoText, null, formatMessage(_messages.default.info))), /*#__PURE__*/_react.default.createElement(_components.Form, {
    start: _constants2.SEND_FEEDBACK_REQUEST,
    resolve: _constants2.SEND_FEEDBACK_SUCCESS,
    reject: _constants2.SEND_FEEDBACK_FAILURE,
    initialValues: initialValues,
    validationSchema: schema,
    onResolve: showSuccessModalAction,
    onReject: action => _reactNativeRootToast.default.show(action.payload.message, {
      position: _reactNativeRootToast.default.positions.BOTTOM
    })
  }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.InputRow, null, /*#__PURE__*/_react.default.createElement(_styles.EmailInput, {
    name: "email",
    autoCapitalize: "none",
    keyboardType: "email-address",
    textContentType: "emailAddress",
    placeholder: formatMessage(_messages.default.emailInput)
  })), /*#__PURE__*/_react.default.createElement(_styles.StyledErrorField, {
    name: "email"
  }), /*#__PURE__*/_react.default.createElement(_styles.TextRow, null, /*#__PURE__*/_react.default.createElement(_styles.TextInput, {
    name: "comment",
    autoCompleteType: "off",
    textContentType: "none",
    multiline: true,
    numberOfLines: 4,
    placeholder: formatMessage(_messages.default.commentInput)
  })), /*#__PURE__*/_react.default.createElement(_styles.StyledErrorField, {
    name: "comment"
  }), /*#__PURE__*/_react.default.createElement(_components.PaddingView, {
    size: 1
  })), /*#__PURE__*/_react.default.createElement(_styles.PrivacyRow, null, /*#__PURE__*/_react.default.createElement(_styles.PrivacyText, null, formatMessage(_messages.default.guideDescription, {
    guideText: /*#__PURE__*/_react.default.createElement(_styles.PrivacyLinkText, {
      key: "0",
      onPress: openQuickStartGuide
    }, formatMessage(_messages.default.guideText)),
    faq: /*#__PURE__*/_react.default.createElement(_styles.PrivacyLinkText, {
      key: "1",
      onPress: openFaq
    }, formatMessage(_messages.default.faq)),
    privacy: /*#__PURE__*/_react.default.createElement(_styles.PrivacyLinkText, {
      key: "2",
      onPress: openPrivacy
    }, formatMessage(_messages.default.privacy)),
    tos: /*#__PURE__*/_react.default.createElement(_styles.PrivacyLinkText, {
      key: "3",
      onPress: openTos
    }, formatMessage(_messages.default.tos))
  }))), showEmailButton && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.InfoRow, null, /*#__PURE__*/_react.default.createElement(_styles.InfoText, null, formatMessage(_messages.default.locationLogDesc))), /*#__PURE__*/_react.default.createElement(_styles.SendButtonRow, null, /*#__PURE__*/_react.default.createElement(_components.GradientButton, {
    text: formatMessage(_messages.default.locationLogButton),
    onPress: sendLocationLogs
  }))), /*#__PURE__*/_react.default.createElement(_styles.SendButtonRow, null, /*#__PURE__*/_react.default.createElement(_components.ScreenActionButtonField, {
    disabled: isSending,
    loading: isSending,
    text: formatMessage(_messages.default.send),
    onCancel: _navigation.default.back,
    tintColor: _assets.colors.white
  }))), /*#__PURE__*/_react.default.createElement(_components.ScreenActionModal, {
    isVisible: shouldShowModal,
    actionText: formatMessage(_messages.default.ok),
    title: formatMessage(_messages.default.feedbackSentTitle),
    message: formatMessage(_messages.default.feedbackSentDescription),
    onAction: goBack,
    onHide: goBack
  }))));
};
var _default = exports.default = FeedbackScreen;
//# sourceMappingURL=index.js.map