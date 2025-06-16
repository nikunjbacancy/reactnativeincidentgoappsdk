"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PortraitMessageType = void 0;
var _assets = require("../../assets");
var _react = _interopRequireWildcard(require("react"));
var _reactIntl = require("react-intl");
var _reactNative = require("react-native");
var _MyPhotoUpload = _interopRequireDefault(require("../PhotoUpload/MyPhotoUpload"));
var _messages = _interopRequireDefault(require("./messages"));
var _styles = require("./styles");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// import MyPhotoUpload, {MyImageResizerResponse} from 'MyPhotoUpload';
let PortraitMessageType = exports.PortraitMessageType = /*#__PURE__*/function (PortraitMessageType) {
  PortraitMessageType[PortraitMessageType["UploadSuccess"] = 1] = "UploadSuccess";
  PortraitMessageType[PortraitMessageType["UploadFail"] = 2] = "UploadFail";
  PortraitMessageType[PortraitMessageType["DeleteSuccess"] = 3] = "DeleteSuccess";
  PortraitMessageType[PortraitMessageType["DeleteFail"] = 4] = "DeleteFail";
  return PortraitMessageType;
}({});
const ImageUpload = ({
  portraitUrl,
  onUpload,
  onDelete,
  actionInfoType
}) => {
  const {
    formatMessage
  } = (0, _reactIntl.useIntl)();
  const [showLoadInfo, setShowLoadInfo] = (0, _react.useState)(false);
  const imageDisplay = () => {
    // //("-portraitUrl->",portraitUrl)
    return portraitUrl ? {
      uri: `${portraitUrl}?time=${new Date().getTime()}`
    } : _assets.images.noUserImage();
  };
  const onPhotoSelect = avatar => {
    if (avatar) {
      // //("selected photo-->",avatar.path)
      onUpload(avatar.path);
    }
  };
  const onDeletePress = () => {
    onDelete();
  };
  const infoText = () => {
    if (actionInfoType) {
      switch (actionInfoType) {
        case PortraitMessageType.UploadSuccess:
          return formatMessage(_messages.default.uploadSuccess);
        case PortraitMessageType.UploadFail:
          return formatMessage(_messages.default.uploadFailure);
        case PortraitMessageType.DeleteSuccess:
          return formatMessage(_messages.default.deleteSuccess);
        case PortraitMessageType.DeleteFail:
          return formatMessage(_messages.default.deleteFailure);
        default:
          setShowLoadInfo(false);
          break;
      }
    }
    return null;
  };
  (0, _react.useEffect)(() => {
    let timeout;
    if (actionInfoType) {
      setShowLoadInfo(true);
      timeout = setTimeout(() => {
        setShowLoadInfo(false);
      }, 3500);
    }
    return () => {
      setShowLoadInfo(false);
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [actionInfoType]);
  return /*#__PURE__*/_react.default.createElement(_styles.UserPortraitContainer, null, /*#__PURE__*/_react.default.createElement(_styles.ImgDescriptionText, null, formatMessage(_messages.default.info)), showLoadInfo && /*#__PURE__*/_react.default.createElement(_styles.UploadInfoContainer, null, /*#__PURE__*/_react.default.createElement(_styles.UploadInfo, null, infoText())), /*#__PURE__*/_react.default.createElement(_styles.ImageUploadContainer, null, /*#__PURE__*/_react.default.createElement(_MyPhotoUpload.default, {
    onResizedImageUri: onPhotoSelect,
    alertTitle: formatMessage(_messages.default.alertTitle),
    alertMessage: formatMessage(_messages.default.alertMessage)
  }, /*#__PURE__*/_react.default.createElement(_reactNative.Image, {
    style: {
      paddingVertical: 30,
      width: 200,
      height: 200,
      borderRadius: 0
    },
    resizeMode: "cover",
    source: imageDisplay(),
    key: new Date().getTime()
  }))), onDelete && /*#__PURE__*/_react.default.createElement(_styles.DeletePhoto, {
    source: _assets.images.icTrash(),
    onPress: onDeletePress
  }));
};
var _default = exports.default = ImageUpload;
//# sourceMappingURL=index.js.map