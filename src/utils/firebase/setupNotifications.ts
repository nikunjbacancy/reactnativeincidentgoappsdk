import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppEvent, event } from '../../api';
import Screens from '../../containers/providers/RoutesProvider/screens';
import { ESCORT_STATE_KEY } from '../../containers/screens/Home/Escort/RecordScreen/constants';
import { EscortState } from '../../containers/screens/Home/Escort/RecordScreen/types';
import { IncidentType } from 'incident-code-core';
import PNotification, {
  PushNotification
} from 'react-native-push-notification';

import { isAndroid, isIos } from '../device';
import NavigatorService from '../navigation';

const getIncidentId = (notification: PushNotification): string | undefined => {
  // //("getIncidentId--->")
  // //("getIncidentId notification--->",notification)
  // @ts-ignore
  if (notification.data?.incidentId) {
    // @ts-ignore
    return notification.data?.incidentId;
  }
  if (notification.userInfo?.incidentId) {
    return notification.userInfo?.incidentId;
  }
  return undefined;
};

// const setupNotifications = (): Promise<PushNotification | undefined> =>
//   new Promise(() => {
//     //("notification setup")
//     PNotification.configure({
//       onRegister: function (token) {
//         console.log("TOKEN:", token);
//       },
//       onNotification: async notification => {
//         // //("notification: --------- " + JSON.stringify(notification));

//         if (!notification.userInteraction) {
//           return;
//         }

//         if (
//           // @ts-ignore
//           notification.data?.type === "Location" &&
//           // @ts-ignore
//           notification.data?.event === 'LocationQuestion'
//         ) {
//           // console.log("Incident Escort --------- ");
//           // @ts-ignore
//           console.log("******************************location question******************************")
//           event.emit(AppEvent.OnLocationQuestion, notification.data);
//           return;
//         }

//         //incidentType
//         if (
//           // @ts-ignore
//           notification.data?.type === IncidentType.Normal &&
//           // @ts-ignore
//           notification.data?.event === 'resolved'
//         ) {
//           //("AppEvent.OnIncidentUpdated: --------- ");
//           // @ts-ignore
//           event.emit(AppEvent.OnIncidentUpdated, notification.data?.tipId);
//           return;
//         }
//         if (
//           // @ts-ignore
//           notification.data?.type === IncidentType.Escort &&
//           // @ts-ignore
//           notification.data?.event === 'resolved'
//         ) {
//           //("Incident Escort --------- ");
//           // @ts-ignore
//           event.emit(AppEvent.OnEscortClosed, notification.data?.tipId);
//           return;
//         }

//         if (
//           // @ts-ignore
//           notification.data?.type === 'beacon' &&
//           // @ts-ignore
//           notification.data?.event === 'beaconUpdate'
//         ) {
//           //("AppEvent.OnBeaconUpdated --------- ");
//           event.emit(AppEvent.OnBeaconUpdated, notification.data);
//           return;
//         }

//         if (
//           // @ts-ignore
//           notification.data?.incidentType === IncidentType.Escort ||
//           // @ts-ignore
//           notification.userInfo?.link
//         )
//           return;
//         // @ts-ignore
//         // if (isIos) {
//         //   const incidentId = getIncidentId(notification);
//         //   if (incidentId) {
//         //     await addBadge(incidentId as Id);
//         //   }
//         // }
//         const escortState = await AsyncStorage.getItem(ESCORT_STATE_KEY);
//         if (escortState === EscortState.Started) return;
//         if (notification.foreground && isIos) {
//           // //("notification foreground received --------------- ")
//           // return resolve(notification);
//         }
//         const incidentId = getIncidentId(notification);
//         if (incidentId) {
//           NavigatorService.navigate(Screens.Menu.Tips.TipDetail, {
//             incident: {
//               id: incidentId,
//             },
//             showChat: true,
//           });
//         }
//       },

//       permissions: {
//         alert: true,
//         badge: true,
//         sound: true
//       },

//       popInitialNotification: true,
//       requestPermissions: true,
//     });
//   });

