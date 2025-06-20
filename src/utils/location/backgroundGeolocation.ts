import { logger } from '../../api';
import { AccessToken, ObjectId } from 'incident-code-core';
import BackgroundGeolocation, {
  Location,
  Config as GeoConfig,
} from 'react-native-background-geolocation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TOKEN_KEY } from '../../containers/app/constants';
import { sdkConfigs } from '../../sdkConfigs'
import { getVersion } from '../device';
// import axios from '../axios';
import axios from '../../api/axios';
import { Platform } from 'react-native';


const TRACKING_MODE = {
  LOCATION_TRACKING_MODE: 0,
  GEOFENCE_MODE: 1,
};

const initBackgroundGeolocationService = async () => {
  const tokenStr = await AsyncStorage.getItem(TOKEN_KEY);
  const token: AccessToken = JSON.parse(tokenStr || '{}');

  let config: GeoConfig = {
    reset: true,
    desiredAccuracy: BackgroundGeolocation.DESIRED_ACCURACY_HIGH,
    distanceFilter: 5,
    fastestLocationUpdateInterval: 5000, // 5 seconds
    autoSync: true,
    httpRootProperty: '.',
    stopOnTerminate: false,
    startOnBoot: true,
    stopOnStationary: false,
    preventSuspend: true,
    stopTimeout: 5,
    logLevel: BackgroundGeolocation.LOG_LEVEL_VERBOSE,
    showsBackgroundLocationIndicator: true,
    disableStopDetection: true,
    foregroundService: true,
    locationTemplate:
      '{"location":{"lat":<%= latitude %>, "lng":<%= longitude %>}, "activityType": "<%= activity.type %>", "activityConfidence": <%= activity.confidence %>, "accuracy": <%= accuracy %>, "altitude": <%= altitude %>, "altitudeAccuracy": <%= altitude_accuracy %>, "speed": <%= speed %>, "batteryLevel": <%= battery.level %>, "isMoving": <%= is_moving %>, "timestamp": "<%= timestamp %>"}',
    headers: {
      'Security-Code': "10mPPEDvove5XvDcSyVM",
      'Client-Version': getVersion(),
      Authorization: `${token.token_type} ${token.access_token}`,
    },
  };

  try {
    await BackgroundGeolocation.ready(config);
  } catch (err) {
    logger.error('Init BackgroundGeolocation error', "", err);
  }
};

const startBackgroundGeolocationToEscort = async (
  incidentEscortId: string | ObjectId | undefined,
  onLocation: (location: Location) => void, // No longer optional, necessary for UI
) => {
  BackgroundGeolocation.onLocation(onLocation, err => {
    logger.warn('OnLocationError', `Error code: ${err}`, err);
  });
  try {

    await BackgroundGeolocation.stop()

    const tokenStr = await AsyncStorage.getItem(TOKEN_KEY);
    const token: AccessToken = JSON.parse(tokenStr || '{}');

    let config: GeoConfig = {
      desiredAccuracy: BackgroundGeolocation.DESIRED_ACCURACY_HIGH,
      distanceFilter: 5,
      fastestLocationUpdateInterval: 5000, // 5 seconds
      autoSync: true,
      httpRootProperty: '.',
      stopOnTerminate: false,
      startOnBoot: true,
      stopOnStationary: false,
      preventSuspend: true,
      stopTimeout: 5,
      logLevel: BackgroundGeolocation.LOG_LEVEL_VERBOSE,
      showsBackgroundLocationIndicator: true,
      disableStopDetection: true,
      foregroundService: true,
      locationTemplate:
        '{"location":{"lat":<%= latitude %>, "lng":<%= longitude %>}, "activityType": "<%= activity.type %>", "activityConfidence": <%= activity.confidence %>, "accuracy": <%= accuracy %>, "altitude": <%= altitude %>, "altitudeAccuracy": <%= altitude_accuracy %>, "speed": <%= speed %>, "batteryLevel": <%= battery.level %>, "isMoving": <%= is_moving %>, "timestamp": "<%= timestamp %>"}',
      headers: {
        'Security-Code': "10mPPEDvove5XvDcSyVM",
        'Client-Version': getVersion(),
        Authorization: `${token.token_type} ${token.access_token}`,
      },
      debug: false
    };

    BackgroundGeolocation.ready(config).then(async (state) => {
      if (!state.enabled) {
        await BackgroundGeolocation.setConfig({
          url: `${sdkConfigs.configs.base_url}/incidents/${incidentEscortId}/location`,
          pausesLocationUpdatesAutomatically: false,
          showsBackgroundLocationIndicator: true,
        });
        console.log("start tracking....")
        await BackgroundGeolocation.start();
        BackgroundGeolocation.logger.info('>>>> START TRACKING <<<<');
        await BackgroundGeolocation.changePace(true);

      } else if (state.url !== `${sdkConfigs.configs.base_url}/incidents/${incidentEscortId}/location`) {
        console.log("==========Background location already started===========")
      }
    })
  } catch (err) {
    console.log("start background location error-->", err)
    // logger.error('Start BackgroundGeolocation error', err, err);
  }
};




