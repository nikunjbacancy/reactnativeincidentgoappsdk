import { ScreenActionTabButton } from '../../../../../components';
import LinearGradient from 'react-native-linear-gradient';
import styled, { css } from '../../../../../utils/styled';

export const InfoRow : any = styled.View`
  margin: 20px 30px 15px;
`;

export const InfoText : any = styled.Text`
  font-family: ${({ theme }) => theme.fonts.defaultSemiBoldFamily};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.dark};
`;

export const Container : any = styled.View`
  flex: 1;
  padding: 0 20px;
`;

export const RowContainer : any = styled.ScrollView.attrs({
  style: {
    flexGrow: 1,
  },
})`
  flex-grow: 1;
`;

export const Row : any = styled.View`
  flex-direction: row;
  align-items: flex-start;
`;

export const ItemCSS = css`
  margin-top: 20px;
  margin-left: 8px;
  margin-right: 8px;
  flex-grow: 1;
  align-items: center;
`;

export const RowItem : any = styled.View`
  ${ItemCSS}
`;

export const RowItemButton : any = styled.TouchableOpacity`
  ${ItemCSS}
`;

export const ImageContainer : any = styled(LinearGradient)`
  height: 82px;
  width: 82px;
  border-radius: 18px;
  align-items: center;
  justify-content: center;
`;

export const ImageBackground : any = styled(LinearGradient)`
  height: 82px;
  width: 82px;
  border-radius: 18px;
  align-items: center;
  justify-content: center;
`;

export const ImageSelected : any = styled.View`
  height: 82px;
  width: 82px;
  border-radius: 18px;
  border-width: 6px;
  align-items: center;
  justify-content: center;
  border-color: ${({ theme }) => theme.colors.highlight};
`;

export const CategoryImage : any = styled.Image`
  height: 36px;
  width: 36px;
  tint-color: ${({ theme }) => theme.colors.light};
`;

export const TextContainer : any = styled.View`
  flex-direction: row;
  height: 36px;
  margin-top: 5px;
`;

export const CategoryText : any = styled.Text`
  flex: 1;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.defaultFamily};
  color: ${({ theme }) => theme.colors.dark};
  font-size: 14px;
`;

export const ContinueScreenActionButton : any = styled(ScreenActionTabButton).attrs(
  ({ theme }) => ({
    continueButtonTextStyle: {
      color: theme.colors.dark,
      textTransform: 'uppercase',
    },
  }),
)``;
