import { GradientButton, Header, HorizontalRule, LoadingIndicator, SafeAreaContainer, SiteKeyModal } from '../../../../../components';
import { images } from '../../../../../assets';
import colors from '../../../../../assets/colors';
import { MenuOption, MenuOptions, MenuTrigger } from 'react-native-popup-menu';
import Screens from '../../../../../containers/providers/RoutesProvider/screens';
import React, { useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { StatusBar, TouchableHighlight, View } from 'react-native';
import { openSettings } from 'react-native-permissions';
import { withNavigationFocus } from 'react-navigation';
import { isAndroid } from '../../../../../utils/device';
import { useAction, useSelector } from '../../../../../utils/hooks';
import NavigatorService from '../../../../../utils/navigation';
import { requestCameraPermissions } from '../../../../../utils/permission';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { AppEvent, event } from '../../../../../api';
import CancelEscortModal from '../RequestScreen/CancelEscortModal';
import { makeSelectShouldShowCancelEscortModal } from '../RequestScreen/selectors';
import { toggleEscortType, showSiteKeyModal, hideSiteKeyModal } from './actions';
import { makeSelectShouldShowSiteKeyModal } from './selectors';
import messages from './messages';
import { Container, BlockedPermissionContainer, BlockedPermissionMessage, ButtonRow, InfoText, UserView, UserName, Title, MenuContainer, HamburgerMenu, MenuOptionInner, MenuOptionText, MenuOptionIcon } from './styles';
import { EscortType } from './types';
import { makeSelectUser } from '../../../../../containers/app/selectors';
import { sdkConfigs } from '../../../../../sdkConfigs';
import { notificationListRequest } from '../../../Menu/NotificationListScreen/actions';
var PermissionStatus = /*#__PURE__*/function (PermissionStatus) {
  PermissionStatus[PermissionStatus["Checking"] = 0] = "Checking";
  PermissionStatus[PermissionStatus["Granted"] = 1] = "Granted";
  PermissionStatus[PermissionStatus["Blocked"] = 2] = "Blocked";
  return PermissionStatus;
}(PermissionStatus || {});
const EscortTypeScreen = ({
  isFocused
}) => {
  const {
    formatMessage
  } = useIntl();
  const userDetails = useSelector(makeSelectUser());
  const organizationUserConfig = userDetails.organizationGroups[0].userConfig;
  const [permissionStatus, setPermissionStatus] = useState(PermissionStatus.Checking);
  const shouldShowSiteKeyModal = useSelector(makeSelectShouldShowSiteKeyModal());
  const getNotificationAction = useAction(notificationListRequest);
  const unreadNotyCount = useSelector(state => {
    return state.notificationListState.unreadCount;
  });
  const showSiteKeyModalAction = useAction(showSiteKeyModal);
  const hideSiteKeyModalAction = useAction(hideSiteKeyModal);
  const gotoLiveEscortAction = () => {
    NavigatorService.navigate(Screens.Home.Escort.SelectOrganization);
  };
  const gotoTimedEscortAction = () => {
    NavigatorService.navigate(Screens.Home.Escort.TimedEscort);
  };
  const gotoSafetyEscortAction = () => {
    NavigatorService.navigate(Screens.Home.Escort.TimedEscort, {
      safetyTimer: true
    });
  };
  const gotoNewTipAction = () => {
    NavigatorService.navigate(Screens.Home.NewTip.VideoRecord);
  };
  const gotoNotifications = () => {
    NavigatorService.navigate(Screens.Menu.NotificationList);
  };

  // necessary to have modal be available from any screen for canceling
  const shouldShowCancelEscortModal = useSelector(makeSelectShouldShowCancelEscortModal());
  const toggleEscortTypeAction = useAction(toggleEscortType);
  const tryRequestCameraPermissions = () => {
    requestCameraPermissions().then(() => {
      setPermissionStatus(PermissionStatus.Granted);
    }).catch(() => {
      setPermissionStatus(PermissionStatus.Blocked);
    });
  };
  useEffect(() => {
    getNotifications();
    event.on(AppEvent.OnRefreshNotificationList, getNotifications);
  }, []);
  const getNotifications = () => {
    getNotificationAction(userDetails.id);
  };
  useEffect(() => {
    if (isFocused) {
      tryRequestCameraPermissions();
    }
  }, [isFocused]);
  const handlePress = escortType => {
    toggleEscortTypeAction(escortType);
    switch (escortType) {
      case EscortType.Timed:
        gotoTimedEscortAction();
        break;
      case EscortType.Live:
        gotoLiveEscortAction();
        break;
      case EscortType.Safety:
        gotoSafetyEscortAction();
        break;
      case EscortType.NewTip:
        gotoNewTipAction();
        break;
      case EscortType.Notification:
        gotoNotifications();
        break;
      case EscortType.SiteKey:
        showSiteKeyModalAction();
        break;
      default:
        break;
    }
  };
  const isServiceEnabled = () => {
    if (organizationUserConfig.safetyTimer === true || organizationUserConfig.liveSecurityEscort === true || organizationUserConfig.timedChecklist === true || organizationUserConfig.securityTips == true) {
      return /*#__PURE__*/React.createElement(Container, {
        showsVerticalScrollIndicator: false
      }, /*#__PURE__*/React.createElement(InfoText, null, formatMessage(messages.yourServices)), showSiteKey(), showSafetyTimer(), showLiveSecurityEscort(), TimeCheckList(), showSecurityTips(), showNotifications());
    } else {
      return /*#__PURE__*/React.createElement(Container, {
        showsVerticalScrollIndicator: false
      }, /*#__PURE__*/React.createElement(InfoText, null, formatMessage(messages.yourServices)), showSiteKey(), showNotifications());
    }
  };
  const showSafetyTimer = () => {
    if (organizationUserConfig.safetyTimer == true) {
      return /*#__PURE__*/React.createElement(ButtonRow, {
        onPress: () => handlePress(EscortType.Safety)
      }, /*#__PURE__*/React.createElement(AntDesign, {
        name: "Safety",
        size: 30,
        color: "#000000"
      }), /*#__PURE__*/React.createElement(Title, null, formatMessage(messages.safetyEscortButton), " "));
    }
  };
  const showLiveSecurityEscort = () => {
    if (organizationUserConfig.liveSecurityEscort == true) {
      return /*#__PURE__*/React.createElement(ButtonRow, {
        onPress: () => handlePress(EscortType.Live)
      }, /*#__PURE__*/React.createElement(MaterialCommunityIcons, {
        name: "shield-lock-outline",
        size: 30,
        color: "#000000"
      }), /*#__PURE__*/React.createElement(Title, null, formatMessage(messages.liveEscortButton)));
    } else {
      return null;
    }
  };
  const TimeCheckList = () => {
    if (organizationUserConfig.timedChecklist == true) {
      return /*#__PURE__*/React.createElement(ButtonRow, {
        onPress: () => handlePress(EscortType.Timed)
      }, /*#__PURE__*/React.createElement(Octicons, {
        name: "checklist",
        size: 30,
        color: "#000000"
      }), /*#__PURE__*/React.createElement(Title, null, formatMessage(messages.timedEscortButton)));
    } else {
      return null;
    }
  };
  const showSecurityTips = () => {
    if (organizationUserConfig.securityTips == true) {
      return /*#__PURE__*/React.createElement(ButtonRow, {
        onPress: () => handlePress(EscortType.NewTip)
      }, /*#__PURE__*/React.createElement(MaterialIcons, {
        name: "privacy-tip",
        size: 30,
        color: "#000000"
      }), /*#__PURE__*/React.createElement(Title, null, formatMessage(messages.newTip)));
    } else {
      return null;
    }
  };
  const showNotifications = () => {
    return /*#__PURE__*/React.createElement(ButtonRow, {
      onPress: () => handlePress(EscortType.Notification)
    }, /*#__PURE__*/React.createElement(MaterialIcons, {
      name: "notifications-active",
      size: 30,
      color: "#000000"
    }), /*#__PURE__*/React.createElement(Title, null, formatMessage(messages.notifications), " ", unreadNotyCount > 0 && /*#__PURE__*/React.createElement(View, {
      style: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'red'
      }
    })));
  };
  const showSiteKey = () => {
    return /*#__PURE__*/React.createElement(ButtonRow, {
      onPress: () => showSiteKeyModalAction()
    }, /*#__PURE__*/React.createElement(MaterialCommunityIcons, {
      name: "cellphone-key",
      size: 30,
      color: "#000000"
    }), /*#__PURE__*/React.createElement(Title, null, formatMessage(messages.siteKey)));
  };
  const setUpBeaconOption = () => {
    // if (isAndroid) {
    //   return (
    //     <MenuOption onSelect={() =>
    //       NavigatorService.navigate(Screens.Menu.Beacons)
    //     }>
    //       <MenuOptionInner>
    //         <MenuOptionText>
    //           {formatMessage(messages.beacons)}
    //         </MenuOptionText>
    //         <MenuOptionIcon source={images.icFoward()} />
    //       </MenuOptionInner>
    //     </MenuOption>
    //   )
    // }
  };
  const render = () => {
    if (permissionStatus === PermissionStatus.Checking) {
      return /*#__PURE__*/React.createElement(LoadingIndicator, {
        message: formatMessage(messages.checkingPermissions)
      });
    }
    if (permissionStatus === PermissionStatus.Blocked) {
      return /*#__PURE__*/React.createElement(BlockedPermissionContainer, null, /*#__PURE__*/React.createElement(BlockedPermissionMessage, null, formatMessage(messages.permissionsBlockedMessage)), /*#__PURE__*/React.createElement(GradientButton, {
        text: isAndroid ? formatMessage(messages.tryAgain) : formatMessage(messages.openSettings),
        onPress: isAndroid ? tryRequestCameraPermissions : openSettings
      }));
    }
    if (permissionStatus === PermissionStatus.Granted) {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StatusBar, {
        barStyle: "dark-content",
        backgroundColor: "white"
      }), /*#__PURE__*/React.createElement(SafeAreaContainer, null, /*#__PURE__*/React.createElement(Header, {
        title: sdkConfigs.sdkName === '' ? formatMessage(messages.incidentCo) : sdkConfigs.sdkName
      }), /*#__PURE__*/React.createElement(HorizontalRule, null), /*#__PURE__*/React.createElement(UserView, null, /*#__PURE__*/React.createElement(UserName, null, "Hi ", userDetails.firstName, " ", userDetails.lastName, ","), /*#__PURE__*/React.createElement(MenuContainer, null, /*#__PURE__*/React.createElement(MenuTrigger, null, /*#__PURE__*/React.createElement(HamburgerMenu, {
        source: images.icMenu()
      })), /*#__PURE__*/React.createElement(MenuOptions, {
        customStyles: optionsStyles
      }, setUpBeaconOption(), /*#__PURE__*/React.createElement(MenuOption, {
        onSelect: () => NavigatorService.navigate(Screens.Menu.MyAccount)
      }, /*#__PURE__*/React.createElement(MenuOptionInner, null, /*#__PURE__*/React.createElement(MenuOptionText, null, formatMessage(messages.myAccount)), /*#__PURE__*/React.createElement(MenuOptionIcon, {
        source: images.icFoward()
      }))), /*#__PURE__*/React.createElement(MenuOption, {
        onSelect: () => NavigatorService.navigate(Screens.Menu.Notification)
      }, /*#__PURE__*/React.createElement(MenuOptionInner, null, /*#__PURE__*/React.createElement(MenuOptionText, null, formatMessage(messages.settings)), /*#__PURE__*/React.createElement(MenuOptionIcon, {
        source: images.icFoward()
      }))), /*#__PURE__*/React.createElement(MenuOption, {
        onSelect: () => NavigatorService.navigate(Screens.Menu.Feedback.AddFeedback)
      }, /*#__PURE__*/React.createElement(MenuOptionInner, null, /*#__PURE__*/React.createElement(MenuOptionText, null, formatMessage(messages.feedbacks)), /*#__PURE__*/React.createElement(MenuOptionIcon, {
        source: images.icFoward()
      }))), /*#__PURE__*/React.createElement(MenuOption, {
        onSelect: () => NavigatorService.navigate(Screens.Menu.Tips.MyTips.Index)
      }, /*#__PURE__*/React.createElement(MenuOptionInner, null, /*#__PURE__*/React.createElement(MenuOptionText, null, formatMessage(messages.mytips)), /*#__PURE__*/React.createElement(MenuOptionIcon, {
        source: images.icFoward()
      }))), /*#__PURE__*/React.createElement(MenuOption, {
        onSelect: () => NavigatorService.navigate(Screens.Menu.ManageContact.ListContacts)
      }, /*#__PURE__*/React.createElement(MenuOptionInner, null, /*#__PURE__*/React.createElement(MenuOptionText, null, formatMessage(messages.contacts)), /*#__PURE__*/React.createElement(MenuOptionIcon, {
        source: images.icFoward()
      })))))), isServiceEnabled(), /*#__PURE__*/React.createElement(CancelEscortModal, {
        isVisible: shouldShowCancelEscortModal
      }), console.log("shouldShowSiteKeyModal===>", shouldShowSiteKeyModal), /*#__PURE__*/React.createElement(SiteKeyModal, {
        isVisible: shouldShowSiteKeyModal,
        userData: userDetails,
        hideModal: hideSiteKeyModalAction,
        isFromNotification: false,
        notification_id: 0
      })));
    }
  };
  return isFocused ? render() : null;
};
const optionsStyles = {
  optionsContainer: {
    backgroundColor: colors.nearWhite,
    width: 'auto',
    flexDirection: 'row-reverse',
    borderTopLeftRadius: 15
  },
  optionWrapper: {
    width: 270,
    padding: 0,
    margin: 0
  },
  optionTouchable: {
    activeOpacity: 70
  },
  OptionTouchableComponent: TouchableHighlight
};
export default withNavigationFocus(EscortTypeScreen);
//# sourceMappingURL=index.js.map