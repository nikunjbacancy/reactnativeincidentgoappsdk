/* eslint-disable no-unused-expressions */
import {
  CallModal,
  GradientButton,
  LoadingIndicator,
  SafeAreaContainer,
  ScreenActionModal,
  TipCamera,
} from '../../../../../components';
import { TipCameraMode } from '../../../../../components/TipCamera/types';
import { makeSelectNewTipIncidentVideos } from '../../../../../containers/app/selectors';
import { addScreenAction } from '../../../../../containers/providers/RoutesProvider/actions';
import Screens from '../../../../../containers/providers/RoutesProvider/screens';
import { makeSelectScreenAction } from '../../../../../containers/providers/RoutesProvider/selectors';
import noop from 'lodash/noop';
import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { useIntl } from 'react-intl';
import { StatusBar } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { openSettings } from 'react-native-permissions';
import { withNavigationFocus } from 'react-navigation';
import { isAndroid } from '../../../../../utils/device';
import { useAction, useSelector } from '../../../../../utils/hooks';
import NavigatorService from '../../../../../utils/navigation';
import { requestCameraPermissions } from '../../../../../utils/permission';

import {
  getTipsRequest,
  resetState,
} from '../../../Menu/Tips/MyTipsScreen/actions';
import { makeSelectLastActiveTip } from '../../../Menu/Tips/MyTipsScreen/selectors';
import { TipStatus } from '../../../Menu/Tips/MyTipsScreen/types';
import { getIntersectOrganizationsRequest } from '../SelectOrganizationScreen/actions';
import { makeSelectRequestingOrganizations } from '../SelectOrganizationScreen/selectors';
import {
  createTipWithChatRequest,
  getLastActiveTipOrganization,
  getUserOrganizationsRequest,
  hideCallModal,
  hideFastAccessModal,
  hideTipCreatedModal,
  showCallModal,
  showCancelIncidentModal,
  showFastAccessModal,
  uploadVideoRequest,
} from './actions';
import CancelTipModal from './CancelTipModal';
import FastAccessModal from './FastAccessModal';
import messages from './messages';
import {
  makeSelectCreateTipMode,
  makeSelectCreatingTipWithChat,
  makeSelectLastTipOrganization,
  makeSelectShouldShowBottomScreenAction,
  makeSelectShouldShowCallModal,
  makeSelectShouldShowCancelTipModal,
  makeSelectShouldShowFastAccessModal,
  makeSelectShouldShowTipCreatedModal,
  makeSelectTipCreatedData,
  makeSelectUploadingVideo,
  makeSelectUserOrganizations,
} from './selectors';
import {
  AcknowledgmentText,
  BlockedPermissionContainer,
  BlockedPermissionMessage,
  Message,
  TipCameraContainer,
} from './styles';
import { CreateTipMode } from './types';

interface Props {
  isFocused: boolean;
}

