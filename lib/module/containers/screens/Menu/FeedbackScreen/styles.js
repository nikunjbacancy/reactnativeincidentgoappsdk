import { ErrorField, TextInputField } from '../../../../components';
import styled from '../../../../utils/styled';
export const InfoRow = styled.View`
  margin: 20px 30px 15px;
`;
export const InfoText = styled.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultSemiBoldFamily};
  font-size: 16px;
  color: ${({
  theme
}) => theme.colors.dark};
`;
export const InputRow = styled.View`
  flex-direction: row;
  margin: 10px 30px;
  height: 45px;
  background: ${({
  theme
}) => theme.colors.nearWhite};
  border-radius: 6px;
`;
export const TextRow = styled(InputRow)`
  height: 150px;
  padding: 8px 0;
`;
export const EmailInput = styled(TextInputField).attrs(({
  theme: {
    colors
  }
}) => ({
  placeholderTextColor: colors.lighter
}))`
  flex-grow: 1;
  padding: 0 15px;
  font-size: 15px;
  justify-content: center;
  color: ${({
  theme
}) => theme.colors.dark};
`;
export const TextInput = styled(TextInputField).attrs(({
  theme: {
    colors
  }
}) => ({
  placeholderTextColor: colors.lighter,
  textAlignVertical: 'top'
}))`
  flex-grow: 1;
  padding: 0 15px;
  font-size: 15px;
  justify-content: center;
  color: ${({
  theme
}) => theme.colors.dark};
`;
export const StyledErrorField = styled(ErrorField)`
  margin: 0 30px;
  height: 30px;
  justify-content: center;
  font-size: 14px;
`;
export const PrivacyRow = styled.View`
  margin: 10px 30px 20px;
`;
export const PrivacyText = styled.Text`
  font-size: 14px;
  color: ${({
  theme
}) => theme.colors.lightGrey};
`;
export const PrivacyLinkText = styled.Text`
  font-size: 14px;
  color: ${({
  theme
}) => theme.colors.lightGrey};
  text-decoration: underline;
  text-decoration-color: ${({
  theme
}) => theme.colors.lightGrey};
`;
export const SendButtonRow = styled.View`
  margin: 0 15px 15px;
`;
//# sourceMappingURL=styles.js.map