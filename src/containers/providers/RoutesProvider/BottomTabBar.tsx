/* eslint-disable react/jsx-props-no-spreading */
import { images } from '../../../assets';
import colors from '../../../assets/colors';
import { PanicButton, ScreenActionTabButton, Call911Button } from '../../../components';
import { UpdateLocationData } from '../../../containers/app/actions';
import { SHOW_CANCEL_ESCORT_MODAL } from '../../../containers/screens/Home/Escort/RequestScreen/constants';
import { triggerDuressRequest } from '../../../containers/screens/Onboarding/WarningScreen/actions';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import {
  Keyboard,
  StyleProp,
  TextStyle,
  TouchableHighlight,
  TouchableOpacity,
  ViewStyle,
  EmitterSubscription
} from 'react-native';
import {
  Menu,
  MenuOption,
  MenuOptionCustomStyle,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';
import { isAndroid, makeCall } from '../../../utils/device';
import { useAction, useSelector } from '../../../utils/hooks';
import NavigatorService from '../../../utils/navigation';
import styled from '../../../utils/styled';
import { hideDuressInfoAction, showDuressInfoAction } from './actions';
import messages from './messages';
import Screens from './screens';
import { makeSelectScreenAction } from './selectors';
import { makeSelectUser } from '../../../containers/app/selectors';
import { useBackButton } from '../../../utils/hooks';
import { BackHandler } from 'react-native';


interface MenuTriggerStyleProps {
  triggerOuterWrapper?: StyleProp<ViewStyle>;
  triggerWrapper?: StyleProp<ViewStyle>;
  triggerText?: StyleProp<TextStyle>;
  TriggerTouchableComponent?: Function;
  triggerTouchable?: {};
}

interface MenuOptionsStyleProps extends MenuOptionCustomStyle {
  optionsContainer?: StyleProp<ViewStyle>;
  OptionTouchableComponent: typeof TouchableHighlight;
}

// interface TabButtonTextPropTypes {
//   focused?: Boolean;
// }

const BottomTabBar: FC<any> = props => {
  const { formatMessage } = useIntl();
  const [isKeyboardShow, setIsKeyboardShow] = useState(false);

  useEffect(() => {
    if (isAndroid) {
      let subscriptions: EmitterSubscription[];
      subscriptions = [
        Keyboard.addListener(
          'keyboardDidShow',
          () => setIsKeyboardShow(true),
        ),
        Keyboard.addListener(
          'keyboardDidHide',
          () => setIsKeyboardShow(false),
        )
      ];

      return () => {
        subscriptions.forEach((s) => s?.remove?.());
      }
    }
    else {
      return () => { }
    }

  }, []);


  const screenAction = useSelector(makeSelectScreenAction());
  const renderScreenActionButton = () => {
    if (!screenAction) return;
    if (screenAction?.type === SHOW_CANCEL_ESCORT_MODAL) {
      return (
        <CancelEscortScreenActionButton
          onCancel={screenAction.cancel}
          onPress={screenAction.action}
          text={screenAction.actionText}
          loading={screenAction.loading}
          disabled={screenAction.disabled}
        />
      );
    }

    return (
      <ContinueScreenActionButton
        onCancel={screenAction.cancel}
        onPress={screenAction.action}
        text={screenAction.actionText}
        loading={screenAction.loading}
        disabled={screenAction.disabled}
      />
    );
  };

  // const setUpBeaconOption = () => {
  //   if (isAndroid) {
  //     return (
  //       <MenuOption onSelect={() =>
  //         NavigatorService.navigate(Screens.Menu.Beacons)
  //       }>
  //         <MenuOptionInner>
  //           <MenuOptionText>
  //             {formatMessage(messages.beacons)}
  //           </MenuOptionText>
  //           <MenuOptionIcon source={images.icFoward()} />
  //         </MenuOptionInner>
  //       </MenuOption>
  //     )
  //   }
  //   return null;
  // }

  const setLocation = useAction(UpdateLocationData);
  const startDuressRequest = useAction(triggerDuressRequest);
  const showDuressInfo = useAction(showDuressInfoAction);
  const hideDuressInfo = useAction(hideDuressInfoAction);
  // const shouleShouldDuressInfo = useSelector(makeSelectShowDuressInfo());
  const userDetails = useSelector(makeSelectUser());
  const organizationUserConfig = userDetails?.organizationGroups != undefined ? userDetails?.organizationGroups[0]?.userConfig : {};
  const isShowEscortTab =
    organizationUserConfig?.safetyTimer == false &&
      organizationUserConfig?.liveSecurityEscort == false &&
      organizationUserConfig?.timedChecklist == false
      ? false
      : true;
  const isPanicButtonShow = organizationUserConfig?.panicButton
  const triggerDuress = useCallback(() => {
    startDuressRequest(setLocation);
  }, [startDuressRequest, setLocation]);

  const setShowDuressInfo = useCallback(() => {
    showDuressInfo();
    setTimeout(hideDuressInfo, 3500);
  }, [hideDuressInfo, showDuressInfo]);

  const { navigation } = props;

  // const navigationHandler = (name: String) => {
  //   navigation.navigate(name);
  // };

  const call911Fun = () => makeCall('911');

  useBackButton(() => {
    if (!isShowEscortTab && navigation.isFocused()) {
      BackHandler.exitApp();
    }
    return true;
  });

  // const CustomTabBarItem = (route: Object, index: Number) => {
  //   return (
  //     <TabContainer onPress={() => navigationHandler(route.routeName)}>
  //       <BottomTabBarIcon
  //         focused={navigation.state.index === index}
  //         source={
  //           route.routeName === 'HomeNewTipVideoRecord'
  //             ? images.icNewTip()
  //             : images.icEscort()
  //         }
  //       />
  //       <TabButtonText focused={navigation.state.index === index}>
  //         {route.routeName === 'HomeNewTipVideoRecord' ? 'New Tip' : 'Escort'}
  //       </TabButtonText>
  //     </TabContainer>
  //   );
  // };

  //bottom button
  const bottomBar = () => {
    // //("==================isPanicButtonShow==================>", isPanicButtonShow)
    if (isPanicButtonShow) {
      return (<Container>
        {/* <BottomBarContainer>
          <TabViewContainer>
            {
              routes.map((route: Object, index: Number) => {
              if (isShowEscortTab || route.routeName !== 'HomeEscortType') {
                return CustomTabBarItem(route, index);
              } else {
                if (navigation.state.index === 0 && navigation.isFocused())
                  navigation.navigate('HomeNewTipVideoRecord');
              }
              })
            }
          </TabViewContainer>
        </BottomBarContainer> */}
        <DuressButtonContainer>
          <DuressButton
            text={""}
            onFill={triggerDuress}
            onPress={setShowDuressInfo}
            isPanicMode={false}
            withIcon
          />
        </DuressButtonContainer>
        {!isKeyboardShow && (
          <MenuContainer>
            <MenuTrigger customStyles={triggerStyles}>
              <HamburgerMenu source={images.icMenu()} />
            </MenuTrigger>
            <MenuOptions customStyles={optionsStyles}>

              {/* {setUpBeaconOption()} */}

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
                    {formatMessage(messages.notifications)}
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
        )}
      </Container>);
    }
    else {
      return (
        <Container>
          <DuressButtonContainer>
            <CallEmergency
              text={"Call 911"}
              onPress={() => call911Fun()}
            />
          </DuressButtonContainer>
        </Container >
      )
    }
  }

  return (
    <>
      {/* <Container>{shouleShouldDuressInfo && <PressDuressInfo />}</Container> */}
      {!screenAction ? (
        // {isPanicButtonShow ? () : ()}
        bottomBar()
      ) : (
        renderScreenActionButton()
      )}
    </>
  );
};

const triggerStyles: MenuTriggerStyleProps = {
  triggerWrapper: {
    alignItems: 'center',
    paddingTop: 8,
    backgroundColor: colors.nearWhite,
  },
  TriggerTouchableComponent: TouchableOpacity,
};
// const TabViewContainer = styled.View`
//   flex-direction: row;
//   width: 100%;
// `;

// const TabContainer = styled.TouchableOpacity`
//   margin-top: 5px;
//   flex: 1;
//   height: 60px;
//   padding-right: 3px;
//   align-items: center;
//   justify-content: center;
//   background-color: ${colors.nearWhite};
// `;

// const TabButtonText = styled.Text<TabButtonTextPropTypes>`
//   font-family: ${({ theme }) => theme.fonts.defaultBoldFamily};
//   font-size: 15px;
//   line-height: 28px;
//   color: ${({ focused }) => (focused ? colors.blue : colors.black)};
//   text-align: center;
// `;

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

const Container = styled.View`
  display: flex;
  flex-direction: row;
`;

// const BottomBarContainer = styled.View`
//   width: 50%;
// `;

// const PressDuressInfo = styled(PanicInfo)`
//   bottom: 40%;
// `;

const DuressButtonContainer = styled.View`
  width: 100%;
  border-top-color: ${({ theme }) => theme.colors.lightGrey};
  border-top-width: 0.25px;
  justify-content: center;
  background-color: ${({ theme }) => theme.sdkBackgroundColor};
`;

const DuressButton = styled(PanicButton).attrs({
  textStyle: {
    fontSize: 18,
    alignSelf: 'center',
  }
})`
  margin: 5% auto;
  width: 90%;
  height: 60px;
  flex-direction: row;
  
`;

const CallEmergency: any = styled(Call911Button).attrs({
  textStyle: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    alignSelf: 'center',
    // marginBottom: '8.5%'
  },

})`
  margin: 5% auto;
  width: 90%;
  height: 60px;
  flex-direction: row;
`;

