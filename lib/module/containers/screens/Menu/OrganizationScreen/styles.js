import { FlatList } from 'react-native';
import styled from '../../../../utils/styled';
export const List = styled(FlatList).attrs({
  contentContainerStyle: {
    flexDirection: 'column'
  }
})`
  flex-grow: 1;
  margin-top: 10px;
`;
export const AddButtonRow = styled.View`
  margin: 10px 15px 15px;
`;
//# sourceMappingURL=styles.js.map