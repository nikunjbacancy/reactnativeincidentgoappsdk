import { AppUser, AppUserContact, FileUploadOptions, Id, IncidentVideoUploadOptions, UserSettingKey } from 'incident-code-core';
import { GeocodeResponse } from 'types';
export declare const endpoints: {
    user: string;
    usernotifications: string;
};
declare const _default: {
    updateName: (updateNameData: AppUser) => Promise<import("axios").AxiosResponse<any>>;
    addContact: (contact: AppUserContact) => Promise<import("axios").AxiosResponse<any>>;
    updateContact: (contact: AppUserContact) => Promise<import("axios").AxiosResponse<any>>;
    deleteContact: (contactId: string) => Promise<import("axios").AxiosResponse<any>>;
    updateOrganizations: (organizationsIds: Id[]) => Promise<import("axios").AxiosResponse<any>>;
    getProfile: () => Promise<import("axios").AxiosResponse<AppUser>>;
    setSetting: (key: UserSettingKey | string, value: string | number | boolean) => Promise<import("axios").AxiosResponse<any>>;
    getAddress: (lat: number, lng: number) => Promise<import("axios").AxiosResponse<GeocodeResponse>>;
    getAmazonUploadOptions: (filePath: string) => Promise<AxiosResponse<IncidentVideoUploadOptions>>;
    uploadPortrait: (options: IncidentVideoUploadOptions) => Promise<void>;
    completeUpload: (options: FileUploadOptions) => Promise<import("axios").AxiosResponse<any>>;
    deletePortrait: () => Promise<import("axios").AxiosResponse<any>>;
    getNotificationList: (userId: string) => Promise<import("axios").AxiosResponse<any>>;
    readAllNotification: (userId: string) => Promise<import("axios").AxiosResponse<any>>;
    updateReadUnreadNotificationStatus: (payload: any) => Promise<import("axios").AxiosResponse<any>>;
    updateLocationTrackData: (payload: any) => Promise<import("axios").AxiosResponse<any>>;
    updateGeoCredStatus: (payload: any) => Promise<import("axios").AxiosResponse<any>>;
    setSiteKeyStatus: (payload: any) => Promise<import("axios").AxiosResponse<any>>;
    getAllUserGeofences: (userId: string) => Promise<import("axios").AxiosResponse<any>>;
};
export default _default;
