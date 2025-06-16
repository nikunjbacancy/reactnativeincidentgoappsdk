import { check, PermissionStatus, RESULTS } from 'react-native-permissions';
import { isIos } from '../../utils/device';

import getPermissions from './getPermissions';

const getLocationBlockedStatus = (
  bestLocation: PermissionStatus,
  lightLocation: PermissionStatus,
) =>
  isIos
    ? bestLocation === RESULTS.BLOCKED && lightLocation === RESULTS.BLOCKED
    : bestLocation === RESULTS.BLOCKED || lightLocation === RESULTS.BLOCKED;

const checkBlockedPermission = async () => {
  const permissions = getPermissions();
  return Promise.all([
    check(permissions.camera),
    check(permissions.microphone),
    check(permissions.bestLocation),
    check(permissions.lightLocation),
    check(permissions.physical),
    check(permissions.galleryWrite),
  ]).then(([camera, microphone, bestLocation, lightLocation, physical]) => {
    if (
      camera === RESULTS.BLOCKED ||
      microphone === RESULTS.BLOCKED ||
      physical === RESULTS.BLOCKED ||
      getLocationBlockedStatus(bestLocation, lightLocation)
    ) {
      return Promise.reject();
    }
    return Promise.resolve();
  });
};

export default checkBlockedPermission;
