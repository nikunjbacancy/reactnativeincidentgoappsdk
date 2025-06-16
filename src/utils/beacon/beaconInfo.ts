import { NativeModules } from 'react-native';

const setUpBeaconInfo = async () => {
    const deviceinfo = await NativeModules.Bluetooth.scanBLEDevice();
    const beaconConnectParams = {
        name: deviceinfo.name,
        address: deviceinfo.address,
    };
    return beaconConnectParams;
}
export default setUpBeaconInfo;