const setupNotifications = (): Promise<PushNotification | undefined> =>
  new Promise(() => {
    PNotification.configure({
      onRegister: function (token) {
        console.log("TOKEN:", token);
        if (isAndroid) {
          PNotification.createChannel(
            {
              channelId: "ico-app", // (required)
              channelName: "icoappchannel", // (required)
              channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
              playSound: true, // (optional) default: true
              soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
              importance: 4, // (optional) default: Importance.HIGH. Int value of the Android notification importance
              vibrate: true, // (optional) default: true. Creates the default vibration pattern if true.

            },
            (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
          );

        }
      },

      onNotification: async notification => {
        // console.log("onNotification====>",notification)
        if (!notification.userInteraction) {
          return;
        }
        console.log("on tap====>",notification)
        if (isIos) {
          if (notification.data?.type === IncidentType.Normal && notification.data?.event === 'resolved') {
            NavigatorService.navigate(Screens.Menu.Tips.TipDetail, {
              incident: undefined,
              showChat: false,
              tipId: notification.data?.tipId
            });
            return;
          }
          if (notification.data?.data?.type === IncidentType.Normal && notification.data?.data?.event === 'resolved') {
            NavigatorService.navigate(Screens.Menu.Tips.TipDetail, {
              incident: undefined,
              showChat: false,
              tipId: notification.data?.data?.tipId
            });
            return;
          }

        } else {
          if (notification.data?.data?.type === IncidentType.Normal && notification.data?.data?.event === 'resolved') {
            NavigatorService.navigate(Screens.Menu.Tips.TipDetail, {
              incident: undefined,
              showChat: false,
              tipId: notification.data?.data?.tipId
            });
            return;
          }
        }

        if (
          // @ts-ignore
          notification.data?.type === IncidentType.Escort &&
          // @ts-ignore
          notification.data?.event === 'resolved'
        ) {
          // console.log("Incident Escort --------- ");
          // @ts-ignore
          event.emit(AppEvent.OnEscortClosed, notification.data?.tipId);
          return;
        }

        if (
          // @ts-ignore
          notification.data?.type === "Location" &&
          // @ts-ignore
          notification.data?.event === 'LocationQuestion'
        ) {
          // console.log("Incident Escort --------- ");
          // @ts-ignore
          event.emit(AppEvent.OnLocationQuestion, notification.data);

          return;
        }

        //handle site key notification
        if (isIos) {
          if (notification.foreground == false) {
            if (notification.data?.type === "SiteKey" && notification.data?.event === 'SiteKey' ||
              notification.data?.data?.type === "SiteKey" && notification.data?.data?.event === 'SiteKey'
            ) {
              event.emit(AppEvent.OnSiteKeyNotificataionReceived, notification.data);
              return;
            }
          } else {
            if (notification.data?.data?.type === "SiteKey" && notification.data?.data?.event === 'SiteKey') {
              event.emit(AppEvent.OnSiteKeyNotificataionReceived, notification.data);
              return;
            }
          }
        }
        else {
          if (notification.data?.type === "SiteKey" && notification.data?.event === 'SiteKey') {
            event.emit(AppEvent.OnSiteKeyNotificataionReceived, notification.data);
            return;
          }
        }

        if (
          // @ts-ignore
          notification.data?.type === IncidentType.PassiveEscort &&
          // @ts-ignore
          notification.data?.event === 'resolved'
        ) {
          // @ts-ignore
          event.emit(AppEvent.OnEscortClosed, notification.data?.tipId);
          return;
        }

        if (
          // @ts-ignore
          notification.data?.type === 'beacon' &&
          // @ts-ignore
          notification.data?.event === 'beaconUpdate'
        ) {
          event.emit(AppEvent.OnBeaconUpdated, notification.data);
          return;
        }

        if (isIos) {
          if (notification.foreground == false) {
            if (notification.data.type === 'chat' && notification.data.event === 'Message') {
              event.emit(AppEvent.OnChatMessageTap, notification.data.data);
              return;
            }
          }
          else {
            if (notification.data?.data.type === 'chat' && notification.data?.data.event === 'Message') {
              event.emit(AppEvent.OnChatMessageTap, notification.data?.data);
              return;
            }
          }
        } else {
          if (notification.data?.data.type === 'chat' && notification.data?.data.event === 'Message') {
            event.emit(AppEvent.OnChatMessageTap, notification.data?.data);
            return;
          }
        }

        if (
          // @ts-ignore
          notification.data?.incidentType === IncidentType.Escort ||
          // @ts-ignore
          notification.userInfo?.link
        )
          return;
        // @ts-ignore
        // if (isIos) {
        //   const incidentId = getIncidentId(notification);
        //   if (incidentId) {
        //     await addBadge(incidentId as Id);
        //   }
        // }
        const escortState = await AsyncStorage.getItem(ESCORT_STATE_KEY);
        if (escortState === EscortState.Started) return;
        if (notification.foreground && isIos) {
          // console.log("notification foreground received --------------- ")
          // return resolve(notification);
        }
        const incidentId = getIncidentId(notification);
        if (incidentId) {
          NavigatorService.navigate(Screens.Menu.Tips.TipDetail, {
            incident: {
              id: incidentId,
            },
            showChat: true,
          });
        }
      },

      permissions: {
        alert: true,
        badge: true,
        sound: true
      },

      popInitialNotification: true,
      requestPermissions: true,
    });
  });

export default setupNotifications;