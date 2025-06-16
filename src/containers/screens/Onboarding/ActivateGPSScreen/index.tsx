import { images } from '../../../../assets';
import { SafeAreaContainer } from '../../../../components';
import React, { FC, useCallback, useState } from 'react';
import { useIntl } from 'react-intl';
import { Image, StatusBar } from 'react-native';
import { ScreenProps } from 'react-native-screens';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { activateGPS } from '../../../../utils/location';
import NavigatorService from '../../../../utils/navigation';
import Screens from '../../../../containers/providers/RoutesProvider/screens';
import messages from './messages';
import {
  ActivateGPSButton,
  ActivateGPSRow,
  Background,
  ContinueButton,
  ContinueButtonRow,
  LogoRow,
  TitleRow,
  TitleText,
} from './styles';

interface Params { }
interface Props extends NavigationStackScreenProps<Params, ScreenProps> { }

const ActivateGPSScreen: FC<Props> = () => {
  const { formatMessage } = useIntl();
  const [gpsEnabled, setGpsEnabled] = useState(false);

  const goToNextScreen = useCallback(async () => {
    // const isEnabled = await checkBluetoothStatus();
    // // //("checkBluetoothStatus -->",isEnabled)
    // // //("nextScreen -->",nextScreen)
    // if (isEnabled) {
    //   const beaconInfo = await setUpBeaconInfo();
    //   beaconRegistration(beaconInfo);
    // }
    // navigate(nextScreen);
    //("navigate to home screen")
    NavigatorService.navigate(Screens.Home.Index);
    
  }, []);

  const handleActivateGPS = useCallback(async () => {
    const isEnabled = await activateGPS(
      formatMessage(messages.gpsEnabled),
      formatMessage(messages.gpsDisabled),
    );
    // //("isEnabled=>",isEnabled)
    setGpsEnabled(isEnabled);
  }, []);
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <Background />
      <SafeAreaContainer>
        <LogoRow>
          <Image source={images.logoWithText()} />
        </LogoRow>
        <TitleRow>
          <TitleText>{formatMessage(messages.title)}</TitleText>
        </TitleRow>
        <ActivateGPSRow>
          <ActivateGPSButton
            onPress={handleActivateGPS}
            text={formatMessage(messages.activateGPS)}
          />
        </ActivateGPSRow>
        <ContinueButtonRow>
          <ContinueButton
            disabled={!gpsEnabled}
            onPress={goToNextScreen}
            text={formatMessage(messages.continue)}
          />
        </ContinueButtonRow>
      </SafeAreaContainer>
    </>
  );
};

export default ActivateGPSScreen;
