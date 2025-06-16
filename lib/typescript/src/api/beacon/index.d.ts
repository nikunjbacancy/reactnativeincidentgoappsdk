import { BeaconConnectData } from 'containers/screens/Home/Settings/types';
export declare const endpoints: {
    beacon: string;
};
declare const _default: {
    beaconConnect: (beaconConnectData: BeaconConnectData) => Promise<import("axios").AxiosResponse<any>>;
};
export default _default;
