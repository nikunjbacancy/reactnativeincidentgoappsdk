import { FC } from 'react';
import { ScreenProps } from 'react-native-screens';
import { NavigationStackScreenProps } from 'react-navigation-stack';
interface Params {
    phone: string;
    promoCodeData: any;
}
interface Props extends NavigationStackScreenProps<Params, ScreenProps> {
}
declare const PromoCodeScreen: FC<Props>;
export default PromoCodeScreen;
