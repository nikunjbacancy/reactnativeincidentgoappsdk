import { AppUserContact } from 'incident-code-core';
import { FlatList } from 'react-native';
import styled from '../../../../../utils/styled';

export const InfoRow : any = styled.View`
  margin: 20px 30px 15px;
`;

export const InfoText : any = styled.Text`
  font-family: ${({ theme }) => theme.fonts.defaultSemiBoldFamily};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.dark};
`;

export const InfoWarning : any = styled(InfoText as any)`
  color: ${({ theme }) => theme.colors.lightGrey};
  margin-top: 10px;
`;

export const DescriptionText : any = styled.Text(
  ({ theme: { text, colors, fonts } }) => ({
    ...text,
    color: colors.lightGrey,
    fontSize: fonts.smallSize,
    textTransform: 'uppercase',
    marginLeft: 30,
  }),
);

export const List : any = styled(
  FlatList as new () => FlatList<AppUserContact>,
).attrs({
  contentContainerStyle: {
    flexGrow: 1,
    flexDirection: 'column',
  },
})`
  flex-grow: 1;
`;

export const AddContactButtonRow : any = styled.View`
  margin: 10px 15px 15px;
`;
