"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUserLoctionData = exports.updateUserLocation = exports.updateEventOnGeofenceCross = exports.updateEnterExitEventOnGeofenceCross = exports.stopBackgroundGeolocation = exports.startBackgroundGeolocationToEscort = exports.setLastCheckedInOutOnNetworkFail = exports.setLastCheckedIn = exports.removeLastCheckedInOrOutEvent = exports.removeLastCheckedIn = exports.insertAllGeofences = exports.initBackgroundLocation = exports.initBackgroundGeolocationService = exports.getLastCheckedInOutStoredEvents = exports.getLastCheckedIn = exports.findContainingPolygons = exports.fetchLocation = exports.crudGeofenceOperation = exports.checkCurrentLatLongWithGeofence = void 0;
var _api = require("../../api");
var _reactNativeBackgroundGeolocation = _interopRequireDefault(require("react-native-background-geolocation"));
var _asyncStorage = _interopRequireDefault(require("@react-native-async-storage/async-storage"));
var _constants = require("../../containers/app/constants");
var _sdkConfigs = require("../../sdkConfigs");
var _device = require("../device");
var _axios = _interopRequireDefault(require("../../api/axios"));
var _reactNative = require("react-native");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// import axios from '../axios';

const TRACKING_MODE = {
  LOCATION_TRACKING_MODE: 0,
  GEOFENCE_MODE: 1
};
const initBackgroundGeolocationService = async () => {
  const tokenStr = await _asyncStorage.default.getItem(_constants.TOKEN_KEY);
  const token = JSON.parse(tokenStr || '{}');
  let config = {
    reset: true,
    desiredAccuracy: _reactNativeBackgroundGeolocation.default.DESIRED_ACCURACY_HIGH,
    distanceFilter: 5,
    fastestLocationUpdateInterval: 5000,
    // 5 seconds
    autoSync: true,
    httpRootProperty: '.',
    stopOnTerminate: false,
    startOnBoot: true,
    stopOnStationary: false,
    preventSuspend: true,
    stopTimeout: 5,
    logLevel: _reactNativeBackgroundGeolocation.default.LOG_LEVEL_VERBOSE,
    showsBackgroundLocationIndicator: true,
    disableStopDetection: true,
    foregroundService: true,
    locationTemplate: '{"location":{"lat":<%= latitude %>, "lng":<%= longitude %>}, "activityType": "<%= activity.type %>", "activityConfidence": <%= activity.confidence %>, "accuracy": <%= accuracy %>, "altitude": <%= altitude %>, "altitudeAccuracy": <%= altitude_accuracy %>, "speed": <%= speed %>, "batteryLevel": <%= battery.level %>, "isMoving": <%= is_moving %>, "timestamp": "<%= timestamp %>"}',
    headers: {
      'Security-Code': _sdkConfigs.sdkConfigs.configs.headerSecurityCode,
      'Client-Version': (0, _device.getVersion)(),
      Authorization: `${token.token_type} ${token.access_token}`
    }
  };
  try {
    await _reactNativeBackgroundGeolocation.default.ready(config);
  } catch (err) {
    _api.logger.error('Init BackgroundGeolocation error', "", err);
  }
};
exports.initBackgroundGeolocationService = initBackgroundGeolocationService;
const startBackgroundGeolocationToEscort = async (incidentEscortId, onLocation) => {
  _reactNativeBackgroundGeolocation.default.onLocation(onLocation, err => {
    _api.logger.warn('OnLocationError', `Error code: ${err}`, err);
  });
  try {
    await _reactNativeBackgroundGeolocation.default.stop();
    const tokenStr = await _asyncStorage.default.getItem(_constants.TOKEN_KEY);
    const token = JSON.parse(tokenStr || '{}');
    let config = {
      desiredAccuracy: _reactNativeBackgroundGeolocation.default.DESIRED_ACCURACY_HIGH,
      distanceFilter: 5,
      fastestLocationUpdateInterval: 5000,
      // 5 seconds
      autoSync: true,
      httpRootProperty: '.',
      stopOnTerminate: false,
      startOnBoot: true,
      stopOnStationary: false,
      preventSuspend: true,
      stopTimeout: 5,
      logLevel: _reactNativeBackgroundGeolocation.default.LOG_LEVEL_VERBOSE,
      showsBackgroundLocationIndicator: true,
      disableStopDetection: true,
      foregroundService: true,
      locationTemplate: '{"location":{"lat":<%= latitude %>, "lng":<%= longitude %>}, "activityType": "<%= activity.type %>", "activityConfidence": <%= activity.confidence %>, "accuracy": <%= accuracy %>, "altitude": <%= altitude %>, "altitudeAccuracy": <%= altitude_accuracy %>, "speed": <%= speed %>, "batteryLevel": <%= battery.level %>, "isMoving": <%= is_moving %>, "timestamp": "<%= timestamp %>"}',
      headers: {
        'Security-Code': _sdkConfigs.sdkConfigs.configs.headerSecurityCode,
        'Client-Version': (0, _device.getVersion)(),
        Authorization: `${token.token_type} ${token.access_token}`
      },
      debug: false
    };
    _reactNativeBackgroundGeolocation.default.ready(config).then(async state => {
      if (!state.enabled) {
        await _reactNativeBackgroundGeolocation.default.setConfig({
          url: `${_sdkConfigs.sdkConfigs.configs.base_url}/incidents/${incidentEscortId}/location`,
          pausesLocationUpdatesAutomatically: false,
          showsBackgroundLocationIndicator: true
        });
        console.log("start tracking....");
        await _reactNativeBackgroundGeolocation.default.start();
        _reactNativeBackgroundGeolocation.default.logger.info('>>>> START TRACKING <<<<');
        await _reactNativeBackgroundGeolocation.default.changePace(true);
      } else if (state.url !== `${_sdkConfigs.sdkConfigs.configs.base_url}/incidents/${incidentEscortId}/location`) {
        console.log("==========Background location already started===========");
      }
    });
  } catch (err) {
    console.log("start background location error-->", err);
    // logger.error('Start BackgroundGeolocation error', err, err);
  }
};
exports.startBackgroundGeolocationToEscort = startBackgroundGeolocationToEscort;
const stopBackgroundGeolocation = async clearLocationState => {
  try {
    const state = await _reactNativeBackgroundGeolocation.default.getState();
    if (state.enabled) {
      await _reactNativeBackgroundGeolocation.default.changePace(false);
      await _reactNativeBackgroundGeolocation.default.stop();
      // await BackgroundGeolocation.removeAllListeners();
      _reactNativeBackgroundGeolocation.default.logger.info('>>>> STOPING TRACKING <<<<');
      if (clearLocationState) {
        // clear last location from app state if required
        clearLocationState();
      }
      console.log("init background location....");
      setTimeout(() => {
        initBackgroundLocation(true, []);
      }, 2000);
    }
  } catch (err) {
    _api.logger.error('Stop BackgroundGeolocation error', err.message);
  }
};
exports.stopBackgroundGeolocation = stopBackgroundGeolocation;
const updateUserLocation = async () => {
  const userData = await _asyncStorage.default.getItem('userData');
  if (userData !== null) {
    let location = await _reactNativeBackgroundGeolocation.default.getCurrentPosition({
      timeout: 25,
      // 30 second timeout to fetch location
      maximumAge: 5000,
      // Accept the last-known-location if not older than 5000 ms.
      desiredAccuracy: 10,
      // Try to fetch a location with an accuracy of `10` meters.
      samples: 3 // How many location samples to attempt.
    });
    let payload = {
      "latitude": location.coords.latitude,
      "longitude": location.coords.longitude,
      "userId": userData != null ? JSON.parse(userData).id : "",
      "timeStamp": location.timestamp,
      "locationDetails": location,
      "username": userData != null ? JSON.parse(userData).firstName + " " + JSON.parse(userData).lastName : "",
      "mobile": userData != null ? JSON.parse(userData).phone : ""
    };
    // console.log("update user app payload===>", payload)
    await _axios.default.post(`geocreds/setdata`, payload);
  }
};
exports.updateUserLocation = updateUserLocation;
const updateUserLoctionData = async location => {
  const userData = await _asyncStorage.default.getItem('userData');
  // console.log("userData====>",userData)
  if (userData !== null) {
    let payload = {
      "latitude": location.coords.latitude,
      "longitude": location.coords.longitude,
      "userId": userData != null ? JSON.parse(userData).id : "",
      "timeStamp": location.timestamp,
      "locationDetails": location,
      "username": userData != null ? JSON.parse(userData).firstName + " " + JSON.parse(userData).lastName : "",
      "mobile": userData != null ? JSON.parse(userData).phone : ""
    };
    console.log("update user app payload===>", payload);
    await _axios.default.post(`geocreds/setdata`, payload);
  }
};
exports.updateUserLoctionData = updateUserLoctionData;
const fetchLocation = async () => {
  try {
    let location = await _reactNativeBackgroundGeolocation.default.getCurrentPosition({
      timeout: 25,
      // 30-second timeout to fetch location
      maximumAge: 5000,
      // Accept the last-known-location if not older than 5000 ms
      desiredAccuracy: 10,
      // Try to fetch a location with an accuracy of 10 meters
      samples: 3 // How many location samples to attempt
    });
    return location;
  } catch (error) {
    console.log("Failed to fetch location:", error);
    throw error;
  }
};

