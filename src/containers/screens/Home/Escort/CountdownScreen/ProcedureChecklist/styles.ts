import { FlatList } from 'react-native';
import { CountdownAction } from 'types';
import styled from '../../../../../../utils/styled';

export const ListContainer : any = styled.View`
  margin: 5px 10px 5px 10px;
  height: 45%;
`;

export const List : any = styled(
  FlatList as new () => FlatList<CountdownAction>,
).attrs({
  contentContainerStyle: {
    flexGrow: 1,
    flexDirection: 'column',
  },
})``;

export const ItemRow : any = styled.TouchableOpacity`
  min-height: 60px;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.nearWhite};
  justify-content: center;
`;

export const ItemText : any = styled.Text<{ isCompleted: boolean }>`
  margin: 20px 55px 20px 30px;
  font-size: 15px;
  color: ${({ theme, isCompleted }) =>
    isCompleted ? theme.colors.dark : theme.colors.highlight};
`;

export const ItemCheckImage : any = styled.Image`
  position: absolute;
  right: 30px;
  height: 13px;
  width: 18px;
`;
