"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimerErrorField = exports.TimeInputField = exports.SubmitButtonRow = exports.SetTimerErrorField = exports.ModalContainer = exports.InputRow = exports.CloseButton = void 0;
var _components = require("../../../../../../components");
var _styled = _interopRequireDefault(require("../../../../../../utils/styled"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 *
 * Set Timer Modal styles
 *
 */

const CloseButton = exports.CloseButton = (0, _styled.default)(_components.IconButton)`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background-color: ${({
  theme
}) => theme.colors.white};
  position: absolute;
  top: -60px;
  right: 20px;
`;
const ModalContainer = exports.ModalContainer = _styled.default.View`
  background-color: ${({
  theme
}) => theme.colors.white};
  border-radius: 20px;
  height: 65%;
  width: 100%;
  display: flex;
  position: relative;
`;
const InputRow = exports.InputRow = _styled.default.View`
  display: flex;
  flex-direction: row;
  margin: 10px 15px;
  height: 25%;
`;
const TimeInputField = exports.TimeInputField = (0, _styled.default)(_components.TextInputField).attrs(({
  theme: {
    colors
  }
}) => ({
  placeholderTextColor: colors.lighter,
  textAlignVertical: 'center',
  textAlignHorizontal: 'center'
}))`
  flex: 1;
  padding: 0 15px;
  margin: 0 5px;
  font-size: 30px;
  text-align: center;
  color: ${({
  theme
}) => theme.colors.dark};
  background: ${({
  theme
}) => theme.colors.nearWhite};
  border-radius: 6px;
`;
const SubmitButtonRow = exports.SubmitButtonRow = _styled.default.View`
  margin: 10px 15px 15px;
`;
const TimerErrorField = exports.TimerErrorField = (0, _styled.default)(_components.ErrorField)`
  margin: 0 30px;
  height: 7%;
  justify-content: center;
  font-size: 14px;
`;
const SetTimerErrorField = exports.SetTimerErrorField = _styled.default.Text`
  color: ${({
  theme
}) => theme.colors.red};
  font-size: ${({
  theme
}) => theme.fonts.smallSize};
  text-align: center;
  padding: 10px;
`;
//# sourceMappingURL=styles.js.map