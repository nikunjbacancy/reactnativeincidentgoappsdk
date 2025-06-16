import { EventEmitter } from 'events';
EventEmitter.defaultMaxListeners = 10;
const event = new EventEmitter();
export let AppEvent = /*#__PURE__*/function (AppEvent) {
  AppEvent["OnIncidentUpdated"] = "OnIncidentUpdated";
  AppEvent["OnMessageAdded"] = "OnMessageAdded";
  AppEvent["OnNotificationBadge"] = "OnNotificationBadge";
  AppEvent["OnEscortClosed"] = "OnEscortClosed";
  AppEvent["OnBeaconUpdated"] = "OnBeaconUpdated";
  AppEvent["OnOrganizationGroupUpdated"] = "OnOrganizationGroupUpdated";
  AppEvent["OnBeaconDisconnected"] = "OnBeaconDisconnected";
  AppEvent["OnReceiveAlert"] = "OnReceiveAlert";
  AppEvent["OnBatteryLevelReceived"] = "OnBatteryLevelReceived";
  AppEvent["OnBeaconConnection"] = "OnBeaconConnection";
  AppEvent["OnChatMessageTap"] = "OnChatMessageTap";
  AppEvent["OnRefreshNotificationList"] = "OnRefreshNotificationList";
  AppEvent["OnLocationQuestion"] = "OnLocationQuestion";
  AppEvent["OnSiteKeyNotificataionReceived"] = "OnSiteKeyNotificataionReceived";
  AppEvent["OnLogout"] = "OnLogout";
  return AppEvent;
}({});
export default event;
//# sourceMappingURL=event.js.map