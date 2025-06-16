// @ts-ignore
import LocationServicesDialogBox from 'react-native-android-location-services-dialog-box';

import { isIos } from '../device';

const isGPSActive = async () => {
  if (isIos) return;
  try {
    await LocationServicesDialogBox.checkLocationServicesIsEnabled({
      enableHighAccuracy: true,
      showDialog: false,
      openLocationServices: false,
    });
    return true;
  } catch (error) {
    return false;
  }
};

export default isGPSActive;
