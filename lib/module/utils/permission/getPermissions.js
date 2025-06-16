import { PERMISSIONS } from 'react-native-permissions';
import { isIos } from '../../utils/device';
const {
  IOS,
  ANDROID
} = PERMISSIONS;
const getPermissions = () => ({
  camera: isIos ? IOS.CAMERA : ANDROID.CAMERA,
  microphone: isIos ? IOS.MICROPHONE : ANDROID.RECORD_AUDIO,
  bestLocation: isIos ? IOS.LOCATION_ALWAYS : ANDROID.ACCESS_FINE_LOCATION,
  lightLocation: isIos ? IOS.LOCATION_ALWAYS : ANDROID.ACCESS_BACKGROUND_LOCATION,
  physical: isIos ? IOS.MOTION : ANDROID.ACTIVITY_RECOGNITION,
  galleryWrite: isIos ? IOS.PHOTO_LIBRARY : ANDROID.WRITE_EXTERNAL_STORAGE,
  postNotification: ANDROID.POST_NOTIFICATIONS,
  androidMediaPermission: ANDROID.READ_MEDIA_IMAGES
});
export default getPermissions;
//# sourceMappingURL=getPermissions.js.map