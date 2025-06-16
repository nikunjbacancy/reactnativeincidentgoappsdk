import { LoadingIndicator, ScreenActionTabButton } from '../../../../../components';
import styled from '../../../../../utils/styled';

export const Container : any = styled.View<{ isKeyboard: boolean }>`
  flex: 1;
  margin-bottom: ${({ theme, isKeyboard }) =>
    theme.device.hasNotch && isKeyboard ? 45 : 10}px;
`;

export const RequestEscortContainer : any = styled.View`
  flex: 1;
`;

export const RequestingContainer : any = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
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

export const CancelEscortButton : any = styled(ScreenActionTabButton).attrs(
  ({ theme }) => ({
    continueButtonStyle: {
      backgroundColor: theme.colors.highlight2,
      borderRadius: 6,
    },
    continueButtonTextStyle: {
      color: theme.colors.white,
    },
  }),
)`
  margin: 20px 30px 35px;
`;
