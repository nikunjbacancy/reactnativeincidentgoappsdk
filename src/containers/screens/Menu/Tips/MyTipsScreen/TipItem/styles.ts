import LinearGradient from 'react-native-linear-gradient';
import styled from '../../../../../../utils/styled';

import TipMarker from '../TipMarker';

export const Container : any = styled.View`
  margin-bottom: 20px;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.nearWhite};
`;

export const InfoContainer : any = styled.View`
  padding: 10px;
  flex-direction: row;
  flex-wrap: nowrap;
`;

export const TextContainer : any = styled.View`
  margin-left: 15px;
`;

export const TextTitle : any = styled.Text`
  font-size: ${({ theme }) => theme.fonts.normalSize};
  line-height: 24px;
  letter-spacing: -0.24px;
  color: ${({ theme }) => theme.colors.dark};
  font-family: ${({ theme }) => theme.fonts.defaultBoldFamily};
`;

export const TextDescription : any = styled.Text`
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.2px;
  color: ${({ theme }) => theme.colors.grey};
  font-family: ${({ theme }) => theme.fonts.defaultFamily};
`;

export const MapSnapshotContainer : any = styled.View`
  height: 100px;
  overflow: hidden;
`;

export const MapOverlayContainer : any = styled(LinearGradient)`
  width: 100%;
  height: 100%;
  z-index: 2;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px;
  padding-bottom: 0;
`;

export const MapOverlayTitle : any = styled.Text<{ isClosed: boolean | undefined }>`
  font-size: 15px;
  color: ${({ theme, isClosed }) =>
    isClosed ? theme.colors.light : theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.defaultFamily};
  letter-spacing: -0.2px;
  margin-top: auto;
`;

export const MapOverlayAddress : any = styled.Text`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.light};
  font-family: ${({ theme }) => theme.fonts.defaultFamily};
  line-height: 18px;
  letter-spacing: -0.24px;
`;

export const ViolationContainer : any = styled(LinearGradient)`
  width: 100%;
  height: 100%;
  z-index: 2;
  align-items: flex-start;
  padding: 10px;
`;

export const ViolationText : any = styled.Text`
  font-size: ${({ theme }) => theme.fonts.normalSize};
  color: ${({ theme }) => theme.colors.red};
  font-family: ${({ theme }) => theme.fonts.defaultFamily};
  line-height: 24px;
`;

export const MapImage : any = styled.Image<{ isClosed: boolean | undefined }>`
  position: absolute;
  width: 100%;
  height: 100%;
  resize-mode: cover;
  opacity: ${({ isClosed }) => (isClosed ? 0.3 : 1)};
`;

export const Marker: any = styled(TipMarker)`
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -17.5px;
  margin-top: -14px;
`;
