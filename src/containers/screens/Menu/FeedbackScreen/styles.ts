import { ErrorField, TextInputField } from '../../../../components';
import styled from '../../../../utils/styled';

export const InfoRow : any = styled.View`
  margin: 20px 30px 15px;
`;

export const InfoText : any = styled.Text`
  font-family: ${({ theme }) => theme.fonts.defaultSemiBoldFamily};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.dark};
`;

export const InputRow : any = styled.View`
  flex-direction: row;
  margin: 10px 30px;
  height: 45px;
  background: ${({ theme }) => theme.colors.nearWhite};
  border-radius: 6px;
`;

export const TextRow : any = styled(InputRow as any)`
  height: 150px;
  padding: 8px 0;
`;

export const EmailInput: any = styled(TextInputField).attrs(
  ({ theme: { colors } }) => ({
    placeholderTextColor: colors.lighter,
  }),
)`
  flex-grow: 1;
  padding: 0 15px;
  font-size: 15px;
  justify-content: center;
  color: ${({ theme }) => theme.colors.dark};
`;

export const TextInput: any = styled(TextInputField).attrs(
  ({ theme: { colors } }) => ({
    placeholderTextColor: colors.lighter,
    textAlignVertical: 'top',
  }),
)`
  flex-grow: 1;
  padding: 0 15px;
  font-size: 15px;
  justify-content: center;
  color: ${({ theme }) => theme.colors.dark};
`;

export const StyledErrorField: any = styled(ErrorField as any)`
  margin: 0 30px;
  height: 30px;
  justify-content: center;
  font-size: 14px;
`;

export const PrivacyRow : any = styled.View`
  margin: 10px 30px 20px;
`;

export const PrivacyText : any = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.lightGrey};
`;

export const PrivacyLinkText : any = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.lightGrey};
  text-decoration: underline;
  text-decoration-color: ${({ theme }) => theme.colors.lightGrey};
`;

export const SendButtonRow : any = styled.View`
  margin: 0 15px 15px;
`;
