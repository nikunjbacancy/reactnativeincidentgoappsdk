import { FlatList } from 'react-native';
import { isAndroid } from '../../../../../utils/device';
import styled from '../../../../../utils/styled';
export const Container = styled.KeyboardAvoidingView.attrs(() => ({
  behavior: isAndroid ? 'height' : ''
}))`
  flex: 1;
`;
export const List = styled(FlatList).attrs({
  contentContainerStyle: {
    flexGrow: 1,
    flexDirection: 'column'
  }
})`
  flex-grow: 1;
`;
export const ErrorContainer = styled.View`
  flex: 1;
  align-items: center;
`;
export const ErrorHeader = styled.View`
  padding: 0 15px;
  align-items: center;
`;
export const ErrorText = styled.Text`
  color: ${({
  theme
}) => theme.colors.white};
  font-size: ${({
  theme
}) => theme.fonts.largeSize};
  line-height: 28px;
  font-family: ${({
  theme
}) => theme.fonts.defaultBoldFamily};
`;
export const InputRow = styled.View`
  flex-direction: row;
  margin: 10px 30px;
  height: 45px;
  background: ${({
  theme
}) => theme.colors.nearWhite};
  border-radius: 6px;
`;
export const TextInput = styled.TextInput.attrs(({
  theme: {
    colors
  }
}) => ({
  placeholderTextColor: colors.lighter
}))`
  color: ${({
  theme
}) => theme.colors.dark};
  flex-grow: 1;
  padding: 0 15px;
  font-size: 15px;
  justify-content: center;
`;
export const NoMatchesContainer = styled.View`
  justify-content: center;
  align-items: center;
`;
export const NoMatchesText = styled.Text`
  color: ${({
  theme
}) => theme.colors.grey};
  font-size: ${({
  theme
}) => theme.fonts.extraLargeSize};
`;
export const BackButtonRow = styled.View`
  margin: 10px 15px 15px;
`;
//# sourceMappingURL=styles.js.map