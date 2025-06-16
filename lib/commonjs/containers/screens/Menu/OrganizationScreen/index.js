"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _assets = require("../../../../assets");
var _components = require("../../../../components");
var _screens = _interopRequireDefault(require("../../../../containers/providers/RoutesProvider/screens"));
var _reject = _interopRequireDefault(require("lodash/reject"));
var _react = _interopRequireWildcard(require("react"));
var _reactIntl = require("react-intl");
var _reactNative = require("react-native");
var _reactNativeRootToast = _interopRequireDefault(require("react-native-root-toast"));
var _hooks = require("../../../../utils/hooks");
var _navigation = _interopRequireDefault(require("../../../../utils/navigation"));
var _actions = require("./actions");
var _messages = _interopRequireDefault(require("./messages"));
var _OrganizationItem = _interopRequireDefault(require("./OrganizationItem"));
var _selectors = require("./selectors");
var _styles = require("./styles");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const OrganizationScreen = () => {
  const {
    formatMessage
  } = (0, _reactIntl.useIntl)();
  const isLoading = (0, _hooks.useSelector)((0, _selectors.makeSelectIsLoading)());
  const organizations = (0, _hooks.useSelector)((0, _selectors.makeSelectUserOrganizations)());
  const getUserOrganizationsAction = (0, _hooks.useAction)(_actions.getUserOrganizationsRequest);
  const deleteUserOrganizationAction = (0, _hooks.useAction)(_actions.deleteUserOrganizationRequest);
  (0, _react.useEffect)(() => {
    getUserOrganizationsAction();
  }, []);
  const onDelete = organization => {
    if (organizations.length === 1) {
      _reactNativeRootToast.default.show(formatMessage(_messages.default.alert), {
        position: _reactNativeRootToast.default.positions.CENTER
      });
      return;
    }
    const filteredOrganizations = (0, _reject.default)(organizations, {
      id: organization.id
    });
    deleteUserOrganizationAction(filteredOrganizations);
  };
  const goToSelectOrganization = () => {
    _navigation.default.navigate(_screens.default.Menu.Organization.SelectOrganizations);
  };
  const renderItem = itemInfo => /*#__PURE__*/_react.default.createElement(_OrganizationItem.default, {
    onDelete: onDelete,
    organization: itemInfo.item
  });
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.StatusBar, {
    barStyle: "dark-content",
    backgroundColor: "white"
  }), /*#__PURE__*/_react.default.createElement(_components.SafeAreaContainer, null, /*#__PURE__*/_react.default.createElement(_components.Header, {
    title: formatMessage(_messages.default.title)
  }), isLoading ? /*#__PURE__*/_react.default.createElement(_components.LoadingIndicator, null) : /*#__PURE__*/_react.default.createElement(_styles.List, {
    keyExtractor: org => {
      var _org$id;
      return ((_org$id = org.id) === null || _org$id === void 0 ? void 0 : _org$id.toString()) || '';
    },
    data: organizations,
    extraData: organizations,
    renderItem: renderItem
  }), /*#__PURE__*/_react.default.createElement(_styles.AddButtonRow, null, /*#__PURE__*/_react.default.createElement(_components.ScreenActionButton, {
    onCancel: _navigation.default.back,
    onPress: goToSelectOrganization,
    text: formatMessage(_messages.default.addNewOrganization),
    tintColor: _assets.colors.white
  }))));
};
var _default = exports.default = OrganizationScreen;
//# sourceMappingURL=index.js.map