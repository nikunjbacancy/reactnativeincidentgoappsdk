import { DeviceInfo } from 'incident-code-core';
import { Platform } from 'react-native';
import NativeDeviceInfo from 'react-native-device-info';

const getInfo = (): DeviceInfo => {
  return {
    system: Platform.OS,
    brand: NativeDeviceInfo.getBrand(),
    model: NativeDeviceInfo.getDeviceId(),
    version: Platform.Version.toString(),
  };
};

export default getInfo;
