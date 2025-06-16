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
  line-height: 28px;
  color: ${({
  theme
}) => theme.colors.dark};
`;
export const ActivateGPSRow = styled.View`
  margin: auto 20px;
  height: 60px;
  flex-direction: row;
  align-items: stretch;
`;
export const ActivateGPSButton = styled(GradientButton)`
  width: 60%;
  margin: 0 auto;
`;
export const ContinueButtonRow = styled.View`
  margin: 10px 15px 15px;
`;
export const ContinueButton = styled(GradientButton)``;
//# sourceMappingURL=styles.js.map