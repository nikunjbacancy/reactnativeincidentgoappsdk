import styled from '../../../../utils/styled';
import { images } from '../../../../assets';
import LoadingIndicator from '../../../../components/LoadingIndicator';

export const InfoRow : any = styled.View`
  margin: 20px 10px 15px;
  flex: 1;
`;

export const InfoText : any = styled.Text`
  font-family: ${({ theme }) => theme.fonts.defaultSemiBoldFamily};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.dark};
`;

export const AddSettingButtonRow : any = styled.View`
  margin: 10px 15px 15px;
`;

export const Background : any = styled.View`
  background-color: ${({ theme }) => theme.colors.grey1};
  border-radius: 10px;
   margin: 5px;
`;

export const Step1 : any = styled.Text`
  font-family: ${({ theme }) => theme.fonts.defaultBoldFamily};
  font-size: ${({ theme }) => theme.fonts.normalSize};
  color: ${({ theme }) => theme.colors.dark};
  margin: 10px;
`;

export const Step1_Desc : any = styled.Text`
  font-family: ${({ theme }) => theme.fonts.defaultSemiBoldFamily};
  font-size: ${({ theme }) => theme.fonts.smallSize};
  color: ${({ theme }) => theme.colors.dark};
  margin: 10px;
  text-align: center;
`;

export const ViewTutorial : any = styled.View`
  justifyContent:center;
  flexDirection: row;
  margin: 10px;
`;

export const Tutorial : any = styled.Image.attrs({
  source: images.tutorial(),
})`
  width: 120px;
  height: 120px;
  resize-mode: contain;
`;

export const Timing : any = styled.Text`
  font-family: ${({ theme }) => theme.fonts.defaultBoldFamily};
  font-size: ${({ theme }) => theme.fonts.titleSize};
  color: ${({ theme }) => theme.colors.dark};
`;

export const ViewStep2 : any = styled.View`
  justifyContent:space-between;
  alignItems:center;
  flexDirection: row;
`;

export const ViewStep21 : any = styled.View`
  margin: 10px;
`;

export const Loader: any = styled(LoadingIndicator)`
  overflow: hidden;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.transparent};
`;
export const DeviceDetail : any = styled.Text`
  font-family: ${({ theme }) => theme.fonts.defaultFamily};
  font-size: ${({ theme }) => theme.fonts.normalSize};
  color: ${({ theme }) => theme.colors.grey};
`;

export const BatteryLevel : any = styled.Text`
  font-family: ${({ theme }) => theme.fonts.defaultFamily};
  font-size: ${({ theme }) => theme.fonts.extraSmallSize};
  color: ${({ theme }) => theme.colors.grey}; 
`;

export const PlusImage : any = styled.Image.attrs({
  source: images.plusImage(),
})`
  width: 30px;
  height: 30px;
  resize-mode: contain;
`;

export const ViewStep22 : any = styled.View`
  flexDirection: row;
  margin: 10px;
`;

export const Container : any = styled.TouchableOpacity`
  height: 50px;
  padding: 8px;
  align-items: center;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.transparent};
`;

export const Bullet : any = styled.Text`
  font-family: ${({ theme }) => theme.fonts.defaultFamily};
  font-size: ${({ theme }) => theme.fonts.extraLargeSize};
  color: ${({ theme }) => theme.colors.green};
  margin: 5px 20px;
`;

export const Bullet_Red : any = styled.Text`
  font-family: ${({ theme }) => theme.fonts.defaultFamily};
  font-size: ${({ theme }) => theme.fonts.extraLargeSize};
  color: ${({ theme }) => theme.colors.red};
  margin: 5px 20px;
`;

export const BackButtonRow : any = styled.View`
  margin: 10px 15px 15px;
`;