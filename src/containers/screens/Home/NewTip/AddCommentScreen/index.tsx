import { images } from '../../../../../assets';
import { Header, PaddingView, SafeAreaContainer } from '../../../../../components';
import { makeSelectNewTipOrganizationName } from '../../../../../containers/app/selectors';
import React, { useCallback, useState } from 'react';
import { useIntl } from 'react-intl';
import { ScrollView, StatusBar } from 'react-native';
import { useAction, useSelector } from '../../../../../utils/hooks';
import NavigatorService from '../../../../../utils/navigation';

import { makeSelectCreateTipMode } from '../VideoRecordScreen/selectors';
import { CreateTipMode } from '../VideoRecordScreen/types';
import { createTipRequest } from './actions';
import messages from './messages';
import {
  makeSelectCreatingTip,
  makeSelectUploadingIncidentVideo,
} from './selectors';
import {
  AcknowledgmentRow,
  AcknowledgmentText,
  ContinueScreenActionButton,
  InfoRow,
  InfoText,
  InputRow,
  InputText,
} from './styles';

const IncidentCommentScreen = () => {
  const { formatMessage } = useIntl();

  const [comment, setComment] = useState("");

  const organizationName = useSelector(makeSelectNewTipOrganizationName());
  const creatingTip = useSelector(makeSelectCreatingTip());
  const uploadingVideo = useSelector(makeSelectUploadingIncidentVideo());
  const createTipMode = useSelector(makeSelectCreateTipMode());

  const createTipAction = useAction(createTipRequest);

  const handleCreateTip = useCallback(() => {
    createTipAction({ comment, createTipMode });
  }, [comment, createTipMode]);

  const showLoading =
    createTipMode === CreateTipMode.Chat
      ? creatingTip
      : uploadingVideo || creatingTip;

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <SafeAreaContainer>
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          keyboardShouldPersistTaps="always"
          keyboardDismissMode="on-drag"
        >
          <Header title={formatMessage(messages.title)} />
          <InfoRow>
            <InfoText>
              {formatMessage(messages.info, { organizationName })}
            </InfoText>
          </InfoRow>
          <>
            <InputRow>
              <InputText
                value={comment}
                onChangeText={(text: string) => setComment(text)}
                multiline
                numberOfLines={4}
                placeholder={formatMessage(messages.inputPlaceholder)}
              />
            </InputRow>
            <PaddingView size={1} />
            <AcknowledgmentRow>
              <AcknowledgmentText>
                {formatMessage(messages.acknowledgment, { organizationName })}
              </AcknowledgmentText>
            </AcknowledgmentRow>
          </>
          <ContinueScreenActionButton
            disabled={showLoading}
            loading={showLoading}
            onCancel={NavigatorService.back}
            onPress={handleCreateTip}
            text={formatMessage(messages.createTip)}
            iconImage={images.icBack()}
          />
        </ScrollView>
      </SafeAreaContainer>
    </>
  );
};

export default IncidentCommentScreen;
