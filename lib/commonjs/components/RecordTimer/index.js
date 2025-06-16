"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _styled = _interopRequireDefault(require("../../utils/styled"));
var _times = require("../../utils/times");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const RecordTimer = ({
  style,
  isRecording,
  recordedTime
}) => /*#__PURE__*/_react.default.createElement(Container, {
  style: style
}, /*#__PURE__*/_react.default.createElement(Content, null, isRecording && /*#__PURE__*/_react.default.createElement(RedDot, null), /*#__PURE__*/_react.default.createElement(TimerText, null, (0, _times.secondsToMinutes)(recordedTime))));
var _default = exports.default = RecordTimer;
const Container = _styled.default.View`
  position: absolute;
  left: 0;
  right: 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const Content = _styled.default.View`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
`;
const RedDot = _styled.default.View`
  width: 8px;
  height: 8px;
  position: absolute;
  left: -15px;
  border-radius: 4px;
  background-color: red;
`;
const TimerText = _styled.default.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultFamily};
  font-size: 19px;
  line-height: 19px;
  color: ${({
  theme
}) => theme.colors.light};
`;
// letter-spacing: -0.4px;
//# sourceMappingURL=index.js.map