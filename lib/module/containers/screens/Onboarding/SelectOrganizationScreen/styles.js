import { images } from '../../../../assets';
import { ScreenActionButton } from '../../../../components';
import { FlatList, Image } from 'react-native';
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
  background-color: ${({
  theme
}) => theme.colors.white};
`;
export const HeaderRow = styled.View`
  margin-bottom: 20px;
`;
export const Logo = styled.Image.attrs({
  source: images.logo()
})`
  position: absolute;
  width: 24px;
  height: 24px;
  top: 23px;
  left: 20px;
  tint-color: ${({
  theme
}) => theme.colors.dark};
`;
export const LogoRow = styled.View`
  margin-top: 30px;
  justify-content: center;
  align-items: center;
`;
export const TitleRow = styled.View`
  margin: 10px 30px 15px;
`;
export const TitleText = styled.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultBoldFamily};
  text-align: center;
  font-size: 18px;
  color: ${({
  theme
}) => theme.colors.dark};
`;
export const InfoRow = styled.View`
  margin: 30px 30px 0;
`;
export const InfoText = styled.Text`
  font-size: 15px;
  color: ${({
  theme
}) => theme.colors.dark};
`;
export const RequiredText = styled.Text`
  color: ${({
  theme
}) => theme.colors.lightGrey};
`;
export const ErrorRow = styled.View`
  margin: 0 30px 20px;
`;
export const ErrorMessage = styled.Text`
  color: ${({
  theme
}) => theme.colors.red};
  font-size: ${({
  theme
}) => theme.fonts.smallSize};
`;
export const SearchRow = styled.View`
  flex-grow: 0;
  margin: 20px 30px;
  padding: 0 20px;
  justify-content: center;
  height: 45px;
  background: ${({
  theme
}) => theme.colors.nearWhite};
  border-radius: 6px;
`;
export const SearchInput = styled.TextInput.attrs(({
  theme: {
    colors
  }
}) => ({
  placeholderTextColor: colors.lighter
}))`
  color: ${({
  theme
}) => theme.colors.dark};
  font-size: 15px;
`;
export const List = styled(FlatList)``;
export const ItemRow = styled.TouchableOpacity`
  height: 60px;
  border-bottom-width: 1px;
  border-bottom-color: ${({
  theme
}) => theme.colors.nearWhite};
  justify-content: center;
`;
export const ItemText = styled.Text`
  margin: 20px 30px;
  font-size: 15px;
`;
export const ItemCheckImage = styled.Image`
  position: absolute;
  right: 30px;
  height: 13px;
  width: 18px;
`;
export const SelectButton = styled(ScreenActionButton)`
  background-color: ${({
  theme
}) => theme.colors.highlight};
`;
export const ContinueButtonRow = styled.View`
  margin: 15px;
`;
//# sourceMappingURL=styles.js.map