import { FC } from 'react';
import { LatLng } from 'react-native-maps';
interface Props {
    coords: LatLng;
    gradientColor: string[];
}
declare const MapSnapshot: FC<Props>;
export default MapSnapshot;
