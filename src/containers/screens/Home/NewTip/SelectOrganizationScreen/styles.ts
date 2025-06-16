import { GradientButton, ScreenActionTabButton } from '../../../../../components';
import { FlatList } from 'react-native';
import { OrganizationSelection } from 'types';
import styled from '../../../../../utils/styled';

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

export const MarginBottom : any = styled.View`
  margin-bottom: 40px;
`;

export const ErrorMessage : any = styled.Text`
  color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.fonts.smallSize};
`;

export const List : any = styled(
  FlatList as new () => FlatList<OrganizationSelection>,
).attrs({
  style: {
    flexGrow: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
})`
  flex-grow: 1;
`;

export const ItemRow : any = styled.TouchableOpacity`
  height: 60px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.nearWhite};
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

export const ContinueScreenActionButton : any = styled(ScreenActionTabButton).attrs(
  ({ theme }) => ({
    continueButtonTextStyle: {
      color: theme.colors.dark,
      textTransform: 'uppercase',
    },
  }),
)``;
