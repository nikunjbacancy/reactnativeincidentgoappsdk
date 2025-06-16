import { FlatList } from 'react-native';
import { OrganizationSelection } from 'types';
import styled from '../../../../utils/styled';

export const List : any = styled(
  FlatList as new () => FlatList<OrganizationSelection>,
).attrs({
  contentContainerStyle: {
    flexDirection: 'column',
  },
})`
  flex-grow: 1;
  margin-top: 10px;
`;

export const AddButtonRow : any = styled.View`
  margin: 10px 15px 15px;
`;
