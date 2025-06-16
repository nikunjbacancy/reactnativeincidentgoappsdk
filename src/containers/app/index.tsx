/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
if (__DEV__) import('../../core/reactotron');

import AsyncStorage from '@react-native-async-storage/async-storage';
import { InAppNotification, LoadingIndicator, SiteKeyModal } from '../../components';
import {
  LanguageProvider,
  Routes,
  ThemeProvider,
  ReduxProvider
} from '../../containers/providers';
import React, { FC, useEffect, useCallback, useState } from 'react';
import { Alert, AppState, Platform, NativeModules } from 'react-native';
import { MenuProvider } from 'react-native-popup-menu';
import { useAction, useSelector } from '../../utils/hooks';
import NavigatorService from '../../utils/navigation';
import { isTokenValid } from '../../utils/token';
import { ANDROID_HEADLESS_NOTIFICATION_KEY } from '../providers/NotificationProvider/constants';
import { makeSelectIOSForegroundNotification } from '../providers/NotificationProvider/selectors';
import Screens from '../providers/RoutesProvider/screens';
import {
  getConfigsRequest,
  getProfileRequest,
  getTwilioAccessTokenRequest,
  updateProfileRequest
} from './actions';
import { getTimeAgo, getLocalTime } from '../../utils/common'
import { makeSelectIsLoading, makeSelectUser } from './selectors';
import { UpdateLocationData } from '../../containers/app/actions';
import { triggerDuressRequest } from '../../containers/screens/Onboarding/WarningScreen/actions';
import { notificationReadUnreadStatusRequest } from '../../containers/screens/Menu/NotificationListScreen/actions';
import { AppEvent, event } from '../../api';
import Toast from 'react-native-toast-message';
import { RootSiblingParent } from 'react-native-root-siblings';
import { isEmpty } from 'lodash';
import PushNotification from 'react-native-push-notification';
import PanicActionModal from '../../components/PanicActionModal';
import { updateUserLocation, updateUserLoctionData, fetchLocation, checkCurrentLatLongWithGeofence, updateEventOnGeofenceCross } from '../../utils/location/backgroundGeolocation';
import { geoCredStatusRequest, getAllGeofenceRequest } from '../../utils/location/actions';
import BackgroundGeolocation from 'react-native-background-geolocation';

// LogBox.ignoreLogs(["EventEmitter.removeListener"]);

