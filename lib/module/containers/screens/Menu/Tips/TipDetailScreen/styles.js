import { images } from '../../../../../assets';
import { BackButton as RNBackButton } from '../../../../../components';
import styled from '../../../../../utils/styled';
export const Logo = styled.Image.attrs({
  source: images.logo()
})`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 25px;
  left: 20px;
  tint-color: white;
`;
export const BackButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  height: 50px;
  align-items: center;
`;
export const BackButton = styled(RNBackButton)`
  background-color: ${({
  theme
}) => theme.colors.transparent};
`;
export const CategoryContainer = styled.View`
  flex: 0.15;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({
  theme
}) => theme.colors.transparent};
  height: 100%;
`;
export const CategoryImage = styled.Image`
  height: 36px;
  width: 36px;
`;
export const OrganizationContainer = styled.View`
  flex: 0.65;
  height: 100%;
  justify-content: center;
  background-color: ${({
  theme
}) => theme.colors.transparent};
`;
export const OrganizationName = styled.Text`
  color: ${({
  theme
}) => theme.colors.dark};
  font-family: ${({
  theme
}) => theme.fonts.defaultBoldFamily};
`;
export const CategoryContent = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const CategoryName = styled.Text`
  color: ${({
  theme
}) => theme.colors.dark};
`;
//# sourceMappingURL=styles.js.map