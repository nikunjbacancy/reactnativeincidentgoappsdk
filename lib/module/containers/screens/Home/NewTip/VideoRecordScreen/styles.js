import { RNCamera } from 'react-native-camera';
import styled from '../../../../../utils/styled';
export const Camera = styled(RNCamera)`
  width: 97%;
  height: 83%;
  margin-top: 10px;
  border-radius: 10px;
  overflow: hidden;
`;
export const Message = styled.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultFamily};
  font-size: ${({
  theme
}) => theme.fonts.normalSize};
  color: ${({
  theme
}) => theme.colors.dark};
  text-align: center;
`;
export const AcknowledgmentText = styled.Text`
  margin-top: 20px;
  color: ${({
  theme
}) => theme.colors.dark};
  font-family: ${({
  theme
}) => theme.fonts.defaultBoldFamily};
  font-size: ${({
  theme
}) => theme.fonts.normalSize};
  text-align: center;
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
export const TipCameraContainer = styled.View`
  position: relative;
  display: flex;
  flex: 1;
`;
//# sourceMappingURL=styles.js.map