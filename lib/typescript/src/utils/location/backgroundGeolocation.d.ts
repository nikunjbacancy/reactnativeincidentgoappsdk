import { ObjectId } from 'incident-code-core';
import { Location } from 'react-native-background-geolocation';
declare const initBackgroundGeolocationService: () => Promise<void>;
declare const startBackgroundGeolocationToEscort: (incidentEscortId: string | ObjectId | undefined, onLocation: (location: Location) => void) => Promise<void>;
declare const stopBackgroundGeolocation: (clearLocationState?: () => void) => Promise<void>;
declare const updateUserLocation: () => Promise<void>;
declare const updateUserLoctionData: (location: any) => Promise<void>;
declare const fetchLocation: () => Promise<Location>;
/**
 * Initializes background location tracking depending on the platform (Android or iOS).
 * @param allLocations - Optional list of locations to check for onSite flag.
 */
declare const initBackgroundLocation: (checkLastCheckedInOut?: boolean, allLocations?: any) => Promise<void>;
declare const crudGeofenceOperation: (receivedGeofences: any, isInitialScript: any) => Promise<void>;
declare const insertAllGeofences: (allRegions: any, allLocations?: any) => Promise<void>;
interface GeofenceExtras {
    location_id?: string;
    locationName?: string;
}
interface GeofenceData {
    extras?: GeofenceExtras;
}
declare const updateEventOnGeofenceCross: (geofenceData: GeofenceData, isChecking: boolean, userId: string) => Promise<void>;
declare const updateEnterExitEventOnGeofenceCross: (locationId: string, locationName: string, isChecking: boolean, userId: any) => Promise<void>;
declare const findContainingPolygons: (point: any, geofences: any) => any;
declare const setLastCheckedIn: (location_id: string, location_name: string) => void;
declare const getLastCheckedIn: () => Promise<string | null>;
declare const removeLastCheckedIn: () => Promise<void>;
declare const checkCurrentLatLongWithGeofence: (latitude: number, longitude: number) => Promise<void>;
declare const setLastCheckedInOutOnNetworkFail: (location_id: string, location_name: string, isCheckedIn: boolean) => void;
declare const removeLastCheckedInOrOutEvent: () => Promise<void>;
declare const getLastCheckedInOutStoredEvents: () => Promise<string | null>;
export { initBackgroundGeolocationService, startBackgroundGeolocationToEscort, stopBackgroundGeolocation, updateUserLocation, fetchLocation, updateUserLoctionData, initBackgroundLocation, crudGeofenceOperation, insertAllGeofences, updateEventOnGeofenceCross, updateEnterExitEventOnGeofenceCross, findContainingPolygons, getLastCheckedIn, setLastCheckedIn, removeLastCheckedIn, checkCurrentLatLongWithGeofence, setLastCheckedInOutOnNetworkFail, removeLastCheckedInOrOutEvent, getLastCheckedInOutStoredEvents };
