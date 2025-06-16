import {
  AppUser,
  AppUserContact,
  FileUploadOptions,
  FileUploadRequest,
  getFileExtension,
  Id,
  IncidentVideoUploadOptions,
  UserSettingKey,
} from 'incident-code-core';
import replace from 'lodash/replace';
import RNFetchBlob from 'rn-fetch-blob';
import { GeocodeResponse } from 'types';
import { isIos } from '../../utils/device';

import axios from '../axios';

export const endpoints = {
  user: 'user',
  usernotifications: 'usernotifications'
};


export default {
  updateName: (updateNameData: AppUser) =>
    axios.patch(endpoints.user, updateNameData),
  addContact: (contact: AppUserContact) =>
    axios.post(`${endpoints.user}/contact`, contact),
  updateContact: (contact: AppUserContact) =>
    axios.patch(`${endpoints.user}/contact`, contact),
  deleteContact: (contactId: string) =>
    axios.delete(`${endpoints.user}/contact/${contactId}`),
  updateOrganizations: (organizationsIds: Id[]) =>
    axios.patch(endpoints.user, { organizations: organizationsIds }),
  getProfile: () => axios.get<AppUser>(endpoints.user),
  setSetting: (
    key: UserSettingKey | string,
    value: string | number | boolean,
  ) => axios.patch(`${endpoints.user}/setting`, { key, value }),
  getAddress: (lat: number, lng: number) =>
    axios.get<GeocodeResponse>(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${lat},${lng}&key=AIzaSyDQEfg7mKFvmYzQWFUYpRzv1PlwI6HuikI`,
    ),
  getAmazonUploadOptions: async (filePath: string) => {
    const newFilePath = isIos ? replace(filePath, 'file://', '') : filePath;
    const fileStat = await RNFetchBlob.fs.stat(newFilePath);

    // @ts-ignore
    const amazonOptionsResponse: AxiosResponse<IncidentVideoUploadOptions> = await axios.post<
      FileUploadRequest,
      FileUploadOptions
    >(`${endpoints.user}/profile-image`, {
      format: getFileExtension(filePath),
      size: fileStat.size,
    });
    amazonOptionsResponse.data.filePath = newFilePath;
    return amazonOptionsResponse;
  },
  uploadPortrait: async (options: IncidentVideoUploadOptions) => {
    if (!options.filePath) return;
    // upload to s3
    await RNFetchBlob.fetch(
      options.method as any,
      `https://${options.host}${options.path}`,
      options.headers as any,
      RNFetchBlob.wrap(options.filePath),
    );
  },
  completeUpload: (options: FileUploadOptions) =>
    axios.patch(`${endpoints.user}/set-portrait`, options),
  deletePortrait: () => axios.delete(`${endpoints.user}/remove-portrait`),
  getNotificationList: (userId: string) =>
    axios.get(`${endpoints.usernotifications}/${userId}`),
  readAllNotification: (userId: string) =>
    axios.put(`${endpoints.usernotifications}/${"markallnotificationasread"}/${userId}`),  
  updateReadUnreadNotificationStatus: (payload: any) =>
    axios.patch(`${endpoints.usernotifications}/${"usernotification"}/${payload.notiId}`, { isRead: payload.isRead, userID: payload.userID }),
  updateLocationTrackData: (payload: any) =>
    axios.post(`geocreds/setdata`, payload),
  updateGeoCredStatus: (payload: any) =>
    axios.post(`/geocreds/updateUserGeocredsResponse`, payload),
  setSiteKeyStatus: (payload: any) =>
    axios.put(`sitekey/onsite/${payload.locationId}/${payload.userId}`, payload.body),  
  getAllUserGeofences: (userId: string) =>
    axios.get(`${"adminPortal/orglocation/userloc"}/${userId}`),
};
