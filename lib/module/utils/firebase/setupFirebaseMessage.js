import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
import { AppEvent, event } from '../../api';
import { ANDROID_HEADLESS_NOTIFICATION_KEY } from '../../containers/providers/NotificationProvider/constants';
import { ESCORT_STATE_KEY } from '../../containers/screens/Home/Escort/RecordScreen/constants';
import { EscortState } from '../../containers/screens/Home/Escort/RecordScreen/types';
import { IncidentType } from 'incident-code-core';
import { sendLocalNotification } from '../device';
import { addBadge } from '../notification';
import { crudGeofenceOperation } from '../../utils/location/backgroundGeolocation';
import { isIos } from '../device';
import PushNotification from 'react-native-push-notification';
import { updateUserLocation } from '../../utils/location/backgroundGeolocation';
import NotificationTexts from './messages';
const sendLocalMessage = async message => {
  var _message$data, _message$data2, _message$data4, _message$data5, _message$data6, _message$data8, _message$data9, _message$data10, _message$data11, _message$data12, _message$data15, _message$data16, _message$data19, _message$data20, _message$data21, _message$data22, _message$data25;
  if (((_message$data = message.data) === null || _message$data === void 0 ? void 0 : _message$data.type) === IncidentType.Normal && ((_message$data2 = message.data) === null || _message$data2 === void 0 ? void 0 : _message$data2.event) === 'resolved') {
    var _message$data3;
    event.emit(AppEvent.OnIncidentUpdated, (_message$data3 = message.data) === null || _message$data3 === void 0 ? void 0 : _message$data3.tipId);
    return;
  }
  // //("step -- 2")
  if ((((_message$data4 = message.data) === null || _message$data4 === void 0 ? void 0 : _message$data4.type) === IncidentType.Escort || ((_message$data5 = message.data) === null || _message$data5 === void 0 ? void 0 : _message$data5.type) === IncidentType.PassiveEscort) && ((_message$data6 = message.data) === null || _message$data6 === void 0 ? void 0 : _message$data6.event) === 'resolved') {
    var _message$data7;
    event.emit(AppEvent.OnEscortClosed, (_message$data7 = message.data) === null || _message$data7 === void 0 ? void 0 : _message$data7.tipId);
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
  if (((_message$data8 = message.data) === null || _message$data8 === void 0 ? void 0 : _message$data8.type) === 'group' && ((_message$data9 = message.data) === null || _message$data9 === void 0 ? void 0 : _message$data9.event) === 'groupChanged' || ((_message$data10 = message.data) === null || _message$data10 === void 0 ? void 0 : _message$data10.event) === 'groupUpdated') {
    event.emit(AppEvent.OnOrganizationGroupUpdated, "OnOrganizationGroupUpdated");
    return;
  }
  if (((_message$data11 = message.data) === null || _message$data11 === void 0 ? void 0 : _message$data11.type) === 'Location' && ((_message$data12 = message.data) === null || _message$data12 === void 0 ? void 0 : _message$data12.event) === 'LocationQuestion') {
    var _message$data13, _message$data14;
    console.log("x", JSON.stringify(message.data));
    sendLocalNotification({
      title: JSON.parse((_message$data13 = message.data) === null || _message$data13 === void 0 ? void 0 : _message$data13.data).title,
      message: JSON.parse((_message$data14 = message.data) === null || _message$data14 === void 0 ? void 0 : _message$data14.data).message,
      userInfo: message.data
    });
    return;
  }
  if (((_message$data15 = message.data) === null || _message$data15 === void 0 ? void 0 : _message$data15.type) === 'chat' && ((_message$data16 = message.data) === null || _message$data16 === void 0 ? void 0 : _message$data16.event) === 'Message') {
    var _message$data17, _message$data18;
    // if (isAndroid) {
    //   NativeModules.Bluetooth.awakeLockScreen();
    // }
    sendLocalNotification({
      title: (_message$data17 = message.data) === null || _message$data17 === void 0 ? void 0 : _message$data17.event,
      message: (_message$data18 = message.data) === null || _message$data18 === void 0 ? void 0 : _message$data18.data,
      userInfo: message
    });
    return;
  }
  if (((_message$data19 = message.data) === null || _message$data19 === void 0 ? void 0 : _message$data19.type) === 'logout_user') {
    event.emit(AppEvent.OnLogout, message.notification);
    return;
  }
  if (((_message$data20 = message.data) === null || _message$data20 === void 0 ? void 0 : _message$data20.type) === 'Escort' && (((_message$data21 = message.data) === null || _message$data21 === void 0 ? void 0 : _message$data21.event) === 'PanicCreated' || ((_message$data22 = message.data) === null || _message$data22 === void 0 ? void 0 : _message$data22.event) === 'PanicAccepted')) {
    var _message$data23, _message$data24;
    sendLocalNotification({
      title: JSON.parse((_message$data23 = message.data) === null || _message$data23 === void 0 ? void 0 : _message$data23.data).title,
      message: JSON.parse((_message$data24 = message.data) === null || _message$data24 === void 0 ? void 0 : _message$data24.data).message
    });
    return;
  }
  if ((_message$data25 = message.data) !== null && _message$data25 !== void 0 && _message$data25.incidentId) {
    await addBadge(message.data.incidentId);
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

  messaging().onMessage(message => {
    var _message$data52, _message$data53;
    console.log("onMessage=====>", JSON.stringify(message));
    if (isIos == false) {
      sendLocalMessage(message);
    } else {
      var _message$data26, _message$data27, _message$data30, _message$data31, _message$data32, _message$data35, _message$data36, _message$data37, _message$data38, _message$data39, _message$data40, _message$data41, _message$data43, _message$data44, _message$data45, _message$data46, _message$data47, _message$data48, _message$data49;
      if (((_message$data26 = message.data) === null || _message$data26 === void 0 ? void 0 : _message$data26.type) === IncidentType.Normal && ((_message$data27 = message.data) === null || _message$data27 === void 0 ? void 0 : _message$data27.event) === 'resolved') {
        var _message$data28, _message$data29;
        let options = {
          title: NotificationTexts.myTips,
          message: NotificationTexts.tipDescription,
          // Reference message ID from translation file
          userInfo: message
        };
        PushNotification.localNotification(options);
        event.emit(AppEvent.OnIncidentUpdated, (_message$data28 = message.data) === null || _message$data28 === void 0 ? void 0 : _message$data28.tipId);
        event.emit(AppEvent.OnRefreshNotificationList, (_message$data29 = message.data) === null || _message$data29 === void 0 ? void 0 : _message$data29.tipId);
        return;
      }
      if ((((_message$data30 = message.data) === null || _message$data30 === void 0 ? void 0 : _message$data30.type) === IncidentType.Escort || ((_message$data31 = message.data) === null || _message$data31 === void 0 ? void 0 : _message$data31.type) === IncidentType.PassiveEscort) && ((_message$data32 = message.data) === null || _message$data32 === void 0 ? void 0 : _message$data32.event) === 'resolved') {
        var _message$data33, _message$data34;
        event.emit(AppEvent.OnRefreshNotificationList, (_message$data33 = message.data) === null || _message$data33 === void 0 ? void 0 : _message$data33.tipId);
        event.emit(AppEvent.OnEscortClosed, (_message$data34 = message.data) === null || _message$data34 === void 0 ? void 0 : _message$data34.tipId);
        return;
      }
      if (((_message$data35 = message.data) === null || _message$data35 === void 0 ? void 0 : _message$data35.type) === 'Escort' && (((_message$data36 = message.data) === null || _message$data36 === void 0 ? void 0 : _message$data36.event) === 'PanicAccepted' || ((_message$data37 = message.data) === null || _message$data37 === void 0 ? void 0 : _message$data37.event) === 'PanicCreated')) {
        var _message$notification, _message$notification2;
        let options = {
          title: message === null || message === void 0 || (_message$notification = message.notification) === null || _message$notification === void 0 ? void 0 : _message$notification.title,
          message: message === null || message === void 0 || (_message$notification2 = message.notification) === null || _message$notification2 === void 0 ? void 0 : _message$notification2.body
        };
        PushNotification.localNotification(options);
        event.emit(AppEvent.OnRefreshNotificationList, message);
        return;
      }
      if (((_message$data38 = message.data) === null || _message$data38 === void 0 ? void 0 : _message$data38.type) === 'chat' && ((_message$data39 = message.data) === null || _message$data39 === void 0 ? void 0 : _message$data39.event) === 'Message') {
        var _message$notification3, _message$notification4;
        let options = {
          title: message === null || message === void 0 || (_message$notification3 = message.notification) === null || _message$notification3 === void 0 ? void 0 : _message$notification3.title,
          message: message === null || message === void 0 || (_message$notification4 = message.notification) === null || _message$notification4 === void 0 ? void 0 : _message$notification4.body,
          userInfo: message
        };
        PushNotification.localNotification(options);
        event.emit(AppEvent.OnRefreshNotificationList, message);
        return;
      }

      // display site key notification when app is in foreground mode
      if (((_message$data40 = message.data) === null || _message$data40 === void 0 ? void 0 : _message$data40.type) === 'SiteKey' && ((_message$data41 = message.data) === null || _message$data41 === void 0 ? void 0 : _message$data41.event) === 'SiteKey') {
        var _message$data42;
        if (typeof ((_message$data42 = message.data) === null || _message$data42 === void 0 ? void 0 : _message$data42.data) === "string") {
          const siteKeyData = JSON.parse(message.data.data);
          let options = {
            title: siteKeyData.title || "",
            message: siteKeyData.message || "",
            userInfo: message
          };
          PushNotification.localNotification(options);
        }
        return;
      }

      // handle notify user notification
      if ((message === null || message === void 0 || (_message$data43 = message.data) === null || _message$data43 === void 0 ? void 0 : _message$data43.link) != undefined) {
        var _message$notification5, _message$notification6;
        let options = {
          title: (_message$notification5 = message.notification) === null || _message$notification5 === void 0 ? void 0 : _message$notification5.title,
          message: (_message$notification6 = message.notification) === null || _message$notification6 === void 0 ? void 0 : _message$notification6.body,
          userInfo: message
        };
        PushNotification.localNotification(options);
        event.emit(AppEvent.OnRefreshNotificationList, "NotifyUser");
      }
      if (((_message$data44 = message.data) === null || _message$data44 === void 0 ? void 0 : _message$data44.type) === 'group' && ((_message$data45 = message.data) === null || _message$data45 === void 0 ? void 0 : _message$data45.event) === 'groupChanged' || ((_message$data46 = message.data) === null || _message$data46 === void 0 ? void 0 : _message$data46.event) === 'groupUpdated') {
        event.emit(AppEvent.OnRefreshNotificationList, "OnOrganizationGroupUpdated");
        event.emit(AppEvent.OnOrganizationGroupUpdated, "OnOrganizationGroupUpdated");
        return;
      }
      if (((_message$data47 = message.data) === null || _message$data47 === void 0 ? void 0 : _message$data47.type) === 'logout_user') {
        event.emit(AppEvent.OnLogout, message === null || message === void 0 ? void 0 : message.notification);
        return;
      }

      // console.log("message.data?.type=>",message.data?.type)
      if (((_message$data48 = message.data) === null || _message$data48 === void 0 ? void 0 : _message$data48.type) === 'Location' && ((_message$data49 = message.data) === null || _message$data49 === void 0 ? void 0 : _message$data49.event) === 'LocationQuestion') {
        var _message$data50, _message$data51;
        // console.log("locationquestion===>", JSON.stringify(message.data))
        sendLocalNotification({
          title: JSON.parse((_message$data50 = message.data) === null || _message$data50 === void 0 ? void 0 : _message$data50.data).title,
          message: JSON.parse((_message$data51 = message.data) === null || _message$data51 === void 0 ? void 0 : _message$data51.data).message,
          userInfo: message.data
        });
        return;
      }
    }

    // update user locaiton on notification arrival
    if (((_message$data52 = message.data) === null || _message$data52 === void 0 ? void 0 : _message$data52.type) === 'silentPush' && ((_message$data53 = message.data) === null || _message$data53 === void 0 ? void 0 : _message$data53.event) === 'LocationUpdate') {
      updateUserLocation();
    }
  });
  messaging().onNotificationOpenedApp(async remoteMessage => {
    var _remoteMessage$data;
    //('onNotificationOpenedApp', remoteMessage);
    if (((_remoteMessage$data = remoteMessage.data) === null || _remoteMessage$data === void 0 ? void 0 : _remoteMessage$data.type) === 'logout_user') {
      event.emit(AppEvent.OnLogout, remoteMessage === null || remoteMessage === void 0 ? void 0 : remoteMessage.notification);
    }
  });
  messaging().getInitialNotification().then(async remoteMessage => {
    var _remoteMessage$data2;
    //('getInitialNotification*******',);
    // //('getInitialNotification', remoteMessage.data?.type);

    if ((remoteMessage === null || remoteMessage === void 0 || (_remoteMessage$data2 = remoteMessage.data) === null || _remoteMessage$data2 === void 0 ? void 0 : _remoteMessage$data2.type) === 'logout_user') {
      event.emit(AppEvent.OnLogout, remoteMessage === null || remoteMessage === void 0 ? void 0 : remoteMessage.notification);
      // return;
    }
  });
  messaging().setBackgroundMessageHandler(async message => {
    var _message$data54, _message$data55, _message$data56, _message$data57, _message$data58, _message$data62, _message$data63;
    console.log("background Handler message ===>", message);
    if ((_message$data54 = message.data) !== null && _message$data54 !== void 0 && _message$data54.incidentId) {
      await AsyncStorage.setItem(ANDROID_HEADLESS_NOTIFICATION_KEY, message.data.incidentId);
    }
    // sendLocalMessage(message);

    //update user location
    if ((message === null || message === void 0 || (_message$data55 = message.data) === null || _message$data55 === void 0 ? void 0 : _message$data55.type) == "silentPush" && (message === null || message === void 0 || (_message$data56 = message.data) === null || _message$data56 === void 0 ? void 0 : _message$data56.event) == "LocationUpdate") {
      updateUserLocation();
    }
    if (((_message$data57 = message.data) === null || _message$data57 === void 0 ? void 0 : _message$data57.type) === 'geofence' && ((_message$data58 = message.data) === null || _message$data58 === void 0 ? void 0 : _message$data58.event) === 'polygon') {
      var _message$data59, _message$data60, _message$data61;
      const payloaData = typeof ((_message$data59 = message.data) === null || _message$data59 === void 0 ? void 0 : _message$data59.data) === 'string' ? JSON.parse(message.data.data) : (_message$data60 = message.data) === null || _message$data60 === void 0 ? void 0 : _message$data60.data;
      crudGeofenceOperation(payloaData.data, (_message$data61 = message.data) === null || _message$data61 === void 0 ? void 0 : _message$data61.isCron);
    }
    if (((_message$data62 = message.data) === null || _message$data62 === void 0 ? void 0 : _message$data62.type) === 'SiteKey' && ((_message$data63 = message.data) === null || _message$data63 === void 0 ? void 0 : _message$data63.event) === 'SiteKey') {
      var _message$data64, _message$data65;
      sendLocalNotification({
        title: JSON.parse((_message$data64 = message.data) === null || _message$data64 === void 0 ? void 0 : _message$data64.data).title,
        message: JSON.parse((_message$data65 = message.data) === null || _message$data65 === void 0 ? void 0 : _message$data65.data).message,
        userInfo: message.data
      });
      return;
    }
  });
};
export default setupFirebaseMessage;
//# sourceMappingURL=setupFirebaseMessage.js.map