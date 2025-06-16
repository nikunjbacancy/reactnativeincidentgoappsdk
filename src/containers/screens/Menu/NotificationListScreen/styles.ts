
import styled from '../../../../utils/styled';
import { TouchableOpacityProps } from 'react-native';

export type NotificationItemContainerProps = TouchableOpacityProps & {
  isRead?: boolean;
};

export const Container = styled.View`
  flex: 1;
`;

export const ListContainer = styled.View`
  flex: 1;
  margin-top: 10px;
`;

export const BackButtonRow = styled.View`
  margin: 10px 15px 15px;
`;

export const NoRecordsFound = styled.Text`
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.defaultFamily};
  margin-top: 150px;
`;

export const NotificationItemContainer =  styled.TouchableOpacity<NotificationItemContainerProps>`
background-color: ${({ isRead }) => (isRead? 'white' : '#d3d3d350')};
border-radius: 5px;
  padding: 15px;
  border-bottom-width: 1px;
  border-color: #ccc;
`;

export const NotificationItemTitle =  styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

export const NotificationItemBody = styled.Text`
  font-size: 14px;
  color: gray;
  margin-top: 5px;
`;

export const NotificationItemTimeStamp = styled.Text`
  font-size: 12px;
  color: gray;
  margin-top: 5px;
  font-weight: bold;
`;