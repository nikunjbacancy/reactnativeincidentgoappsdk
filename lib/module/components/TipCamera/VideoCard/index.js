/* eslint-disable no-unused-expressions */
import { colors, images } from '../../../assets';
import RecordTimer from '../../../components/RecordTimer';
import { setTipCameraMode, setTipCameraVideoIndex } from '../../../containers/app/actions';
import React, { useCallback } from 'react';
import { useIntl } from 'react-intl';
import { ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { CircleSnail } from 'react-native-progress';
import { useAction } from '../../../utils/hooks';
import { getFlattenIndex } from '../../../utils/lodash';
import styled from '../../../utils/styled';
import messages from '../messages';
import { TipCameraMode } from '../types';
const VideoCard = ({
  id,
  videoPages,
  currentPage,
  duration,
  thumbnailUrl,
  text,
  navigateClick
}) => {
  const {
    formatMessage
  } = useIntl();
  const setTipCameraModeAction = useAction(setTipCameraMode);
  const setTipCameraVideoIndexAction = useAction(setTipCameraVideoIndex);
  const handleCardPress = useCallback(() => {
    const index = getFlattenIndex({
      id
    })(videoPages) - currentPage;
    setTipCameraModeAction(TipCameraMode.video);
    setTipCameraVideoIndexAction(index);
  }, [id, videoPages, currentPage]);
  if (text) {
    return /*#__PURE__*/React.createElement(TextContainer, {
      onPress: navigateClick
    }, /*#__PURE__*/React.createElement(GradientCountContainer, null, /*#__PURE__*/React.createElement(LinkText, null, text === 'back' ? formatMessage(messages.back) : text)));
  }
  return /*#__PURE__*/React.createElement(Container, {
    disabled: !thumbnailUrl,
    onPress: handleCardPress
  }, /*#__PURE__*/React.createElement(GradientContainer, null, /*#__PURE__*/React.createElement(BackgroundImage, {
    source: {
      uri: thumbnailUrl
    }
  }, !thumbnailUrl && /*#__PURE__*/React.createElement(Loading, {
    color: colors.white
  }), thumbnailUrl && /*#__PURE__*/React.createElement(PlayIcon, {
    source: images.icPlay()
  }), /*#__PURE__*/React.createElement(StyledRecordTimer, {
    recordedTime: duration
  }))));
};
export default VideoCard;
const TextContainer = styled.TouchableOpacity`
  width: 63px;
`;
const Container = styled.TouchableOpacity`
  width: 63px;
  margin-right: 6px;
`;
const GradientCountContainer = styled(LinearGradient).attrs(({
  theme
}) => ({
  colors: theme.colors.videoCardOverlay
}))`
  flex: 1;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
`;
const GradientContainer = styled(LinearGradient).attrs(({
  theme
}) => ({
  colors: theme.colors.videoCardOverlay
}))`
  border-radius: 8px;
  width: 63px;
  margin-right: 6px;
`;
const BackgroundImage = styled(ImageBackground).attrs({
  imageStyle: {
    borderRadius: 8
  }
})`
  min-width: 100%;
  min-height: 100%;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const PlayIcon = styled.Image`
  margin-top: -20px;
`;
const StyledRecordTimer = styled(RecordTimer)`
  bottom: 3px;
`;
const LinkText = styled.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultFamily};
  font-size: 19px;
  line-height: 28px;
  letter-spacing: -0.4px;
  color: ${({
  theme
}) => theme.colors.light};
`;
const Loading = styled(CircleSnail)`
  margin-bottom: 15px;
`;
//# sourceMappingURL=index.js.map