import { isAndroid } from "../../utils/device";
import { NativeModules, NativeEventEmitter } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SET_BEACON_DETAILS } from '../../containers/screens/Home/Settings/constants';
const eventEmitter = async () => {
  if (isAndroid) {
    new NativeEventEmitter(NativeModules.Bluetooth).addListener('ADDRESS', () => {
      AsyncStorage.getItem(SET_BEACON_DETAILS).then(async value => {
        var beaconConnectParams = {
          name: JSON.parse(value).name,
          address: JSON.parse(value).address
        };
        return beaconConnectParams;
      });
    });
    return null;
  } else {
    var beaconConnectParams = {
      name: "Test Name",
      address: "Test Address"
    };
    return beaconConnectParams;
  }
};
export default eventEmitter;
//# sourceMappingURL=eventEmitter.js.map