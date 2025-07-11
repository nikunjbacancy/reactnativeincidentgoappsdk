import { images } from '../../../../assets';
import { ErrorField, TextInputField } from '../../../../components';
import { Image } from 'react-native';
import styled from '../../../../utils/styled';

export const Background : any = styled(Image).attrs({
  source: images.backgroundWhite(),
})`
  flex: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: null;
  height: null;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const LogoRow : any = styled.View`
  margin-top: 30px;
  justify-content: center;
  align-items: center;
`;

export const BackButtonCol : any = styled.View`
  position: absolute;
  left: 20px;
  background: ${({ theme }) => theme.colors.white};
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  border-radius: 22px;
`;

export const TitleRow : any = styled.View`
  margin: 30px 30px 15px;
`;

export const TitleText : any = styled.Text`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.dark};
`;

export const ResendText : any = styled.Text`
  font-weight: bold;
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.darker};
`;

export const InputRow : any = styled.View`
  flex-grow: 0;
  margin: 10px 30px;
  padding: 0 15px;
  justify-content: center;
  height: 45px;
  background: ${({ theme }) => theme.colors.nearWhite};
  border-radius: 6px;
`;

export const CodeTextField: any = styled(TextInputField).attrs(
  ({ theme: { colors } }) => ({
    placeholderTextColor: colors.lighter,
  }),
)`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.dark};
`;

export const SubmitButtonRow : any = styled.View`
  margin: 10px 15px 15px;
`;

export const CodeError: any = styled(ErrorField as any)`
  margin: 0 30px;
  justify-content: center;
  font-size: 14px;
`;
