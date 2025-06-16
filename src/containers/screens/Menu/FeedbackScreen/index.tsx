import { colors } from '../../../../assets';
import {
  Form,
  GradientButton,
  Header,
  PaddingView,
  SafeAreaContainer,
  ScreenActionButtonField,
  ScreenActionModal,
} from '../../../../components';
import { LINKS } from '../../../../containers/app/constants';
import Screens from '../../../../containers/providers/RoutesProvider/screens';
import React, { FC } from 'react';
import { useIntl } from 'react-intl';
import { Linking, ScrollView, StatusBar } from 'react-native';
import Toast from 'react-native-root-toast';
import { ScreenProps } from 'react-native-screens';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { useAction, useSelector } from '../../../../utils/hooks';
import NavigatorService from '../../../../utils/navigation';
import { delay } from '../../../../utils/promise';
import { sdkConfigs } from '../../../../sdkConfigs'
import { hideSuccessModal, showSuccessModal } from './actions';
import {
  SEND_FEEDBACK_FAILURE,
  SEND_FEEDBACK_REQUEST,
  SEND_FEEDBACK_SUCCESS,
} from './constants';
import messages from './messages';
import { makeSelectIsSending, makeSelectShowSuccessModal } from './selectors';
import {
  EmailInput,
  InfoRow,
  InfoText,
  InputRow,
  PrivacyLinkText,
  PrivacyRow,
  PrivacyText,
  SendButtonRow,
  StyledErrorField,
  TextInput,
  TextRow,
} from './styles';
import FeedbackSchema from './validator';
import BackgroundGeolocation from 'react-native-background-geolocation';
import { logger } from '../../../../api';

interface Params {}
interface Props extends NavigationStackScreenProps<Params, ScreenProps> {}

const FeedbackScreen: FC<Props> = () => {
  const showEmailButton = sdkConfigs.configs.sdkEnvironment !== 'PROD' ? true : false;
  const { formatMessage } = useIntl();

  const isSending = useSelector(makeSelectIsSending());
  const shouldShowModal = useSelector(makeSelectShowSuccessModal());

  const showSuccessModalAction = useAction(showSuccessModal);
  const hideSuccessModalAction = useAction(hideSuccessModal);

  const schema = FeedbackSchema(formatMessage);
  const initialValues = {
    email: '',
    comment: '',
  };

  const openFaq = () => Linking.openURL(LINKS.faq);
  const openTos = () => Linking.openURL(LINKS.tos);
  const openPrivacy = () => Linking.openURL(LINKS.privacy);
  const openQuickStartGuide = () =>
    NavigatorService.navigate(Screens.Menu.Feedback.QuickStartGuide, {
      fromFeedback: true,
    });
  const goBack = async () => {
    hideSuccessModalAction();
    await delay(300);
    NavigatorService.back();
  };

  const sendLocationLogs = () => {
    BackgroundGeolocation.logger.emailLog(sdkConfigs.configs.email).then(
      () => {},
      err => {
        logger.error(
          'Email Location Logs Error',
          'emailLog Error: ' + err?.message,
          err,
        );
      },
    );
  };

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
            <InfoText>{formatMessage(messages.info)}</InfoText>
          </InfoRow>
          <Form
            start={SEND_FEEDBACK_REQUEST}
            resolve={SEND_FEEDBACK_SUCCESS}
            reject={SEND_FEEDBACK_FAILURE}
            initialValues={initialValues}
            validationSchema={schema}
            onResolve={showSuccessModalAction}
            onReject={action =>
              Toast.show(action.payload.message, {
                position: Toast.positions.BOTTOM,
              })
            }
          >
            <>
              <InputRow>
                <EmailInput
                  name="email"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  textContentType="emailAddress"
                  placeholder={formatMessage(messages.emailInput)}
                />
              </InputRow>
              <StyledErrorField name="email" />
              <TextRow>
                <TextInput
                  name="comment"
                  autoCompleteType="off"
                  textContentType="none"
                  multiline
                  numberOfLines={4}
                  placeholder={formatMessage(messages.commentInput)}
                />
              </TextRow>
              <StyledErrorField name="comment" />
              <PaddingView size={1} />
            </>
            <PrivacyRow>
              <PrivacyText>
                {formatMessage(messages.guideDescription, {
                  guideText: (
                    <PrivacyLinkText key="0" onPress={openQuickStartGuide}>
                      {formatMessage(messages.guideText)}
                    </PrivacyLinkText>
                  ),
                  faq: (
                    <PrivacyLinkText key="1" onPress={openFaq}>
                      {formatMessage(messages.faq)}
                    </PrivacyLinkText>
                  ),
                  privacy: (
                    <PrivacyLinkText key="2" onPress={openPrivacy}>
                      {formatMessage(messages.privacy)}
                    </PrivacyLinkText>
                  ),
                  tos: (
                    <PrivacyLinkText key="3" onPress={openTos}>
                      {formatMessage(messages.tos)}
                    </PrivacyLinkText>
                  ),
                })}
              </PrivacyText>
            </PrivacyRow>
            {showEmailButton && (
              <>
                <InfoRow>
                  <InfoText>{formatMessage(messages.locationLogDesc)}</InfoText>
                </InfoRow>
                <SendButtonRow>
                  <GradientButton
                    text={formatMessage(messages.locationLogButton)}
                    onPress={sendLocationLogs}
                  />
                </SendButtonRow>
              </>
            )}
            <SendButtonRow>
              <ScreenActionButtonField
                disabled={isSending}
                loading={isSending}
                text={formatMessage(messages.send)}
                onCancel={NavigatorService.back}
                tintColor={colors.white}
              />
            </SendButtonRow>
          </Form>
          <ScreenActionModal
            isVisible={shouldShowModal}
            actionText={formatMessage(messages.ok)}
            title={formatMessage(messages.feedbackSentTitle)}
            message={formatMessage(messages.feedbackSentDescription)}
            onAction={goBack}
            onHide={goBack}
          />
        </ScrollView>
      </SafeAreaContainer>
    </>
  );
};

export default FeedbackScreen;
