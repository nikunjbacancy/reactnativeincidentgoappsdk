import { images } from '../../../../assets';
import { GradientButton } from '../../../../components';
import { Image } from 'react-native';
import styled from '../../../../utils/styled';
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
  font-family: ${({
  theme
}) => theme.fonts.defaultBoldFamily};
  text-align: center;
  font-size: 22px;
  line-height: 24px;
  color: ${({
  theme
}) => theme.colors.dark};
`;
export const ItemRow = styled.View`
  flex-direction: row;
  margin: 10px 30px;
  align-items: center;
`;
export const ItemIcon = styled.Image`
  margin-right: 16px;
`;
export const ItemText = styled.Text`
  font-size: 15px;
  flex-shrink: 1;
  color: ${({
  theme
}) => theme.colors.dark};
`;
export const ButtonRow = styled.View`
  justify-content: center;
  align-items: center;
  padding: 30px 20px 40px;
  background: ${({
  theme
}) => theme.sdkBackgroundColor};
`;
export const NotYetButton = styled(GradientButton)`
  background-color: ${({
  theme
}) => theme.colors.highlight2};
  margin-bottom: 10px;
`;
//# sourceMappingURL=syles.js.map