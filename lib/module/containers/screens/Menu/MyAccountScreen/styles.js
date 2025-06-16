import { ErrorField, TextInputField } from '../../../../components';
import styled from '../../../../utils/styled';
export const InfoRow = styled.View`
  margin: 20px 30px 5px;
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
export const DescriptionText = styled.Text(({
  theme: {
    text,
    colors,
    fonts
  }
}) => ({
  ...text,
  color: colors.lightGrey,
  fontSize: fonts.smallSize,
  textTransform: 'uppercase',
  marginLeft: 30
}));
export const FormContent = styled.View`
  flex: 1;
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
export const NameInputField = styled(TextInputField).attrs(({
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
export const UpdateButtonRow = styled.View`
  margin: 10px 15px 15px;
`;
export const NameErrorField = styled(ErrorField)`
  margin: 0 30px;
  height: 30px;
  justify-content: center;
  font-size: 14px;
`;
//# sourceMappingURL=styles.js.map