import { images } from '../../../../assets';
import { ErrorField, TextInputField } from '../../../../components';
import { Image, Linking } from 'react-native';
import styled, { css } from '../../../../utils/styled';

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

export const TitleRow : any = styled.View`
  margin: 30px 30px 15px;
`;

export const TitleText : any = styled.Text`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.dark};
`;

export const InputRow : any = styled.View`
  flex-direction: row;
  margin: 10px 30px;
  align-items: center;
  height: 45px;
  background: ${({ theme }) => theme.colors.nearWhite};
  border-radius: 6px;
`;

export const CountryText : any = styled.Text`
  font-size: 15px;
  padding-left: 15px;
  color: ${({ theme }) => theme.colors.dark};
`;

export const PhoneLabelCol : any = styled.View`
  flex-grow: 0;
  border-right-width: 1px;
  border-right-color: ${({ theme }) => theme.colors.lighter};
  padding-right: 15px;
`;

export const PhoneInputCol : any = styled.View`
  flex-grow: 1;
  padding-left: 15px;
`;

export const PhoneText: any = styled(TextInputField).attrs(
  ({ theme: { colors } }) => ({
    placeholderTextColor: colors.lighter,
  }),
)`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.dark};
`;

export const TosRow : any = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 0 30px;
`;

export const AgreeText : any = styled.Text`
  margin: 0 30px 10px 10px;
  ${({ theme }) => theme.colors.dark};
`;

export const PrivacyPolicyText : any = styled.Text.attrs<{ link: any }>(({ link }) => ({
  onPress: link,
}))<{ link: any }>`
  font-weight: bold;
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.darker};
`;

export const LinkText : any = styled.Text.attrs<{ link: string }>(({ link }) => ({
  onPress: () => Linking.openURL(link),
}))<{ link: string }>`
  font-weight: bold;
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.darker};
`;

export const SubmitButtonRow : any = styled.View`
  margin: 10px 15px 15px;
`;

const errorLabelMixin = css`
  margin: 0 30px;
  height: 30px;
  justify-content: center;
  font-size: 14px;
`;

export const PhoneError: any = styled(ErrorField as any).attrs({
  name: 'phone',
})`
  ${errorLabelMixin}
`;

export const AgreeTosError: any = styled(ErrorField as any).attrs({
  name: 'agreeTos',
})`
  ${errorLabelMixin};
`;
