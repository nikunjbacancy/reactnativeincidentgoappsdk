import { images } from '../../../../assets';
import { SafeAreaContainer } from '../../../../components';
import React, { useCallback, useState } from 'react';
import { useIntl } from 'react-intl';
import { Image, StatusBar } from 'react-native';
import { activateGPS } from '../../../../utils/location';
import NavigatorService from '../../../../utils/navigation';
import Screens from '../../../../containers/providers/RoutesProvider/screens';
import messages from './messages';
import { ActivateGPSButton, ActivateGPSRow, Background, ContinueButton, ContinueButtonRow, LogoRow, TitleRow, TitleText } from './styles';
const ActivateGPSScreen = () => {
  const {
    formatMessage
  } = useIntl();
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
    const isEnabled = await activateGPS(formatMessage(messages.gpsEnabled), formatMessage(messages.gpsDisabled));
    // //("isEnabled=>",isEnabled)
    setGpsEnabled(isEnabled);
  }, []);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StatusBar, {
    barStyle: "dark-content",
    backgroundColor: "white"
  }), /*#__PURE__*/React.createElement(Background, null), /*#__PURE__*/React.createElement(SafeAreaContainer, null, /*#__PURE__*/React.createElement(LogoRow, null, /*#__PURE__*/React.createElement(Image, {
    source: images.logoWithText()
  })), /*#__PURE__*/React.createElement(TitleRow, null, /*#__PURE__*/React.createElement(TitleText, null, formatMessage(messages.title))), /*#__PURE__*/React.createElement(ActivateGPSRow, null, /*#__PURE__*/React.createElement(ActivateGPSButton, {
    onPress: handleActivateGPS,
    text: formatMessage(messages.activateGPS)
  })), /*#__PURE__*/React.createElement(ContinueButtonRow, null, /*#__PURE__*/React.createElement(ContinueButton, {
    disabled: !gpsEnabled,
    onPress: goToNextScreen,
    text: formatMessage(messages.continue)
  }))));
};
export default ActivateGPSScreen;
//# sourceMappingURL=index.js.map