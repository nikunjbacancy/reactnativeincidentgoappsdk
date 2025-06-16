import { check, PermissionStatus, RESULTS } from 'react-native-permissions';
import { getLocationActionPermissions } from '.';

import { isIos } from '../device';

const getLocationBlockedStatus = (
  bestLocation: PermissionStatus,
  lightLocation: PermissionStatus,
) =>
  isIos
    ? bestLocation === RESULTS.BLOCKED && lightLocation === RESULTS.BLOCKED
    : bestLocation === RESULTS.BLOCKED || lightLocation === RESULTS.BLOCKED;

const checkBlockedLocationActivityPermission = async () => {
  const permissions = getLocationActionPermissions();
  return Promise.all([
    check(permissions.bestLocation),
    check(permissions.lightLocation),
    check(permissions.physical),
  ]).then(([bestLocation, lightLocation, physical]) => {
    if (
      physical === RESULTS.BLOCKED ||
      getLocationBlockedStatus(bestLocation, lightLocation)
    ) {
      return Promise.reject();
    }
    return Promise.resolve();
  });
};

export default checkBlockedLocationActivityPermission;
