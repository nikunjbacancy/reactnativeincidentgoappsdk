"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _api = require("../../../api");
var _components = require("../../../components");
var _isEmpty = _interopRequireDefault(require("lodash/isEmpty"));
var _react = _interopRequireWildcard(require("react"));
var _notification = require("../../../utils/notification");
var _styled = _interopRequireDefault(require("../../../utils/styled"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const BottomTabBarIcon = ({
  source,
  focused,
  size,
  showBadge
}) => {
  const [badges, setBadges] = (0, _react.useState)([]);
  (0, _react.useEffect)(() => {
    if (showBadge) {
      (0, _notification.getBadges)().then(notificationBadges => {
        setBadges(notificationBadges);
      });
      const notificationAdded = notificationBadges => {
        setBadges(notificationBadges);
      };
      _api.event.on(_api.AppEvent.OnNotificationBadge, notificationAdded);
      return function componentDidUnMount() {
        _api.event.off(_api.AppEvent.OnNotificationBadge, notificationAdded);
      };
    } else {
      return;
    }
  }, [showBadge]);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, focused ? /*#__PURE__*/_react.default.createElement(Icon, {
    source: source,
    size: size
  }) : /*#__PURE__*/_react.default.createElement(InactiveIcon, {
    source: source,
    size: size
  }), showBadge && !(0, _isEmpty.default)(badges) && /*#__PURE__*/_react.default.createElement(_components.Badge, {
    length: badges.length
  }));
};
BottomTabBarIcon.defaultProps = {
  size: 28
};
const Icon = _styled.default.Image`
  width: ${({
  size
}) => `${size}px`};
  height: ${({
  size
}) => `${size}px`};
  tint-color: ${({
  theme
}) => theme.colors.highlight};
  margin-top: 5px;
`;
const InactiveIcon = _styled.default.Image`
  width: ${({
  size
}) => `${size}px`};
  height: ${({
  size
}) => `${size}px`};
  tint-color: ${({
  theme
}) => theme.colors.dark};
  margin-top: 5px;
`;
var _default = exports.default = BottomTabBarIcon;
//# sourceMappingURL=BottomTabBarIcon.js.map