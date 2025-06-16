import { request } from 'react-native-permissions';
import checkBlockedPermission from './checkBlockedPermission';
import getPermissions from './getPermissions';
import { Platform } from 'react-native';
const requestAllPermissions = async () => {
  const permissions = getPermissions();
  await request(permissions.camera);
  await request(permissions.microphone);
  await request(permissions.physical);
  await request(permissions.galleryWrite);
  await request(permissions.androidMediaPermission);
  await request(permissions.postNotification);
  if (Platform.OS === 'ios') {
    await request(permissions.bestLocation);
    await request(permissions.lightLocation);
  }
  return checkBlockedPermission();
};
export default requestAllPermissions;
//# sourceMappingURL=requestAllPermissions.js.map