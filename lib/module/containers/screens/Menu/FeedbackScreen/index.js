import { colors } from '../../../../assets';
import { Form, GradientButton, Header, PaddingView, SafeAreaContainer, ScreenActionButtonField, ScreenActionModal } from '../../../../components';
import { LINKS } from '../../../../containers/app/constants';
import Screens from '../../../../containers/providers/RoutesProvider/screens';
import React from 'react';
import { useIntl } from 'react-intl';
import { Linking, ScrollView, StatusBar } from 'react-native';
import Toast from 'react-native-root-toast';
import { useAction, useSelector } from '../../../../utils/hooks';
import NavigatorService from '../../../../utils/navigation';
import { delay } from '../../../../utils/promise';
import { sdkConfigs } from '../../../../sdkConfigs';
import { hideSuccessModal, showSuccessModal } from './actions';
import { SEND_FEEDBACK_FAILURE, SEND_FEEDBACK_REQUEST, SEND_FEEDBACK_SUCCESS } from './constants';
import messages from './messages';
import { makeSelectIsSending, makeSelectShowSuccessModal } from './selectors';
import { EmailInput, InfoRow, InfoText, InputRow, PrivacyLinkText, PrivacyRow, PrivacyText, SendButtonRow, StyledErrorField, TextInput, TextRow } from './styles';
import FeedbackSchema from './validator';
import BackgroundGeolocation from 'react-native-background-geolocation';
import { logger } from '../../../../api';
const FeedbackScreen = () => {
  const showEmailButton = sdkConfigs.configs.sdkEnvironment !== 'PROD' ? true : false;
  const {
    formatMessage
  } = useIntl();
  const isSending = useSelector(makeSelectIsSending());
  const shouldShowModal = useSelector(makeSelectShowSuccessModal());
  const showSuccessModalAction = useAction(showSuccessModal);
  const hideSuccessModalAction = useAction(hideSuccessModal);
  const schema = FeedbackSchema(formatMessage);
  const initialValues = {
    email: '',
    comment: ''
  };
  const openFaq = () => Linking.openURL(LINKS.faq);
  const openTos = () => Linking.openURL(LINKS.tos);
  const openPrivacy = () => Linking.openURL(LINKS.privacy);
  const openQuickStartGuide = () => NavigatorService.navigate(Screens.Menu.Feedback.QuickStartGuide, {
    fromFeedback: true
  });
  const goBack = async () => {
    hideSuccessModalAction();
    await delay(300);
    NavigatorService.back();
  };
  const sendLocationLogs = () => {
    BackgroundGeolocation.logger.emailLog(sdkConfigs.configs.email).then(() => {}, err => {
      logger.error('Email Location Logs Error', 'emailLog Error: ' + (err === null || err === void 0 ? void 0 : err.message), err);
    });
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StatusBar, {
    barStyle: "dark-content",
    backgroundColor: "white"
  }), /*#__PURE__*/React.createElement(SafeAreaContainer, null, /*#__PURE__*/React.createElement(ScrollView, {
    contentContainerStyle: {
      flex: 1
    },
    keyboardShouldPersistTaps: "always",
    keyboardDismissMode: "on-drag"
  }, /*#__PURE__*/React.createElement(Header, {
    title: formatMessage(messages.title)
  }), /*#__PURE__*/React.createElement(InfoRow, null, /*#__PURE__*/React.createElement(InfoText, null, formatMessage(messages.info))), /*#__PURE__*/React.createElement(Form, {
    start: SEND_FEEDBACK_REQUEST,
    resolve: SEND_FEEDBACK_SUCCESS,
    reject: SEND_FEEDBACK_FAILURE,
    initialValues: initialValues,
    validationSchema: schema,
    onResolve: showSuccessModalAction,
    onReject: action => Toast.show(action.payload.message, {
      position: Toast.positions.BOTTOM
    })
  }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(InputRow, null, /*#__PURE__*/React.createElement(EmailInput, {
    name: "email",
    autoCapitalize: "none",
    keyboardType: "email-address",
    textContentType: "emailAddress",
    placeholder: formatMessage(messages.emailInput)
  })), /*#__PURE__*/React.createElement(StyledErrorField, {
    name: "email"
  }), /*#__PURE__*/React.createElement(TextRow, null, /*#__PURE__*/React.createElement(TextInput, {
    name: "comment",
    autoCompleteType: "off",
    textContentType: "none",
    multiline: true,
    numberOfLines: 4,
    placeholder: formatMessage(messages.commentInput)
  })), /*#__PURE__*/React.createElement(StyledErrorField, {
    name: "comment"
  }), /*#__PURE__*/React.createElement(PaddingView, {
    size: 1
  })), /*#__PURE__*/React.createElement(PrivacyRow, null, /*#__PURE__*/React.createElement(PrivacyText, null, formatMessage(messages.guideDescription, {
    guideText: /*#__PURE__*/React.createElement(PrivacyLinkText, {
      key: "0",
      onPress: openQuickStartGuide
    }, formatMessage(messages.guideText)),
    faq: /*#__PURE__*/React.createElement(PrivacyLinkText, {
      key: "1",
      onPress: openFaq
    }, formatMessage(messages.faq)),
    privacy: /*#__PURE__*/React.createElement(PrivacyLinkText, {
      key: "2",
      onPress: openPrivacy
    }, formatMessage(messages.privacy)),
    tos: /*#__PURE__*/React.createElement(PrivacyLinkText, {
      key: "3",
      onPress: openTos
    }, formatMessage(messages.tos))
  }))), showEmailButton && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(InfoRow, null, /*#__PURE__*/React.createElement(InfoText, null, formatMessage(messages.locationLogDesc))), /*#__PURE__*/React.createElement(SendButtonRow, null, /*#__PURE__*/React.createElement(GradientButton, {
    text: formatMessage(messages.locationLogButton),
    onPress: sendLocationLogs
  }))), /*#__PURE__*/React.createElement(SendButtonRow, null, /*#__PURE__*/React.createElement(ScreenActionButtonField, {
    disabled: isSending,
    loading: isSending,
    text: formatMessage(messages.send),
    onCancel: NavigatorService.back,
    tintColor: colors.white
  }))), /*#__PURE__*/React.createElement(ScreenActionModal, {
    isVisible: shouldShowModal,
    actionText: formatMessage(messages.ok),
    title: formatMessage(messages.feedbackSentTitle),
    message: formatMessage(messages.feedbackSentDescription),
    onAction: goBack,
    onHide: goBack
  }))));
};
export default FeedbackScreen;
//# sourceMappingURL=index.js.map