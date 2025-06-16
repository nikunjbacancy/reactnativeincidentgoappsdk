import { FlatList } from 'react-native';
import styled from '../../../../../utils/styled';
export const InfoRow = styled.View`
  margin: 20px 30px 15px;
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
export const InfoWarning = styled(InfoText)`
  color: ${({
  theme
}) => theme.colors.lightGrey};
  margin-top: 10px;
`;
export const DescriptionText = styled.Text(({
  theme: {
    text,
    colors,
    fonts
  }
}) => ({
  ...text,
  color: colors.lightGrey,
  fontSize: fonts.smallSize,
  textTransform: 'uppercase',
  marginLeft: 30
}));
export const List = styled(FlatList).attrs({
  contentContainerStyle: {
    flexGrow: 1,
    flexDirection: 'column'
  }
})`
  flex-grow: 1;
`;
export const AddContactButtonRow = styled.View`
  margin: 10px 15px 15px;
`;
//# sourceMappingURL=styles.js.map