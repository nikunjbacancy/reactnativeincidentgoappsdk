"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _assets = require("../../../../../assets");
var _components = require("../../../../../components");
var _debounce = _interopRequireDefault(require("lodash/debounce"));
var _react = _interopRequireWildcard(require("react"));
var _reactIntl = require("react-intl");
var _reactNative = require("react-native");
var _reactNativePermissions = require("react-native-permissions");
var _hooks = require("../../../../../utils/hooks");
var _navigation = _interopRequireDefault(require("../../../../../utils/navigation"));
var _messages = _interopRequireDefault(require("../ContactScreen/messages"));
var _actions = require("./actions");
var _ContactItem = _interopRequireDefault(require("./ContactItem"));
var _selectors = require("./selectors");
var _styles = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const AddContactScreen = () => {
  const {
    formatMessage
  } = (0, _reactIntl.useIntl)();
  const getContactsRequestAction = (0, _hooks.useAction)(_actions.getContactsRequest);
  const filterContactsAction = (0, _hooks.useAction)(_actions.filterContacts);
  const addContactRequestAction = (0, _hooks.useAction)(_actions.addContactRequest);
  const filteredContacts = (0, _hooks.useSelector)((0, _selectors.makeSelectFilteredContacts)());
  const permissionStatus = (0, _hooks.useSelector)((0, _selectors.makeSelectPermissionStatus)());
  (0, _react.useEffect)(() => {
    getContactsRequestAction();
  }, []);
  const onSelectContact = (0, _react.useCallback)(contact => {
    addContactRequestAction(contact);
  }, []);
  if (permissionStatus === _reactNativePermissions.RESULTS.UNAVAILABLE) return /*#__PURE__*/_react.default.createElement(_components.LoadingIndicator, null);
  if (permissionStatus !== _reactNativePermissions.RESULTS.GRANTED) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.StatusBar, {
    barStyle: "dark-content",
    backgroundColor: "white"
  }), /*#__PURE__*/_react.default.createElement(_components.SafeAreaContainer, null, /*#__PURE__*/_react.default.createElement(_styles.ErrorContainer, null, /*#__PURE__*/_react.default.createElement(_styles.ErrorHeader, null, /*#__PURE__*/_react.default.createElement(_styles.ErrorText, null, formatMessage(_messages.default.addContactTitle)), /*#__PURE__*/_react.default.createElement(_components.ErrorView, {
    errorMessage: formatMessage(_messages.default.contactPermissionError)
  })))));
  const debouncedFilterContacts = (0, _debounce.default)(filterText => {
    filterContactsAction(filterText);
  }, 100);
  const renderItem = itemInfo => /*#__PURE__*/_react.default.createElement(_ContactItem.default, {
    person: itemInfo.item,
    onSelectContact: onSelectContact
  });
  const renderEmpty = () => /*#__PURE__*/_react.default.createElement(_styles.NoMatchesContainer, null, /*#__PURE__*/_react.default.createElement(_styles.NoMatchesText, null, formatMessage(_messages.default.noMatches)));
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.StatusBar, {
    barStyle: "dark-content",
    backgroundColor: "white"
  }), /*#__PURE__*/_react.default.createElement(_components.SafeAreaContainer, null, /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_components.Header, {
    title: formatMessage(_messages.default.addContactTitle)
  }), /*#__PURE__*/_react.default.createElement(_styles.InputRow, null, /*#__PURE__*/_react.default.createElement(_styles.TextInput, {
    keyboardAppearance: "light",
    placeholder: formatMessage(_messages.default.searchPlaceholder),
    onChangeText: debouncedFilterContacts
  })), /*#__PURE__*/_react.default.createElement(_styles.List, {
    data: filteredContacts,
    keyboardShouldPersistTaps: "always",
    keyExtractor: item => (item === null || item === void 0 ? void 0 : item.id) || '',
    ListEmptyComponent: renderEmpty(),
    renderItem: renderItem
  })), /*#__PURE__*/_react.default.createElement(_styles.BackButtonRow, null, /*#__PURE__*/_react.default.createElement(_components.ScreenActionButton, {
    onCancel: _navigation.default.back,
    tintColor: _assets.colors.white
  }))));
};
var _default = exports.default = AddContactScreen;
//# sourceMappingURL=index.js.map