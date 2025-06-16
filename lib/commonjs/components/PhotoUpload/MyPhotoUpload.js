"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactNative = require("react-native");
var _reactNativeImagePicker = require("react-native-image-picker");
var _reactNativeImageResizer = _interopRequireDefault(require("react-native-image-resizer"));
var _reactNativeFs = _interopRequireDefault(require("react-native-fs"));
var _permission = require("../../utils/permission");
var _reactNativePermissions = require("react-native-permissions");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } // import ImagePicker from 'react-native-image-picker'
class MyPhotoUpload extends _react.default.Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "state", {
      maxHeight: this.props.height || 600,
      maxWidth: this.props.width || 600,
      format: this.props.format || 'JPEG',
      quality: this.props.quality || 100,
      buttonDisabled: false
    });
    _defineProperty(this, "options", {
      title: this.props.photoPickerTitle || 'Select Photo',
      storageOptions: {
        skipBackup: true,
        path: 'images',
        mediaType: 'photo',
        includeBase64: true
      },
      ...this.props.imagePickerProps
    });
    _defineProperty(this, "openImagePicker", async () => {
      var permission = "";
      try {
        permission = await (0, _permission.requestPhotoLibraryPermissions)();
      } catch (e) {
        permission = e;
      }
      if (permission === "granted") {
        this.setState({
          buttonDisabled: true
        });
        if (this.props.onStart) this.props.onStart();

        // get image from image picker
        (0, _reactNativeImagePicker.launchImageLibrary)(this.options, async response => {
          this.setState({
            buttonDisabled: false
          });
          let rotation = 0;
          const {
            originalRotation
          } = response;
          if (this.props.onResponse) this.props.onResponse(response);
          if (response.didCancel) {
            console.log('User cancelled image picker');
            if (this.props.onCancel) this.props.onCancel('User cancelled image picker');
            return;
          } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
            if (this.props.onError) this.props.onError(response.error);
            return;
          } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
            if (this.props.onTapCustomButton) this.props.onTapCustomButton(response.customButton);
            return;
          }
          let {
            maxHeight,
            maxWidth,
            quality,
            format
          } = this.state;

          //Determining rotation param
          if (originalRotation === 90) {
            rotation = 90;
          } else if (originalRotation === 180) {
            //For a few images rotation is 180. 
            rotation = -180;
          } else if (originalRotation === 270) {
            //When taking images with the front camera (selfie), the rotation is 270.
            rotation = -90;
          }
          var imageURI = "";
          response === null || response === void 0 || response.assets.map(({
            uri
          }) => imageURI = uri);
          // resize image
          const resizedImageUri = await _reactNativeImageResizer.default.createResizedImage(imageURI, maxHeight, maxWidth, format, quality, rotation);
          if (this.props.onResizedImageUri) this.props.onResizedImageUri(resizedImageUri);
          const filePath = _reactNative.Platform.OS === 'android' && resizedImageUri.uri.replace ? resizedImageUri.uri.replace('file:/data', '/data') : resizedImageUri.uri;

          // convert image back to base64 string
          const photoData = await _reactNativeFs.default.readFile(filePath, 'base64');
          let source = {
            uri: resizedImageUri.uri
          };
          this.setState({
            avatarSource: source
          });

          // handle photo in props functions as data string
          if (this.props.onPhotoSelect) this.props.onPhotoSelect(photoData);
        });
      } else {
        _reactNative.Alert.alert(this.props.alertTitle, this.props.alertMessage, [{
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        }, {
          text: "Settings",
          onPress: () => (0, _reactNativePermissions.openSettings)()
        }]);
      }
    });
    _defineProperty(this, "renderChildren", props => {
      return _react.default.Children.map(props.children, child => {
        if (child && child.type === _reactNative.Image && this.state.avatarSource) {
          return /*#__PURE__*/_react.default.cloneElement(child, {
            source: this.state.avatarSource
          });
        } else return child;
      });
    });
  }
  componentDidUpdate() {
    if (this.props.onAfterRender) this.props.onAfterRender(this.state);
  }
  render() {
    return /*#__PURE__*/_react.default.createElement(_reactNative.View, {
      style: [styles.container, this.props.containerStyle]
    }, /*#__PURE__*/_react.default.createElement(_reactNative.TouchableOpacity, {
      onPress: this.openImagePicker,
      disabled: this.state.buttonDisabled
    }, this.renderChildren(this.props)));
  }
}
exports.default = MyPhotoUpload;
_defineProperty(MyPhotoUpload, "propTypes", {
  containerStyle: _propTypes.default.object,
  photoPickerTitle: _propTypes.default.string,
  maxHeight: _propTypes.default.number,
  maxWidth: _propTypes.default.number,
  format: _propTypes.default.string,
  quality: _propTypes.default.number,
  onPhotoSelect: _propTypes.default.func,
  // returns the base64 string of uploaded photo
  onError: _propTypes.default.func,
  // if any error occur with response
  onTapCustomButton: _propTypes.default.func,
  // on tap custom button
  onStart: _propTypes.default.func,
  // when user starts (useful for loading, etc)
  onCancel: _propTypes.default.func,
  // when user cancel
  onResponse: _propTypes.default.func,
  // on response exists!
  onRender: _propTypes.default.func,
  // after render
  onResizedImageUri: _propTypes.default.func,
  // when image resized is ready
  imagePickerProps: _propTypes.default.object,
  // react-native-image-picker props
  alertTitle: _propTypes.default.string,
  alertMessage: _propTypes.default.string
});
const styles = _reactNative.StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
//# sourceMappingURL=MyPhotoUpload.js.map