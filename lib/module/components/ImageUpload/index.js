import { images } from '../../assets';
import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { Image } from 'react-native';
// import MyPhotoUpload, {MyImageResizerResponse} from 'MyPhotoUpload';
import MyPhotoUpload from '../PhotoUpload/MyPhotoUpload';
import messages from './messages';
import { DeletePhoto, ImageUploadContainer, ImgDescriptionText, UploadInfo, UploadInfoContainer, UserPortraitContainer } from './styles';
export let PortraitMessageType = /*#__PURE__*/function (PortraitMessageType) {
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
  } = useIntl();
  const [showLoadInfo, setShowLoadInfo] = useState(false);
  const imageDisplay = () => {
    // //("-portraitUrl->",portraitUrl)
    return portraitUrl ? {
      uri: `${portraitUrl}?time=${new Date().getTime()}`
    } : images.noUserImage();
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
          return formatMessage(messages.uploadSuccess);
        case PortraitMessageType.UploadFail:
          return formatMessage(messages.uploadFailure);
        case PortraitMessageType.DeleteSuccess:
          return formatMessage(messages.deleteSuccess);
        case PortraitMessageType.DeleteFail:
          return formatMessage(messages.deleteFailure);
        default:
          setShowLoadInfo(false);
          break;
      }
    }
    return null;
  };
  useEffect(() => {
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
  return /*#__PURE__*/React.createElement(UserPortraitContainer, null, /*#__PURE__*/React.createElement(ImgDescriptionText, null, formatMessage(messages.info)), showLoadInfo && /*#__PURE__*/React.createElement(UploadInfoContainer, null, /*#__PURE__*/React.createElement(UploadInfo, null, infoText())), /*#__PURE__*/React.createElement(ImageUploadContainer, null, /*#__PURE__*/React.createElement(MyPhotoUpload, {
    onResizedImageUri: onPhotoSelect,
    alertTitle: formatMessage(messages.alertTitle),
    alertMessage: formatMessage(messages.alertMessage)
  }, /*#__PURE__*/React.createElement(Image, {
    style: {
      paddingVertical: 30,
      width: 200,
      height: 200,
      borderRadius: 0
    },
    resizeMode: "cover",
    source: imageDisplay(),
    key: new Date().getTime()
  }))), onDelete && /*#__PURE__*/React.createElement(DeletePhoto, {
    source: images.icTrash(),
    onPress: onDeletePress
  }));
};
export default ImageUpload;
//# sourceMappingURL=index.js.map