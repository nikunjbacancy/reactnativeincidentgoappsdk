declare const getLocationActionPermissions: () => {
    bestLocation: "ios.permission.LOCATION_ALWAYS" | "android.permission.ACCESS_FINE_LOCATION";
    lightLocation: "ios.permission.LOCATION_ALWAYS" | "android.permission.ACCESS_BACKGROUND_LOCATION";
    physical: "ios.permission.MOTION" | "android.permission.ACTIVITY_RECOGNITION";
};
export default getLocationActionPermissions;
