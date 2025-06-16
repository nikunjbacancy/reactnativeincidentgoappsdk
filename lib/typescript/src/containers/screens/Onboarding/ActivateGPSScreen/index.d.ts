import { FC } from 'react';
import { ScreenProps } from 'react-native-screens';
import { NavigationStackScreenProps } from 'react-navigation-stack';
interface Params {
}
interface Props extends NavigationStackScreenProps<Params, ScreenProps> {
}
declare const ActivateGPSScreen: FC<Props>;
export default ActivateGPSScreen;
