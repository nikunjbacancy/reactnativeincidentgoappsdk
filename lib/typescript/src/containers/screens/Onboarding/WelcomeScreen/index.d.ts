import { FC } from 'react';
import { ScreenProps } from 'react-native-screens';
import { NavigationStackScreenProps } from 'react-navigation-stack';
interface Params {
    fromFeedback: boolean;
}
interface Props extends NavigationStackScreenProps<Params, ScreenProps> {
}
declare const WelcomeScreen: FC<Props>;
export default WelcomeScreen;
