import styled from '../../../../../utils/styled';
import { Menu } from 'react-native-popup-menu';
export const Container = styled.ScrollView`
  flex:1;
  border-radius: 10px;
  background: ${({
  theme
}) => theme.colors.lightGrey};
  margin: 20px 20px;
  `;
export const ButtonRow = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin: 10px 30px;
  padding: 10px 10px 10px;
  border-radius: 50px;
  background: ${({
  theme
}) => theme.colors.white};
`;
export const Title = styled.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultSemiBoldFamily};
  font-size: 22px;
  padding: 5px
  color: ${({
  theme
}) => theme.colors.black};
  line-height: 22px;
`;
export const Dot = styled.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultSemiBoldFamily};
  font-size: 15px;
  color: ${({
  theme
}) => theme.colors.red};
`;
export const InfoRow = styled.View`
  margin: 20px 30px 15px;
`;
export const InfoText = styled.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultSemiBoldFamily};
  font-size: 22px;
  padding: 10px
  color: ${({
  theme
}) => theme.colors.black};
`;
export const ContainerWarning = styled.View`
  flex:1;
  border-radius: 10px;
  background: ${({
  theme
}) => theme.colors.lightGrey};
  margin: 20px 20px;
  padding: 20px;
  justify-content: center;
  align-items: center;
  `;
export const InfoWarningText = styled.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultSemiBoldFamily};
  font-size: 22px;
  padding: 5px;
  color: ${({
  theme
}) => theme.colors.black};
`;
export const BlockedPermissionContainer = styled.View`
  flex: 1;
`;
export const BlockedPermissionMessage = styled.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultBoldFamily};
  font-size: ${({
  theme
}) => theme.fonts.normalSize};
  color: ${({
  theme
}) => theme.colors.dark};
  margin-top: auto;
  margin-bottom: auto;
  text-align: center;
`;
export const UserView = styled.View`
    flex-direction: row;
    justifyContent:space-between;
`;
export const UserName = styled.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultBoldFamily};
  font-size: ${({
  theme
}) => theme.fonts.extraLargeSize};
  color: ${({
  theme
}) => theme.colors.dark};
  padding: 15px;
`;
export const MenuContainer = styled(Menu)`
  padding: 15px;
  background-color: ${({
  theme
}) => theme.colors.transparent};
  border-left-color: ${({
  theme
}) => theme.colors.lightGrey};
`;
export const HamburgerMenu = styled.Image`
  width: 40px;
  height: 40px;
`;
export const MenuOptionInner = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 15px 20px;
  border-bottom-width: 1px;
  border-color: ${({
  theme
}) => theme.colors.white};
`;
export const MenuOptionText = styled.Text`
  font-size: 16px;
  color: ${({
  theme
}) => theme.colors.dark};
`;
export const MenuOptionIcon = styled.Image`
  margin-left: auto;
`;
//# sourceMappingURL=styles.js.map