// const StyledBottomTabBar = styled(NavBottomTabBar).attrs(({ theme }) => ({
//   activeTintColor: theme.colors.highlight,
//   inactiveTintColor: theme.colors.dark,
//   labelStyle: {
//     fontFamily: theme.fonts.defaultFamily,
//   },
//   tabStyle: {
//     topPadding: 12,
//   },
// }))`
//   background-color: ${({ theme }) => theme.colors.white};
//   border-top-color: ${({ theme }) => theme.colors.lightGrey};
//   height: 60px;
// `;

const MenuContainer = styled(Menu)`
  width: 25%;
  display: flex;
  align-items: stretch;
  background-color: ${({ theme }) => theme.colors.nearWhite};
  border-left-color: ${({ theme }) => theme.colors.lightGrey};
`;

const HamburgerMenu = styled.Image`
  width: 40px;
  height: 40px;
`;

const MenuOptionInner = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 15px 20px;
  border-bottom-width: 1px;
  border-color: ${({ theme }) => theme.colors.white};
`;

const MenuOptionText = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.dark};
`;

const MenuOptionIcon = styled.Image`
  margin-left: auto;
`;

const ContinueScreenActionButton = styled(ScreenActionTabButton).attrs(
  ({ theme }) => ({
    continueButtonTextStyle: {
      color: theme.colors.dark,
      textTransform: 'uppercase',
    },
  }),
)``;

const CancelEscortScreenActionButton = styled(ScreenActionTabButton).attrs(
  ({ theme }) => ({
    continueButtonStyle: {
      backgroundColor: theme.colors.highlight2,
      borderRadius: 6,
    },
    continueButtonTextStyle: {
      color: theme.colors.white,
    },
  }),
)`
  margin: 20px 30px 35px;
`;

export default BottomTabBar;
