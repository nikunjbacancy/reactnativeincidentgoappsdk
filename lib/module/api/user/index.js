import { getFileExtension } from 'incident-code-core';
import replace from 'lodash/replace';
import RNFetchBlob from 'rn-fetch-blob';
import { isIos } from '../../utils/device';
import axios from '../axios';
export const endpoints = {
  user: 'user',
  usernotifications: 'usernotifications'
};
export default {
  updateName: updateNameData => axios.patch(endpoints.user, updateNameData),
  addContact: contact => axios.post(`${endpoints.user}/contact`, contact),
  updateContact: contact => axios.patch(`${endpoints.user}/contact`, contact),
  deleteContact: contactId => axios.delete(`${endpoints.user}/contact/${contactId}`),
  updateOrganizations: organizationsIds => axios.patch(endpoints.user, {
    organizations: organizationsIds
  }),
  getProfile: () => axios.get(endpoints.user),
  setSetting: (key, value) => axios.patch(`${endpoints.user}/setting`, {
    key,
    value
  }),
  getAddress: (lat, lng) => axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${lat},${lng}&key=AIzaSyDQEfg7mKFvmYzQWFUYpRzv1PlwI6HuikI`),
  getAmazonUploadOptions: async filePath => {
    const newFilePath = isIos ? replace(filePath, 'file://', '') : filePath;
    const fileStat = await RNFetchBlob.fs.stat(newFilePath);

    // @ts-ignore
    const amazonOptionsResponse = await axios.post(`${endpoints.user}/profile-image`, {
      format: getFileExtension(filePath),
      size: fileStat.size
    });
    amazonOptionsResponse.data.filePath = newFilePath;
    return amazonOptionsResponse;
  },
  uploadPortrait: async options => {
    if (!options.filePath) return;
    // upload to s3
    await RNFetchBlob.fetch(options.method, `https://${options.host}${options.path}`, options.headers, RNFetchBlob.wrap(options.filePath));
  },
  completeUpload: options => axios.patch(`${endpoints.user}/set-portrait`, options),
  deletePortrait: () => axios.delete(`${endpoints.user}/remove-portrait`),
  getNotificationList: userId => axios.get(`${endpoints.usernotifications}/${userId}`),
  readAllNotification: userId => axios.put(`${endpoints.usernotifications}/${"markallnotificationasread"}/${userId}`),
  updateReadUnreadNotificationStatus: payload => axios.patch(`${endpoints.usernotifications}/${"usernotification"}/${payload.notiId}`, {
    isRead: payload.isRead,
    userID: payload.userID
  }),
  updateLocationTrackData: payload => axios.post(`geocreds/setdata`, payload),
  updateGeoCredStatus: payload => axios.post(`/geocreds/updateUserGeocredsResponse`, payload),
  setSiteKeyStatus: payload => axios.put(`sitekey/onsite/${payload.locationId}/${payload.userId}`, payload.body),
  getAllUserGeofences: userId => axios.get(`${"adminPortal/orglocation/userloc"}/${userId}`)
};
//# sourceMappingURL=index.js.map