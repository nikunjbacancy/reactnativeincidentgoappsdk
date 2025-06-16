import { FC } from 'react';
import { ScreenProps } from 'react-native-screens';
import { NavigationStackScreenProps } from 'react-navigation-stack';
interface Params {
    detailItem: any;
}
interface Props extends NavigationStackScreenProps<Params, ScreenProps> {
}
declare const NotificationDetailScreen: FC<Props>;
export default NotificationDetailScreen;