const stopBackgroundGeolocation = async (clearLocationState?: () => void) => {
  try {
    const state = await BackgroundGeolocation.getState();
    if (state.enabled) {
      await BackgroundGeolocation.changePace(false);
      await BackgroundGeolocation.stop();
      // await BackgroundGeolocation.removeAllListeners();
      BackgroundGeolocation.logger.info('>>>> STOPING TRACKING <<<<');
      if (clearLocationState) {
        // clear last location from app state if required
        clearLocationState();
      }

      console.log("init background location....")
      setTimeout(() => {
        initBackgroundLocation(true, [])
      }, 2000);
    }
  } catch (err) {
    logger.error('Stop BackgroundGeolocation error', (err as Error).message);
  }
};


const updateUserLocation = async () => {
  const userData = await AsyncStorage.getItem('userData');
  if (userData !== null) {
    let location = await BackgroundGeolocation.getCurrentPosition({
      timeout: 25,          // 30 second timeout to fetch location
      maximumAge: 5000,     // Accept the last-known-location if not older than 5000 ms.
      desiredAccuracy: 10,  // Try to fetch a location with an accuracy of `10` meters.
      samples: 3,           // How many location samples to attempt.
    });
    let payload = {
      "latitude": location.coords.latitude,
      "longitude": location.coords.longitude,
      "userId": userData != null ? JSON.parse(userData).id : "",
      "timeStamp": location.timestamp,
      "locationDetails": location,
      "username": userData != null ? JSON.parse(userData).firstName + " " + JSON.parse(userData).lastName : "",
      "mobile": userData != null ? JSON.parse(userData).phone : "",
    }
    // console.log("update user app payload===>", payload)
    await axios.post(`geocreds/setdata`, payload)
  }
}

const updateUserLoctionData = async (location: any) => {
  const userData = await AsyncStorage.getItem('userData');
  // console.log("userData====>",userData)
  if (userData !== null) {
    let payload = {
      "latitude": location.coords.latitude,
      "longitude": location.coords.longitude,
      "userId": userData != null ? JSON.parse(userData).id : "",
      "timeStamp": location.timestamp,
      "locationDetails": location,
      "username": userData != null ? JSON.parse(userData).firstName + " " + JSON.parse(userData).lastName : "",
      "mobile": userData != null ? JSON.parse(userData).phone : "",
    }
    console.log("update user app payload===>", payload)
    await axios.post(`geocreds/setdata`, payload)
  }
}

const fetchLocation = async () => {
  try {
    let location = await BackgroundGeolocation.getCurrentPosition({
      timeout: 25,          // 30-second timeout to fetch location
      maximumAge: 5000,     // Accept the last-known-location if not older than 5000 ms
      desiredAccuracy: 10,  // Try to fetch a location with an accuracy of 10 meters
      samples: 3            // How many location samples to attempt
    });

    return location;
  } catch (error) {
    console.log("Failed to fetch location:", error);
    throw error;
  }
}

/**
 * Initializes background location tracking depending on the platform (Android or iOS).
 * @param allLocations - Optional list of locations to check for onSite flag.
 */
