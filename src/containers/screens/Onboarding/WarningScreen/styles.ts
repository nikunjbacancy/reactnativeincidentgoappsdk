import { images } from '../../../../assets';
import { GradientButton, PanicButton, PanicInfo } from '../../../../components';
import { Image } from 'react-native';
import styled from '../../../../utils/styled';

export const SafeView : any = styled.View`
  flex: 1;
`;

export const TouchableContainer : any = styled.TouchableOpacity`
  flex: 1;
`;

export const ScrollWrapper : any = styled.ScrollView.attrs({
  contentContainerStyle: { flexGrow: 1, flexDirection: 'column' },
})``;

export const Background : any = styled(Image).attrs({
  source: images.background(),
})`
  flex: 1;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: null;
  height: null;
`;

export const LogoRow : any = styled.View`
  margin-top: 50px;
  justify-content: center;
  align-items: center;
`;

export const WarningRow : any = styled.View`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

export const WarningText : any = styled.Text`
  font-family: ${({ theme }) => theme.fonts.defaultSemiBoldFamily};
  font-size: 22px;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.white};
  margin-top: 40px;
  margin-bottom: 10px;
  text-align: center;
`;

export const LocationText : any = styled.Text`
  font-family: ${({ theme }) => theme.fonts.defaultSemiBoldFamily};
  font-size: 15px;
  line-height: 25px;
  color: ${({ theme }) => theme.colors.white};
  margin-top: 20px;
  
  text-align: center;
`;

export const WarningButton : any = styled(GradientButton).attrs(({ theme }) => ({
  textStyle: {
    fontSize: 40,
    fontFamily: theme.fonts.defaultSemiBoldFamily,
  },
}))`
  flex: 1;
  margin: 0 auto;
  max-width: 65%;
  max-height: 100px;
  background-color: ${({ theme }) => theme.colors.highlight2};

`;

export const DuressButton: any = styled(PanicButton).attrs(({ theme }) => ({
  textStyle: {
    fontSize: 40,
    fontFamily: theme.fonts.defaultSemiBoldFamily,
  },
}))`
  flex: 1;
  margin: 0 auto;
  min-width: 65%
  max-height: 100px;
  background-color: ${({ theme }) => theme.colors.highlight2};
`;

export const DuressInfo: any = styled(PanicInfo)`
  top: 40%;
  bottom: 15%;
  right: 12%;
  left: 12%;
`;

export const ContinueButtonRow : any = styled.View`
  margin: 10px 15px 15px;
  flex: 1;
  justify-content: flex-end;
`;

export const ContinueButton : any = styled(GradientButton).attrs(({ theme }) => ({
  textStyle: {
    color: theme.colors.dark,
  },
}))`
  background-color: ${({ theme }) => theme.colors.white};
`;
