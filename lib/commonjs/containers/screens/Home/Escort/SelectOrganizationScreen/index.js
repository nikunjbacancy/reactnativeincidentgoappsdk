"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _assets = require("../../../../../assets");
var _components = require("../../../../../components");
var _actions = require("../../../../../containers/app/actions");
var _screens = _interopRequireDefault(require("../../../../../containers/providers/RoutesProvider/screens"));
var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));
var _react = _interopRequireWildcard(require("react"));
var _reactIntl = require("react-intl");
var _reactNative = require("react-native");
var _reactNavigation = require("react-navigation");
var _device = require("../../../../../utils/device");
var _hooks = require("../../../../../utils/hooks");
var _navigation = _interopRequireDefault(require("../../../../../utils/navigation"));
var _types = require("../EscortTypeScreen/types");
var _actions2 = require("../RequestScreen/actions");
var _actions3 = require("./actions");
var _messages = _interopRequireDefault(require("./messages"));
var _selectors = require("./selectors");
var _styles = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const EscortScreen = ({
  isFocused
}) => {
  const {
    formatMessage
  } = (0, _reactIntl.useIntl)();
  const [comment, setComment] = (0, _react.useState)('');
  const [isKeyboardShow, setIsKeyboardShow] = (0, _react.useState)(false);
  const organizations = (0, _hooks.useSelector)((0, _selectors.makeSelectIntersectOrganizations)());
  const nextButtonEnabled = (0, _hooks.useSelector)((0, _selectors.makeSelectEnableContinueButton)());
  const error = (0, _hooks.useSelector)((0, _selectors.makeSelectError)());
  const errorMessage = (0, _hooks.useSelector)((0, _selectors.makeSelectErrorMessage)());
  const requestingOrganizations = (0, _hooks.useSelector)((0, _selectors.makeSelectRequestingOrganizations)());
  const toggleSelectOrganizationAction = (0, _hooks.useAction)(_actions3.toggleSelectOrganization);
  const getIntersectOrganizationsAction = (0, _hooks.useAction)(_actions3.getIntersectOrganizationsRequest);
  const setLocation = (0, _hooks.useAction)(_actions.UpdateLocationData);
  const startEscortAction = (0, _hooks.useAction)(_actions2.startEscortRequest);
  (0, _react.useEffect)(() => {
    if (isFocused) {
      getIntersectOrganizationsAction(setLocation);
    }
    let subscriptions;
    subscriptions = [_reactNative.Keyboard.addListener('keyboardDidShow', () => setIsKeyboardShow(true)), _reactNative.Keyboard.addListener('keyboardDidHide', () => setIsKeyboardShow(false))];
    return () => {
      subscriptions.forEach(s => {
        var _s$remove;
        return s === null || s === void 0 || (_s$remove = s.remove) === null || _s$remove === void 0 ? void 0 : _s$remove.call(s);
      });
    };
  }, [isFocused]);
  const call911 = (0, _react.useCallback)(() => (0, _device.makeCall)('911'), []);
  const handleStartEscort = (0, _react.useCallback)(() => {
    startEscortAction(setLocation, comment);
    setComment('');
    _navigation.default.navigate(_screens.default.Home.Escort.EscortRequest, {
      isPanic: false,
      requestType: _types.EscortType.Live
    });
  }, [setLocation, comment]);
  if (requestingOrganizations) return /*#__PURE__*/_react.default.createElement(_components.LoadingIndicator, null);
  const renderHeader = () => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_components.Header, {
    title: formatMessage(_messages.default.title)
  }), /*#__PURE__*/_react.default.createElement(_styles.InfoRow, null, /*#__PURE__*/_react.default.createElement(_styles.InfoText, null, formatMessage(_messages.default.info))), error && /*#__PURE__*/_react.default.createElement(_styles.ErrorRow, null, /*#__PURE__*/_react.default.createElement(_styles.ErrorMessage, null, errorMessage)));
  const renderItem = itemInfo => {
    const organization = itemInfo.item;
    return /*#__PURE__*/_react.default.createElement(_styles.ItemRow, {
      onPress: () => toggleSelectOrganizationAction(organization.id)
    }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, organization.isSelected && /*#__PURE__*/_react.default.createElement(_styles.ItemCheckImage, {
      source: _assets.images.icCheck()
    }), /*#__PURE__*/_react.default.createElement(_styles.ItemText, null, itemInfo.item.name)));
  };
  const renderOrganizations = () => {
    {
      console.log("render org==>", organizations);
    }
    if ((0, _isEmpty.default)(organizations)) {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_components.Header, {
        title: formatMessage(_messages.default.title)
      }), /*#__PURE__*/_react.default.createElement(_styles.Call911Container, null, /*#__PURE__*/_react.default.createElement(_styles.Call911Title, null, formatMessage(_messages.default.call911Title)), /*#__PURE__*/_react.default.createElement(_styles.Call911Info, null, formatMessage(_messages.default.call911Info)), /*#__PURE__*/_react.default.createElement(_styles.Call911Button, {
        text: formatMessage(_messages.default.call911),
        onPress: call911
      })));
    }
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, renderHeader(), /*#__PURE__*/_react.default.createElement(_styles.List, {
      keyExtractor: org => {
        var _org$id;
        return (org === null || org === void 0 || (_org$id = org.id) === null || _org$id === void 0 ? void 0 : _org$id.toString()) || '';
      },
      data: organizations || [],
      extraData: organizations,
      renderItem: renderItem
    }), /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: {
        marginTop: 'auto'
      }
    }, /*#__PURE__*/_react.default.createElement(_styles.AddCommentText, null, formatMessage(_messages.default.addComment)), /*#__PURE__*/_react.default.createElement(_styles.AddCommentRow, null, /*#__PURE__*/_react.default.createElement(_styles.AddCommentInput, {
      keyboardAppearance: "light",
      placeholder: formatMessage(_messages.default.commentPlaceholder),
      value: comment,
      onChangeText: setComment,
      multiline: true,
      numberOfLines: 4
    }))), /*#__PURE__*/_react.default.createElement(_styles.CreateEscortButtonRow, null, /*#__PURE__*/_react.default.createElement(_components.ScreenActionButton, {
      disabled: !nextButtonEnabled,
      text: formatMessage(_messages.default.requestEscort),
      onPress: handleStartEscort
    })));
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.StatusBar, {
    barStyle: "dark-content",
    backgroundColor: "white"
  }), /*#__PURE__*/_react.default.createElement(_components.SafeAreaContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Container, {
    isKeyboard: isKeyboardShow
  }, renderOrganizations())));
};
var _default = exports.default = (0, _reactNavigation.withNavigationFocus)(EscortScreen);
//# sourceMappingURL=index.js.map