const initBackgroundLocation = async (checkLastCheckedInOut: boolean = false, allLocations?: any) => {
  // console.log("checkLastCheckedInOut:",checkLastCheckedInOut)
  // If platform is Android, configure Android-specific background location settings 
  if (Platform.OS === 'android') {
    await configureAndroidBackgroundLocation(checkLastCheckedInOut, allLocations);
  } else {
    // If platform is iOS, configure iOS-specific background location settings
    await configureIOSBackgroundLocation();
  }
};

// /**
//  * Configures background location for Android devices.
//  * @param allLocations - Optional list of locations to check for onSite flag.
//  */
const configureAndroidBackgroundLocation = async (checkLastCheckedInOut: boolean, allLocations?: any) => {
  // Filter locations where onSite flag is true
  const onSiteLocation = allLocations?.locations?.filter((item: any) => item.onSite) || [];
  let isOnSite = false;
  const getOnSiteFlag = await AsyncStorage.getItem('isOnSite');
  if (checkLastCheckedInOut == false) {
    isOnSite = onSiteLocation.length > 0
    // console.log("isOnSite:",isOnSite)
    await AsyncStorage.setItem("isOnSite", JSON.stringify(isOnSite));
  } else {
    // console.log("getOnSiteFlag ==>",getOnSiteFlag)
    isOnSite = JSON.parse(getOnSiteFlag as string)
    // console.log("isOnSite::",isOnSite)
  }

  try {
    // Stop any ongoing background geolocation tracking and reset settings
    await BackgroundGeolocation.stop();
    BackgroundGeolocation.deviceSettings.showIgnoreBatteryOptimizations();

    // Configure background geolocation for Android with relevant settings
    await BackgroundGeolocation.ready({
      reset: true,
      desiredAccuracy: BackgroundGeolocation.DESIRED_ACCURACY_HIGH,
      autoSync: false,
      distanceFilter: 15,
      debug: false,
      stopTimeout: 1,
      startOnBoot: true,
      stopOnTerminate: false,
      enableHeadless: true,
      preventSuspend: true,
      allowIdenticalLocations: true,
      maxDaysToPersist: 2,
      foregroundService: isOnSite,
      locationAuthorizationRequest: 'Always',
      geofenceInitialTriggerEntry: getOnSiteFlag == null ? true : false,
      geofenceModeHighAccuracy: isOnSite,
      notification: {
        title: "Sitekey Activated...",
        text: "Sitekey is running in the background.",
      },
      backgroundPermissionRationale: {
        // Android only
        message: 'Incident Go collect location data for Sitekey',
      },
    }, () => {
      // Decide the tracking mode based on whether we're on-site or not
      // console.log("geofenceInitialTriggerEntry ==>", getOnSiteFlag == null ? true : false)
      const trackingMode = isOnSite ? TRACKING_MODE.LOCATION_TRACKING_MODE : TRACKING_MODE.GEOFENCE_MODE;
      // console.log("trackingmode ==>", trackingMode)
      startService(trackingMode); // Start the appropriate service
    });
  } catch (error) {
    // console.log('Error configuring Android background location:', error);
  }
};

// /**
//  * Configures background location for iOS devices.
//  * This assumes a simpler setup for iOS compared to Android.
//  */
const configureIOSBackgroundLocation = async () => {
  try {
    // Ask the user to disable battery optimizations for better performance
    BackgroundGeolocation.deviceSettings.showIgnoreBatteryOptimizations();
    // let token = await BackgroundGeolocation.findOrCreateTransistorAuthorizationToken("IncidentGoApp28thFeb", "raldrichpolicepriority", "https://tracker.transistorsoft.com")
    // Initialize background geolocation for iOS
    await BackgroundGeolocation.ready({
      // transistorAuthorizationToken: token,
      autoSync: false,
      // url: "https://tracker.transistorsoft.com/api/locations",
      reset: true,
      distanceFilter: 20,
      stationaryRadius: 20,
      debug: false,
      startOnBoot: true,
      stopOnTerminate: false,
      enableHeadless: true,
      preventSuspend: true,
      allowIdenticalLocations: false,
      maxDaysToPersist: 2,
      foregroundService: true,
      locationAuthorizationRequest: 'Always',
      geofenceInitialTriggerEntry: false,
      geofenceModeHighAccuracy: false,
    },
      (state) => {
        // If the service isn't enabled, start geofencing
        console.log("state.enabled ===>",state)
        if (!state.enabled) {
          BackgroundGeolocation.startGeofences().then(() => {
            BackgroundGeolocation.changePace(true);
            console.log("geofence mode enabled ===>")
          });
        } else {
          BackgroundGeolocation.changePace(true);
        }
      }
    );
  } catch (error) {
    // Log any errors encountered during iOS background location configuration
    console.log('Error configuring iOS background location:', error);
  }
};

