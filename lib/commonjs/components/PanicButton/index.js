"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _assets = require("../../assets");
var _isEqual = _interopRequireDefault(require("lodash/isEqual"));
var _react = _interopRequireWildcard(require("react"));
var _reactNative = require("react-native");
var _styled = _interopRequireDefault(require("../../utils/styled"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const ACTION_TIMER = 2000;
const COLORS = [_assets.colors.red, _assets.colors.red];
const areEqual = (prevProps, nextProps) => {
  return (0, _isEqual.default)(prevProps, nextProps);
};
const PanicButton = ({
  text,
  onPress,
  onFill,
  isPanicMode,
  textStyle,
  style,
  withIcon
}) => {
  const pressAction = new _reactNative.Animated.Value(0);
  const [buttonWidth, setButtonWidth] = (0, _react.useState)(0);
  const [buttonHeight, setButtonHeight] = (0, _react.useState)(0);
  const filledRef = (0, _react.useRef)(false);
  (0, _react.useEffect)(() => {
    if (!isPanicMode && filledRef.current) {
      filledRef.current = false;
      _reactNative.Animated.timing(pressAction, {
        duration: ACTION_TIMER / 10,
        toValue: 0,
        useNativeDriver: false
      }).start();
    }
  }, [filledRef.current, pressAction, isPanicMode]);
  const handlePressIn = (0, _react.useCallback)(() => {
    onPress();
    _reactNative.Animated.timing(pressAction, {
      duration: ACTION_TIMER,
      toValue: 1,
      useNativeDriver: false
    }).start(callback => {
      if (callback.finished) {
        filledRef.current = true;
        onFill();
      }
    });
  }, [_reactNative.Animated, pressAction, onFill]);
  const handlePressOut = (0, _react.useCallback)(() => {
    if (!filledRef.current) {
      _reactNative.Animated.timing(pressAction, {
        duration: ACTION_TIMER / 10,
        toValue: 0,
        useNativeDriver: false
      }).start();
    }
  }, [_reactNative.Animated, pressAction]);
  const getButtonWidthLayout = (0, _react.useCallback)(event => {
    setButtonWidth(event.nativeEvent.layout.width);
    setButtonHeight(event.nativeEvent.layout.height);
  }, []);
  const getProgressStyles = (0, _react.useCallback)(() => {
    const width = pressAction.interpolate({
      inputRange: [0, 1],
      outputRange: [0, buttonWidth]
    });
    const backgroundColor = pressAction.interpolate({
      inputRange: [0, 1],
      outputRange: COLORS
    });
    return {
      width,
      height: buttonHeight,
      backgroundColor
    };
  }, [pressAction, buttonWidth]);
  return /*#__PURE__*/_react.default.createElement(_reactNative.TouchableWithoutFeedback, {
    disabled: isPanicMode,
    onPressIn: handlePressIn,
    onPressOut: handlePressOut
  }, /*#__PURE__*/_react.default.createElement(Button, {
    onLayout: getButtonWidthLayout,
    style: style
  }, /*#__PURE__*/_react.default.createElement(BackgroundFill, {
    style: getProgressStyles()
  }), withIcon && /*#__PURE__*/_react.default.createElement(Icon, {
    source: _assets.images.siren()
  }), /*#__PURE__*/_react.default.createElement(Text, {
    style: textStyle
  }, text)));
};
const Button = _styled.default.View`
  background-color: ${({
  theme
}) => theme.colors.darkRed};
  width: 47%;
  height: 40px;
  border-radius: 6px;
  justify-content: center;
  overflow: hidden;
  
`;
const Icon = _styled.default.Image`
  height: 40%;
  margin: 5px auto 10px;
  tint-color: ${({
  theme
}) => theme.colors.light};
  align-self: center;
`;
const BackgroundFill = (0, _styled.default)(_reactNative.Animated.View)`
  position: absolute;
  top: 0;
  left: 0;
`;
const Text = _styled.default.Text`
  color: ${({
  theme
}) => theme.colors.light};
  font-family: ${({
  theme
}) => theme.fonts.defaultFamily};
  font-size: ${({
  theme
}) => theme.fonts.normalSize};
  text-align: center;
`;
var _default = exports.default = /*#__PURE__*/(0, _react.memo)(PanicButton, areEqual);
//# sourceMappingURL=index.js.map