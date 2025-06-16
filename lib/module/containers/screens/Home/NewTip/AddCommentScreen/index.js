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
import { makeSelectCreatingTip, makeSelectUploadingIncidentVideo } from './selectors';
import { AcknowledgmentRow, AcknowledgmentText, ContinueScreenActionButton, InfoRow, InfoText, InputRow, InputText } from './styles';
const IncidentCommentScreen = () => {
  const {
    formatMessage
  } = useIntl();
  const [comment, setComment] = useState("");
  const organizationName = useSelector(makeSelectNewTipOrganizationName());
  const creatingTip = useSelector(makeSelectCreatingTip());
  const uploadingVideo = useSelector(makeSelectUploadingIncidentVideo());
  const createTipMode = useSelector(makeSelectCreateTipMode());
  const createTipAction = useAction(createTipRequest);
  const handleCreateTip = useCallback(() => {
    createTipAction({
      comment,
      createTipMode
    });
  }, [comment, createTipMode]);
  const showLoading = createTipMode === CreateTipMode.Chat ? creatingTip : uploadingVideo || creatingTip;
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
  }), /*#__PURE__*/React.createElement(InfoRow, null, /*#__PURE__*/React.createElement(InfoText, null, formatMessage(messages.info, {
    organizationName
  }))), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(InputRow, null, /*#__PURE__*/React.createElement(InputText, {
    value: comment,
    onChangeText: text => setComment(text),
    multiline: true,
    numberOfLines: 4,
    placeholder: formatMessage(messages.inputPlaceholder)
  })), /*#__PURE__*/React.createElement(PaddingView, {
    size: 1
  }), /*#__PURE__*/React.createElement(AcknowledgmentRow, null, /*#__PURE__*/React.createElement(AcknowledgmentText, null, formatMessage(messages.acknowledgment, {
    organizationName
  })))), /*#__PURE__*/React.createElement(ContinueScreenActionButton, {
    disabled: showLoading,
    loading: showLoading,
    onCancel: NavigatorService.back,
    onPress: handleCreateTip,
    text: formatMessage(messages.createTip),
    iconImage: images.icBack()
  }))));
};
export default IncidentCommentScreen;
//# sourceMappingURL=index.js.map