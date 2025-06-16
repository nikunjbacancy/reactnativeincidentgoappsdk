import { images } from '../../../../assets';
import React from 'react';
import { StatusBar, ScrollView, Image, NativeModules, Platform } from 'react-native';
import { SafeAreaContainer, PaddingView } from '../../../../components';
import { useIntl } from 'react-intl';
import Screens from '../../../../containers/providers/RoutesProvider/screens';
import { getAllGeofenceRequest } from '../../../../utils/location/actions';
import { makeSelectUser } from '../../../../containers/app/selectors';
import requestLocationPermissions from '../../../../utils/permission/requestLocationPermission';
import { Background, LogoRow, TitleRow, TitleText, ItemIcon, ItemRow, ItemText, ButtonRow, SettingButton, AlreadyAllowed, AllowButton } from './styles';
import messages from './messages';
import { openSettings } from 'react-native-permissions';
import { locationAlwaysPermissionsRequest } from './action';
import { useAction, useSelector } from '../../../../utils/hooks';
import NavigatorService from '../../../../utils/navigation';
const PermissionLocationScreen = () => {
  const {
    formatMessage
  } = useIntl();
  const userData = useSelector(makeSelectUser());
  const locationAlwaysPermissionsAction = useAction(locationAlwaysPermissionsRequest);
  const getAllGeofenceRequestAction = useAction(getAllGeofenceRequest);
  const handleAlreadyEnabled = () => {
    console.log("handleAlreadyEnabled");
    if (Platform.OS === "ios") {
      NativeModules.Location.checkLocationAlwaysPermission("Test", "Location", response => {
        console.log("response:" + response);
        if (response === 'RNPermissionStatusAuthorized') {
          locationAlwaysPermissionsAction(formatMessage(messages.enabled));
          // NavigatorService.navigate(Screens.Home.Index);
        } else {
          openSettings();
        }
      });
    } else {
      NavigatorService.navigate(Screens.Home.Index);
      getAllGeofences();
    }
  };

  // handle allow
  const handleAllow = () => {
    requestLocationPermissions().then(() => {
      NavigatorService.navigate(Screens.Home.Index);
      locationAlwaysPermissionsAction(formatMessage(messages.enabled));
      getAllGeofences();
    }).catch(error => {
      console.log("request error==>", error);
    });
  };
  const getAllGeofences = () => {
    //getAllGeofenceRequest
    if (userData.id) {
      getAllGeofenceRequestAction(userData.id);
    } else {
      // Handle the case when userData.id is not available
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StatusBar, {
    barStyle: "dark-content",
    backgroundColor: "white"
  }), /*#__PURE__*/React.createElement(Background, null), /*#__PURE__*/React.createElement(SafeAreaContainer, null, /*#__PURE__*/React.createElement(ScrollView, null, /*#__PURE__*/React.createElement(LogoRow, null, /*#__PURE__*/React.createElement(Image, {
    source: images.logoWithText()
  })), /*#__PURE__*/React.createElement(TitleRow, null, /*#__PURE__*/React.createElement(TitleText, null, formatMessage(messages.title))), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ItemRow, null, /*#__PURE__*/React.createElement(ItemIcon, {
    source: images.icLocation()
  }), /*#__PURE__*/React.createElement(ItemText, null, Platform.OS == 'android' ? formatMessage(messages.location).replace("ALWAYS", formatMessage(messages.allowAllTime)) : formatMessage(messages.location))), /*#__PURE__*/React.createElement(PaddingView, {
    size: 1
  })), Platform.OS == 'android' ? /*#__PURE__*/React.createElement(ButtonRow, null, /*#__PURE__*/React.createElement(AllowButton, {
    onPress: handleAllow,
    text: formatMessage(messages.allow)
  }), /*#__PURE__*/React.createElement(AlreadyAllowed, {
    onPress: handleAlreadyEnabled,
    text: formatMessage(messages.enabled)
  })) : /*#__PURE__*/React.createElement(ButtonRow, null, /*#__PURE__*/React.createElement(AlreadyAllowed, {
    onPress: handleAlreadyEnabled,
    text: formatMessage(messages.enabled)
  }), /*#__PURE__*/React.createElement(SettingButton, {
    onPress: openSettings,
    text: formatMessage(messages.settings)
  })))));
};
export default PermissionLocationScreen;
//# sourceMappingURL=index.js.map