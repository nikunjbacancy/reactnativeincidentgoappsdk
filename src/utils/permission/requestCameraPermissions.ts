import { request, RESULTS } from 'react-native-permissions';

import getPermissions from './getPermissions';

const requestCameraPermissions = async () => {
  const permissions = getPermissions();
  //("requestCameraPermissions==>",permissions)
  const camera = await request(permissions.camera);
  const microphone = await request(permissions.microphone);
  if (camera === RESULTS.GRANTED && microphone === RESULTS.GRANTED) {
    return Promise.resolve();
  }
  return Promise.reject();
};

export default requestCameraPermissions;