/**
 * Starts the appropriate background service based on the tracking mode.
 * @param trackingMode - The mode to use for tracking: either location tracking or geofence tracking.
 */
const startService = async (trackingMode: number) => {
  try {
    // Log which tracking mode is being started
    console.log(`Starting service in ${trackingMode === TRACKING_MODE.LOCATION_TRACKING_MODE ? 'Location Tracking' : 'Geofence Tracking'} mode.`);
    // If the mode is location tracking, start the location tracking service
    if (trackingMode === TRACKING_MODE.LOCATION_TRACKING_MODE) {
      await BackgroundGeolocation.start();
      // console.log("Background location tracking started.");
    } else {
      // If the mode is geofence tracking, start the geofence service
      await BackgroundGeolocation.startGeofences();
      // console.log("Geofence tracking started.");
    } 
  } catch (error) {
    // Log any errors encountered when starting the tracking service
    // console.log("Failed to start tracking:", error);
  }
};

// Perform CRUD operations on geofences
const crudGeofenceOperation = async (receivedGeofences: any, isInitialScript: any) => {
  const getAllGeofences = await BackgroundGeolocation.getGeofences();
  let isInitialScriptRun = false;

  if (getAllGeofences.length === 0) {
    receivedGeofences.LocationRegion.forEach((geofence: any) => {
      let geofenceCoords = typeof geofence.path === 'string' ? JSON.parse(geofence.path) : geofence.path;
      const polyCoords = geofenceCoords.map((item: any) => [item.lat, item.lng]);
      addUpdateGeofence(geofence.id, geofence.locationName, geofence.location_id, polyCoords);

      if (!isInitialScriptRun && isInitialScript == "true") {
        isInitialScriptRun = true;
        updateUserLocation();
      }
    });

    initBackgroundLocation(false,[]);
  } else {
    if (receivedGeofences.deletedLocationRegion != null) {
      receivedGeofences.deletedLocationRegion.forEach((geofence: any) => {
        let identifier = geofence.id;
        BackgroundGeolocation.removeGeofence(identifier.toString())
          .then(() => {
            BackgroundGeolocation.getGeofences().then((allGeofenes) => {
              if (allGeofenes.length == 0) {
                BackgroundGeolocation.stop();
              }
            });
          })
          .catch(() => {
            // console.log("remove error" + error);
          });
      });
    } else {
      if (receivedGeofences.LocationRegion != null) {
        try {
          receivedGeofences.LocationRegion.forEach((geofence: any) => {
            let geofenceCoords = typeof geofence.path === 'string' ? JSON.parse(geofence.path) : geofence.path;
            const polyCoords = geofenceCoords.map((item: any) => [item.lat, item.lng]);
            addUpdateGeofence(geofence.id, receivedGeofences.locationName, receivedGeofences.id, polyCoords);

            if (!isInitialScriptRun && isInitialScript == "true") {
              isInitialScriptRun = true;
              updateUserLocation();
            }
          });
        } catch (error) {
          // console.log('Error in adding/updating geofences:', error);
        }
      }
    }
  }

  if (receivedGeofences.LocationRegion == null && receivedGeofences.deletedLocationRegion == null) {
    BackgroundGeolocation.removeGeofences().then(() => {
      BackgroundGeolocation.stop();
    });
    updateUserLocation();
  }
};

