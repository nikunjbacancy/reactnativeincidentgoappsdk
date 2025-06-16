import { FC } from 'react';
import { ScreenProps } from 'react-native-screens';
import { NavigationStackScreenProps } from 'react-navigation-stack';
interface Params {
    phone: string;
}
interface Props extends NavigationStackScreenProps<Params, ScreenProps> {
}
declare const PrivacyPolicyScreen: FC<Props>;
export default PrivacyPolicyScreen;
