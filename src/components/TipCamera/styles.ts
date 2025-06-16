import { images } from '../../assets';
import { RNCamera } from 'react-native-camera';
import { Circle } from 'react-native-progress';
import Video from 'react-native-video';
import styled from '../../utils/styled';

import Badge from '../Badge';
import ControlButton from '../ControlButton';
import IconButton from '../IconButton';
import LoadingIndicator from '../LoadingIndicator';
import RecordTimer from '../RecordTimer';

export const Container : any = styled.View`
  flex: 1;
  align-items: center;
  position: relative;
  background-color: ${({ theme }) => theme.sdkBackgroundColor};
`;

export const Camera : any = styled(RNCamera)`
  width: 97%;
  height: 83%;
  margin-top: 10px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  flex: 1;
`;

export const TouchableLogo : any = styled.TouchableOpacity.attrs({
})`
  position: absolute;
  width: 30px;
  height: 21px;
  top: 20px;
  left: 15px;
  tint-color: white;
`;

export const Logo : any = styled.Image.attrs({
  source: images.icBack(),
})`
  position: absolute;
  width: 30px;
  height: 21px;
  top: 20px;
  left: 15px;
  tint-color: white;
`;

export const Timer: any = styled(RecordTimer)`
  top: 25px;
`;

export const CameraFlashButton: any = styled(ControlButton).attrs({
  imageStyle: {
    width: 24,
    height: 24,
  },
})`
  position: absolute;
  bottom: 5px;
  left: 0;
`;

export const CameraFlipButton: any = styled(ControlButton).attrs({
  imageStyle: {
    width: 24,
    height: 24,
  },
})`
  position: absolute;
  bottom: 5px;
  right: 5px;
`;

export const BottomControls : any = styled.View`
  flex-direction: row;
  flex: 0.2;
  width: 100%;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  padding-left: 30px;
  padding-right: 30px;
`;

export const PhoneButton: any = styled(ControlButton).attrs(({ theme }) => ({
  imageStyle: {
    tintColor: theme.colors.white,
    width: 30,
    height: 30,
  },
}))`
  background-color: ${({ theme }) => theme.colors.background4};
  width: 62px;
  height: 62px;
`;

export const RecordControls : any = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  height: 74px;
  width: 74px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100px;
  border-width: 6px;
  border-color: ${({ theme }) => theme.colors.lightGrey};
  background-color: ${({ theme }) => theme.colors.white};
`;

export const RecordStart : any = styled.View<{ disabled: boolean }>`
  background-color: ${({ theme: { colors }, disabled }) =>
    disabled ? colors.white : colors.highlight};
  height: 62px;
  width: 62px;
  border-radius: 100px;
`;

export const RecordStop : any = styled.View`
  background-color: ${({ theme }) => theme.colors.highlight2};
  height: 32px;
  width: 32px;
  border-radius: 6px;
`;

export const CircleProgress : any = styled(Circle).attrs(({ theme }) => ({
  color: theme.colors.highlight,
  thickness: 6,
}))`
  position: absolute;
  top: -6px;
  bottom: 6px;
  left: -6px;
  right: 6px;
  height: 74px;
  width: 74px;
`;

export const ChatContainer : any = styled.View`
  position: relative;
  
`;

export const ChatButton: any = styled(ControlButton).attrs(({ theme }) => ({
  imageStyle: {
    tintColor: theme.colors.white,
    width: 29,
    height: 26,
  },
}))`
  background-color: ${({ theme }) => theme.colors.background4};
  width: 62px;
  height: 62px;
`;

export const StyledBadge: any = styled(Badge)`
  width: 20px;
  height: 20px;
  border-radius: 10px;
  position: absolute;
  top: -5px;
  right: -9px;
  border-width: 3px;
  border-color: ${({ theme }) => theme.colors.white};
`;

export const VideoContainer : any = styled.TouchableHighlight`
  flex: 1;
  width: 97%;
  height: 83%;
  position: relative;
  align-items: center;
`;

export const VideoPlayer : any = styled(Video)`
  width: 97%;
  height: 83%;
  flex: 1;
  margin-top: 10px;
  border-radius: 10px;
  overflow: hidden;
`;

export const VideoLoading : any = styled(LoadingIndicator)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.highlight};
`;

export const CloseButton : any = styled(IconButton as any).attrs(({ theme }) => ({
  imageStyle: {
    tintColor: theme.colors.white,
    width: 40,
    height: 40,
  },
}))`
  position: absolute;
  top: 10px;
  right: 5px;
  width: 50px;
  height: 50px;
  padding: 10px;
`;
