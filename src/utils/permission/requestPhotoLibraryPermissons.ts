import { request, RESULTS } from 'react-native-permissions';

import getPermissions from './getPermissions';

const requestPhotoLibraryPermissions = async () => {
  const permissions = getPermissions();
  //("requestPhotoLibraryPermissions==>",permissions)
  const gallery = await request(permissions.galleryWrite);
  //("gallery==>",gallery)
  if (gallery === RESULTS.GRANTED) {
    return Promise.resolve(RESULTS.GRANTED);
  }
  return Promise.reject(RESULTS.BLOCKED);
};

export default requestPhotoLibraryPermissions;
