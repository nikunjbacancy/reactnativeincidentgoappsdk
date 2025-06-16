import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging, {
  FirebaseMessagingTypes,
} from '@react-native-firebase/messaging';
import { AppEvent, event } from '../../api';
import { ANDROID_HEADLESS_NOTIFICATION_KEY } from '../../containers/providers/NotificationProvider/constants';
import { ESCORT_STATE_KEY } from '../../containers/screens/Home/Escort/RecordScreen/constants';
import { EscortState } from '../../containers/screens/Home/Escort/RecordScreen/types';
import { Id, IncidentType } from 'incident-code-core';
import { sendLocalNotification } from '../device';
import { addBadge } from '../notification';
import { crudGeofenceOperation } from '../../utils/location/backgroundGeolocation';
import { isIos } from '../device';
import PushNotification from 'react-native-push-notification';
import { updateUserLocation } from '../../utils/location/backgroundGeolocation';
import NotificationTexts from './messages';

const sendLocalMessage = async (
  message: FirebaseMessagingTypes.RemoteMessage,
) => {
  if (
    message.data?.type === IncidentType.Normal &&
    message.data?.event === 'resolved'
  ) {
    event.emit(AppEvent.OnIncidentUpdated, message.data?.tipId);
    return;
  }
  // //("step -- 2")
  if (
    (message.data?.type === IncidentType.Escort ||
      message.data?.type === IncidentType.PassiveEscort) &&
    message.data?.event === 'resolved'
  ) {
    event.emit(AppEvent.OnEscortClosed, message.data?.tipId);
    return;
  }
  // //("step -- 3")
  // if (
  //   message.data?.type === 'beacon' &&
  //   message.data?.event === 'beaconUpdate'
  // ) {
  //   event.emit(AppEvent.OnBeaconUpdated, message.data);
  //   return;
  // }
  // //("step -- 4")
  if (
    message.data?.type === 'group' &&
    message.data?.event === 'groupChanged' || message.data?.event === 'groupUpdated'
  ) {
    event.emit(AppEvent.OnOrganizationGroupUpdated, "OnOrganizationGroupUpdated");
    return;
  }

  if (message.data?.type === 'Location' && message.data?.event === 'LocationQuestion') {
    sendLocalNotification({
      title: JSON.parse(message.data?.data).title,
      message: JSON.parse(message.data?.data).message,
      userInfo: message.data
    });
    return;
  }
  if (message.data?.type === 'chat' && message.data?.event === 'Message') {
    sendLocalNotification({
      title: message.data?.event,
      message: message.data?.data,
      userInfo: message
    });
    return;
  }
  // handle notify user notification
  if (message?.data?.link != undefined) {
    sendLocalNotification({
      title: message.data?.title,
      message: message.data?.body,
      userInfo: message
    });
    event.emit(AppEvent.OnRefreshNotificationList, "NotifyUser");
  }
  if (message.data?.type === 'logout_user') {
    event.emit(AppEvent.OnLogout, message.notification);
    return;
  }

  if (message.data?.type === 'logout_user') {
    event.emit(AppEvent.OnLogout, message.notification);
    return;
  }

  if (message.data?.type === 'SiteKey' && message.data?.event === 'SiteKey') {
    // console.log("locationquestion===>", JSON.stringify(message.data))
    sendLocalNotification({
      title: JSON.parse(message.data?.data).title,
      message: JSON.parse(message.data?.data).message,
      userInfo: message.data
    });
    return;
  }

  if (message.data?.type === 'Escort' && (message.data?.event === 'PanicCreated' || message.data?.event === 'PanicAccepted')) {
    sendLocalNotification({
      title: JSON.parse(message.data?.data).title,
      message: JSON.parse(message.data?.data).message
    });
    return;
  }

  if (message.data?.incidentId) {
    await addBadge(message.data.incidentId as Id);
  }
  const escortState = await AsyncStorage.getItem(ESCORT_STATE_KEY);
  if (escortState === EscortState.Started) return;
};