const NPMModule: FC = () => {

  const isLoading = useSelector(makeSelectIsLoading());
  const iOSForegroundNotification = useSelector(
    makeSelectIOSForegroundNotification(),
  );
  const [showPanicActionPopup, setPanicActionPopup] = useState(false)
  const userData = useSelector(makeSelectUser());
  const geoCredStatusUpdate = useAction(geoCredStatusRequest)
  const getAllGeofenceRequestAction = useAction(getAllGeofenceRequest)
  const getConfigsRequestAction = useAction(getConfigsRequest);
  const getProfileRequestAction = useAction(getProfileRequest);
  const updateProfileRequestAction = useAction(updateProfileRequest);
  const getTwilioAccessTokenAction = useAction(getTwilioAccessTokenRequest);
  const setLocation = useAction(UpdateLocationData);
  const startDuressRequest = useAction(triggerDuressRequest);
  var isLogoutNotReceived = false
  type LogoutObject = {
    title: string; 
    body: string;
  };
  
  var logoutObject: LogoutObject = { title: "", body: "" };
  var isBackgroundState = false
  const updateReadUnreadStatus = useAction(notificationReadUnreadStatusRequest);
  const [geoCredPNObject, setGeoCredPNObject] = useState({});
  const [siteKeyNotificationId, setSiteKeyNotificationId] = useState("");
  // const readUnReadresult = useSelector((state) => { return state.notificationListState.notiReadData });

  useEffect(() => {

    Platform.OS == 'android' && NativeModules.NetworkModule.startNetworkListener();

    PushNotification.popInitialNotification(notification => {
      if (notification?.data.event === "LocationQuestion" && notification?.data.type === "Location") {
        event.emit(AppEvent.OnLocationQuestion, notification.data);
      }
      // Handle site key notifications
      if ((notification?.data?.type === "SiteKey" && notification?.data?.event === "SiteKey") ||
        (notification?.data?.data?.type === "SiteKey" && notification?.data?.data?.event === "SiteKey")
      ) {
        event.emit(AppEvent.OnSiteKeyNotificataionReceived, notification.data);
      }
      // Handle chat message notifications
      if (notification?.data?.event === "Message" && notification?.data?.type === "chat") {
        event.emit(AppEvent.OnChatMessageTap, notification.data?.data);
      }
    })

    getConfigsRequestAction();

    console.log("Line ===== 103")
    console.log("userData?.id ===>",userData?.id)
    userData?.id && getAllGeofenceRequestAction(userData?.id);

    isTokenValid().then(isValid => {
      //("isTokenValid-->", isValid)
      if (isValid) {
        getProfileRequestAction();
        getTwilioAccessTokenAction();
      }
    });

    // //("logout event register")
    // event.on(AppEvent.OnBeaconUpdated, onBeaconClosed);
    event.on(AppEvent.OnReceiveAlert, onAlertReceived);
    event.on(AppEvent.OnOrganizationGroupUpdated, onOrganizationGroupUpdated);
    event.on(AppEvent.OnLogout, OnLogout);
    event.on(AppEvent.OnLocationQuestion, OnLocationQuestion);
    event.on(AppEvent.OnSiteKeyNotificataionReceived, onSiteKeyNotificationReceived);


    AsyncStorage.getItem(ANDROID_HEADLESS_NOTIFICATION_KEY).then(
      async incidentId => {
        if (incidentId) {
          await AsyncStorage.removeItem(ANDROID_HEADLESS_NOTIFICATION_KEY);
          NavigatorService.navigate(Screens.Menu.Tips.TipDetail, {
            incident: {
              id: incidentId,
            },
            showChat: true,
          });
        }
      },
    );

    AppState.addEventListener('change', handleAppStateChange);
    updateUserLocation()

  }, []);

  useEffect(() => {
    // Add geofence listener

    const onLocationChange = BackgroundGeolocation.onLocation(async (location) => {
      if (Platform.OS == 'ios') {
        checkCurrentLatLongWithGeofence(location.coords.latitude, location.coords.longitude)
      }
    })

    const geofenceListener = BackgroundGeolocation.onGeofence(async (geofence) => {
      console.log("app foregorund : ==>", geofence)
      try {
        if (Platform.OS == 'ios') { return }
        // Retrieve user data safely
        let userId = "";
        try {
          const userData = await AsyncStorage.getItem('userData');
          userId = userData ? JSON.parse(userData).id : "";
        } catch (error) {
          console.log("Error retrieving user data from AsyncStorage:", error);
          // writeLog("Error retrieving user data from AsyncStorage:"+error)
        }
        // Handle geofence entry and exit events
        if (geofence.action === "ENTER") {
          console.log("app foregorund geofence.action: ==>", geofence.action)
          try {
            updateEventOnGeofenceCross(geofence, true, userId);
            updateUserLocation();
          } catch (error) {
            console.log("Error handling geofence ENTER event:", error);
            // writeLog("Error handling geofence ENTER event:"+error)
          }
        } else if (geofence.action === "EXIT") {
          console.log("app foregorund geofence.action: ==>", geofence.action)
          try {
            updateEventOnGeofenceCross(geofence, false, userId);
            updateUserLocation();
          } catch (error) {
            console.log("Error handling geofence EXIT event:", error);
            // writeLog("Error handling geofence EXIT event:"+error)
          }

        }
      } catch (error) {
        console.log("Error in geofenceListener:", error);
        // writeLog("Error in geofenceListener:"+error)
      }
    });

    // Cleanup function to remove the listener
    return () => {
      geofenceListener.remove();
      onLocationChange.remove()
    };
  }, []);

  // on sitekey notification received
  const onSiteKeyNotificationReceived = async (event: any) => {
    setSiteKeyNotificationId(event.locationId == undefined ? event.data.locationId : event.locationId)
  }

  const OnLocationQuestion = async (event: any) => {
    const gmtDateStr = getLocalTime(event.sentAt);
    if (getTimeAgo(gmtDateStr) <= 30) {
      if (userData) {
        setGeoCredPNObject(event)
        let payload = {
          isRead: true,
          userID: userData != null ? userData.id : "0",
          notiId: event != null ? event.notificationId : "",
          readFrom: "app"
        }
        updateReadUnreadStatus(payload)
      }
    }
    else {

    }

  }

  const handleAppStateChange = (newState: string) => {
    isBackgroundState = newState == 'active' ? false : true
    if (newState == 'active') {
      if (isLogoutNotReceived) {
        isLogoutNotReceived = false
        Alert.alert(
          logoutObject.title,
          logoutObject.body,
          [
            {
              text: 'OK',
              onPress: () => {
                AsyncStorage.setItem("isLogout", "true");
                NavigatorService.navigate(Screens.Onboarding.Index);
              }
            },
          ],
          { cancelable: false },
        );
      }
    }
  }

  const onAlertReceived = () => {
    triggerDuress();
  }

  const onOrganizationGroupUpdated = async () => {
    // //("event called onOrganizationGroupUpdated-->")
    updateProfileRequestAction()
  }

  // geocred feature ::: call on Click YES Button 
  const onYesTap = async () => {
    setPanicActionPopup(false)
    const location = await fetchLocation();
    // console.log("onYesTap location--==>", JSON.stringify(location))
    if (location) {
      const locationId = geoCredPNObject != null ? +geoCredPNObject.locationId : 0;
      let payload = {
        userId: userData.id,
        locationId: locationId,
        incidentId: geoCredPNObject != null ? geoCredPNObject?.incidentId : "",
        response: "yes",
        lat: location.coords.latitude.toString(),
        lng: location.coords.longitude.toString()
      }
      // console.log("onNoTap onYesTap--==>", payload)
      geoCredStatusUpdate(payload)
      updateUserLoctionData(location)
    }
  }

  // geocred feature ::: call on Click NO Button 
  const onNoTap = async () => {
    setPanicActionPopup(false)
    const location = await fetchLocation();
    if (location) {
      const locationId = geoCredPNObject != null ? +geoCredPNObject.locationId : 0;
      let payload = {
        userId: userData.id,
        locationId: locationId,
        incidentId: geoCredPNObject != null ? geoCredPNObject?.incidentId : "",
        response: "no",
        lat: location.coords.latitude.toString(),
        lng: location.coords.longitude.toString()
      }
      // console.log("onNoTap payload--==>", payload)
      geoCredStatusUpdate(payload)
      updateUserLoctionData(location)
    }
  }

  const OnLogout = async (event: any) => {
    // //("on logout received data -->",JSON.stringify(event))
    if (isBackgroundState) {
      isLogoutNotReceived = true
      logoutObject = event
    }

    Alert.alert(
      event.title,
      event.body,
      [
        {
          text: 'OK',
          onPress: () => {
            AsyncStorage.setItem("isLogout", "true");
            // NavigatorService.navigate(Screens.Onboarding.Index);
          }
        },
      ],
      { cancelable: false },
    );

  }

  const triggerDuress = useCallback(() => {
    startDuressRequest(setLocation);
  }, [startDuressRequest, setLocation]);

  return (
    <RootSiblingParent>
      <LanguageProvider>
        <ThemeProvider>
          <MenuProvider>
            {isLoading ? (
              <LoadingIndicator />
            ) : <Routes
              ref={NavigatorService.setTopLevelNavigator}
              onNavigationStateChange={NavigatorService.logScreen}
            />
            }
            <Toast ref={(ref) => Toast.setRef(ref)} />
            <InAppNotification
              title={iOSForegroundNotification?.title}
              message={iOSForegroundNotification?.message}
              onPress={iOSForegroundNotification?.action}
            />
            <PanicActionModal
              isVisible={showPanicActionPopup}
              title={!isEmpty(geoCredPNObject) ? JSON.parse(geoCredPNObject.data).title : ""}
              message={!isEmpty(geoCredPNObject) ? JSON.parse(geoCredPNObject.data).message : ""}
              actionPositiveText={"Yes"}
              actionNagetiveText={"No"}
              onAction={() => onYesTap()}
              onHide={() => onNoTap()}
              showIcon={true}
              showActionIcon={true}
            />
            <SiteKeyModal
              isVisible={siteKeyNotificationId == "" ? false : true}
              userData={userData}
              hideModal={() => setSiteKeyNotificationId("")}
              isFromNotification={true}
              notification_id={siteKeyNotificationId}
            />
          </MenuProvider>
        </ThemeProvider>
      </LanguageProvider>
    </RootSiblingParent>
  );
};

const IncidentGoPackage = () => {
  return (
    <ReduxProvider>
      <NPMModule />
    </ReduxProvider>
  )
}

export { IncidentGoPackage };
