import axios from '../axios';
export const endpoints = {
  beacon: 'beacon/connect'
};
export default {
  beaconConnect: beaconConnectData => axios.post(endpoints.beacon, beaconConnectData)
};
//# sourceMappingURL=index.js.map