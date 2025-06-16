// @ts-ignore
import LocationServicesDialogBox from 'react-native-android-location-services-dialog-box';
import Toast from 'react-native-root-toast';

import { isIos } from '../device';

const activateGPS = async (successMessage: string, errorMessage: string) => {
  if (isIos) return false;
  try {
    await LocationServicesDialogBox.checkLocationServicesIsEnabled({
      enableHighAccuracy: true,
      showDialog: false,
      openLocationServices: true,
    });
    Toast.show(successMessage, {
      position: Toast.positions.CENTER,
    });
    return true;
  } catch (error) {
    //("activate gps error===>",error)
    Toast.show(errorMessage, {
      position: Toast.positions.CENTER,
    });
    return false;
  }
};

export default activateGPS;
