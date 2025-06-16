import { images } from '../../../../../assets';
import { PanicInfo } from '../../../../../components';
import Badge from '../../../../../components/Badge';
import ControlButton from '../../../../../components/ControlButton';
import { TwilioVideoLocalView } from 'react-native-twilio-video-webrtc';
import styled from '../../../../../utils/styled';

import { RecordType } from './types';

export const Container : any = styled.View`
  flex: 1;
  align-items: center;
  position: relative;
`;

export const Camera : any = styled.View`
  width: 97%;
  height: 83%;
  margin-top: 10px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background3};
`;

export const MiddleControls : any = styled.View`
  flex-direction: row;
  width: 100%;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  padding: 15px 30px 0;
  margin-top: auto;
`;

export const SafeButton : any = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.dark};
  height: 40px;
  width: 47%;
  border-radius: 6px;
  justify-content: center;
`;

export const SafeButtonText : any = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.defaultFamily};
  font-size: ${({ theme }) => theme.fonts.normalSize};
  text-align: center;
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

export const ToggleContainer : any = styled.TouchableOpacity<{
  recordType: RecordType;
}>`
  background-color: ${({ theme }) => theme.colors.dark};
  border-radius: 100px;
  overflow: hidden;
  width: 148px;
  height: 62px;
  position: relative;
  padding: 5px;
  display: flex;
  flex-direction: ${({ recordType }) =>
    recordType === RecordType.Audio ? 'row' : 'row-reverse'};
  align-items: center;
`;

export const ToggleImageContainer : any = styled.View`
  border-radius: 100px;
  width: 53px;
  height: 53px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ToggleImage : any = styled.Image`
  width: 53px;
  height: 53px;
`;

export const ToggleText : any = styled.Text`
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.defaultFamily};
  font-size: 14px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

export const RecordContainer : any = styled.View`
  width: 97%;
  margin-top: 10px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background4};
`;

export const Logo : any = styled.Image.attrs({
  source: images.logo(),
})`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 20px;
  left: 15px;
  tint-color: white;
`;

export const OrganizationName : any = styled.Text`
  position: absolute;
  top: 25px;
  right: 25px;
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.defaultFamily};
  font-size: ${({ theme }) => theme.fonts.normalSize};
`;

export const SharingText : any = styled.Text`
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.defaultFamily};
  font-size: ${({ theme }) => theme.fonts.smallSize};
`;

export const RecordDot : any = styled.View`
  width: 18px;
  height: 18px;
  position: absolute;
  bottom: 30px;
  left: 100px;
  border-radius: 18px;
  background-color: red;
`;

export const AudioStream  : any = styled.Image.attrs(() => ({
  source: images.icAudio(),
}))`
  width: 27px;
  height: 24px;
  position: absolute;
  bottom: 27px;
  left: 96px;
  tint-color: ${({ theme }) => theme.colors.light};
`;

export const PanicInfoContainer: any = styled(PanicInfo)`
  bottom: 20px;
  right: 20px;
`;

export const PanicOverlay : any = styled.View.attrs({
  pointerEvents: 'box-none',
})`
  background: rgba(100, 30, 30, 0.5);
  min-width: 100%;
  min-height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
`;

export const TwilioVideoPreview : any = styled(TwilioVideoLocalView)`
  flex: 1;
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
