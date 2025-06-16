import axios from '../axios';
import { BeaconConnectData } from 'containers/screens/Home/Settings/types';

export const endpoints = {
  beacon: 'beacon/connect',
};

export default {
  beaconConnect: (beaconConnectData: BeaconConnectData) =>
    axios.post(endpoints.beacon, beaconConnectData)
};
