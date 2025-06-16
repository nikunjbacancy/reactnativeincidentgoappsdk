"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.AppEvent = void 0;
var _events = require("events");
_events.EventEmitter.defaultMaxListeners = 10;
const event = new _events.EventEmitter();
let AppEvent = exports.AppEvent = /*#__PURE__*/function (AppEvent) {
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
var _default = exports.default = event;
//# sourceMappingURL=event.js.map