import { images } from '../../../../assets';
import { LoadingIndicator } from '../../../../components';
import { UpdateLocationData } from '../../../../containers/app/actions';
import {
  makeSelectIncidentEscortData,
  makeSelectNextOnboardingScreen,
  makeSelectPassiveEscortData
} from '../../../../containers/app/selectors';
import Screens from '../../../../containers/providers/RoutesProvider/screens';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { Image, StatusBar, View } from 'react-native';
import { ScreenProps } from 'react-native-screens';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { isAndroid, makeCall } from '../../../../utils/device';
import { useAction, useSelector } from '../../../../utils/hooks';
import { checkGPSStatus } from '../../../../utils/location';
import NavigatorService from '../../../../utils/navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { makeSetShowPanicInfo, triggerDuressRequest } from './actions';
import messages from './messages';
import { makeSelectShowPanicInfo } from './selectors';

import {
  Background,
  ContinueButton,
  ContinueButtonRow,
  DuressButton,
  DuressInfo,
  LogoRow,
  ScrollWrapper,
  WarningButton,
  WarningRow,
  WarningText,
  LocationText,
  SafeView
} from './styles';


interface Params { }
interface Props extends NavigationStackScreenProps<Params, ScreenProps> { }

const WarningScreen: FC<Props> = ({ navigation: { replace, navigate } }) => {
  const { formatMessage } = useIntl();

  const incidentRecordData = useSelector(makeSelectIncidentEscortData());
  const incidentPassiveData = useSelector(makeSelectPassiveEscortData());
  const showPanicInfo = useSelector(makeSelectShowPanicInfo());
  const setLocation = useAction(UpdateLocationData);
  const setShowPanicInfo = useAction(makeSetShowPanicInfo);
  const startDuressRequest = useAction(triggerDuressRequest);
  var [isLogout, setLogout] = useState(false);

  // var isLogout = false

  useEffect(() => {

    if (incidentRecordData) {
      NavigatorService.navigate(Screens.Home.Escort.Record, incidentRecordData);
    } else if (incidentPassiveData) {
      NavigatorService.navigate(Screens.Home.Escort.Countdown, {
        id: incidentPassiveData.id,
        procedure: incidentPassiveData.procedure,
        isSafetyTimer: incidentPassiveData.isSafetyTimer,
      });
    }

    //check logout param
    AsyncStorage.getItem("isLogout").then(async (value) => {
      let val = value == null ? false : true
      setLogout(val)
    });


  }, []);

  const nextScreen = useSelector(makeSelectNextOnboardingScreen());

  // const goToNextScreen = useCallback(async () => {

  //   const goTo = nextScreen === Screens.Home.Index ? navigate : replace;

  //   // if (isAndroid && nextScreen === Screens.Home.Index) {
  //   if (isAndroid && (nextScreen === Screens.Onboarding.PermissionLocation || nextScreen === Screens.Home.Index)) {

  //     const isActive = await checkGPSStatus();
  //     const isEnabled = await checkBluetoothStatus();
  //     if (isEnabled) {
  //       AsyncStorage.getItem(BEACON_CONNECTED).then(async (value) => {
  //         if (JSON.parse(value) != true) {
  //           const beaconInfo = await setUpBeaconInfo();
  //           beaconRegistration(beaconInfo);
  //         }
  //       });
  //     }
  //     //("-isActive->",isActive)
  //     if (!isActive) return goTo(Screens.Onboarding.ActivateGPS);
  //     // return goTo(Screens.Home.Index);
  //     return NavigatorService.navigate(Screens.Home.Index);
  //   }
  //   goTo(nextScreen);
  // }, []);


  const goToNextScreen = useCallback(async () => {

    // //("next screen is --->", nextScreen)

    const goTo = nextScreen === Screens.Home.Index ? navigate : replace;

    // if (isAndroid && nextScreen === Screens.Home.Index) {
    if (isAndroid && (nextScreen === Screens.Onboarding.PermissionLocation || nextScreen === Screens.Home.Index)) {

      const isActive = await checkGPSStatus();
      // const isEnabled = await checkBluetoothStatus();
      // if (isEnabled) {
      //   AsyncStorage.getItem(BEACON_CONNECTED).then(async (value) => {
      //     if (JSON.parse(value) != true) {
      //       const beaconInfo = await setUpBeaconInfo();
      //       beaconRegistration(beaconInfo);
      //     }
      //   });
      // }
      if (!isActive) return goTo(Screens.Onboarding.ActivateGPS);
      AsyncStorage.getItem("isLogout").then(async (value) => {
        if (value != null) {
          replace(Screens.Onboarding.SignIn);
        } else {
          NavigatorService.navigate(Screens.Home.Index)
        }
      });
    }
    else {
      //check logout param
      AsyncStorage.getItem("isLogout").then(async (value) => {
        //("value--->", value)
        if (value != null) {
          replace(Screens.Onboarding.SignIn);
        } else {
          goTo(nextScreen);
        }
      });
    }
    return null;
  }, []);

  // //here check token is Valid or not, based on validation next screen decide
  // const checkBeforeMoveToNexScreen = () => {

  //   // if (isValid) {
  //   //   goToNextScreen()
  //   // }
  //   // else {
  //   //   goToNextScreen()
  //   // }

  //   goToNextScreen()
  // }

  const call911 = () => makeCall('911');

  const triggerDuress = useCallback(() => {
    startDuressRequest(setLocation);
  }, [startDuressRequest, setLocation]);

  const loggedIn = () => {
    if (isLogout) {
      return false
    }
    else {
      return !(nextScreen in Screens.Onboarding) && nextScreen === 'Home';
    }
  };

  return incidentRecordData ? (
    <LoadingIndicator />
  ) : (
    <>
      <StatusBar barStyle="light-content" backgroundColor="transparent" />
      <Background />
      <SafeView>
        <ScrollWrapper>
          <LogoRow>
            <Image source={images.logoWhiteWithText()} />
          </LogoRow>
          <WarningRow>
            <WarningText>{formatMessage(messages.message)}</WarningText>
            <WarningButton
              onPress={call911}
              text={formatMessage(messages.call911)}
            />
          </WarningRow>
          {loggedIn() && (
            <WarningRow>
              <DuressButton
                isPanicMode={false}
                onPress={setShowPanicInfo}
                onFill={triggerDuress}
                text={formatMessage(messages.duress)}
              />
            </WarningRow>
          )}
          <View>
            <WarningRow>{showPanicInfo && <DuressInfo />}</WarningRow>
          </View>
          <LocationText>{formatMessage(messages.locationMessage)}</LocationText>
          <ContinueButtonRow>
            <ContinueButton
              onPress={goToNextScreen}
              text={formatMessage(messages.button)}
            />
          </ContinueButtonRow>
        </ScrollWrapper>
      </SafeView>
    </>
  );
};

export default WarningScreen;

