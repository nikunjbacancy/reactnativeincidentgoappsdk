import { Header, SafeAreaContainer, ScreenActionButton } from '../../../../components';
import React, { useEffect } from 'react';
import { useIntl } from 'react-intl';
import { colors } from '../../../../assets';
import { StatusBar } from 'react-native';
// import Toast from 'react-native-root-toast';
import messages from './messages';
import { InfoRow, Background, Step1, Step1_Desc, Tutorial, ViewTutorial, Timing, ViewStep2, Loader, ViewStep22, BackButtonRow } from './styles';
// import { beaconRegistrationRequest } from './actions';
// import { useAction } from '../../../../utils/hooks';
// import { SET_BEACON_DETAILS } from '../../../../containers/screens/Home/Settings/constants';
// import NetInfo from "@react-native-community/netinfo";
import NavigatorService from '../../../../utils/navigation';
import Screens from '../../../../containers/providers/RoutesProvider/screens';
// import { checkBluetoothStatus, setUpBeaconInfo } from '../../../../utils/beacon';
import { AppEvent, event } from '../../../../api';
import { getLocationActionPermissions, requestActivityRecognitionPermission } from '../../../../utils/permission';
const SettingScreen = () => {
  const {
    formatMessage
  } = useIntl();
  // const beaconRegistration = useAction(beaconRegistrationRequest);
  // const [beaconDetails, setBeaconDetails] = useState({});
  // const [isBeaconConnected, setIsBeaconConnected] = useState(false);
  // const [batteryLevel, setBatteryLevel] = useState("");

  useEffect(() => {
    requestActivityRecognitionPermission();
    getLocationActionPermissions();
    // connectToBeacon();
    // event.on(AppEvent.OnBeaconConnection, OnBeaconConnection);
    event.on(AppEvent.OnBatteryLevelReceived, onBatteryLevelReceived);
  }, []);

  // const OnBeaconConnection = (connectivity: boolean) => {
  //     setIsBeaconConnected(connectivity);
  //     if (!connectivity) {
  //         setBatteryLevel("");
  //     }
  // }

  const onBatteryLevelReceived = batteryLevel => {
    if (batteryLevel != "0") {
      // setBatteryLevel(batteryLevel);
    }
  };

  // const connectToBeacon = async () => {
  //     const isEnabled = await checkBluetoothStatus();
  //     if (isEnabled) {
  //         AsyncStorage.getItem(SET_BEACON_DETAILS).then(async (beacons) => {
  //             if (beacons) {
  //                 setBeaconDetails(JSON.parse(beacons));
  //             }
  //             else {
  //                 const beaconInfo = await setUpBeaconInfo();
  //                 setBeaconDetails(beaconInfo);
  //             }
  //         });
  //     }
  // };

  // const registerBeacon = async () => {
  //     NetInfo.fetch().then(async state => {
  //         switch (state.isConnected) {
  //             case true:
  //                 if (!isBeaconConnected) {
  //                     // beaconRegistration(beaconDetails);
  //                 }
  //                 break;
  //             case false:
  //                 Toast.show("Please check your internet connection.", { position: Toast.positions.BOTTOM })
  //                 break;
  //         }
  //     });
  // }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StatusBar, {
    barStyle: "dark-content",
    backgroundColor: "white"
  }), /*#__PURE__*/React.createElement(SafeAreaContainer, null, /*#__PURE__*/React.createElement(Header, {
    title: formatMessage(messages.title)
  }), /*#__PURE__*/React.createElement(InfoRow, null, /*#__PURE__*/React.createElement(Background, null, /*#__PURE__*/React.createElement(Step1, null, formatMessage(messages.step1)), /*#__PURE__*/React.createElement(Step1_Desc, null, formatMessage(messages.step1_desc)), /*#__PURE__*/React.createElement(ViewTutorial, null, /*#__PURE__*/React.createElement(Tutorial, null), /*#__PURE__*/React.createElement(Timing, null, formatMessage(messages.timing)))), /*#__PURE__*/React.createElement(Background, null, /*#__PURE__*/React.createElement(ViewStep2, null, /*#__PURE__*/React.createElement(Step1, null, formatMessage(messages.step2)),
  /*#__PURE__*/
  // Object.keys(beaconDetails).length != 0 ? <ViewStep22 /> : <Loader /> 
  React.createElement(Loader, null)),
  /*#__PURE__*/
  // Object.keys(beaconDetails).length != 0 ? <ViewStep2>
  //     <Container>
  //         <PlusImage />
  //         {
  //             batteryLevel != "" ? <ViewStep21>
  //                 {/* <DeviceDetail>{beaconDetails?.name}</DeviceDetail> */}
  //                 <BatteryLevel>{formatMessage(messages.batteryLevel) + ": " + batteryLevel + "%"}</BatteryLevel>
  //             </ViewStep21>
  //                 : <ViewStep21>
  //                     {/* <DeviceDetail>{beaconDetails?.name}</DeviceDetail> */}
  //                 </ViewStep21>
  //         }
  //     </Container>
  //     {/* {isBeaconConnected ? <Bullet>{formatMessage(messages.bullet)}</Bullet> :
  //         <Bullet_Red>{formatMessage(messages.bullet)}</Bullet_Red>} */}
  // </ViewStep2>
  //     : <ViewStep22 />
  React.createElement(ViewStep22, null))), /*#__PURE__*/React.createElement(BackButtonRow, null, /*#__PURE__*/React.createElement(ScreenActionButton, {
    onCancel: () => NavigatorService.navigate(Screens.Home.Escort.EscortType),
    tintColor: colors.white
  }))));
};
export default SettingScreen;
//# sourceMappingURL=index.js.map