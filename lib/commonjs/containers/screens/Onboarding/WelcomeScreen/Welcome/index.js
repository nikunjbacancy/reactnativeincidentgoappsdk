"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _assets = require("../../../../../assets");
var _get = _interopRequireDefault(require("lodash/get"));
var _react = _interopRequireDefault(require("react"));
var _reactIntl = require("react-intl");
var _messages = _interopRequireDefault(require("../messages"));
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// import { Image } from 'react-native';

const Welcome = ({
  welcomeItem: {
    imageKey,
    titleKey,
    textKey
  }
}) => {
  const {
    formatMessage
  } = (0, _reactIntl.useIntl)();
  const image = (0, _get.default)(_assets.images, imageKey);
  const title = formatMessage((0, _get.default)(_messages.default, titleKey));
  const text = formatMessage((0, _get.default)(_messages.default, textKey));
  return /*#__PURE__*/_react.default.createElement(_styles.Container, null, /*#__PURE__*/_react.default.createElement(_styles.Image, {
    source: image()
  }), /*#__PURE__*/_react.default.createElement(_styles.Title, null, title), /*#__PURE__*/_react.default.createElement(_styles.Text, null, text));
};
var _default = exports.default = Welcome;
//# sourceMappingURL=index.js.map