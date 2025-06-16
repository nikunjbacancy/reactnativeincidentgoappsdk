declare module 'react-native-android-location-services-dialog-box' {
  export interface Config {
    message?: string;
    ok?: string;
    cancel?: string;
    enableHighAccuracy?: boolean;
    showDialog?: boolean;
    openLocationServices?: boolean;
    preventOutSideTouch?: boolean;
    preventBackClick?: boolean;
    providerListener?: boolean;
  }
  export interface CheckLocationResult {
    enabled: boolean;
    status: 'enabled' | 'disabled';
  }
  async function checkLocationServicesIsEnabled(
    config: Config,
  ): Promise<CheckLocationResult>;
}
