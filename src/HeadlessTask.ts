import { AsyncStorage } from "react-native";
import BackgroundGeolocation from "react-native-background-geolocation";
import { fetchLocation, findContainingPolygons, getLastCheckedInOutStoredEvents, updateEnterExitEventOnGeofenceCross, updateEventOnGeofenceCross, updateUserLocation } from "../src/utils/location/backgroundGeolocation";
const HeadlessTask = async (event: any) => {
  console.log("HeadlessTask", event);
  let params = event.params;
  if (params.connected) {
    checkPositionOnNetworkRestore()
  }
  console.log("event.name", event.name);
  switch (event.name) {
    case 'geofence':
      let userId = "";
      try {
        const userData = await AsyncStorage.getItem('userData');
        userId = userData ? JSON.parse(userData).id : "";
      } catch (error) {
        console.log("Error retrieving user data from AsyncStorage:", error);
        // writeLog("BackgroundGeolocationHeadlessTask.Error retrieving user data from AsyncStorage:", error)
      }

      if (params.action === "ENTER") {
        try {
          updateEventOnGeofenceCross(params, true, userId);
          updateUserLocation();
        } catch (error) {
          console.log("Error handling geofence ENTER event:", error);
          // writeLog("BackgroundGeolocationHeadlessTask.Error handling geofence ENTER event:", error)
        }
      } else if (params.action === "EXIT") {
        try {
          updateEventOnGeofenceCross(params, false, userId);
          updateUserLocation();
        } catch (error) {
          console.log("Error handling geofence EXIT event:", error);
          // writeLog("BackgroundGeolocationHeadlessTask.Error handling geofence EXIT event:", error)
        }
      }
      break;
    case 'motionchange':
      break;
  }
};

const NetworkRestoredTask = async (data : any) => {
  console.log("Network restopred task ===>", data)
  if (data.networkRestored) {
    checkPositionOnNetworkRestore()
  }
};
/**
 * This function checks the position on network restore.
 * It retrieves all geofences, fetches the last checked in/out events,
 * fetches the current location, and determines if the current location is inside/outside any geofences.
 * Based on the results, it sends check-in or check-out notifications.
 */
const checkPositionOnNetworkRestore = async () => { 
  const getAllGeofences = await BackgroundGeolocation.getGeofences();
  if (getAllGeofences.length > 0) {
    const userData = await AsyncStorage.getItem('userData');
    const userId = userData ? JSON.parse(userData).id : "";
    const lastCheckedInOut = await getLastCheckedInOutStoredEvents()
    const getLastCheckedInOut = lastCheckedInOut ? JSON.parse(lastCheckedInOut) : null;
    const fetchdLocation = await fetchLocation();
    const geofences = getAllGeofences.map((geofence) => ({
      id: geofence?.extras?.location_id,
      name: geofence?.extras?.locationName,
      coordinates: geofence?.vertices,
    }));
    const currentLocation = [fetchdLocation.coords.latitude, fetchdLocation.coords.longitude];
    const insideGeofences = findContainingPolygons(currentLocation, geofences);
    if (insideGeofences.length > 0 && getLastCheckedInOut != null) {
      console.log("getLastCheckedInOut.checkedIn====>", getLastCheckedInOut.checkedIn)
      if (getLastCheckedInOut.checkedIn == false) {
        // Send check-in notification
        console.log("send enter exit notifiation")
        updateEnterExitEventOnGeofenceCross(insideGeofences[0].id, insideGeofences[0].name, true, userId);
      }
    } else {
      if (getLastCheckedInOut != null) {
        if (getLastCheckedInOut.checkedIn == true) {
          // Send check-out notification
          updateEnterExitEventOnGeofenceCross(getLastCheckedInOut.locationID, getLastCheckedInOut.locatonName, false, userId);
        }
      }
    }
  }
}

export { HeadlessTask, NetworkRestoredTask };
