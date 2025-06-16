import { images } from '../../assets';
import React, { FC, useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { Image } from 'react-native';
// import MyPhotoUpload, {MyImageResizerResponse} from 'MyPhotoUpload';
import MyPhotoUpload from '../PhotoUpload/MyPhotoUpload';



import messages from './messages';
import {
  DeletePhoto,
  ImageUploadContainer,
  ImgDescriptionText,
  UploadInfo,
  UploadInfoContainer,
  UserPortraitContainer,
} from './styles';

export enum PortraitMessageType {
  UploadSuccess = 1,
  UploadFail,
  DeleteSuccess,
  DeleteFail,
}

interface Props {
  portraitUrl?: string;
  onUpload: any;
  onDelete?: any;
  actionInfoType: PortraitMessageType | undefined;
}

const ImageUpload: FC<Props> = ({
  portraitUrl,
  onUpload,
  onDelete,
  actionInfoType,
}) => {
  const { formatMessage } = useIntl();
  const [showLoadInfo, setShowLoadInfo] = useState(false);

  const imageDisplay = () => {
    // //("-portraitUrl->",portraitUrl)
    return portraitUrl
      ? { uri: `${portraitUrl}?time=${new Date().getTime()}` }
      : images.noUserImage();
  };

  const onPhotoSelect = (avatar: any) => {
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
    let timeout: any;
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

  return (
    <UserPortraitContainer>
      <ImgDescriptionText>{formatMessage(messages.info)}</ImgDescriptionText>
      {showLoadInfo && (
        <UploadInfoContainer>
          <UploadInfo>{infoText()}</UploadInfo>
        </UploadInfoContainer>
      )}
      <ImageUploadContainer>
        <MyPhotoUpload 
        onResizedImageUri={onPhotoSelect}
        alertTitle={formatMessage(messages.alertTitle)}
        alertMessage={formatMessage(messages.alertMessage)}
        >
          <Image
            style={{
              paddingVertical: 30,
              width: 200,
              height: 200,
              borderRadius: 0,
            }}
            resizeMode="cover"
            source={imageDisplay()}
            key={new Date().getTime()}
          />
        </MyPhotoUpload>
      </ImageUploadContainer>
      {onDelete && (
        <DeletePhoto source={images.icTrash()} onPress={onDeletePress} />
      )}
    </UserPortraitContainer>
  );
};

export default ImageUpload;
