import {
  GradientButton,
  Header,
  HorizontalRule,
  LoadingIndicator,
  SafeAreaContainer,
  SiteKeyModal
} from '../../../../../components';
import { images } from '../../../../../assets';
import colors from '../../../../../assets/colors';
import {
  MenuOption,
  MenuOptionCustomStyle,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
import Screens from '../../../../../containers/providers/RoutesProvider/screens';
import React, { FC, useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { StatusBar, StyleProp, ViewStyle, TouchableHighlight, View } from 'react-native';
import { openSettings } from 'react-native-permissions';
import { ScreenProps } from 'react-native-screens';
import { withNavigationFocus } from 'react-navigation';
import { NavigationStackScreenProps } from 'react-navigation-stack';
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
import { toggleEscortType,showSiteKeyModal, hideSiteKeyModal } from './actions';
import { makeSelectShouldShowSiteKeyModal } from './selectors';

import messages from './messages';
import {
  Container,
  BlockedPermissionContainer,
  BlockedPermissionMessage,
  ButtonRow,
  InfoText,
  UserView,
  UserName, Title,
  MenuContainer, HamburgerMenu, MenuOptionInner, MenuOptionText, MenuOptionIcon
} from './styles';
import { EscortType } from './types';
import { makeSelectUser } from '../../../../../containers/app/selectors';
import { sdkConfigs } from '../../../../../sdkConfigs'

import {
  notificationListRequest,
} from '../../../Menu/NotificationListScreen/actions';

enum PermissionStatus {
  Checking,
  Granted,
  Blocked,
}

interface Params { }

interface Props extends NavigationStackScreenProps<Params, ScreenProps> {
  isFocused: boolean;
}

interface MenuOptionsStyleProps extends MenuOptionCustomStyle {
  optionsContainer?: StyleProp<ViewStyle>;
  OptionTouchableComponent: typeof TouchableHighlight;
}

const EscortTypeScreen: FC<Props> = ({ isFocused }) => {

  const { formatMessage } = useIntl();
  const userDetails = useSelector(makeSelectUser());
  const organizationUserConfig = userDetails.organizationGroups[0].userConfig;
  const [permissionStatus, setPermissionStatus] = useState(
    PermissionStatus.Checking,
  );
  const shouldShowSiteKeyModal = useSelector(makeSelectShouldShowSiteKeyModal());
  const getNotificationAction = useAction(notificationListRequest);
  const unreadNotyCount = useSelector((state) => { return state.notificationListState.unreadCount });
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
      safetyTimer: true,
    });
  };

  const gotoNewTipAction = () => {
    NavigatorService.navigate(Screens.Home.NewTip.VideoRecord);
  }

  const gotoNotifications = () => {
    NavigatorService.navigate(Screens.Menu.NotificationList)
  }


  // necessary to have modal be available from any screen for canceling
  const shouldShowCancelEscortModal = useSelector(
    makeSelectShouldShowCancelEscortModal(),
  );
  const toggleEscortTypeAction = useAction(toggleEscortType);

  const tryRequestCameraPermissions = () => {
    requestCameraPermissions()
      .then(() => {
        setPermissionStatus(PermissionStatus.Granted);
      })
      .catch(() => {
        setPermissionStatus(PermissionStatus.Blocked);
      });
  };


  useEffect(() => {
    getNotifications()
    event.on(AppEvent.OnRefreshNotificationList, getNotifications);

  }, []);

  const getNotifications = () => {
    getNotificationAction(userDetails.id);
  }

  useEffect(() => {
    if (isFocused) {
      tryRequestCameraPermissions();
    }
  }, [isFocused]);


  const handlePress = (escortType: EscortType) => {
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
    if (organizationUserConfig.safetyTimer === true ||
      organizationUserConfig.liveSecurityEscort === true ||
      organizationUserConfig.timedChecklist === true ||
      organizationUserConfig.securityTips == true) {
      return <Container showsVerticalScrollIndicator={false}>
        <InfoText>{formatMessage(messages.yourServices)}</InfoText>
        {showSiteKey()}
        {showSafetyTimer()}
        {showLiveSecurityEscort()}
        {TimeCheckList()}
        {showSecurityTips()}
        {showNotifications()}
      </Container>
    }
    else {
      return <Container showsVerticalScrollIndicator={false}>
        <InfoText>{formatMessage(messages.yourServices)}</InfoText>
        {showSiteKey()}
        {showNotifications()}
      </Container>
    }
  }

  const showSafetyTimer = () => {
    if (organizationUserConfig.safetyTimer == true) {
      return <ButtonRow onPress={() => handlePress(EscortType.Safety)}>
        <AntDesign name="Safety" size={30} color="#000000" />
        <Title>{formatMessage(messages.safetyEscortButton)} </Title>
      </ButtonRow>
    }
  }

  const showLiveSecurityEscort = () => {
    if (organizationUserConfig.liveSecurityEscort == true) {
      return <ButtonRow onPress={() => handlePress(EscortType.Live)}>
        <MaterialCommunityIcons name="shield-lock-outline" size={30} color="#000000" />
        <Title>{formatMessage(messages.liveEscortButton)}</Title>
      </ButtonRow>
    }else {return null}
  }

  const TimeCheckList = () => {
    if (organizationUserConfig.timedChecklist == true) {
      return <ButtonRow onPress={() => handlePress(EscortType.Timed)}>
        <Octicons name="checklist" size={30} color="#000000" />
        <Title>{formatMessage(messages.timedEscortButton)}</Title>
      </ButtonRow>
    }else {return null}
  }

  const showSecurityTips = () => {
    if (organizationUserConfig.securityTips == true) {
      return <ButtonRow onPress={() => handlePress(EscortType.NewTip)}>
        <MaterialIcons name="privacy-tip" size={30} color="#000000" />
        <Title>{formatMessage(messages.newTip)}</Title>
      </ButtonRow>
    }else {return null}
  }

  const showNotifications = () => {
    return <ButtonRow onPress={() => handlePress(EscortType.Notification)}>
      <MaterialIcons name="notifications-active" size={30} color="#000000" />
      <Title>{formatMessage(messages.notifications)} {unreadNotyCount > 0 &&
        (<View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: 'red' }} />)}
      </Title>
    </ButtonRow>
  }

  const showSiteKey = () => {
    return <ButtonRow onPress={() => showSiteKeyModalAction()}>
      <MaterialCommunityIcons name="cellphone-key" size={30} color="#000000" />
      <Title>{formatMessage(messages.siteKey)}</Title>
    </ButtonRow>
  }

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
  }

  const render = () => {
    if (permissionStatus === PermissionStatus.Checking) {
      return (
        <LoadingIndicator
          message={formatMessage(messages.checkingPermissions)}
        />
      );
    }

    if (permissionStatus === PermissionStatus.Blocked) {
      return (
        <BlockedPermissionContainer>
          <BlockedPermissionMessage>
            {formatMessage(messages.permissionsBlockedMessage)}
          </BlockedPermissionMessage>
          <GradientButton
            text={
              isAndroid
                ? formatMessage(messages.tryAgain)
                : formatMessage(messages.openSettings)
            }
            onPress={isAndroid ? tryRequestCameraPermissions : openSettings}
          />
        </BlockedPermissionContainer>
      );
    }

    if (permissionStatus === PermissionStatus.Granted) {
      return (
        <>
          <StatusBar barStyle="dark-content" backgroundColor="white" />
          <SafeAreaContainer>
          <Header title={sdkConfigs.sdkName === '' ? formatMessage(messages.incidentCo) : sdkConfigs.sdkName} />
            <HorizontalRule />

            <UserView>
              <UserName>Hi {userDetails.firstName} {userDetails.lastName},</UserName>
              <MenuContainer>
                <MenuTrigger>
                  <HamburgerMenu source={images.icMenu()} />
                </MenuTrigger>
                <MenuOptions customStyles={optionsStyles}>
                  {setUpBeaconOption()}

                  <MenuOption
                    onSelect={() =>
                      NavigatorService.navigate(Screens.Menu.MyAccount)
                    }
                  >
                    <MenuOptionInner>
                      <MenuOptionText>
                        {formatMessage(messages.myAccount)}
                      </MenuOptionText>
                      <MenuOptionIcon source={images.icFoward()} />
                    </MenuOptionInner>
                  </MenuOption>
                  <MenuOption
                    onSelect={() =>
                      NavigatorService.navigate(Screens.Menu.Notification)
                    }
                  >
                    <MenuOptionInner>
                      <MenuOptionText>
                        {formatMessage(messages.settings)}
                      </MenuOptionText>
                      <MenuOptionIcon source={images.icFoward()} />
                    </MenuOptionInner>
                  </MenuOption>

                  <MenuOption
                    onSelect={() =>
                      NavigatorService.navigate(Screens.Menu.Feedback.AddFeedback)
                    }
                  >
                    <MenuOptionInner>
                      <MenuOptionText>
                        {formatMessage(messages.feedbacks)}
                      </MenuOptionText>
                      <MenuOptionIcon source={images.icFoward()} />
                    </MenuOptionInner>
                  </MenuOption>

                  <MenuOption
                    onSelect={() =>
                      NavigatorService.navigate(Screens.Menu.Tips.MyTips.Index)
                    }
                  >
                    <MenuOptionInner>
                      <MenuOptionText>
                        {formatMessage(messages.mytips)}
                      </MenuOptionText>
                      <MenuOptionIcon source={images.icFoward()} />
                    </MenuOptionInner>
                  </MenuOption>

                  <MenuOption
                    onSelect={() =>
                      NavigatorService.navigate(
                        Screens.Menu.ManageContact.ListContacts,
                      )
                    }
                  >
                    <MenuOptionInner>
                      <MenuOptionText>
                        {formatMessage(messages.contacts)}
                      </MenuOptionText>
                      <MenuOptionIcon source={images.icFoward()} />
                    </MenuOptionInner>
                  </MenuOption>
                </MenuOptions>
              </MenuContainer>
            </UserView>

            {isServiceEnabled()}
            <CancelEscortModal isVisible={shouldShowCancelEscortModal} />
            {console.log("shouldShowSiteKeyModal===>",shouldShowSiteKeyModal)}
            <SiteKeyModal
              isVisible={shouldShowSiteKeyModal}
              userData={userDetails}
              hideModal={hideSiteKeyModalAction}
              isFromNotification={false}
              notification_id={0}
            />
          </SafeAreaContainer >
        </>
      );
    }
  };
  return isFocused ? render() : null;
};

const optionsStyles: MenuOptionsStyleProps = {
  optionsContainer: {
    backgroundColor: colors.nearWhite,
    width: 'auto',
    flexDirection: 'row-reverse',
    borderTopLeftRadius: 15,
  },
  optionWrapper: {
    width: 270,
    padding: 0,
    margin: 0,
  },
  optionTouchable: {
    activeOpacity: 70,
  },
  OptionTouchableComponent: TouchableHighlight,
};

export default withNavigationFocus(EscortTypeScreen);