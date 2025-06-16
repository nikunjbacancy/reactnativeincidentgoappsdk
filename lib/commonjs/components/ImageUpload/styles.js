"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UserPortraitContainer = exports.UploadInfoContainer = exports.UploadInfo = exports.ImgDescriptionText = exports.ImageUploadContainer = exports.DeletePhoto = void 0;
var _styled = _interopRequireDefault(require("../../utils/styled"));
var _IconButton = _interopRequireDefault(require("../IconButton"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const UserPortraitContainer = exports.UserPortraitContainer = _styled.default.View`
  position: relative;
  margin: 15px;
  flex: 1;
`;
const ImgDescriptionText = exports.ImgDescriptionText = _styled.default.Text(({
  theme: {
    text,
    colors,
    fonts
  }
}) => ({
  ...text,
  color: colors.lightGrey,
  fontSize: fonts.smallSize,
  textTransform: 'uppercase',
  textAlign: 'center',
  marginTop: 5
}));
const UploadInfoContainer = exports.UploadInfoContainer = _styled.default.View`
  position: absolute;
  top: 10%;
  left: 50%;
  width: 200px;
  margin-left: -100px;
`;
const UploadInfo = exports.UploadInfo = _styled.default.Text(({
  theme: {
    text,
    colors,
    fonts
  }
}) => ({
  ...text,
  color: colors.lightGrey,
  fontSize: fonts.smallSize,
  textTransform: 'uppercase',
  textAlign: 'center',
  marginTop: 5
}));
const ImageUploadContainer = exports.ImageUploadContainer = _styled.default.View`
  position: relative;
  flex: 1;
  padding: 15% 0;
`;
const DeletePhoto = exports.DeletePhoto = (0, _styled.default)(_IconButton.default)`
  position: absolute;
  bottom: 0;
  right: 10px;
`;
//# sourceMappingURL=styles.js.map