const setupFirebaseMessage = () => {
  // messaging().onMessage((message: FirebaseMessagingTypes.RemoteMessage) => {
  //   console.log("OnMessage ===>",message)
  //   if (isIos && message.data?.type === 'Escort' && (message.data?.event === 'PanicAccepted' || message.data?.event === 'PanicCreated')) {
  //     PushNotification.localNotification({
  //       // id:message?.messageId,
  //       title: message?.notification?.title,
  //       message: message?.notification?.body!,
  //     });
  //     return;
  //   }

  //   if (isIos && message.data?.type === 'chat' && message.data?.event === 'Message') {

  //     PushNotification.localNotification({
  //       // id:message?.messageId,
  //       title: message?.notification?.title,
  //       message: message?.notification?.body!,
  //     });
  //     return;
  //   }

  //   if (isIos &&
  //     message.data?.type === 'group' &&
  //     message.data?.event === 'groupChanged' || message.data?.event === 'groupUpdated'
  //   ) {
  //     event.emit(AppEvent.OnOrganizationGroupUpdated, "OnOrganizationGroupUpdated");
  //     return;
  //   }

  //   if (isIos && message.data?.type === 'logout_user') {
  //     event.emit(AppEvent.OnLogout, message?.notification);

  //     return;
  //   }


  //   if (isIos == false) {
  //     sendLocalMessage(message);
  //   }

  //   // update user locaiton on notification arrival
  //   if (message.data?.type === 'silentPush' && message.data?.event === 'LocationUpdate') {
  //     updateUserLocation()
  //   }

  // });

  messaging().onMessage((message: FirebaseMessagingTypes.RemoteMessage) => {
    console.log("onMessage=====>", JSON.stringify(message))

    if (isIos == false) {
      sendLocalMessage(message);
    } else {
      if (message.data?.type === IncidentType.Normal && message.data?.event === 'resolved') {
        let options = {
          title: NotificationTexts.myTips,
          message: NotificationTexts.tipDescription, // Reference message ID from translation file
          userInfo: message
        }
        PushNotification.localNotification(options);
        event.emit(AppEvent.OnIncidentUpdated, message.data?.tipId);
        event.emit(AppEvent.OnRefreshNotificationList, message.data?.tipId);
        return;
      }
      if ((message.data?.type === IncidentType.Escort || message.data?.type === IncidentType.PassiveEscort) && message.data?.event === 'resolved') {
        event.emit(AppEvent.OnRefreshNotificationList, message.data?.tipId);
        event.emit(AppEvent.OnEscortClosed, message.data?.tipId);
        return;
      }
      if (message.data?.type === 'Escort' && (message.data?.event === 'PanicAccepted' || message.data?.event === 'PanicCreated')) {
        let options = {
          title: message?.notification?.title,
          message: message?.notification?.body,
        }
        PushNotification.localNotification(options);
        event.emit(AppEvent.OnRefreshNotificationList, message);
        return;
      }

      if (message.data?.type === 'chat' && message.data?.event === 'Message') {
        let options = {
          title: message?.notification?.title,
          message: message?.notification?.body,
          userInfo: message
        }
        PushNotification.localNotification(options);
        event.emit(AppEvent.OnRefreshNotificationList, message);
        return;
      }

      // display site key notification when app is in foreground mode
      if (message.data?.type === 'SiteKey' && message.data?.event === 'SiteKey') {
        if (typeof message.data?.data === "string") {
          const siteKeyData = JSON.parse(message.data.data);
          let options = {
            title: siteKeyData.title || "",
            message: siteKeyData.message || "",
            userInfo: message,
          };
          PushNotification.localNotification(options);
        }
        return;
      }

      // handle notify user notification
      if (message?.data?.link != undefined) {

        let options = {
          title: message.notification?.title,
          message: message.notification?.body,
          userInfo: message
        }
        PushNotification.localNotification(options);
        event.emit(AppEvent.OnRefreshNotificationList, "NotifyUser");
      }

      if (
        message.data?.type === 'group' &&
        message.data?.event === 'groupChanged' || message.data?.event === 'groupUpdated'
      ) {
        event.emit(AppEvent.OnRefreshNotificationList, "OnOrganizationGroupUpdated");
        event.emit(AppEvent.OnOrganizationGroupUpdated, "OnOrganizationGroupUpdated");
        return;
      }

      if (message.data?.type === 'logout_user') {
        event.emit(AppEvent.OnLogout, message?.notification);
        return;
      }

      // console.log("message.data?.type=>",message.data?.type)
      if (message.data?.type === 'Location' && message.data?.event === 'LocationQuestion') {
        // console.log("locationquestion===>", JSON.stringify(message.data))
        sendLocalNotification({
          title: JSON.parse(message.data?.data).title,
          message: JSON.parse(message.data?.data).message,
          userInfo: message.data
        });
        return;
      }
    }

    // update user locaiton on notification arrival
    if (message.data?.type === 'silentPush' && message.data?.event === 'LocationUpdate') {
      updateUserLocation()
    }

  });

  messaging().onNotificationOpenedApp(async (remoteMessage) => {
    //('onNotificationOpenedApp', remoteMessage);
    if (remoteMessage.data?.type === 'logout_user') {
      event.emit(AppEvent.OnLogout, remoteMessage?.notification);
    }
  });

  messaging()
    .getInitialNotification()
    .then(async (remoteMessage) => {
      //('getInitialNotification*******',);
      // //('getInitialNotification', remoteMessage.data?.type);

      if (remoteMessage?.data?.type === 'logout_user') {
        event.emit(AppEvent.OnLogout, remoteMessage?.notification);
        // return;
      }

    });

  messaging().setBackgroundMessageHandler(
    async (message: FirebaseMessagingTypes.RemoteMessage) => {
      console.log("background Handler message ===>", message)
      if (message.data?.incidentId) {
        await AsyncStorage.setItem(
          ANDROID_HEADLESS_NOTIFICATION_KEY,
          message.data.incidentId,
        );
      }
      // sendLocalMessage(message);

      //update user location
      if (message?.data?.type == "silentPush" && message?.data?.event == "LocationUpdate") {
        updateUserLocation()
      }

      if (message.data?.type === 'geofence' && message.data?.event === 'polygon') {
        const payloaData = typeof message.data?.data === 'string' ? JSON.parse(message.data.data) : message.data?.data;
        crudGeofenceOperation(payloaData.data, message.data?.isCron)
      }

      if (message.data?.type === 'SiteKey' && message.data?.event === 'SiteKey') {
        sendLocalNotification({
          title: JSON.parse(message.data?.data).title,
          message: JSON.parse(message.data?.data).message,
          userInfo: message.data
        });
        return;
      }

    },
  );
};

export default setupFirebaseMessage;
