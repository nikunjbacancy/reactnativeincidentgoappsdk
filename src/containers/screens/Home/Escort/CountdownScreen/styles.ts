import { GradientButton, LoadingIndicator, PanicInfo } from '../../../../../components';
import ControlButton from '../../../../../components/ControlButton';
import styled from '../../../../../utils/styled';

export const Container : any = styled.View<{ isKeyboard: boolean }>`
  flex: 1;
  margin-bottom: ${({ theme, isKeyboard }) =>
    theme.device.hasNotch && isKeyboard ? 45 : 10}px;
`;

export const ButtonRow : any = styled.View`
  justify-content: center;
  align-items: center;
  padding: 40px 20px 10px;
  background: ${({ theme }) => theme.sdkBackgroundColor};
`;

export const InfoRow : any = styled.View`
  margin: 20px 30px 15px;
  align-items: center;
`;

export const SubHeader : any = styled.Text`
  font-family: ${({ theme }) => theme.fonts.defaultSemiBoldFamily};
  font-size: 18px;
  color: ${({ theme }) => theme.colors.dark};
`;

export const InfoText : any = styled.Text`
  color: ${({ theme }) => theme.colors.highlight};
  font-size: ${({ theme }) => theme.fonts.largeSize};
  font-family: ${({ theme }) => theme.fonts.defaultBoldFamily};
  line-height: 28px;
  text-align: center;
  margin-bottom: 20px;
`;

export const ErrorRow : any = styled.View`
  margin: 0 30px 20px;
`;

export const ErrorMessage : any = styled.Text`
  color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.fonts.smallSize};
`;

export const BottomControls : any = styled.View`
  flex-direction: row;
  width: 100%;
  align-content: center;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px 10px 30px;
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

export const PressPanicInfo: any = styled(PanicInfo)`
  bottom: 70px;
  right: 30px;
`;

export const RequestEscortTitle : any = styled.Text`
  text-align: center;
  margin: 20px 60px 0;
  font-size: ${({ theme }) => theme.fonts.titleSize};
  font-family: ${({ theme }) => theme.fonts.defaultSemiBoldFamily};
  color: ${({ theme }) => theme.colors.dark};
`;

export const RequestEscortMessage : any = styled.Text`
  text-align: center;
  margin: 40px 60px 0;
  font-size: ${({ theme }) => theme.fonts.normalSize};
  font-family: ${({ theme }) => theme.fonts.defaultFamily};
  color: ${({ theme }) => theme.colors.dark};
`;

export const RequestEscortLoading: any = styled(LoadingIndicator)`
  max-height: 40px;
`;

export const SafetyButton : any = styled(GradientButton).attrs({
  textStyle: {
    textTransform: 'uppercase',
    fontSize: 20,
  },
})`
  background-color: ${({ theme }) => theme.colors.darkRed};
  margin: 20px auto;
  width: 60%;
  height: 70px;
`;

export const SafetyButtonRow : any = styled.View`
  justify-content: center;
  align-items: center;
  padding: 40px 20px 10px;
  background: ${({ theme }) => theme.sdkBackgroundColor};
`;
