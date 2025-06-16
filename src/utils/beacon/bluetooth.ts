import { NativeModules } from 'react-native';
import Toast from 'react-native-root-toast';

const checkBluetoothStatus = async () => {
    const bluetoothEnabledStatus = await NativeModules.Bluetooth.checkBLEConnection();
    if (bluetoothEnabledStatus === "Bluetooth Enabled Successfully") {
        return true;
    }
    else {
        Toast.show(bluetoothEnabledStatus, {
            position: Toast.positions.BOTTOM,
        });
        return false;
    }
}
export default checkBluetoothStatus;