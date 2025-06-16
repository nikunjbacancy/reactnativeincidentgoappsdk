import { FC } from 'react';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { EscortType } from './types';
interface RequestComponentProps {
    isPanic: boolean;
    requestType: EscortType;
}
type Props = NavigationStackScreenProps<RequestComponentProps>;
declare const RequestComponent: FC<Props>;
export default RequestComponent;
