import { request } from 'react-native-permissions';

import {
  checkBlockedActivityRecognitionPermission,
  getLocationActionPermissions,
} from '.';

const requestLocationPermissions = async () => {
  const permissions = getLocationActionPermissions();
  await request(permissions.bestLocation);
  await request(permissions.lightLocation);
  await request(permissions.physical);
  return checkBlockedActivityRecognitionPermission();
};

export default requestLocationPermissions;
