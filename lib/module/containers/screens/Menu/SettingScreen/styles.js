import { isAndroid } from '../../../../utils/device';
import styled from '../../../../utils/styled';
export const Container = styled.View`
  flex: 1;
`;
export const SwitchContainer = styled.View`
  flex-direction: row;
  padding: 0 30px;
  margin-top: 30px;
  align-items: center;
  height: 60px;
  border-bottom-width: 1px;
  border-color: ${({
  theme
}) => theme.colors.nearWhite};
`;
export const SwitchButton = styled.Switch`
  margin-left: auto;
  ${isAndroid ? '' : 'transform: scale(0.7);'}
`;
export const SwitchText = styled.Text`
  color: ${({
  theme
}) => theme.colors.dark};
  font-size: 17px;
`;
export const BackButtonRow = styled.View`
  margin: 10px 15px 15px;
`;
export const DeleteButtonRow = styled.View`
  flex-direction: row;
  padding: 0 30px;
  align-items: center;
  height: 60px;
  border-bottom-width: 1px;
  border-color: ${({
  theme
}) => theme.colors.nearWhite};
`;
export const LogoutButtonRow = styled.View`
  flex-direction: row;
  padding: 0 30px;
  align-items: center;
  height: 60px;
  border-bottom-width: 1px;
  border-color: ${({
  theme
}) => theme.colors.nearWhite};
`;
export const DeleteButton = styled.TouchableOpacity`
  
`;
export const LogoutButton = styled.TouchableOpacity`
  
`;
export const DeleteButtonText = styled.Text`
  color: ${({
  theme
}) => theme.colors.dark};
  font-size: 17px;
`;
export const LogoutButtonText = styled.Text`
  color: ${({
  theme
}) => theme.colors.dark};
  font-size: 17px;
`;

// export const DeleteButtonRow = styled.View`
//   margin: 10px 15px 15px;
//   justify-content: flex-end;
// `;

// export const DeleteButton = styled(GradientButton).attrs(({ theme }) => ({
//   textStyle: {
//     color: theme.colors.white,
//   },
// }))`
//   background-color: ${({ theme }) => theme.colors.red};
// `;
//# sourceMappingURL=styles.js.map