"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _assets = require("../../../../../../assets");
var _components = require("../../../../../../components");
var _IconButton = _interopRequireDefault(require("../../../../../../components/IconButton"));
var _styles = require("../../../../../../containers/screens/Menu/Tips/MyTipsScreen/TipItem/styles");
var _react = _interopRequireDefault(require("react"));
var _reactIntl = require("react-intl");
var _location = require("../../../../../../utils/location");
var _styled = _interopRequireDefault(require("../../../../../../utils/styled"));
var _messages = _interopRequireDefault(require("../messages"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const FastAccessModal = ({
  isVisible,
  hideModal,
  incident,
  organization,
  onOpen
}) => {
  const {
    formatMessage
  } = (0, _reactIntl.useIntl)();
  const date = (0, _location.getIncidentDate)(incident === null || incident === void 0 ? void 0 : incident.createdAt);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, isVisible && /*#__PURE__*/_react.default.createElement(Container, null, incident && organization ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(CloseButton, {
    source: _assets.images.icClose(),
    onPress: hideModal
  }), /*#__PURE__*/_react.default.createElement(TitleContainer, null, /*#__PURE__*/_react.default.createElement(TitleBold, null, formatMessage(_messages.default.fastAccess)), /*#__PURE__*/_react.default.createElement(Title, null, formatMessage(_messages.default.fastAccessRest))), /*#__PURE__*/_react.default.createElement(_styles.InfoContainer, null, /*#__PURE__*/_react.default.createElement(_components.IncidentCategoryImage, {
    incidentType: incident.type,
    active: !incident.isResolved,
    category: incident.category,
    border: true
  }), /*#__PURE__*/_react.default.createElement(_styles.TextContainer, null, /*#__PURE__*/_react.default.createElement(_styles.TextTitle, {
    numberOfLines: 1
  }, organization === null || organization === void 0 ? void 0 : organization.name), /*#__PURE__*/_react.default.createElement(_styles.TextDescription, {
    numberOfLines: 1
  }, date)), /*#__PURE__*/_react.default.createElement(OpenButton, {
    onPress: onOpen,
    text: formatMessage(_messages.default.open)
  }))) : /*#__PURE__*/_react.default.createElement(_components.LoadingIndicator, null)));
};
const Container = _styled.default.View`
  border-radius: 17px;
  height: 100px;
  background-color: ${({
  theme
}) => theme.colors.white};
  position: absolute;
  bottom: 26%;
  left: 0;
  right: 0;
  margin-left: 5%;
  margin-right: 5%;
  overflow: hidden;
`;
const TitleContainer = _styled.default.View`
  display: flex;
  flex-direction: row;
  margin-top: 13px;
  margin-left: 10px;
  margin-bottom: auto;
`;
const TitleBold = _styled.default.Text`
  font-weight: bold;
`;
const Title = _styled.default.Text``;
const CloseButton = (0, _styled.default)(_IconButton.default).attrs(({
  theme
}) => ({
  tintColor: theme.colors.lightGrey
}))`
  width: 44px;
  height: 44px;
  position: absolute;
  right: 0;
`;
const OpenButton = (0, _styled.default)(_components.GradientButton)`
  width: 64px;
  height: 42px;
  border-radius: 13px;
  margin-left: auto;
  margin-top: auto;
`;
var _default = exports.default = FastAccessModal;
//# sourceMappingURL=index.js.map