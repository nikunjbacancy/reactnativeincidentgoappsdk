import { GradientButton } from '../../../../../components';
import { FlatList } from 'react-native';
import styled from '../../../../../utils/styled';
export const Container = styled.View`
  flex: 1;
  margin-bottom: ${({
  theme,
  isKeyboard
}) => theme.device.hasNotch && isKeyboard ? 45 : 10}px;
`;
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
export const List = styled(FlatList).attrs({
  contentContainerStyle: {
    flexGrow: 1,
    flexDirection: 'column'
  }
})``;
export const ItemRow = styled.TouchableOpacity`
  height: 60px;
  border-bottom-width: 1px;
  border-color: ${({
  theme
}) => theme.colors.nearWhite};
  justify-content: center;
`;
export const ItemRowList = styled.View`
  height: 60px;
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
export const AddCommentRow = styled.View`
  margin: 0 30px 10px;
  background: ${({
  theme
}) => theme.colors.nearWhite};
  border-radius: 6px;
  height: 80px;
  padding: 8px 0;
`;
export const AddCommentText = styled.Text`
  margin: 10px 30px;
  font-size: 15px;
  color: ${({
  theme
}) => theme.colors.dark};
`;
export const AddCommentInput = styled.TextInput.attrs(({
  theme: {
    colors
  }
}) => ({
  placeholderTextColor: colors.lighter,
  textAlignVertical: 'top'
}))`
  color: ${({
  theme
}) => theme.colors.dark};
  flex-grow: 1;
  padding: 0 15px;
  font-size: 15px;
`;
export const CreateEscortButtonRow = styled.View`
  margin: 10px 15px 15px;
`;
export const ManageOrganizationsButton = styled.View`
  margin: 10px 15px 15px;
`;
export const Call911Container = styled.View`
  flex: 1;
  flex-direction: column;
  margin: 0 60px;
  justify-content: center;
`;
export const Call911Title = styled.Text`
  text-align: center;
  color: ${({
  theme
}) => theme.colors.dark};
  font-family: ${({
  theme
}) => theme.fonts.defaultSemiBoldFamily};
  font-size: 20px;
  line-height: 28px;
  margin-bottom: 30px;
`;
export const Call911Info = styled.Text`
  text-align: center;
  color: ${({
  theme
}) => theme.colors.dark};
  font-family: ${({
  theme
}) => theme.fonts.defaultFamily};
  font-size: 17px;
  margin-bottom: 10px;
`;
export const Call911Button = styled(GradientButton)`
  width: 60%;
  margin: 0 auto;
  background-color: ${({
  theme
}) => theme.colors.highlight2};
`;
//# sourceMappingURL=styles.js.map