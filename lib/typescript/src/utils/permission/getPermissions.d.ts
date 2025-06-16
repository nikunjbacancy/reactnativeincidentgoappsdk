declare const getPermissions: () => {
    camera: "ios.permission.CAMERA" | "android.permission.CAMERA";
    microphone: "ios.permission.MICROPHONE" | "android.permission.RECORD_AUDIO";
    bestLocation: "ios.permission.LOCATION_ALWAYS" | "android.permission.ACCESS_FINE_LOCATION";
    lightLocation: "ios.permission.LOCATION_ALWAYS" | "android.permission.ACCESS_BACKGROUND_LOCATION";
    physical: "ios.permission.MOTION" | "android.permission.ACTIVITY_RECOGNITION";
    galleryWrite: "ios.permission.PHOTO_LIBRARY" | "android.permission.WRITE_EXTERNAL_STORAGE";
    postNotification: "android.permission.POST_NOTIFICATIONS";
    androidMediaPermission: "android.permission.READ_MEDIA_IMAGES";
};
export default getPermissions;