/**
 * Initializes background location tracking depending on the platform (Android or iOS).
 * @param allLocations - Optional list of locations to check for onSite flag.
 */
exports.fetchLocation = fetchLocation;
const initBackgroundLocation = async (checkLastCheckedInOut = false, allLocations) => {
  // console.log("checkLastCheckedInOut:",checkLastCheckedInOut)
  // If platform is Android, configure Android-specific background location settings
  if (_reactNative.Platform.OS === 'android') {
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
exports.initBackgroundLocation = initBackgroundLocation;
const configureAndroidBackgroundLocation = async (checkLastCheckedInOut, allLocations) => {
  var _allLocations$locatio;
  // Filter locations where onSite flag is true
  const onSiteLocation = (allLocations === null || allLocations === void 0 || (_allLocations$locatio = allLocations.locations) === null || _allLocations$locatio === void 0 ? void 0 : _allLocations$locatio.filter(item => item.onSite)) || [];
  let isOnSite = false;
  const getOnSiteFlag = await _asyncStorage.default.getItem('isOnSite');
  if (checkLastCheckedInOut == false) {
    isOnSite = onSiteLocation.length > 0;
    // console.log("isOnSite:",isOnSite)
    await _asyncStorage.default.setItem("isOnSite", JSON.stringify(isOnSite));
  } else {
    // console.log("getOnSiteFlag ==>",getOnSiteFlag)
    isOnSite = JSON.parse(getOnSiteFlag);
    // console.log("isOnSite::",isOnSite)
  }
  try {
    // Stop any ongoing background geolocation tracking and reset settings
    await _reactNativeBackgroundGeolocation.default.stop();
    _reactNativeBackgroundGeolocation.default.deviceSettings.showIgnoreBatteryOptimizations();

    // Configure background geolocation for Android with relevant settings
    await _reactNativeBackgroundGeolocation.default.ready({
      reset: true,
      desiredAccuracy: _reactNativeBackgroundGeolocation.default.DESIRED_ACCURACY_HIGH,
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
        text: "Sitekey is running in the background."
      },
      backgroundPermissionRationale: {
        // Android only
        message: 'Incident Go collect location data for Sitekey'
      }
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
    _reactNativeBackgroundGeolocation.default.deviceSettings.showIgnoreBatteryOptimizations();
    // let token = await BackgroundGeolocation.findOrCreateTransistorAuthorizationToken("IncidentGoApp28thFeb", "raldrichpolicepriority", "https://tracker.transistorsoft.com")
    // Initialize background geolocation for iOS
    await _reactNativeBackgroundGeolocation.default.ready({
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
      geofenceModeHighAccuracy: false
    }, state => {
      // If the service isn't enabled, start geofencing
      console.log("state.enabled ===>", state);
      if (!state.enabled) {
        _reactNativeBackgroundGeolocation.default.startGeofences().then(() => {
          _reactNativeBackgroundGeolocation.default.changePace(true);
          console.log("geofence mode enabled ===>");
        });
      } else {
        _reactNativeBackgroundGeolocation.default.changePace(true);
      }
    });
  } catch (error) {
    // Log any errors encountered during iOS background location configuration
    console.log('Error configuring iOS background location:', error);
  }
};

/**
 * Starts the appropriate background service based on the tracking mode.
 * @param trackingMode - The mode to use for tracking: either location tracking or geofence tracking.
 */
const startService = async trackingMode => {
  try {
    // Log which tracking mode is being started
    console.log(`Starting service in ${trackingMode === TRACKING_MODE.LOCATION_TRACKING_MODE ? 'Location Tracking' : 'Geofence Tracking'} mode.`);
    // If the mode is location tracking, start the location tracking service
    if (trackingMode === TRACKING_MODE.LOCATION_TRACKING_MODE) {
      await _reactNativeBackgroundGeolocation.default.start();
      // console.log("Background location tracking started.");
    } else {
      // If the mode is geofence tracking, start the geofence service
      await _reactNativeBackgroundGeolocation.default.startGeofences();
      // console.log("Geofence tracking started.");
    }
  } catch (error) {
    // Log any errors encountered when starting the tracking service
    // console.log("Failed to start tracking:", error);
  }
};

// Perform CRUD operations on geofences
const crudGeofenceOperation = async (receivedGeofences, isInitialScript) => {
  const getAllGeofences = await _reactNativeBackgroundGeolocation.default.getGeofences();
  let isInitialScriptRun = false;
  if (getAllGeofences.length === 0) {
    receivedGeofences.LocationRegion.forEach(geofence => {
      let geofenceCoords = typeof geofence.path === 'string' ? JSON.parse(geofence.path) : geofence.path;
      const polyCoords = geofenceCoords.map(item => [item.lat, item.lng]);
      addUpdateGeofence(geofence.id, geofence.locationName, geofence.location_id, polyCoords);
      if (!isInitialScriptRun && isInitialScript == "true") {
        isInitialScriptRun = true;
        updateUserLocation();
      }
    });
    initBackgroundLocation(false, []);
  } else {
    if (receivedGeofences.deletedLocationRegion != null) {
      receivedGeofences.deletedLocationRegion.forEach(geofence => {
        let identifier = geofence.id;
        _reactNativeBackgroundGeolocation.default.removeGeofence(identifier.toString()).then(() => {
          _reactNativeBackgroundGeolocation.default.getGeofences().then(allGeofenes => {
            if (allGeofenes.length == 0) {
              _reactNativeBackgroundGeolocation.default.stop();
            }
          });
        }).catch(() => {
          // console.log("remove error" + error);
        });
      });
    } else {
      if (receivedGeofences.LocationRegion != null) {
        try {
          receivedGeofences.LocationRegion.forEach(geofence => {
            let geofenceCoords = typeof geofence.path === 'string' ? JSON.parse(geofence.path) : geofence.path;
            const polyCoords = geofenceCoords.map(item => [item.lat, item.lng]);
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
    _reactNativeBackgroundGeolocation.default.removeGeofences().then(() => {
      _reactNativeBackgroundGeolocation.default.stop();
    });
    updateUserLocation();
  }
};

// Insert all geofences,
exports.crudGeofenceOperation = crudGeofenceOperation;
const insertAllGeofences = async (allRegions, allLocations) => {
  if (allRegions.length !== 0) {
    const promises = allRegions.map(region => {
      const geofenceCoords = typeof region.path === 'string' ? JSON.parse(region.path) : region.path;
      const polyCoords = geofenceCoords.map(item => [item.lat, item.lng]);
      return addUpdateGeofence(region.id, region.location_name, region.location_id, polyCoords);
    });
    try {
      await Promise.all(promises);
      await initBackgroundLocation(false, allLocations);
    } catch (error) {
      // console.log('Error inserting geofences:', error);
    }
  }
};

// Add or update a geofence
exports.insertAllGeofences = insertAllGeofences;
const addUpdateGeofence = async (identifier, locationName, locationId, vertices) => {
  _reactNativeBackgroundGeolocation.default.addGeofence({
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
  }).catch(error => {
    console.log("error:geofence added ==>", error);
  });
};

// Define the structure for geofence data

// Update event on geofence cross
const updateEventOnGeofenceCross = async (geofenceData, isChecking, userId) => {
  try {
    var _geofenceData$extras, _geofenceData$extras2;
    if (!userId) {
      console.log("User ID is missing. Skipping geofence update.");
      return;
    }
    const locationId = (geofenceData === null || geofenceData === void 0 || (_geofenceData$extras = geofenceData.extras) === null || _geofenceData$extras === void 0 ? void 0 : _geofenceData$extras.location_id) || "";
    const locationName = (geofenceData === null || geofenceData === void 0 || (_geofenceData$extras2 = geofenceData.extras) === null || _geofenceData$extras2 === void 0 ? void 0 : _geofenceData$extras2.locationName) || "";
    if (!locationId) {
      console.log("Location ID is missing in geofence data. Skipping request.");
      return;
    }
    const payload = {
      locationId,
      locationName,
      isCheckIn: isChecking
    };
    const siteKeyNotificationEndPoint = `sitekey/notification/${userId}`;
    // Make the API request
    await _axios.default.post(siteKeyNotificationEndPoint, payload);
    setLastCheckedInOutOnNetworkFail(locationId, locationName, isChecking);
  } catch (error) {
    // console.log("Error updating geofence cross event:", error.message);
    // console.log("ERROR====>", error?.message == "Network Error")
    // if (error?.message == "Network Error") {
    //   setLastCheckedInOutOnNetworkFail(geofenceData?.extras?.location_id || "", geofenceData?.extras?.locationName || "", isChecking)
    // }
  }
};

// Update enter/exit event on geofence cross
exports.updateEventOnGeofenceCross = updateEventOnGeofenceCross;
const updateEnterExitEventOnGeofenceCross = async (locationId, locationName, isChecking, userId) => {
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
      isCheckIn: isChecking
    };
    const siteKeyNotificationEndPoint = `sitekey/notification/${userId}`;
    console.log(`Sending geofence cross event: ${JSON.stringify(payload)}`);
    // Make the API request
    await _axios.default.post(siteKeyNotificationEndPoint, payload);
    setLastCheckedInOutOnNetworkFail(locationId, locationName, isChecking);
    // console.log("Geofence cross response:", response.data);
  } catch (error) {
    console.log("Error updating geofence cross event:", error);
  }
};

// Check if a point is inside a polygon
exports.updateEnterExitEventOnGeofenceCross = updateEnterExitEventOnGeofenceCross;
const isPointInPolygon = (point, polygon) => {
  let [x, y] = point;
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    let [xi, yi] = polygon[i];
    let [xj, yj] = polygon[j];
    let intersect = yi > y !== yj > y && x < (xj - xi) * (y - yi) / (yj - yi) + xi;
    if (intersect) inside = !inside;
  }
  return inside;
};
const findContainingPolygons = (point, geofences) => {
  return geofences.filter(({
    coordinates
  }) => isPointInPolygon(point, coordinates));
};

// Set the last checked-in location in AsyncStorage
exports.findContainingPolygons = findContainingPolygons;
const setLastCheckedIn = (location_id, location_name) => {
  const lastCheckedIn = {
    locationID: location_id,
    locatonName: location_name
  };
  _asyncStorage.default.setItem("lastCheckedIn", JSON.stringify(lastCheckedIn));
};

// Get the last checked-in location from AsyncStorage
exports.setLastCheckedIn = setLastCheckedIn;
const getLastCheckedIn = () => {
  return _asyncStorage.default.getItem('lastCheckedIn');
};

// Remove the last checked-in location from AsyncStorage
exports.getLastCheckedIn = getLastCheckedIn;
const removeLastCheckedIn = () => {
  return _asyncStorage.default.removeItem('lastCheckedIn');
};

// Check the current latitude and longitude with the geofences, and send a notification if the user is inside or outside a geofence
exports.removeLastCheckedIn = removeLastCheckedIn;
const checkCurrentLatLongWithGeofence = async (latitude, longitude) => {
  // console.log("Current latitude and longitude:", latitude, longitude);
  try {
    const getAllGeofences = await _reactNativeBackgroundGeolocation.default.getGeofences();
    if (getAllGeofences.length > 0) {
      const geofences = getAllGeofences.map(geofence => {
        var _geofence$extras, _geofence$extras2;
        return {
          id: geofence === null || geofence === void 0 || (_geofence$extras = geofence.extras) === null || _geofence$extras === void 0 ? void 0 : _geofence$extras.location_id,
          name: geofence === null || geofence === void 0 || (_geofence$extras2 = geofence.extras) === null || _geofence$extras2 === void 0 ? void 0 : _geofence$extras2.locationName,
          coordinates: geofence === null || geofence === void 0 ? void 0 : geofence.vertices
        };
      });
      const currentLocation = [latitude, longitude]; // Replace with actual coordinates
      const insideGeofences = findContainingPolygons(currentLocation, geofences);
      if (insideGeofences.length > 0) {
        const lastCheckedIn = await getLastCheckedIn();
        if (lastCheckedIn === null) {
          const userData = await _asyncStorage.default.getItem('userData');
          const userId = userData ? JSON.parse(userData).id : "";
          updateEnterExitEventOnGeofenceCross(insideGeofences[0].id, insideGeofences[0].name, true, userId);
          setLastCheckedIn(insideGeofences[0].id, insideGeofences[0].name);
          // showNotification(true,insideGeofences[0].name)
        }
      } else {
        const lastCheckedIn = await getLastCheckedIn();
        if (lastCheckedIn !== null) {
          const userData = await _asyncStorage.default.getItem('userData');
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
};

// Store the last checked-in or out geofence event in AsyncStorage on network failed
exports.checkCurrentLatLongWithGeofence = checkCurrentLatLongWithGeofence;
const setLastCheckedInOutOnNetworkFail = (location_id, location_name, isCheckedIn) => {
  const lastCheckedIn = {
    locationID: location_id,
    locatonName: location_name,
    checkedIn: isCheckedIn
  };
  _asyncStorage.default.setItem("lastCheckedInOrOut", JSON.stringify(lastCheckedIn)).then(() => {
    // console.log("lastCheckedInOutStored")
  });
};

// remove last checked-in or out geofence event from AsyncStorage
exports.setLastCheckedInOutOnNetworkFail = setLastCheckedInOutOnNetworkFail;
const removeLastCheckedInOrOutEvent = () => {
  return _asyncStorage.default.removeItem('lastCheckedInOrOut');
};

// Get the last checked-in or out location from AsyncStorage
exports.removeLastCheckedInOrOutEvent = removeLastCheckedInOrOutEvent;
const getLastCheckedInOutStoredEvents = () => {
  return _asyncStorage.default.getItem('lastCheckedInOrOut');
};
exports.getLastCheckedInOutStoredEvents = getLastCheckedInOutStoredEvents;
//# sourceMappingURL=backgroundGeolocation.js.map