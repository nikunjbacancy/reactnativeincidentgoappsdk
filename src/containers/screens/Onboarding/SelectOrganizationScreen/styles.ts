import { images } from '../../../../assets';
import { ScreenActionButton } from '../../../../components';
import { FlatList, Image } from 'react-native';
import { OrganizationSelection } from 'types';
import styled from '../../../../utils/styled';

export const Background : any = styled(Image).attrs({
  source: images.backgroundWhite(),
})`
  flex: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const HeaderRow : any = styled.View`
  margin-bottom: 20px;
`;

export const Logo : any = styled.Image.attrs({
  source: images.logo(),
})`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 23px;
  left: 20px;
  tint-color: ${({ theme }) => theme.colors.dark};
`;

export const LogoRow : any = styled.View`
  margin-top: 30px;
  justify-content: center;
  align-items: center;
`;

export const TitleRow : any = styled.View`
  margin: 10px 30px 15px;
`;

export const TitleText : any = styled.Text`
  font-family: ${({ theme }) => theme.fonts.defaultBoldFamily};
  text-align: center;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.dark};
`;

export const InfoRow : any = styled.View`
  margin: 30px 30px 0;
`;

export const InfoText : any = styled.Text`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.dark};
`;

export const RequiredText : any = styled.Text`
  color: ${({ theme }) => theme.colors.lightGrey};
`;

export const ErrorRow : any = styled.View`
  margin: 0 30px 20px;
`;

export const ErrorMessage : any = styled.Text`
  color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.fonts.smallSize};
`;

export const SearchRow : any = styled.View`
  flex-grow: 0;
  margin: 20px 30px;
  padding: 0 20px;
  justify-content: center;
  height: 45px;
  background: ${({ theme }) => theme.colors.nearWhite};
  border-radius: 6px;
`;

export const SearchInput : any = styled.TextInput.attrs(({ theme: { colors } }) => ({
  placeholderTextColor: colors.lighter,
}))`
  color: ${({ theme }) => theme.colors.dark};
  font-size: 15px;
`;

export const List : any = styled(
  FlatList as new () => FlatList<OrganizationSelection>,
)``;

export const ItemRow : any = styled.TouchableOpacity`
  height: 60px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.nearWhite};
  justify-content: center;
`;

export const ItemText : any = styled.Text`
  margin: 20px 30px;
  font-size: 15px;
`;

export const ItemCheckImage : any = styled.Image`
  position: absolute;
  right: 30px;
  height: 13px;
  width: 18px;
`;

export const SelectButton : any = styled(ScreenActionButton)`
  background-color: ${({ theme }) => theme.colors.highlight};
`;

export const ContinueButtonRow : any = styled.View`
  margin: 15px;
`;
