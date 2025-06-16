import { images } from '../../../../assets';
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
export const BackButtonCol = styled.View`
  position: absolute;
  left: 20px;
  background: ${({
  theme
}) => theme.colors.white};
  width: 44px;
  height: 44px;
  align-items: center;
  justify-content: center;
  border-radius: 22px;
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
export const ContinueButtonRow = styled.View`
  margin: 15px;
`;
export const InfoRow = styled.View`
  margin: 15px 30px;
`;
export const InfoText = styled.Text`
  font-size: 14px;
  color: ${({
  theme
}) => theme.colors.dark};
`;
export const OptionalText = styled.Text`
  color: ${({
  theme
}) => theme.colors.lightGrey};
`;
//# sourceMappingURL=styles.js.map