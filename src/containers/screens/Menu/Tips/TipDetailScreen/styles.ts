import { images } from '../../../../../assets';
import { BackButton as RNBackButton } from '../../../../../components';
import styled from '../../../../../utils/styled';

export const Logo : any = styled.Image.attrs({
  source: images.logo(),
})`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 25px;
  left: 20px;
  tint-color: white;
`;

export const BackButtonContainer : any = styled.View`
  display: flex;
  flex-direction: row;
  height: 50px;
  align-items: center;
`;

export const BackButton: any = styled(RNBackButton)`
  background-color: ${({ theme }) => theme.colors.transparent};
`;

export const CategoryContainer : any = styled.View`
  flex: 0.15;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.transparent};
  height: 100%;
`;

export const CategoryImage : any = styled.Image`
  height: 36px;
  width: 36px;
`;

export const OrganizationContainer : any = styled.View`
  flex: 0.65;
  height: 100%;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.transparent};
`;

export const OrganizationName : any = styled.Text`
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.defaultBoldFamily};
`;

export const CategoryContent : any = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CategoryName : any = styled.Text`
  color: ${({ theme }) => theme.colors.dark};
`;
