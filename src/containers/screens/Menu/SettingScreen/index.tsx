// import NavigatorService from 'utils/navigation';
import { colors } from '../../../../assets';
import { Header, SafeAreaContainer, ScreenActionButton } from '../../../../components';
import React, { useEffect, useState } from 'react';
import { StatusBar, Alert } from 'react-native';
import { useIntl } from 'react-intl';
import { useAction, useSelector } from '../../../../utils/hooks';
import NavigatorService from '../../../../utils/navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Screens from '../../../providers/RoutesProvider/screens';
import { deleteUserRequest, resetDeleteUser } from './actions';
import messages from './messages';
import {
  BackButtonRow,
  Container,
  SwitchButton,
  SwitchContainer,
  SwitchText,
  LogoutButtonRow,
  LogoutButton,
  LogoutButtonText
} from './styles';
import { checkNotifications, openSettings } from 'react-native-permissions';
import styled from '../../../../utils/styled';
import { makeSelectUser } from '../../../app/selectors';

// import { getDeviceName, getModel, getBrand, getDeviceId } from 'react-native-device-info'

const SettingScreen = () => {

  const { phone } = useSelector(makeSelectUser());

  const { formatMessage } = useIntl();
  const [notificationSetting, setNotificationSetting] = useState(true);
  const accountDeleteRequestAction = useAction(deleteUserRequest);
  const notificationEnabled =
    notificationSetting == null ? true : notificationSetting;

  useEffect(() => {
    checkNotifications().then(({ status, settings }) => {
      if (status === "blocked") {
        setNotificationSetting(false);
      }
      else {
        setNotificationSetting(true);
      }
    });
  })

  // useEffect(() => {
  //   // console.log("result===>", result)

  //   if (result !== null) {
  //     Toast.show(result.message, {
  //       position: Toast.positions.CENTER,
  //       duration: 3000
  //     });
  //     resetDeleteAccountUserAction()
  //     AsyncStorage.setItem("isLogout", "true");
  //     NavigatorService.navigate(Screens.Onboarding.Index);
  //   }

  // }, [result])

  const onNotificationValueChange = () => {
    console.log("notificationSetting:" + notificationSetting)
    switch (notificationSetting) {
      case true:

        break;
      case false:
        Alert.alert(
          'Permission Required',
          'This app needs notification permission to receive notifications',
          [
            {
              text: 'Open settings',
              onPress: openSettings
            },
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
          ]
        );
        break;
    }
  }

  const setWarning = () => {
    // console.log("=formatMessage(messages.warning)=>",formatMessage(messages.warning))
    switch (notificationSetting) {
      case true:
        return null;
      case false:
        return <Text>{formatMessage(messages.warning)}</Text>;
      default:
        return null;
    }
  }

  const showDeleteAccountAlert = () => {
    Alert.alert(formatMessage(messages.deleteAccount), formatMessage(messages.deleteAccountMsg), [
      {
        text: formatMessage(messages.no),
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: formatMessage(messages.yes), onPress: () =>
          handleLogout()
      },
    ]);
  }

  const handleLogout = () => {
    accountDeleteRequestAction(phone)
    // resetDeleteAccountUserAction()
    // console.log("Result Is===>", result)
    // AsyncStorage.setItem("isLogout", "true");
    // NavigatorService.navigate(Screens.Onboarding.Index);
  }

  const showLogoutAlert = () => {
    Alert.alert(formatMessage(messages.logout), formatMessage(messages.logoutMessage), [
      {
        text: formatMessage(messages.no),
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: formatMessage(messages.yes), onPress: () => {
          AsyncStorage.setItem("isLogout", "true");
          NavigatorService.navigate(Screens.Onboarding.Index);
        }
      },
    ]);
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <SafeAreaContainer>
        <Header title={formatMessage(messages.title)} />
        <Container>
          <SwitchContainer>
            <SwitchText>{formatMessage(messages.description)}</SwitchText>
            <SwitchButton
              value={notificationEnabled}
              onValueChange={onNotificationValueChange}
              trackColor={{
                false: colors.lightGrey,
                true: colors.highlight,
              }}
              thumbColor={colors.nearWhite}
            />
          </SwitchContainer>

          {setWarning()}

          <LogoutButtonRow>
            <LogoutButton onPress={showLogoutAlert}>
              <LogoutButtonText>{formatMessage(messages.logout)}</LogoutButtonText>
            </LogoutButton>
          </LogoutButtonRow>

          {/* <DeleteButtonRow>
            <DeleteButton onPress={showDeleteAccountAlert}>
              <DeleteButtonText>{formatMessage(messages.deleteAccount)}</DeleteButtonText>
            </DeleteButton>
          </DeleteButtonRow> */}

        </Container>
        <BackButtonRow>
          <ScreenActionButton
            onCancel={NavigatorService.back}
            tintColor={colors.white}
          />
        </BackButtonRow>
      </SafeAreaContainer>
    </>
  );
};

const Text = styled.Text`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.defaultBoldFamily};
  font-size: ${({ theme }) => theme.fonts.normalSize};
  text-align: center;
  padding: 20px 20px 0;
`;

export default SettingScreen;
