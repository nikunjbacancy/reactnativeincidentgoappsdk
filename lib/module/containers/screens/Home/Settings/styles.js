import styled from '../../../../utils/styled';
import { images } from '../../../../assets';
import LoadingIndicator from '../../../../components/LoadingIndicator';
export const InfoRow = styled.View`
  margin: 20px 10px 15px;
  flex: 1;
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
export const AddSettingButtonRow = styled.View`
  margin: 10px 15px 15px;
`;
export const Background = styled.View`
  background-color: ${({
  theme
}) => theme.colors.grey1};
  border-radius: 10px;
   margin: 5px;
`;
export const Step1 = styled.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultBoldFamily};
  font-size: ${({
  theme
}) => theme.fonts.normalSize};
  color: ${({
  theme
}) => theme.colors.dark};
  margin: 10px;
`;
export const Step1_Desc = styled.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultSemiBoldFamily};
  font-size: ${({
  theme
}) => theme.fonts.smallSize};
  color: ${({
  theme
}) => theme.colors.dark};
  margin: 10px;
  text-align: center;
`;
export const ViewTutorial = styled.View`
  justifyContent:center;
  flexDirection: row;
  margin: 10px;
`;
export const Tutorial = styled.Image.attrs({
  source: images.tutorial()
})`
  width: 120px;
  height: 120px;
  resize-mode: contain;
`;
export const Timing = styled.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultBoldFamily};
  font-size: ${({
  theme
}) => theme.fonts.titleSize};
  color: ${({
  theme
}) => theme.colors.dark};
`;
export const ViewStep2 = styled.View`
  justifyContent:space-between;
  alignItems:center;
  flexDirection: row;
`;
export const ViewStep21 = styled.View`
  margin: 10px;
`;
export const Loader = styled(LoadingIndicator)`
  overflow: hidden;
  border-radius: 10px;
  background-color: ${({
  theme
}) => theme.colors.transparent};
`;
export const DeviceDetail = styled.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultFamily};
  font-size: ${({
  theme
}) => theme.fonts.normalSize};
  color: ${({
  theme
}) => theme.colors.grey};
`;
export const BatteryLevel = styled.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultFamily};
  font-size: ${({
  theme
}) => theme.fonts.extraSmallSize};
  color: ${({
  theme
}) => theme.colors.grey}; 
`;
export const PlusImage = styled.Image.attrs({
  source: images.plusImage()
})`
  width: 30px;
  height: 30px;
  resize-mode: contain;
`;
export const ViewStep22 = styled.View`
  flexDirection: row;
  margin: 10px;
`;
export const Container = styled.TouchableOpacity`
  height: 50px;
  padding: 8px;
  align-items: center;
  flex-direction: row;
  background-color: ${({
  theme
}) => theme.colors.transparent};
`;
export const Bullet = styled.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultFamily};
  font-size: ${({
  theme
}) => theme.fonts.extraLargeSize};
  color: ${({
  theme
}) => theme.colors.green};
  margin: 5px 20px;
`;
export const Bullet_Red = styled.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultFamily};
  font-size: ${({
  theme
}) => theme.fonts.extraLargeSize};
  color: ${({
  theme
}) => theme.colors.red};
  margin: 5px 20px;
`;
export const BackButtonRow = styled.View`
  margin: 10px 15px 15px;
`;
//# sourceMappingURL=styles.js.map