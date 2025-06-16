import { NativeModules, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SET_BEACON_DETAILS } from '../../containers/screens/Home/Settings/constants';

const startBLEService = async () => {
    AsyncStorage.getItem(SET_BEACON_DETAILS).then((beacons) => {
        if (Platform.OS === 'android' && beacons) {
            NativeModules.Bluetooth.startBLEService(JSON.parse(beacons).address);
        }
    });
}
export default startBLEService;