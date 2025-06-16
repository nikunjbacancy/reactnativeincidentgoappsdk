/**
 *
 * Set Timer Modal styles
 *
 */

import { ErrorField, IconButton, TextInputField } from '../../../../../../components';
import styled from '../../../../../../utils/styled';

export const CloseButton : any = styled(IconButton as any)`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  top: -60px;
  right: 20px;
`;

export const ModalContainer : any = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  height: 65%;
  width: 100%;
  display: flex;
  position: relative;
`;

export const InputRow : any = styled.View`
  display: flex;
  flex-direction: row;
  margin: 10px 15px;
  height: 25%;
`;

export const TimeInputField: any = styled(TextInputField).attrs(
  ({ theme: { colors } }) => ({
    placeholderTextColor: colors.lighter,
    textAlignVertical: 'center',
    textAlignHorizontal: 'center',
  }),
)`
  flex: 1;
  padding: 0 15px;
  margin: 0 5px;
  font-size: 30px;
  text-align: center;
  color: ${({ theme }) => theme.colors.dark};
  background: ${({ theme }) => theme.colors.nearWhite};
  border-radius: 6px;
`;

export const SubmitButtonRow : any = styled.View`
  margin: 10px 15px 15px;
`;

export const TimerErrorField: any = styled(ErrorField as any)`
  margin: 0 30px;
  height: 7%;
  justify-content: center;
  font-size: 14px;
`;

export const SetTimerErrorField : any = styled.Text`
  color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.fonts.smallSize};
  text-align: center;
  padding: 10px;
`;
