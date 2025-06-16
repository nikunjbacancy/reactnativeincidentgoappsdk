import { ScreenActionTabButton } from '../../../../../components';
import styled from '../../../../../utils/styled';
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
  margin: 10px 30px;
  background: ${({
  theme
}) => theme.colors.nearWhite};
  border-radius: 6px;
  height: 150px;
  padding: 8px 0;
`;
export const InputText = styled.TextInput.attrs(({
  theme
}) => ({
  placeholderTextColor: theme.colors.lighter,
  textAlignVertical: 'top'
}))`
  color: ${({
  theme
}) => theme.colors.dark};
  flex-grow: 1;
  padding: 0 15px;
  font-size: 15px;
`;
export const AcknowledgmentRow = styled.View`
  margin: 15px 30px;
`;
export const AcknowledgmentText = styled.Text`
  font-size: 14px;
  color: ${({
  theme
}) => theme.colors.dark};
`;
export const ContinueScreenActionButton = styled(ScreenActionTabButton).attrs(({
  theme
}) => ({
  continueButtonTextStyle: {
    color: theme.colors.dark,
    textTransform: 'uppercase'
  }
}))``;
//# sourceMappingURL=styles.js.map