enum PermissionStatus {
  Checking,
  Granted,
  Blocked,
}
const VideoRecordScreen: FC<Props> = ({ isFocused }) => {
  const { formatMessage } = useIntl();

  const [permissionStatus, setPermissionStatus] = useState(
    PermissionStatus.Checking,
  );

  const incidentVideos = useSelector(makeSelectNewTipIncidentVideos());
  const shouldShowCancelTipModal = useSelector(
    makeSelectShouldShowCancelTipModal(),
  );
  const shouldShowBottomScreenAction = useSelector(
    makeSelectShouldShowBottomScreenAction(),
  );
  const userOrganizations = useSelector(makeSelectUserOrganizations());
  const shouldShowCallModal = useSelector(makeSelectShouldShowCallModal());
  const requestingOrganizations = useSelector(
    makeSelectRequestingOrganizations(),
  );
  const shouldShowTipCreatedModal = useSelector(
    makeSelectShouldShowTipCreatedModal(),
  );
  const tipCreatedData = useSelector(makeSelectTipCreatedData());
  const screenAction = useSelector(makeSelectScreenAction());
  const creatingTipWithChat = useSelector(makeSelectCreatingTipWithChat());
  const uploadingVideo = useSelector(makeSelectUploadingVideo());
  const createTipMode = useSelector(makeSelectCreateTipMode());
  const lastActiveTip = useSelector(makeSelectLastActiveTip());
  const lastTipOrganization = useSelector(makeSelectLastTipOrganization());
  const shouldShowFastAccessModal = useSelector(
    makeSelectShouldShowFastAccessModal(),
  );

  const uploadVideoRequestAction = useAction(uploadVideoRequest);
  const addNewTipScreenAction = useAction(addScreenAction);
  const getUserOrganizationsAction = useAction(getUserOrganizationsRequest);
  const showCancelIncidentModalAction = useAction(showCancelIncidentModal);
  const showCallModalAction = useAction(showCallModal);
  const hideModalAction = useAction(hideCallModal);
  const getIntersectOrganizationsRequestAction = useAction(
    getIntersectOrganizationsRequest,
  );
  const hideTipCreatedModalAction = useAction(hideTipCreatedModal);
  const createTipWithChatAction = useAction(createTipWithChatRequest);
  const getTipsRequestAction = useAction(getTipsRequest);
  const resetStateAction = useAction(resetState);
  const getLastActiveTipOrganizationAction = useAction(
    getLastActiveTipOrganization,
  );
  const hideFastAccessModalAction = useAction(hideFastAccessModal);
  const showFastAccessModalAction = useAction(showFastAccessModal);

  const cameraRef = useRef<RNCamera>(null);

  useEffect(() => {
    //("New Tip screen")
    if (shouldShowBottomScreenAction) {
      hideFastAccessModalAction();
      addNewTipScreenAction({
        actionText: formatMessage(messages.continue),
        cancel: showCancelIncidentModalAction,
        action: getIntersectOrganizationsRequestAction,
        loading: requestingOrganizations,
      });
    }
  }, [
    hideFastAccessModalAction,
    requestingOrganizations,
    shouldShowBottomScreenAction,
  ]);

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
    if (isFocused) {
      tryRequestCameraPermissions();
      getUserOrganizationsAction();
      resetStateAction();
      getTipsRequestAction({ tipStatus: TipStatus.Active, paging: false });
    }
  }, [isFocused]);

  useEffect(() => {
    if (lastActiveTip) {
      getLastActiveTipOrganizationAction(lastActiveTip.organization);
    }
  }, [lastActiveTip]);

  const stopCamera = useCallback(() => {
    cameraRef.current?.pausePreview();
  }, []);

  const startCamera = useCallback(() => {
    cameraRef.current?.resumePreview();
  }, []);

  const onRecordFinished = useCallback((filePath: string) => {
    uploadVideoRequestAction(filePath);
  }, []);

  const goToTipDetail = useCallback(() => {
    hideTipCreatedModalAction();
    NavigatorService.navigate(Screens.Menu.Tips.TipDetail, {
      incident: tipCreatedData.incident,
      showChat: createTipMode === CreateTipMode.Chat,
    });
  }, [tipCreatedData, createTipMode]);

  const goToLastTipDetail = useCallback(() => {
    hideFastAccessModalAction();
    NavigatorService.navigate(Screens.Menu.Tips.TipDetail, {
      incident: lastActiveTip,
    });
  }, [hideFastAccessModalAction, lastActiveTip]);

  const handleOnRecordStarted = useCallback(() => {
    hideFastAccessModalAction();
  }, [hideFastAccessModalAction]);

  const renderCamera = () => {
    if (permissionStatus === PermissionStatus.Checking) {
      return (
        <LoadingIndicator
          message={formatMessage(messages.checkingPermissions)}
        />
      );
    }
    if (permissionStatus === PermissionStatus.Granted) {
      return (
        <TipCameraContainer>
          <TipCamera
            isRecordEnabled={userOrganizations.length > 0}
            tipCameraMode={TipCameraMode.camera}
            incidentVideos={incidentVideos}
            ref={cameraRef}
            isFocused={isFocused}
            isChatDisabled={
              !!screenAction ||
              creatingTipWithChat ||
              uploadingVideo ||
              userOrganizations.length === 0
            }
            onRecordStarted={handleOnRecordStarted}
            onRecordFinished={onRecordFinished}
            onPhonePress={showCallModalAction}
            onChatPress={createTipWithChatAction}
          />
          <FastAccessModal
            onOpen={goToLastTipDetail}
            isVisible={shouldShowFastAccessModal && !!lastActiveTip}
            hideModal={hideFastAccessModalAction}
            incident={lastActiveTip}
            organization={lastTipOrganization}
          />
        </TipCameraContainer>
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
    return null;
  };

  return isFocused ? (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <SafeAreaContainer>
        {renderCamera()}
        <CancelTipModal
          onShow={stopCamera}
          onHide={startCamera}
          onPressYes={showFastAccessModalAction}
          isVisible={shouldShowCancelTipModal}
        />
        <CallModal
          onShow={stopCamera}
          onHide={startCamera}
          isVisible={shouldShowCallModal}
          hideModal={hideModalAction}
          organizations={userOrganizations}
        />
        <ScreenActionModal
          isVisible={shouldShowTipCreatedModal}
          title={formatMessage(messages.tipCreatedTitle, {
            organizationName: tipCreatedData.organizationName,
          })}
          message={
            <>
              <Message>{formatMessage(messages.tipCreatedMessage)}</Message>
              <AcknowledgmentText>
                {formatMessage(messages.acknowledgment)}
              </AcknowledgmentText>
            </>
          }
          actionText={formatMessage(messages.seeMyTip)}
          onAction={goToTipDetail}
          onHide={
            createTipMode !== CreateTipMode.Chat
              ? hideTipCreatedModalAction
              : noop
          }
        />
      </SafeAreaContainer>
    </>
  ) : null;
};

export default withNavigationFocus(VideoRecordScreen);
