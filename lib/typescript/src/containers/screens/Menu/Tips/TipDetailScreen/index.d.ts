import { Incident } from 'incident-code-core';
import { FC } from 'react';
import { ScreenProps } from 'react-native-screens';
import { NavigationStackScreenProps } from 'react-navigation-stack';
interface Params {
    incident: Incident;
    showChat: boolean;
}
interface Props extends NavigationStackScreenProps<Params, ScreenProps> {
}
declare const TipDetailScreen: FC<Props>;
export default TipDetailScreen;
