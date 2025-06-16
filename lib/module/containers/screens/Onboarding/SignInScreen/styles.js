import { images } from '../../../../assets';
import { ErrorField, TextInputField } from '../../../../components';
import { Image, Linking } from 'react-native';
import styled, { css } from '../../../../utils/styled';
export const Background = styled(Image).attrs({
  source: images.backgroundWhite()
})`
  flex: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: null;
  height: null;
  background-color: ${({
  theme
}) => theme.colors.white};
`;
export const LogoRow = styled.View`
  margin-top: 30px;
  justify-content: center;
  align-items: center;
`;
export const TitleRow = styled.View`
  margin: 30px 30px 15px;
`;
export const TitleText = styled.Text`
  font-size: 15px;
  color: ${({
  theme
}) => theme.colors.dark};
`;
export const InputRow = styled.View`
  flex-direction: row;
  margin: 10px 30px;
  align-items: center;
  height: 45px;
  background: ${({
  theme
}) => theme.colors.nearWhite};
  border-radius: 6px;
`;
export const CountryText = styled.Text`
  font-size: 15px;
  padding-left: 15px;
  color: ${({
  theme
}) => theme.colors.dark};
`;
export const PhoneLabelCol = styled.View`
  flex-grow: 0;
  border-right-width: 1px;
  border-right-color: ${({
  theme
}) => theme.colors.lighter};
  padding-right: 15px;
`;
export const PhoneInputCol = styled.View`
  flex-grow: 1;
  padding-left: 15px;
`;
export const PhoneText = styled(TextInputField).attrs(({
  theme: {
    colors
  }
}) => ({
  placeholderTextColor: colors.lighter
}))`
  font-size: 15px;
  color: ${({
  theme
}) => theme.colors.dark};
`;
export const TosRow = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 0 30px;
`;
export const AgreeText = styled.Text`
  margin: 0 30px 10px 10px;
  ${({
  theme
}) => theme.colors.dark};
`;
export const PrivacyPolicyText = styled.Text.attrs(({
  link
}) => ({
  onPress: link
}))`
  font-weight: bold;
  text-decoration: underline;
  color: ${({
  theme
}) => theme.colors.darker};
`;
export const LinkText = styled.Text.attrs(({
  link
}) => ({
  onPress: () => Linking.openURL(link)
}))`
  font-weight: bold;
  text-decoration: underline;
  color: ${({
  theme
}) => theme.colors.darker};
`;
export const SubmitButtonRow = styled.View`
  margin: 10px 15px 15px;
`;
const errorLabelMixin = css`
  margin: 0 30px;
  height: 30px;
  justify-content: center;
  font-size: 14px;
`;
export const PhoneError = styled(ErrorField).attrs({
  name: 'phone'
})`
  ${errorLabelMixin}
`;
export const AgreeTosError = styled(ErrorField).attrs({
  name: 'agreeTos'
})`
  ${errorLabelMixin};
`;
//# sourceMappingURL=styles.js.map