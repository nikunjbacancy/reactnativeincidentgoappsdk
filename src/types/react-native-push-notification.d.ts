import { PushNotification as RNPushNotification } from 'react-native-push-notification';

declare module 'react-native-push-notification' {
  interface PushNotification extends RNPushNotification {
    userInfo: any;
    data: {
      incidentId: string;
    };
  }
}
