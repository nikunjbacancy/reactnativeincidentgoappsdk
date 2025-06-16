import { images } from '../../../../assets';
import React from 'react';
import { StatusBar, ScrollView, Image, NativeModules, Platform } from 'react-native';
import { GradientButton, SafeAreaContainer, PaddingView } from '../../../../components';
import { useIntl } from 'react-intl';
import Screens from '../../../../containers/providers/RoutesProvider/screens';
import { getAllGeofenceRequest } from '../../../../utils/location/actions';
import { makeSelectUser } from '../../../../containers/app/selectors';
import requestLocationPermissions from '../../../../utils/permission/requestLocationPermission';

import {
    Background,
    LogoRow,
    TitleRow,
    TitleText,
    ItemIcon,
    ItemRow,
    ItemText,
    ButtonRow,
    SettingButton,
    AlreadyAllowed,
    AllowButton
} from './styles';
import messages from './messages';
import { openSettings } from 'react-native-permissions';
import { locationAlwaysPermissionsRequest } from './action';
import { useAction, useSelector } from '../../../../utils/hooks';
import NavigatorService from '../../../../utils/navigation';

const PermissionLocationScreen = () => {
    const { formatMessage } = useIntl();
    const userData = useSelector(makeSelectUser());
    const locationAlwaysPermissionsAction = useAction(locationAlwaysPermissionsRequest);
    const getAllGeofenceRequestAction = useAction(getAllGeofenceRequest);

    const handleAlreadyEnabled = () => {

        console.log("handleAlreadyEnabled")
        if (Platform.OS === "ios") {
            NativeModules.Location.checkLocationAlwaysPermission("Test", "Location", (response: String) => {
                console.log("response:" + response);
                if (response === 'RNPermissionStatusAuthorized') {
                    locationAlwaysPermissionsAction(formatMessage(messages.enabled));
                    // NavigatorService.navigate(Screens.Home.Index);
                }
                else {
                    openSettings();
                }
            });
        } else {
            NavigatorService.navigate(Screens.Home.Index);
            getAllGeofences()
        }
    }

    // handle allow
    const handleAllow = () => {
        requestLocationPermissions().then(() => {
            NavigatorService.navigate(Screens.Home.Index);
            locationAlwaysPermissionsAction(formatMessage(messages.enabled));
            getAllGeofences()
        }).catch((error) => {
            console.log("request error==>", error)
        })
    }

    const getAllGeofences = () => {
        //getAllGeofenceRequest
        if (userData.id) {
            getAllGeofenceRequestAction(userData.id);
        } else {
            // Handle the case when userData.id is not available
        }
    }

    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="white" />
            <Background />
            <SafeAreaContainer>
                <ScrollView>
                    <LogoRow>
                        <Image source={images.logoWithText()} />
                    </LogoRow>
                    <TitleRow>
                        <TitleText>{formatMessage(messages.title)}</TitleText>
                    </TitleRow>
                    <>
                        <ItemRow>
                            <ItemIcon source={images.icLocation()} />
                            <ItemText>{Platform.OS == 'android' ? formatMessage(messages.location).replace("ALWAYS", formatMessage(messages.allowAllTime))
                                : formatMessage(messages.location)}</ItemText>
                        </ItemRow>
                        <PaddingView size={1} />
                    </>

                    {Platform.OS == 'android' ?
                        <ButtonRow>
                            <AllowButton
                                onPress={handleAllow}
                                text={formatMessage(messages.allow)}
                            />
                            <AlreadyAllowed
                                onPress={handleAlreadyEnabled}
                                text={formatMessage(messages.enabled)}
                            />
                        </ButtonRow> :
                        <ButtonRow>
                            <AlreadyAllowed
                                onPress={handleAlreadyEnabled}
                                text={formatMessage(messages.enabled)}
                            />
                            <SettingButton
                                onPress={openSettings}
                                text={formatMessage(messages.settings)}
                            />
                        </ButtonRow>
                    }
                </ScrollView>
            </SafeAreaContainer>
        </>
    );
}

export default PermissionLocationScreen;