// Insert all geofences,
const insertAllGeofences = async (allRegions: any, allLocations?: any) => {
  if (allRegions.length !== 0) {
    const promises = allRegions.map((region: any) => {
      const geofenceCoords = typeof region.path === 'string' ? JSON.parse(region.path) : region.path;
      const polyCoords = geofenceCoords.map((item: any) => [item.lat, item.lng]);
      return addUpdateGeofence(region.id, region.location_name, region.location_id, polyCoords);
    });

    try {
      await Promise.all(promises);
      await initBackgroundLocation(false,allLocations);
    } catch (error) {
      // console.log('Error inserting geofences:', error);
    }
  }
};

// Add or update a geofence
const addUpdateGeofence = async (identifier: any, locationName: string, locationId: string, vertices: any) => {
  BackgroundGeolocation.addGeofence({
    identifier: identifier.toString(),
    notifyOnEntry: true,
    notifyOnExit: true,
    notifyOnDwell: false,
    loiteringDelay: 0,
    vertices: vertices,
    extras: {
      location_id: locationId,
      locationName: locationName
    }
  }).then(() => {
    console.log("geofence added ==>", identifier);
  }).catch((error) => {
    console.log("error:geofence added ==>", error);
  });
};

// Define the structure for geofence data
interface GeofenceExtras {
  location_id?: string;
  locationName?: string;
}

interface GeofenceData {
  extras?: GeofenceExtras;
}

// Update event on geofence cross
const updateEventOnGeofenceCross = async (
  geofenceData: GeofenceData,
  isChecking: boolean,
  userId: string
): Promise<void> => {
  try {
    if (!userId) {
      console.log("User ID is missing. Skipping geofence update.");
      return;
    }
    const locationId = geofenceData?.extras?.location_id || "";
    const locationName = geofenceData?.extras?.locationName || "";
    if (!locationId) {
      console.log("Location ID is missing in geofence data. Skipping request.");
      return;
    }
    const payload = {
      locationId,
      locationName,
      isCheckIn: isChecking,
    };
    const siteKeyNotificationEndPoint = `sitekey/notification/${userId}`;
    // Make the API request
    await axios.post(siteKeyNotificationEndPoint, payload);
    setLastCheckedInOutOnNetworkFail(locationId, locationName, isChecking)

  } catch (error) {
    // console.log("Error updating geofence cross event:", error.message);
    // console.log("ERROR====>", error?.message == "Network Error")
    // if (error?.message == "Network Error") {
    //   setLastCheckedInOutOnNetworkFail(geofenceData?.extras?.location_id || "", geofenceData?.extras?.locationName || "", isChecking)
    // }
  }
};

// Update enter/exit event on geofence cross
const updateEnterExitEventOnGeofenceCross = async (
  locationId: string,
  locationName: string,
  isChecking: boolean,
  userId: any
): Promise<void> => {
  try {
    if (!userId) {
      console.log("User ID is missing. Skipping geofence update.");
      return;
    }
    if (!locationId) {
      console.log("Location ID is missing in geofence data. Skipping request.");
      return;
    }
    const payload = {
      locationId,
      locationName,
      isCheckIn: isChecking,
    };
    const siteKeyNotificationEndPoint = `sitekey/notification/${userId}`;
    console.log(`Sending geofence cross event: ${JSON.stringify(payload)}`);
    // Make the API request
    await axios.post(siteKeyNotificationEndPoint, payload);
    setLastCheckedInOutOnNetworkFail(locationId, locationName, isChecking)
    // console.log("Geofence cross response:", response.data);
  } catch (error) {
    console.log("Error updating geofence cross event:", error);
  }
};

// Check if a point is inside a polygon
const isPointInPolygon = (point : any, polygon : any) => {
  let [x, y] = point;
  let inside = false;

  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    let [xi, yi] = polygon[i];
    let [xj, yj] = polygon[j];

    let intersect = yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }

  return inside;
};

const findContainingPolygons = (point: any, geofences: any) => {
  return geofences.filter(({ coordinates }) => isPointInPolygon(point, coordinates));
};


