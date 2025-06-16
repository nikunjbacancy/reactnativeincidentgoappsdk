/* eslint-disable no-unused-expressions,@typescript-eslint/no-misused-promises */
import { AppEvent, twilio } from '../../../../../api';
import event from '../../../../../api/event';
import {
  CallModal,
  ChatModal,
  LoadingIndicator,
  SafeAreaContainer,
  TipCamera,
  TipStatusIcon,
} from '../../../../../components';
import { TipCameraMode } from '../../../../../components/TipCamera/types';
import { makeSelectTipCameraMode } from '../../../../../containers/app/selectors';
import Screens from '../../../../../containers/providers/RoutesProvider/screens';
import { Id, Incident } from 'incident-code-core';
import filter from 'lodash/filter';
import forEach from 'lodash/forEach';
import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { useIntl } from 'react-intl';
import { Alert, StatusBar } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { IMessage as GiftedChatMessage } from 'react-native-gifted-chat';
import { ScreenProps } from 'react-native-screens';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { useAction, useIncidentCategoryConfig, useSelector } from '../../../../../utils/hooks';
import NavigatorService from '../../../../../utils/navigation';
import { addBadge, getBadges, removeBadge } from '../../../../../utils/notification';

import {
  addMessage,
  getIncidentRequest,
  getIncidentVideosRequest,
  hideCallModal,
  hideChatModal,
  sendMessageRequest,
  showCallModal,
  showChatModal,
  uploadVideoRequest,
} from './actions';
import tipDetailMessages from './messages';
import {
  makeSelectIncident,
  makeSelectIncidentVideos,
  makeSelectIsLoading,
  makeSelectMessages,
  makeSelectOrganization,
  makeSelectShouldShowCallModal,
  makeSelectShouldShowChatModal,
} from './selectors';
import {
  BackButton,
  BackButtonContainer,
  CategoryContainer,
  CategoryContent,
  CategoryImage,
  CategoryName,
  OrganizationContainer,
  OrganizationName,
} from './styles';

interface Params {
  incident: Incident;
  showChat: boolean;
}
interface Props extends NavigationStackScreenProps<Params, ScreenProps> { }

