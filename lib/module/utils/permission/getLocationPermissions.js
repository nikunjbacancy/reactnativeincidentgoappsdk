import { PERMISSIONS } from 'react-native-permissions';
import { isIos } from '../../utils/device';
const {
  IOS,
  ANDROID
} = PERMISSIONS;
const getLocationActionPermissions = () => ({
  bestLocation: isIos ? IOS.LOCATION_ALWAYS : ANDROID.ACCESS_FINE_LOCATION,
  lightLocation: isIos ? IOS.LOCATION_ALWAYS : ANDROID.ACCESS_BACKGROUND_LOCATION,
  physical: isIos ? IOS.MOTION : ANDROID.ACTIVITY_RECOGNITION
});
export default getLocationActionPermissions;
//# sourceMappingURL=getLocationPermissions.js.map