import { FC } from 'react';
import { ScreenProps } from 'react-native-screens';
import { NavigationStackScreenProps } from 'react-navigation-stack';
interface Params {
    fromMenu: boolean;
}
interface Props extends NavigationStackScreenProps<Params, ScreenProps> {
}
declare const SelectOrganizationScreen: FC<Props>;
export default SelectOrganizationScreen;
