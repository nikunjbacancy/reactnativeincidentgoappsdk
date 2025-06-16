import {
    Header,
    SafeAreaContainer,
    ScreenActionButton,
} from '../../../../components';

import React, { FC, useEffect } from 'react';
import { useIntl } from 'react-intl';
import { colors } from '../../../../assets';
import { StatusBar } from 'react-native';
// import Toast from 'react-native-root-toast';
import messages from './messages';
import {
    InfoRow, Background, Step1, Step1_Desc, Tutorial,
    ViewTutorial, Timing, ViewStep2, Loader, ViewStep22, BackButtonRow
} from './styles';
// import { beaconRegistrationRequest } from './actions';
// import { useAction } from '../../../../utils/hooks';
// import { SET_BEACON_DETAILS } from '../../../../containers/screens/Home/Settings/constants';
// import NetInfo from "@react-native-community/netinfo";
import NavigatorService from '../../../../utils/navigation';
import Screens from '../../../../containers/providers/RoutesProvider/screens';
// import { checkBluetoothStatus, setUpBeaconInfo } from '../../../../utils/beacon';
import { AppEvent, event } from '../../../../api';
import { getLocationActionPermissions, requestActivityRecognitionPermission } from '../../../../utils/permission';

const SettingScreen: FC = () => {
    const { formatMessage } = useIntl();
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

    const onBatteryLevelReceived = (batteryLevel: string) => {
        if (batteryLevel != "0") {
            // setBatteryLevel(batteryLevel);
        }
    }

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

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="white" />
            <SafeAreaContainer>
                <Header title={formatMessage(messages.title)} />
                <InfoRow>
                    <Background>
                        <Step1>{formatMessage(messages.step1)}</Step1>
                        <Step1_Desc>{formatMessage(messages.step1_desc)}</Step1_Desc>
                        <ViewTutorial>
                            <Tutorial />
                            <Timing>{formatMessage(messages.timing)}</Timing>
                        </ViewTutorial>
                    </Background>

                    <Background>
                        <ViewStep2>
                            <Step1>{formatMessage(messages.step2)}</Step1>
                            {
                                // Object.keys(beaconDetails).length != 0 ? <ViewStep22 /> : <Loader /> 
                                <Loader />
                            }
                        </ViewStep2>

                        {
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
                            <ViewStep22 />
                        }
                    </Background>
                </InfoRow>

                <BackButtonRow>
                    <ScreenActionButton
                        onCancel={() =>
                            NavigatorService.navigate(Screens.Home.Escort.EscortType)
                        }
                        tintColor={colors.white}
                    />
                </BackButtonRow>
            </SafeAreaContainer>
        </>
    );
};

export default SettingScreen;
