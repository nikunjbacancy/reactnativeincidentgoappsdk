"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _assets = require("../../../../../../assets");
var _react = _interopRequireWildcard(require("react"));
var _reactNativeCountdownComponent = _interopRequireDefault(require("react-native-countdown-component"));
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const CountDownClock = ({
  inPanic,
  onCountdownWarning,
  countdown,
  running,
  onPressed,
  warningTriggered,
  onFinish
}) => {
  const OnCountDownChange = e => {
    // //("isPanic--->",inPanic)
    // //("warningTriggered--->",warningTriggered)
    if (e <= 36 && !inPanic && !warningTriggered) {
      onCountdownWarning();
    }
  };
  (0, _react.useEffect)(() => {
    //("countdown-->",countdown)
  }, [countdown]);

  // //("countdown --->",countdown)
  // //("running timer --->",running)

  return /*#__PURE__*/_react.default.createElement(_styles.ClockWrapper, null, /*#__PURE__*/_react.default.createElement(_reactNativeCountdownComponent.default, {
    digitStyle: {
      backgroundColor: _assets.colors.nearWhite
    },
    digitTxtStyle: {
      color: _assets.colors.background3,
      fontFamily: _assets.fonts.defaultFamily // Resolves OnePlus7T size issue
    }
    // id={`key-${localTimer}`}
    ,
    until: countdown,
    size: 40,
    timeToShow: ['H', 'M', 'S'],
    running: running,
    onPress: onPressed,
    onFinish: onFinish,
    onChange: OnCountDownChange
  }));
};
var _default = exports.default = CountDownClock; // export default React.memo(CountDownClock, (prevProps, nextProps) => {
//   return (
//     prevProps.countdown === nextProps.countdown
//   );
// });
/**
 * colors.highlight2 = red
 * colors.highlight = dark blue/purple
 * colors.highlight3 = lighter purple
 */
//# sourceMappingURL=index.js.map