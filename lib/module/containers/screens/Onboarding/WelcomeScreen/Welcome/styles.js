import styled from '../../../../../utils/styled';
export const Container = styled.View`
  flex: 1px;
  padding: 0 30px;
  margin-top: 60px;
  align-items: center;
`;
export const Image = styled.Image`
  padding: 0 30px;
`;
export const Title = styled.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultBoldFamily};
  text-align: center;
  font-size: 22px;
  line-height: 28px;
  color: ${({
  theme
}) => theme.colors.dark};
  margin-top: 20px;
  margin-bottom: 10px;
`;
export const Text = styled.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultFamily};
  text-align: center;
  font-size: 14px;
  line-height: 17px;
  color: ${({
  theme
}) => theme.colors.lighter};
`;
//# sourceMappingURL=styles.js.map