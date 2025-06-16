import { FlatList } from 'react-native';
import styled from '../../../../../../utils/styled';
export const ListContainer = styled.View`
  margin: 5px 10px 5px 10px;
  height: 45%;
`;
export const List = styled(FlatList).attrs({
  contentContainerStyle: {
    flexGrow: 1,
    flexDirection: 'column'
  }
})``;
export const ItemRow = styled.TouchableOpacity`
  min-height: 60px;
  border-bottom-width: 1px;
  border-color: ${({
  theme
}) => theme.colors.nearWhite};
  justify-content: center;
`;
export const ItemText = styled.Text`
  margin: 20px 55px 20px 30px;
  font-size: 15px;
  color: ${({
  theme,
  isCompleted
}) => isCompleted ? theme.colors.dark : theme.colors.highlight};
`;
export const ItemCheckImage = styled.Image`
  position: absolute;
  right: 30px;
  height: 13px;
  width: 18px;
`;
//# sourceMappingURL=styles.js.map