// Set the last checked-in location in AsyncStorage
const setLastCheckedIn = (location_id: string, location_name: string) => {
  const lastCheckedIn = { locationID: location_id, locatonName: location_name }
  AsyncStorage.setItem("lastCheckedIn", JSON.stringify(lastCheckedIn));
}

// Get the last checked-in location from AsyncStorage
const getLastCheckedIn = () => {
  return AsyncStorage.getItem('lastCheckedIn')
}

// Remove the last checked-in location from AsyncStorage
const removeLastCheckedIn = () => {
  return AsyncStorage.removeItem('lastCheckedIn')
}

// Check the current latitude and longitude with the geofences, and send a notification if the user is inside or outside a geofence
const checkCurrentLatLongWithGeofence = async (latitude: number, longitude: number) => {
  // console.log("Current latitude and longitude:", latitude, longitude);
  try {
    const getAllGeofences = await BackgroundGeolocation.getGeofences();
    if (getAllGeofences.length > 0) {
      const geofences = getAllGeofences.map((geofence) => ({
        id: geofence?.extras?.location_id,
        name: geofence?.extras?.locationName,
        coordinates: geofence?.vertices,
      }));
      const currentLocation = [latitude, longitude]; // Replace with actual coordinates
      const insideGeofences = findContainingPolygons(currentLocation, geofences);
      if (insideGeofences.length > 0) {
        const lastCheckedIn = await getLastCheckedIn();
        if (lastCheckedIn === null) {

          const userData = await AsyncStorage.getItem('userData');
          const userId = userData ? JSON.parse(userData).id : "";
          updateEnterExitEventOnGeofenceCross(insideGeofences[0].id, insideGeofences[0].name, true, userId);
          setLastCheckedIn(insideGeofences[0].id, insideGeofences[0].name)
          // showNotification(true,insideGeofences[0].name)
        }
      } else {
        const lastCheckedIn = await getLastCheckedIn();
        if (lastCheckedIn !== null) {
          const userData = await AsyncStorage.getItem('userData');
          const userId = userData ? JSON.parse(userData).id : "";
          const parseLastCheckedIn = JSON.parse(lastCheckedIn);
          updateEnterExitEventOnGeofenceCross(parseLastCheckedIn.locationID, parseLastCheckedIn.locatonName, false, userId);
          // showNotification(false,parseLastCheckedIn.locatonName)
          await removeLastCheckedIn();
        }
      }
    }
  } catch (error) {
    // console.log('Error checking current location with geofence:', error);
  }
}

// Store the last checked-in or out geofence event in AsyncStorage on network failed
const setLastCheckedInOutOnNetworkFail = (location_id: string, location_name: string, isCheckedIn: boolean) => {
  const lastCheckedIn = { locationID: location_id, locatonName: location_name, checkedIn: isCheckedIn }
  AsyncStorage.setItem("lastCheckedInOrOut", JSON.stringify(lastCheckedIn)).then(() => {
    // console.log("lastCheckedInOutStored")
  });
}

// remove last checked-in or out geofence event from AsyncStorage
const removeLastCheckedInOrOutEvent = () => {
  return AsyncStorage.removeItem('lastCheckedInOrOut')
}

// Get the last checked-in or out location from AsyncStorage
const getLastCheckedInOutStoredEvents = () => {
  return AsyncStorage.getItem('lastCheckedInOrOut')
}

export {
  initBackgroundGeolocationService,
  startBackgroundGeolocationToEscort,
  stopBackgroundGeolocation,
  updateUserLocation,
  fetchLocation,
  updateUserLoctionData,
  initBackgroundLocation,
  crudGeofenceOperation,
  insertAllGeofences,
  updateEventOnGeofenceCross,
  updateEnterExitEventOnGeofenceCross,
  findContainingPolygons,
  getLastCheckedIn,
  setLastCheckedIn,
  removeLastCheckedIn,
  checkCurrentLatLongWithGeofence,
  setLastCheckedInOutOnNetworkFail,
  removeLastCheckedInOrOutEvent,
  getLastCheckedInOutStoredEvents
};

