import 'react-native-config';

declare module 'react-native-config' {
  interface NativeConfig {
    APP_NAME: string;
    API_URL: string;
    WEB_URL: string;
    SECURITY_CODE: string;
    APP_STAGE: string;
    APP_VERSION_CODE: string;
    APP_VERSION_NAME: string;
  }
}
