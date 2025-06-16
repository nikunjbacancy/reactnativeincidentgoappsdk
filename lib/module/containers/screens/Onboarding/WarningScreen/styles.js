import { images } from '../../../../assets';
import { GradientButton, PanicButton, PanicInfo } from '../../../../components';
import { Image } from 'react-native';
import styled from '../../../../utils/styled';
export const SafeView = styled.View`
  flex: 1;
`;
export const TouchableContainer = styled.TouchableOpacity`
  flex: 1;
`;
export const ScrollWrapper = styled.ScrollView.attrs({
  contentContainerStyle: {
    flexGrow: 1,
    flexDirection: 'column'
  }
})``;
export const Background = styled(Image).attrs({
  source: images.background()
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
export const LogoRow = styled.View`
  margin-top: 50px;
  justify-content: center;
  align-items: center;
`;
export const WarningRow = styled.View`
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;
export const WarningText = styled.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultSemiBoldFamily};
  font-size: 22px;
  line-height: 28px;
  color: ${({
  theme
}) => theme.colors.white};
  margin-top: 40px;
  margin-bottom: 10px;
  text-align: center;
`;
export const LocationText = styled.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultSemiBoldFamily};
  font-size: 15px;
  line-height: 25px;
  color: ${({
  theme
}) => theme.colors.white};
  margin-top: 20px;
  
  text-align: center;
`;
export const WarningButton = styled(GradientButton).attrs(({
  theme
}) => ({
  textStyle: {
    fontSize: 40,
    fontFamily: theme.fonts.defaultSemiBoldFamily
  }
}))`
  flex: 1;
  margin: 0 auto;
  max-width: 65%;
  max-height: 100px;
  background-color: ${({
  theme
}) => theme.colors.highlight2};

`;
export const DuressButton = styled(PanicButton).attrs(({
  theme
}) => ({
  textStyle: {
    fontSize: 40,
    fontFamily: theme.fonts.defaultSemiBoldFamily
  }
}))`
  flex: 1;
  margin: 0 auto;
  min-width: 65%
  max-height: 100px;
  background-color: ${({
  theme
}) => theme.colors.highlight2};
`;
export const DuressInfo = styled(PanicInfo)`
  top: 40%;
  bottom: 15%;
  right: 12%;
  left: 12%;
`;
export const ContinueButtonRow = styled.View`
  margin: 10px 15px 15px;
  flex: 1;
  justify-content: flex-end;
`;
export const ContinueButton = styled(GradientButton).attrs(({
  theme
}) => ({
  textStyle: {
    color: theme.colors.dark
  }
}))`
  background-color: ${({
  theme
}) => theme.colors.white};
`;
//# sourceMappingURL=styles.js.map