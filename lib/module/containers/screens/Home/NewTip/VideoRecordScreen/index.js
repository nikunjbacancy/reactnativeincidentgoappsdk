/* eslint-disable no-unused-expressions */
import { CallModal, GradientButton, LoadingIndicator, SafeAreaContainer, ScreenActionModal, TipCamera } from '../../../../../components';
import { TipCameraMode } from '../../../../../components/TipCamera/types';
import { makeSelectNewTipIncidentVideos } from '../../../../../containers/app/selectors';
import { addScreenAction } from '../../../../../containers/providers/RoutesProvider/actions';
import Screens from '../../../../../containers/providers/RoutesProvider/screens';
import { makeSelectScreenAction } from '../../../../../containers/providers/RoutesProvider/selectors';
import noop from 'lodash/noop';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useIntl } from 'react-intl';
import { StatusBar } from 'react-native';
import { openSettings } from 'react-native-permissions';
import { withNavigationFocus } from 'react-navigation';
import { isAndroid } from '../../../../../utils/device';
import { useAction, useSelector } from '../../../../../utils/hooks';
import NavigatorService from '../../../../../utils/navigation';
import { requestCameraPermissions } from '../../../../../utils/permission';
import { getTipsRequest, resetState } from '../../../Menu/Tips/MyTipsScreen/actions';
import { makeSelectLastActiveTip } from '../../../Menu/Tips/MyTipsScreen/selectors';
import { TipStatus } from '../../../Menu/Tips/MyTipsScreen/types';
import { getIntersectOrganizationsRequest } from '../SelectOrganizationScreen/actions';
import { makeSelectRequestingOrganizations } from '../SelectOrganizationScreen/selectors';
import { createTipWithChatRequest, getLastActiveTipOrganization, getUserOrganizationsRequest, hideCallModal, hideFastAccessModal, hideTipCreatedModal, showCallModal, showCancelIncidentModal, showFastAccessModal, uploadVideoRequest } from './actions';
import CancelTipModal from './CancelTipModal';
import FastAccessModal from './FastAccessModal';
import messages from './messages';
import { makeSelectCreateTipMode, makeSelectCreatingTipWithChat, makeSelectLastTipOrganization, makeSelectShouldShowBottomScreenAction, makeSelectShouldShowCallModal, makeSelectShouldShowCancelTipModal, makeSelectShouldShowFastAccessModal, makeSelectShouldShowTipCreatedModal, makeSelectTipCreatedData, makeSelectUploadingVideo, makeSelectUserOrganizations } from './selectors';
import { AcknowledgmentText, BlockedPermissionContainer, BlockedPermissionMessage, Message, TipCameraContainer } from './styles';
import { CreateTipMode } from './types';
var PermissionStatus = /*#__PURE__*/function (PermissionStatus) {
  PermissionStatus[PermissionStatus["Checking"] = 0] = "Checking";
  PermissionStatus[PermissionStatus["Granted"] = 1] = "Granted";
  PermissionStatus[PermissionStatus["Blocked"] = 2] = "Blocked";
  return PermissionStatus;
}(PermissionStatus || {});
const VideoRecordScreen = ({
  isFocused
}) => {
  const {
    formatMessage
  } = useIntl();
  const [permissionStatus, setPermissionStatus] = useState(PermissionStatus.Checking);
  const incidentVideos = useSelector(makeSelectNewTipIncidentVideos());
  const shouldShowCancelTipModal = useSelector(makeSelectShouldShowCancelTipModal());
  const shouldShowBottomScreenAction = useSelector(makeSelectShouldShowBottomScreenAction());
  const userOrganizations = useSelector(makeSelectUserOrganizations());
  const shouldShowCallModal = useSelector(makeSelectShouldShowCallModal());
  const requestingOrganizations = useSelector(makeSelectRequestingOrganizations());
  const shouldShowTipCreatedModal = useSelector(makeSelectShouldShowTipCreatedModal());
  const tipCreatedData = useSelector(makeSelectTipCreatedData());
  const screenAction = useSelector(makeSelectScreenAction());
  const creatingTipWithChat = useSelector(makeSelectCreatingTipWithChat());
  const uploadingVideo = useSelector(makeSelectUploadingVideo());
  const createTipMode = useSelector(makeSelectCreateTipMode());
  const lastActiveTip = useSelector(makeSelectLastActiveTip());
  const lastTipOrganization = useSelector(makeSelectLastTipOrganization());
  const shouldShowFastAccessModal = useSelector(makeSelectShouldShowFastAccessModal());
  const uploadVideoRequestAction = useAction(uploadVideoRequest);
  const addNewTipScreenAction = useAction(addScreenAction);
  const getUserOrganizationsAction = useAction(getUserOrganizationsRequest);
  const showCancelIncidentModalAction = useAction(showCancelIncidentModal);
  const showCallModalAction = useAction(showCallModal);
  const hideModalAction = useAction(hideCallModal);
  const getIntersectOrganizationsRequestAction = useAction(getIntersectOrganizationsRequest);
  const hideTipCreatedModalAction = useAction(hideTipCreatedModal);
  const createTipWithChatAction = useAction(createTipWithChatRequest);
  const getTipsRequestAction = useAction(getTipsRequest);
  const resetStateAction = useAction(resetState);
  const getLastActiveTipOrganizationAction = useAction(getLastActiveTipOrganization);
  const hideFastAccessModalAction = useAction(hideFastAccessModal);
  const showFastAccessModalAction = useAction(showFastAccessModal);
  const cameraRef = useRef(null);
  useEffect(() => {
    //("New Tip screen")
    if (shouldShowBottomScreenAction) {
      hideFastAccessModalAction();
      addNewTipScreenAction({
        actionText: formatMessage(messages.continue),
        cancel: showCancelIncidentModalAction,
        action: getIntersectOrganizationsRequestAction,
        loading: requestingOrganizations
      });
    }
  }, [hideFastAccessModalAction, requestingOrganizations, shouldShowBottomScreenAction]);
  const tryRequestCameraPermissions = () => {
    requestCameraPermissions().then(() => {
      setPermissionStatus(PermissionStatus.Granted);
    }).catch(() => {
      setPermissionStatus(PermissionStatus.Blocked);
    });
  };
  useEffect(() => {
    if (isFocused) {
      tryRequestCameraPermissions();
      getUserOrganizationsAction();
      resetStateAction();
      getTipsRequestAction({
        tipStatus: TipStatus.Active,
        paging: false
      });
    }
  }, [isFocused]);
  useEffect(() => {
    if (lastActiveTip) {
      getLastActiveTipOrganizationAction(lastActiveTip.organization);
    }
  }, [lastActiveTip]);
  const stopCamera = useCallback(() => {
    var _cameraRef$current;
    (_cameraRef$current = cameraRef.current) === null || _cameraRef$current === void 0 || _cameraRef$current.pausePreview();
  }, []);
  const startCamera = useCallback(() => {
    var _cameraRef$current2;
    (_cameraRef$current2 = cameraRef.current) === null || _cameraRef$current2 === void 0 || _cameraRef$current2.resumePreview();
  }, []);
  const onRecordFinished = useCallback(filePath => {
    uploadVideoRequestAction(filePath);
  }, []);
  const goToTipDetail = useCallback(() => {
    hideTipCreatedModalAction();
    NavigatorService.navigate(Screens.Menu.Tips.TipDetail, {
      incident: tipCreatedData.incident,
      showChat: createTipMode === CreateTipMode.Chat
    });
  }, [tipCreatedData, createTipMode]);
  const goToLastTipDetail = useCallback(() => {
    hideFastAccessModalAction();
    NavigatorService.navigate(Screens.Menu.Tips.TipDetail, {
      incident: lastActiveTip
    });
  }, [hideFastAccessModalAction, lastActiveTip]);
  const handleOnRecordStarted = useCallback(() => {
    hideFastAccessModalAction();
  }, [hideFastAccessModalAction]);
  const renderCamera = () => {
    if (permissionStatus === PermissionStatus.Checking) {
      return /*#__PURE__*/React.createElement(LoadingIndicator, {
        message: formatMessage(messages.checkingPermissions)
      });
    }
    if (permissionStatus === PermissionStatus.Granted) {
      return /*#__PURE__*/React.createElement(TipCameraContainer, null, /*#__PURE__*/React.createElement(TipCamera, {
        isRecordEnabled: userOrganizations.length > 0,
        tipCameraMode: TipCameraMode.camera,
        incidentVideos: incidentVideos,
        ref: cameraRef,
        isFocused: isFocused,
        isChatDisabled: !!screenAction || creatingTipWithChat || uploadingVideo || userOrganizations.length === 0,
        onRecordStarted: handleOnRecordStarted,
        onRecordFinished: onRecordFinished,
        onPhonePress: showCallModalAction,
        onChatPress: createTipWithChatAction
      }), /*#__PURE__*/React.createElement(FastAccessModal, {
        onOpen: goToLastTipDetail,
        isVisible: shouldShowFastAccessModal && !!lastActiveTip,
        hideModal: hideFastAccessModalAction,
        incident: lastActiveTip,
        organization: lastTipOrganization
      }));
    }
    if (permissionStatus === PermissionStatus.Blocked) {
      return /*#__PURE__*/React.createElement(BlockedPermissionContainer, null, /*#__PURE__*/React.createElement(BlockedPermissionMessage, null, formatMessage(messages.permissionsBlockedMessage)), /*#__PURE__*/React.createElement(GradientButton, {
        text: isAndroid ? formatMessage(messages.tryAgain) : formatMessage(messages.openSettings),
        onPress: isAndroid ? tryRequestCameraPermissions : openSettings
      }));
    }
    return null;
  };
  return isFocused ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StatusBar, {
    barStyle: "dark-content",
    backgroundColor: "white"
  }), /*#__PURE__*/React.createElement(SafeAreaContainer, null, renderCamera(), /*#__PURE__*/React.createElement(CancelTipModal, {
    onShow: stopCamera,
    onHide: startCamera,
    onPressYes: showFastAccessModalAction,
    isVisible: shouldShowCancelTipModal
  }), /*#__PURE__*/React.createElement(CallModal, {
    onShow: stopCamera,
    onHide: startCamera,
    isVisible: shouldShowCallModal,
    hideModal: hideModalAction,
    organizations: userOrganizations
  }), /*#__PURE__*/React.createElement(ScreenActionModal, {
    isVisible: shouldShowTipCreatedModal,
    title: formatMessage(messages.tipCreatedTitle, {
      organizationName: tipCreatedData.organizationName
    }),
    message: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Message, null, formatMessage(messages.tipCreatedMessage)), /*#__PURE__*/React.createElement(AcknowledgmentText, null, formatMessage(messages.acknowledgment))),
    actionText: formatMessage(messages.seeMyTip),
    onAction: goToTipDetail,
    onHide: createTipMode !== CreateTipMode.Chat ? hideTipCreatedModalAction : noop
  }))) : null;
};
export default withNavigationFocus(VideoRecordScreen);
//# sourceMappingURL=index.js.map