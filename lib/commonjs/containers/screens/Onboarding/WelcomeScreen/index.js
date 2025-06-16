"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _components = require("../../../../components");
var _screens = _interopRequireDefault(require("../../../../containers/providers/RoutesProvider/screens"));
var _react = _interopRequireWildcard(require("react"));
var _reactIntl = require("react-intl");
var _reactNative = require("react-native");
var _hooks = require("../../../../utils/hooks");
var _actions = require("./actions");
var _messages = _interopRequireDefault(require("./messages"));
var _PaginationDots = _interopRequireDefault(require("./PaginationDots"));
var _selectors = require("./selectors");
var _styles = require("./styles");
var _WelcomeSwiper = _interopRequireDefault(require("./WelcomeSwiper"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const WelcomeScreen = ({
  navigation: {
    replace,
    getParam,
    goBack
  }
}) => {
  const {
    formatMessage
  } = (0, _reactIntl.useIntl)();
  const fromFeedback = getParam('fromFeedback');
  const currentPage = (0, _hooks.useSelector)((0, _selectors.makeSelectCurrentPage)());
  const lastIndex = (0, _hooks.useSelector)((0, _selectors.makeSelectLastIndex)());
  const welcomeItems = (0, _hooks.useSelector)((0, _selectors.makeSelectWelcomeItems)());
  const changePageAction = (0, _hooks.useAction)(_actions.changePage);
  const nextPageAction = (0, _hooks.useAction)(_actions.nextPage);
  const finishWelcomeAction = (0, _hooks.useAction)(_actions.finishWelcome);
  const resetCurrentPageAction = (0, _hooks.useAction)(_actions.resetCurrentPage);
  (0, _react.useEffect)(() => function componentWillUnmount() {
    resetCurrentPageAction();
  }, [fromFeedback]);
  const handleFinishWelcomeAction = () => {
    if (fromFeedback) return goBack();
    finishWelcomeAction();
    replace(_screens.default.Onboarding.SignIn);
    return null;
  };
  const handleNextPageAction = () => {
    if (currentPage + 1 > lastIndex - 1) {
      if (fromFeedback) return goBack();
      return handleFinishWelcomeAction();
    }
    nextPageAction();
    return null;
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_reactNative.StatusBar, {
    barStyle: "dark-content",
    backgroundColor: "white"
  }), /*#__PURE__*/_react.default.createElement(_styles.Background, null), /*#__PURE__*/_react.default.createElement(_components.SafeAreaContainer, null, /*#__PURE__*/_react.default.createElement(_WelcomeSwiper.default, {
    index: currentPage,
    onIndexChange: changePageAction,
    welcomeItems: welcomeItems
  }), /*#__PURE__*/_react.default.createElement(_styles.PaginationRow, null, /*#__PURE__*/_react.default.createElement(_PaginationDots.default, {
    size: lastIndex,
    currentPage: currentPage
  })), /*#__PURE__*/_react.default.createElement(_styles.BottomNav, null, /*#__PURE__*/_react.default.createElement(_styles.SkipButton, {
    onPress: handleFinishWelcomeAction,
    text: formatMessage(_messages.default.skip)
  }), /*#__PURE__*/_react.default.createElement(_styles.NextButton, {
    onPress: handleNextPageAction
  }))));
};
var _default = exports.default = WelcomeScreen;
//# sourceMappingURL=index.js.map