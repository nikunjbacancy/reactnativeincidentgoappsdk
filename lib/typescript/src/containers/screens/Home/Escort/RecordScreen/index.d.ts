import { IncidentEscort, Organization } from 'incident-code-core';
import { FC } from 'react';
import { ScreenProps } from 'react-native-screens';
import { NavigationStackScreenProps } from 'react-navigation-stack';
interface Params {
    incidentEscort: IncidentEscort;
    organization: Organization;
    fromPassive?: boolean;
}
interface Props extends NavigationStackScreenProps<Params, ScreenProps> {
}
declare const EscortScreen: FC<Props>;
export default EscortScreen;