const TipDetailScreen: FC<Props> = ({ navigation: { getParam } }) => {
  const incidentParam = getParam('incident');
  const showChat = getParam('showChat');
  const tipId = getParam('tipId');

  const { formatMessage } = useIntl();

  const [badges, setBadges] = useState<Id[]>([]);

  const cameraRef = useRef<RNCamera>(null);

  const getIncidentVideosAction = useAction(getIncidentVideosRequest);
  const showCallModalAction = useAction(showCallModal);
  const hideCallModalAction = useAction(hideCallModal);
  const showChatModalAction = useAction(showChatModal);
  const hideChatModalAction = useAction(hideChatModal);
  const uploadVideoAction = useAction(uploadVideoRequest);
  const addMessageAction = useAction(addMessage);
  const sendMessageAction = useAction(sendMessageRequest);
  const getIncidentAction = useAction(getIncidentRequest);

  const incidentVideos = useSelector(makeSelectIncidentVideos());
  const organization = useSelector(makeSelectOrganization());
  const isLoading = useSelector(makeSelectIsLoading());
  const shouldShowCallModal = useSelector(makeSelectShouldShowCallModal());
  const shouldShowChatModal = useSelector(makeSelectShouldShowChatModal());
  const tipCameraMode = useSelector(makeSelectTipCameraMode());
  const messages = useSelector(makeSelectMessages());
  const incident = useSelector(makeSelectIncident());

  const [isVideoPaused, setIsVideoPaused] = useState(false);

  const categoryConfig = useIncidentCategoryConfig(incident?.category);

  useEffect(() => {
    if (incidentParam == null) {
      getIncidentAction(tipId);
    } else {
      getIncidentAction(incidentParam.id);
    }
  }, []);

  useEffect(() => {
    if (incident) {
      getIncidentVideosAction({
        incident,
        organizationId: incident.organization,
      });
      getBadges().then((notificationBadges: Id[]) => {
        setBadges(filter(notificationBadges, n => n === incident.id));
      });
      const notificationAdded = (notificationBadges: Id[]) => {
        setBadges(filter(notificationBadges, n => n === incident.id));
      };
      event.on(AppEvent.OnNotificationBadge, notificationAdded);
      const messageAdded = async (message: GiftedChatMessage) => {
        //("================ tip detail screen index message added ================",message)
        await addBadge(incident.id as Id);
        addMessageAction(message);
      };
      event.on(AppEvent.OnMessageAdded, messageAdded);
      const onIncidentUpdated = (incidentId: Id) => {
        if (incident.id === incidentId) {
          hideChatModalAction();
          setTimeout(
            () => {
              Alert.alert(
                formatMessage(tipDetailMessages.tipClosed),
                formatMessage(tipDetailMessages.tipClosedDetail),
                [
                  {
                    text: formatMessage(tipDetailMessages.ok),
                    onPress: () => backToMyTips({ resolved: true }),
                  },
                ],
                { cancelable: false },
              );
            },
            shouldShowChatModal ? 5000 : 1500,
          );
        }
      };
      event.on(AppEvent.OnIncidentUpdated, onIncidentUpdated);
      return function clean() {
        event.off(AppEvent.OnNotificationBadge, notificationAdded);
        event.off(AppEvent.OnMessageAdded, messageAdded);
        event.off(AppEvent.OnIncidentUpdated, onIncidentUpdated);
        twilio.removeChannelEvents(incident.id?.toString() || '');
      };
    }
    return;
  }, [incident, setBadges]);

  useEffect(() => {
    if (!isLoading && showChat) {
      setTimeout(() => {
        showChatModalAction();
      }, 1300);
    }
  }, [isLoading]);

  const handleRecordFinished = useCallback(
    (videoUri: string) => {
      uploadVideoAction({ videoUri, incident });
    },
    [incident],
  );

  const handleShowChatModal = useCallback(async () => {
    if (tipCameraMode === TipCameraMode.video) {
      return setIsVideoPaused(true);
    }
    setTimeout(() => {
      cameraRef?.current?.pausePreview();
    }, 100);
    await removeBadge(incident?.id as Id);
  }, [incident, tipCameraMode]);

  const handleHideChatModal = useCallback(async () => {
    if (tipCameraMode === TipCameraMode.video) {
      return setIsVideoPaused(false);
    }
    cameraRef?.current?.resumePreview();
    await removeBadge(incident?.id as Id);
  }, [incident, tipCameraMode]);

  const backToMyTips = useCallback(
    (tipEvent?: { resolved?: boolean }) => {
      const myTips = Screens.Menu.Tips.MyTips;
      const incidentResolved = tipEvent?.resolved || incident?.isResolved;
      NavigatorService.navigate(
        incidentResolved ? myTips.Closed : myTips.Active,
      );
    },
    [incident],
  );

  const handleSendMessage = useCallback(
    (messagesToSent: GiftedChatMessage[]) => {
      forEach(messagesToSent, message => {
        sendMessageAction({ incident, message });
      });
    },
    [incident],
  );

  if (isLoading) return <LoadingIndicator />;

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <SafeAreaContainer>
        <BackButtonContainer>
          <BackButton back={backToMyTips} />
          <CategoryContainer>
            <CategoryImage source={{ uri: categoryConfig.imageUrl }} />
          </CategoryContainer>
          <OrganizationContainer>
            <OrganizationName>{organization.name}</OrganizationName>
            <CategoryContent>
              <TipStatusIcon active={!incident?.isResolved} />
              <CategoryName>{categoryConfig.display}</CategoryName>
            </CategoryContent>
          </OrganizationContainer>
        </BackButtonContainer>
        <TipCamera
          ref={cameraRef}
          isRecordEnabled={!incident?.isResolved}
          tipCameraMode={TipCameraMode.camera}
          incidentVideos={incidentVideos}
          onPhonePress={showCallModalAction}
          onChatPress={showChatModalAction}
          onRecordFinished={handleRecordFinished}
          isVideoPaused={isVideoPaused}
          badges={badges}
        />
        <CallModal
          onShow={handleShowChatModal}
          onHide={handleHideChatModal}
          isVisible={shouldShowCallModal}
          hideModal={hideCallModalAction}
          organization={organization}
        />
        <ChatModal
          isReadMode={incident?.isResolved}
          onShow={handleShowChatModal}
          onHide={handleHideChatModal}
          isVisible={shouldShowChatModal}
          hideModal={hideChatModalAction}
          organization={organization}
          messages={messages}
          onMessageSent={handleSendMessage}
        />
      </SafeAreaContainer>
    </>
  );
};

export default TipDetailScreen;
