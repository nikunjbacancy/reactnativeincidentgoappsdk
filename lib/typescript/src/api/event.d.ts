/// <reference types="node" />
import { EventEmitter } from 'events';
declare const event: EventEmitter<[never]>;
export declare enum AppEvent {
    OnIncidentUpdated = "OnIncidentUpdated",
    OnMessageAdded = "OnMessageAdded",
    OnNotificationBadge = "OnNotificationBadge",
    OnEscortClosed = "OnEscortClosed",
    OnBeaconUpdated = "OnBeaconUpdated",
    OnOrganizationGroupUpdated = "OnOrganizationGroupUpdated",
    OnBeaconDisconnected = "OnBeaconDisconnected",
    OnReceiveAlert = "OnReceiveAlert",
    OnBatteryLevelReceived = "OnBatteryLevelReceived",
    OnBeaconConnection = "OnBeaconConnection",
    OnChatMessageTap = "OnChatMessageTap",
    OnRefreshNotificationList = "OnRefreshNotificationList",
    OnLocationQuestion = "OnLocationQuestion",
    OnSiteKeyNotificataionReceived = "OnSiteKeyNotificataionReceived",
    OnLogout = "OnLogout"
}
export default event;
