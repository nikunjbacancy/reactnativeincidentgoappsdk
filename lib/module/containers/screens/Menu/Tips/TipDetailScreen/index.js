/* eslint-disable no-unused-expressions,@typescript-eslint/no-misused-promises */
import { AppEvent, twilio } from '../../../../../api';
import event from '../../../../../api/event';
import { CallModal, ChatModal, LoadingIndicator, SafeAreaContainer, TipCamera, TipStatusIcon } from '../../../../../components';
import { TipCameraMode } from '../../../../../components/TipCamera/types';
import { makeSelectTipCameraMode } from '../../../../../containers/app/selectors';
import Screens from '../../../../../containers/providers/RoutesProvider/screens';
import filter from 'lodash/filter';
import forEach from 'lodash/forEach';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useIntl } from 'react-intl';
import { Alert, StatusBar } from 'react-native';
import { useAction, useIncidentCategoryConfig, useSelector } from '../../../../../utils/hooks';
import NavigatorService from '../../../../../utils/navigation';
import { addBadge, getBadges, removeBadge } from '../../../../../utils/notification';
import { addMessage, getIncidentRequest, getIncidentVideosRequest, hideCallModal, hideChatModal, sendMessageRequest, showCallModal, showChatModal, uploadVideoRequest } from './actions';
import tipDetailMessages from './messages';
import { makeSelectIncident, makeSelectIncidentVideos, makeSelectIsLoading, makeSelectMessages, makeSelectOrganization, makeSelectShouldShowCallModal, makeSelectShouldShowChatModal } from './selectors';
import { BackButton, BackButtonContainer, CategoryContainer, CategoryContent, CategoryImage, CategoryName, OrganizationContainer, OrganizationName } from './styles';
const TipDetailScreen = ({
  navigation: {
    getParam
  }
}) => {
  const incidentParam = getParam('incident');
  const showChat = getParam('showChat');
  const tipId = getParam('tipId');
  const {
    formatMessage
  } = useIntl();
  const [badges, setBadges] = useState([]);
  const cameraRef = useRef(null);
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
  const categoryConfig = useIncidentCategoryConfig(incident === null || incident === void 0 ? void 0 : incident.category);
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
        organizationId: incident.organization
      });
      getBadges().then(notificationBadges => {
        setBadges(filter(notificationBadges, n => n === incident.id));
      });
      const notificationAdded = notificationBadges => {
        setBadges(filter(notificationBadges, n => n === incident.id));
      };
      event.on(AppEvent.OnNotificationBadge, notificationAdded);
      const messageAdded = async message => {
        //("================ tip detail screen index message added ================",message)
        await addBadge(incident.id);
        addMessageAction(message);
      };
      event.on(AppEvent.OnMessageAdded, messageAdded);
      const onIncidentUpdated = incidentId => {
        if (incident.id === incidentId) {
          hideChatModalAction();
          setTimeout(() => {
            Alert.alert(formatMessage(tipDetailMessages.tipClosed), formatMessage(tipDetailMessages.tipClosedDetail), [{
              text: formatMessage(tipDetailMessages.ok),
              onPress: () => backToMyTips({
                resolved: true
              })
            }], {
              cancelable: false
            });
          }, shouldShowChatModal ? 5000 : 1500);
        }
      };
      event.on(AppEvent.OnIncidentUpdated, onIncidentUpdated);
      return function clean() {
        var _incident$id;
        event.off(AppEvent.OnNotificationBadge, notificationAdded);
        event.off(AppEvent.OnMessageAdded, messageAdded);
        event.off(AppEvent.OnIncidentUpdated, onIncidentUpdated);
        twilio.removeChannelEvents(((_incident$id = incident.id) === null || _incident$id === void 0 ? void 0 : _incident$id.toString()) || '');
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
  const handleRecordFinished = useCallback(videoUri => {
    uploadVideoAction({
      videoUri,
      incident
    });
  }, [incident]);
  const handleShowChatModal = useCallback(async () => {
    if (tipCameraMode === TipCameraMode.video) {
      return setIsVideoPaused(true);
    }
    setTimeout(() => {
      var _cameraRef$current;
      cameraRef === null || cameraRef === void 0 || (_cameraRef$current = cameraRef.current) === null || _cameraRef$current === void 0 || _cameraRef$current.pausePreview();
    }, 100);
    await removeBadge(incident === null || incident === void 0 ? void 0 : incident.id);
  }, [incident, tipCameraMode]);
  const handleHideChatModal = useCallback(async () => {
    var _cameraRef$current2;
    if (tipCameraMode === TipCameraMode.video) {
      return setIsVideoPaused(false);
    }
    cameraRef === null || cameraRef === void 0 || (_cameraRef$current2 = cameraRef.current) === null || _cameraRef$current2 === void 0 || _cameraRef$current2.resumePreview();
    await removeBadge(incident === null || incident === void 0 ? void 0 : incident.id);
  }, [incident, tipCameraMode]);
  const backToMyTips = useCallback(tipEvent => {
    const myTips = Screens.Menu.Tips.MyTips;
    const incidentResolved = (tipEvent === null || tipEvent === void 0 ? void 0 : tipEvent.resolved) || (incident === null || incident === void 0 ? void 0 : incident.isResolved);
    NavigatorService.navigate(incidentResolved ? myTips.Closed : myTips.Active);
  }, [incident]);
  const handleSendMessage = useCallback(messagesToSent => {
    forEach(messagesToSent, message => {
      sendMessageAction({
        incident,
        message
      });
    });
  }, [incident]);
  if (isLoading) return /*#__PURE__*/React.createElement(LoadingIndicator, null);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StatusBar, {
    barStyle: "dark-content",
    backgroundColor: "white"
  }), /*#__PURE__*/React.createElement(SafeAreaContainer, null, /*#__PURE__*/React.createElement(BackButtonContainer, null, /*#__PURE__*/React.createElement(BackButton, {
    back: backToMyTips
  }), /*#__PURE__*/React.createElement(CategoryContainer, null, /*#__PURE__*/React.createElement(CategoryImage, {
    source: {
      uri: categoryConfig.imageUrl
    }
  })), /*#__PURE__*/React.createElement(OrganizationContainer, null, /*#__PURE__*/React.createElement(OrganizationName, null, organization.name), /*#__PURE__*/React.createElement(CategoryContent, null, /*#__PURE__*/React.createElement(TipStatusIcon, {
    active: !(incident !== null && incident !== void 0 && incident.isResolved)
  }), /*#__PURE__*/React.createElement(CategoryName, null, categoryConfig.display)))), /*#__PURE__*/React.createElement(TipCamera, {
    ref: cameraRef,
    isRecordEnabled: !(incident !== null && incident !== void 0 && incident.isResolved),
    tipCameraMode: TipCameraMode.camera,
    incidentVideos: incidentVideos,
    onPhonePress: showCallModalAction,
    onChatPress: showChatModalAction,
    onRecordFinished: handleRecordFinished,
    isVideoPaused: isVideoPaused,
    badges: badges
  }), /*#__PURE__*/React.createElement(CallModal, {
    onShow: handleShowChatModal,
    onHide: handleHideChatModal,
    isVisible: shouldShowCallModal,
    hideModal: hideCallModalAction,
    organization: organization
  }), /*#__PURE__*/React.createElement(ChatModal, {
    isReadMode: incident === null || incident === void 0 ? void 0 : incident.isResolved,
    onShow: handleShowChatModal,
    onHide: handleHideChatModal,
    isVisible: shouldShowChatModal,
    hideModal: hideChatModalAction,
    organization: organization,
    messages: messages,
    onMessageSent: handleSendMessage
  })));
};
export default TipDetailScreen;
//# sourceMappingURL=index.js.map