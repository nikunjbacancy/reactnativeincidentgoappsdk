"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TipCameraContainer = exports.Message = exports.Camera = exports.BlockedPermissionMessage = exports.BlockedPermissionContainer = exports.AcknowledgmentText = void 0;
var _reactNativeCamera = require("react-native-camera");
var _styled = _interopRequireDefault(require("../../../../../utils/styled"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const Camera = exports.Camera = (0, _styled.default)(_reactNativeCamera.RNCamera)`
  width: 97%;
  height: 83%;
  margin-top: 10px;
  border-radius: 10px;
  overflow: hidden;
`;
const Message = exports.Message = _styled.default.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultFamily};
  font-size: ${({
  theme
}) => theme.fonts.normalSize};
  color: ${({
  theme
}) => theme.colors.dark};
  text-align: center;
`;
const AcknowledgmentText = exports.AcknowledgmentText = _styled.default.Text`
  margin-top: 20px;
  color: ${({
  theme
}) => theme.colors.dark};
  font-family: ${({
  theme
}) => theme.fonts.defaultBoldFamily};
  font-size: ${({
  theme
}) => theme.fonts.normalSize};
  text-align: center;
`;
const BlockedPermissionContainer = exports.BlockedPermissionContainer = _styled.default.View`
  flex: 1;
`;
const BlockedPermissionMessage = exports.BlockedPermissionMessage = _styled.default.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultBoldFamily};
  font-size: ${({
  theme
}) => theme.fonts.normalSize};
  color: ${({
  theme
}) => theme.colors.dark};
  margin-top: auto;
  margin-bottom: auto;
  text-align: center;
`;
const TipCameraContainer = exports.TipCameraContainer = _styled.default.View`
  position: relative;
  display: flex;
  flex: 1;
`;
//# sourceMappingURL=styles.js.map