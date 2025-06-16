import { Incident } from 'incident-code-core';
import { FlatList } from 'react-native';
import styled from '../../../../../utils/styled';

export const List : any = styled(FlatList as new () => FlatList<Incident>)`
  padding: 0 30px 0;
  
`;

export const BackButtonRow : any = styled.View`
  margin: 10px 15px 15px;
  
`;

export const Container : any = styled.View`
  flex: 1;
  
`;
