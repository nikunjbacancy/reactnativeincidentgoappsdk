"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _asyncStorage = _interopRequireDefault(require("@react-native-async-storage/async-storage"));
var _api = require("../../api");
var _screens = _interopRequireDefault(require("../../containers/providers/RoutesProvider/screens"));
var _constants = require("../../containers/screens/Home/Escort/RecordScreen/constants");
var _types = require("../../containers/screens/Home/Escort/RecordScreen/types");
var _incidentCodeCore = require("incident-code-core");
var _reactNativePushNotification = _interopRequireDefault(require("react-native-push-notification"));
var _device = require("../device");
var _navigation = _interopRequireDefault(require("../navigation"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const getIncidentId = notification => {
  var _notification$data, _notification$userInf;
  // //("getIncidentId--->")
  // //("getIncidentId notification--->",notification)
  // @ts-ignore
  if ((_notification$data = notification.data) !== null && _notification$data !== void 0 && _notification$data.incidentId) {
    var _notification$data2;
    // @ts-ignore
    return (_notification$data2 = notification.data) === null || _notification$data2 === void 0 ? void 0 : _notification$data2.incidentId;
  }
  if ((_notification$userInf = notification.userInfo) !== null && _notification$userInf !== void 0 && _notification$userInf.incidentId) {
    var _notification$userInf2;
    return (_notification$userInf2 = notification.userInfo) === null || _notification$userInf2 === void 0 ? void 0 : _notification$userInf2.incidentId;
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

const setupNotifications = () => new Promise(() => {
  _reactNativePushNotification.default.configure({
    onRegister: function (token) {
      console.log("TOKEN:", token);
      if (_device.isAndroid) {
        _reactNativePushNotification.default.createChannel({
          channelId: "ico-app",
          // (required)
          channelName: "icoappchannel",
          // (required)
          channelDescription: "A channel to categorise your notifications",
          // (optional) default: undefined.
          playSound: true,
          // (optional) default: true
          soundName: "default",
          // (optional) See `soundName` parameter of `localNotification` function
          importance: 4,
          // (optional) default: Importance.HIGH. Int value of the Android notification importance
          vibrate: true // (optional) default: true. Creates the default vibration pattern if true.
        }, created => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
        );
      }
    },
    onNotification: async notification => {
      var _notification$data12, _notification$data13, _notification$data15, _notification$data16, _notification$data25, _notification$data26, _notification$data28, _notification$data29, _notification$data36, _notification$userInf3;
      // console.log("onNotification====>",notification)
      if (!notification.userInteraction) {
        return;
      }
      console.log("on tap====>", notification);
      if (_device.isIos) {
        var _notification$data3, _notification$data4, _notification$data6, _notification$data7;
        if (((_notification$data3 = notification.data) === null || _notification$data3 === void 0 ? void 0 : _notification$data3.type) === _incidentCodeCore.IncidentType.Normal && ((_notification$data4 = notification.data) === null || _notification$data4 === void 0 ? void 0 : _notification$data4.event) === 'resolved') {
          var _notification$data5;
          _navigation.default.navigate(_screens.default.Menu.Tips.TipDetail, {
            incident: undefined,
            showChat: false,
            tipId: (_notification$data5 = notification.data) === null || _notification$data5 === void 0 ? void 0 : _notification$data5.tipId
          });
          return;
        }
        if (((_notification$data6 = notification.data) === null || _notification$data6 === void 0 || (_notification$data6 = _notification$data6.data) === null || _notification$data6 === void 0 ? void 0 : _notification$data6.type) === _incidentCodeCore.IncidentType.Normal && ((_notification$data7 = notification.data) === null || _notification$data7 === void 0 || (_notification$data7 = _notification$data7.data) === null || _notification$data7 === void 0 ? void 0 : _notification$data7.event) === 'resolved') {
          var _notification$data8;
          _navigation.default.navigate(_screens.default.Menu.Tips.TipDetail, {
            incident: undefined,
            showChat: false,
            tipId: (_notification$data8 = notification.data) === null || _notification$data8 === void 0 || (_notification$data8 = _notification$data8.data) === null || _notification$data8 === void 0 ? void 0 : _notification$data8.tipId
          });
          return;
        }
      } else {
        var _notification$data9, _notification$data10;
        if (((_notification$data9 = notification.data) === null || _notification$data9 === void 0 || (_notification$data9 = _notification$data9.data) === null || _notification$data9 === void 0 ? void 0 : _notification$data9.type) === _incidentCodeCore.IncidentType.Normal && ((_notification$data10 = notification.data) === null || _notification$data10 === void 0 || (_notification$data10 = _notification$data10.data) === null || _notification$data10 === void 0 ? void 0 : _notification$data10.event) === 'resolved') {
          var _notification$data11;
          _navigation.default.navigate(_screens.default.Menu.Tips.TipDetail, {
            incident: undefined,
            showChat: false,
            tipId: (_notification$data11 = notification.data) === null || _notification$data11 === void 0 || (_notification$data11 = _notification$data11.data) === null || _notification$data11 === void 0 ? void 0 : _notification$data11.tipId
          });
          return;
        }
      }
      if (
      // @ts-ignore
      ((_notification$data12 = notification.data) === null || _notification$data12 === void 0 ? void 0 : _notification$data12.type) === _incidentCodeCore.IncidentType.Escort &&
      // @ts-ignore
      ((_notification$data13 = notification.data) === null || _notification$data13 === void 0 ? void 0 : _notification$data13.event) === 'resolved') {
        var _notification$data14;
        // console.log("Incident Escort --------- ");
        // @ts-ignore
        _api.event.emit(_api.AppEvent.OnEscortClosed, (_notification$data14 = notification.data) === null || _notification$data14 === void 0 ? void 0 : _notification$data14.tipId);
        return;
      }
      if (
      // @ts-ignore
      ((_notification$data15 = notification.data) === null || _notification$data15 === void 0 ? void 0 : _notification$data15.type) === "Location" &&
      // @ts-ignore
      ((_notification$data16 = notification.data) === null || _notification$data16 === void 0 ? void 0 : _notification$data16.event) === 'LocationQuestion') {
        // console.log("Incident Escort --------- ");
        // @ts-ignore
        _api.event.emit(_api.AppEvent.OnLocationQuestion, notification.data);
        return;
      }

      //handle site key notification
      if (_device.isIos) {
        if (notification.foreground == false) {
          var _notification$data17, _notification$data18, _notification$data19, _notification$data20;
          if (((_notification$data17 = notification.data) === null || _notification$data17 === void 0 ? void 0 : _notification$data17.type) === "SiteKey" && ((_notification$data18 = notification.data) === null || _notification$data18 === void 0 ? void 0 : _notification$data18.event) === 'SiteKey' || ((_notification$data19 = notification.data) === null || _notification$data19 === void 0 || (_notification$data19 = _notification$data19.data) === null || _notification$data19 === void 0 ? void 0 : _notification$data19.type) === "SiteKey" && ((_notification$data20 = notification.data) === null || _notification$data20 === void 0 || (_notification$data20 = _notification$data20.data) === null || _notification$data20 === void 0 ? void 0 : _notification$data20.event) === 'SiteKey') {
            _api.event.emit(_api.AppEvent.OnSiteKeyNotificataionReceived, notification.data);
            return;
          }
        } else {
          var _notification$data21, _notification$data22;
          if (((_notification$data21 = notification.data) === null || _notification$data21 === void 0 || (_notification$data21 = _notification$data21.data) === null || _notification$data21 === void 0 ? void 0 : _notification$data21.type) === "SiteKey" && ((_notification$data22 = notification.data) === null || _notification$data22 === void 0 || (_notification$data22 = _notification$data22.data) === null || _notification$data22 === void 0 ? void 0 : _notification$data22.event) === 'SiteKey') {
            _api.event.emit(_api.AppEvent.OnSiteKeyNotificataionReceived, notification.data);
            return;
          }
        }
      } else {
        var _notification$data23, _notification$data24;
        if (((_notification$data23 = notification.data) === null || _notification$data23 === void 0 ? void 0 : _notification$data23.type) === "SiteKey" && ((_notification$data24 = notification.data) === null || _notification$data24 === void 0 ? void 0 : _notification$data24.event) === 'SiteKey') {
          _api.event.emit(_api.AppEvent.OnSiteKeyNotificataionReceived, notification.data);
          return;
        }
      }
      if (
      // @ts-ignore
      ((_notification$data25 = notification.data) === null || _notification$data25 === void 0 ? void 0 : _notification$data25.type) === _incidentCodeCore.IncidentType.PassiveEscort &&
      // @ts-ignore
      ((_notification$data26 = notification.data) === null || _notification$data26 === void 0 ? void 0 : _notification$data26.event) === 'resolved') {
        var _notification$data27;
        // @ts-ignore
        _api.event.emit(_api.AppEvent.OnEscortClosed, (_notification$data27 = notification.data) === null || _notification$data27 === void 0 ? void 0 : _notification$data27.tipId);
        return;
      }
      if (
      // @ts-ignore
      ((_notification$data28 = notification.data) === null || _notification$data28 === void 0 ? void 0 : _notification$data28.type) === 'beacon' &&
      // @ts-ignore
      ((_notification$data29 = notification.data) === null || _notification$data29 === void 0 ? void 0 : _notification$data29.event) === 'beaconUpdate') {
        _api.event.emit(_api.AppEvent.OnBeaconUpdated, notification.data);
        return;
      }
      if (_device.isIos) {
        if (notification.foreground == false) {
          if (notification.data.type === 'chat' && notification.data.event === 'Message') {
            _api.event.emit(_api.AppEvent.OnChatMessageTap, notification.data.data);
            return;
          }
        } else {
          var _notification$data30, _notification$data31;
          if (((_notification$data30 = notification.data) === null || _notification$data30 === void 0 ? void 0 : _notification$data30.data.type) === 'chat' && ((_notification$data31 = notification.data) === null || _notification$data31 === void 0 ? void 0 : _notification$data31.data.event) === 'Message') {
            var _notification$data32;
            _api.event.emit(_api.AppEvent.OnChatMessageTap, (_notification$data32 = notification.data) === null || _notification$data32 === void 0 ? void 0 : _notification$data32.data);
            return;
          }
        }
      } else {
        var _notification$data33, _notification$data34;
        if (((_notification$data33 = notification.data) === null || _notification$data33 === void 0 ? void 0 : _notification$data33.data.type) === 'chat' && ((_notification$data34 = notification.data) === null || _notification$data34 === void 0 ? void 0 : _notification$data34.data.event) === 'Message') {
          var _notification$data35;
          _api.event.emit(_api.AppEvent.OnChatMessageTap, (_notification$data35 = notification.data) === null || _notification$data35 === void 0 ? void 0 : _notification$data35.data);
          return;
        }
      }
      if (
      // @ts-ignore
      ((_notification$data36 = notification.data) === null || _notification$data36 === void 0 ? void 0 : _notification$data36.incidentType) === _incidentCodeCore.IncidentType.Escort || // @ts-ignore
      (_notification$userInf3 = notification.userInfo) !== null && _notification$userInf3 !== void 0 && _notification$userInf3.link) return;
      // @ts-ignore
      // if (isIos) {
      //   const incidentId = getIncidentId(notification);
      //   if (incidentId) {
      //     await addBadge(incidentId as Id);
      //   }
      // }
      const escortState = await _asyncStorage.default.getItem(_constants.ESCORT_STATE_KEY);
      if (escortState === _types.EscortState.Started) return;
      if (notification.foreground && _device.isIos) {
        // console.log("notification foreground received --------------- ")
        // return resolve(notification);
      }
      const incidentId = getIncidentId(notification);
      if (incidentId) {
        _navigation.default.navigate(_screens.default.Menu.Tips.TipDetail, {
          incident: {
            id: incidentId
          },
          showChat: true
        });
      }
    },
    permissions: {
      alert: true,
      badge: true,
      sound: true
    },
    popInitialNotification: true,
    requestPermissions: true
  });
});
var _default = exports.default = setupNotifications;
//# sourceMappingURL=setupNotifications.js.map