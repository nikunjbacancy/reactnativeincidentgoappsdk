import { GradientButton } from '../../../../../components';
import { FlatList } from 'react-native';
import { OrganizationSelection } from 'types';
import styled from '../../../../../utils/styled';

export const Container : any = styled.View<{ isKeyboard: boolean }>`
  flex: 1;
  margin-bottom: ${({ theme, isKeyboard }) =>
    theme.device.hasNotch && isKeyboard ? 45 : 10}px;
`;

export const InfoRow : any = styled.View`
  margin: 20px 30px 15px;
`;

export const InfoText : any = styled.Text`
  font-family: ${({ theme }) => theme.fonts.defaultSemiBoldFamily};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.dark};
`;

export const ErrorRow : any = styled.View`
  margin: 0 30px 20px;
`;

export const ErrorMessage : any = styled.Text`
  color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.fonts.smallSize};
`;

export const List : any = styled(
  FlatList as new () => FlatList<OrganizationSelection>,
).attrs({
  contentContainerStyle: {
    flexGrow: 1,
    flexDirection: 'column',
  },
})``;

export const ItemRow : any = styled.TouchableOpacity`
  height: 60px;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.nearWhite};
  justify-content: center;
`;

export const ItemRowList : any = styled.View`
  height: 60px;
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

export const AddCommentRow : any = styled.View`
  margin: 0 30px 10px;
  background: ${({ theme }) => theme.colors.nearWhite};
  border-radius: 6px;
  height: 80px;
  padding: 8px 0;
`;

export const AddCommentText : any = styled.Text`
  margin: 10px 30px;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.dark};
`;

export const AddCommentInput : any = styled.TextInput.attrs(
  ({ theme: { colors } }) => ({
    placeholderTextColor: colors.lighter,
    textAlignVertical: 'top',
  }),
)`
  color: ${({ theme }) => theme.colors.dark};
  flex-grow: 1;
  padding: 0 15px;
  font-size: 15px;
`;

export const CreateEscortButtonRow : any = styled.View`
  margin: 10px 15px 15px;
`;

export const ManageOrganizationsButton : any = styled.View`
  margin: 10px 15px 15px;
`;

export const Call911Container : any = styled.View`
  flex: 1;
  flex-direction: column;
  margin: 0 60px;
  justify-content: center;
`;

export const Call911Title : any = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.defaultSemiBoldFamily};
  font-size: 20px;
  line-height: 28px;
  margin-bottom: 30px;
`;

export const Call911Info : any = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.defaultFamily};
  font-size: 17px;
  margin-bottom: 10px;
`;

export const Call911Button : any = styled(GradientButton)`
  width: 60%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.highlight2};
`;
