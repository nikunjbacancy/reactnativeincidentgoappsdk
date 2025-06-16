"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _assets = require("../../../../assets");
var _components = require("../../../../components");
var _incidentCodeCore = require("incident-code-core");
var _react = _interopRequireWildcard(require("react"));
var _reactIntl = require("react-intl");
var _reactNative = require("react-native");
var _hooks = require("../../../../utils/hooks");
var _navigation = _interopRequireDefault(require("../../../../utils/navigation"));
var _actions = require("./actions");
var _messages = _interopRequireDefault(require("./messages"));
var _selectors = require("./selectors");
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const SelectOrganizationScreen = ({
  navigation: {
    getParam
  }
}) => {
  const fromMenu = getParam('fromMenu');
  const {
    formatMessage
  } = (0, _reactIntl.useIntl)();
  const organizations = (0, _hooks.useSelector)((0, _selectors.makeSelectOrganizations)());
  const selectedOrganizations = (0, _hooks.useSelector)((0, _selectors.makeSelectSelectedOrganizations)());
  const nextButtonEnabled = (0, _hooks.useSelector)((0, _selectors.makeSelectEnableNextButton)());
  const error = (0, _hooks.useSelector)((0, _selectors.makeSelectError)());
  const errorMessage = (0, _hooks.useSelector)((0, _selectors.makeSelectErrorMessage)());
  const getOrganizationsAction = (0, _hooks.useAction)(_actions.getOrganizationsRequest);
  const updateOrganizationsAction = (0, _hooks.useAction)(_actions.updateOrganizationsRequest);
  const toggleSelectOrganizationAction = (0, _hooks.useAction)(_actions.toggleSelectOrganization);
  (0, _react.useEffect)(() => {
    getOrganizationsAction();
  }, []);
  if (!organizations) return /*#__PURE__*/_react.default.createElement(_components.LoadingIndicator, null);
  const onSearchChanged = (0, _incidentCodeCore.debounce)(keyword => {
    getOrganizationsAction(keyword);
  }, 300);
  const handleNextButtonClicked = () => {
    updateOrganizationsAction({
      data: selectedOrganizations,
      fromMenu
    });
  };
  const renderHeader = () => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, fromMenu ? /*#__PURE__*/_react.default.createElement(_styles.HeaderRow, null, /*#__PURE__*/_react.default.createElement(_styles.Logo, null), /*#__PURE__*/_react.default.createElement(_styles.TitleRow, null, /*#__PURE__*/_react.default.createElement(_styles.TitleText, null, formatMessage(_messages.default.title))), /*#__PURE__*/_react.default.createElement(_styles.InfoRow, null, /*#__PURE__*/_react.default.createElement(_styles.InfoText, null, formatMessage(_messages.default.info, {
    required: /*#__PURE__*/_react.default.createElement(_styles.RequiredText, {
      key: "1"
    }, formatMessage(_messages.default.required))
  })))) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_styles.LogoRow, null, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    source: _assets.images.logoWithText()
  })), /*#__PURE__*/_react.default.createElement(_styles.InfoRow, null, /*#__PURE__*/_react.default.createElement(_styles.InfoText, null, formatMessage(_messages.default.info, {
    required: /*#__PURE__*/_react.default.createElement(_styles.RequiredText, {
      key: "1"
    }, formatMessage(_messages.default.required))
  })))), /*#__PURE__*/_react.default.createElement(_styles.SearchRow, null, /*#__PURE__*/_react.default.createElement(_styles.SearchInput, {
    keyboardAppearance: "light",
    placeholder: formatMessage(_messages.default.searchPlaceholder),
    onChangeText: onSearchChanged
  })), error && /*#__PURE__*/_react.default.createElement(_styles.ErrorRow, null, /*#__PURE__*/_react.default.createElement(_styles.ErrorMessage, null, errorMessage)));
  const renderItem = itemInfo => {
    const organization = itemInfo.item;
    return /*#__PURE__*/_react.default.createElement(_styles.ItemRow, {
      onPress: () => toggleSelectOrganizationAction(organization.id)
    }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, organization.isSelected && /*#__PURE__*/_react.default.createElement(_styles.ItemCheckImage, {
      source: _assets.images.icCheck()
    }), /*#__PURE__*/_react.default.createElement(_styles.ItemText, null, itemInfo.item.name)));
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.StatusBar, {
    barStyle: "dark-content",
    backgroundColor: "white"
  }), !fromMenu && /*#__PURE__*/_react.default.createElement(_styles.Background, null), /*#__PURE__*/_react.default.createElement(_components.SafeAreaContainer, null, /*#__PURE__*/_react.default.createElement(_styles.List, {
    keyExtractor: organization => {
      var _organization$id;
      return ((_organization$id = organization.id) === null || _organization$id === void 0 ? void 0 : _organization$id.toString()) || '';
    },
    ListHeaderComponent: renderHeader(),
    data: organizations,
    extraData: organizations,
    renderItem: renderItem
  }), fromMenu ? /*#__PURE__*/_react.default.createElement(_styles.ContinueButtonRow, null, /*#__PURE__*/_react.default.createElement(_styles.SelectButton, {
    disabled: !nextButtonEnabled,
    onCancel: _navigation.default.back,
    text: formatMessage(_messages.default.select),
    onPress: handleNextButtonClicked,
    tintColor: _assets.colors.white
  })) : /*#__PURE__*/_react.default.createElement(_styles.ContinueButtonRow, null, /*#__PURE__*/_react.default.createElement(_components.GradientButton, {
    disabled: !nextButtonEnabled,
    text: formatMessage(_messages.default.next),
    onPress: handleNextButtonClicked
  }))));
};
var _default = exports.default = SelectOrganizationScreen;
//# sourceMappingURL=index.js.map