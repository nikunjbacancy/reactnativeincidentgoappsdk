import { images } from '../../../../assets';
import { GradientButton, IconButton, ImageUpload, SafeAreaContainer } from '../../../../components';
import Screens from '../../../../containers/providers/RoutesProvider/screens';
import { makeSelectSelectedIsUpdating } from '../../../../containers/screens/Menu/MyAccountScreen/selectors';
import React, { useCallback } from 'react';
import { useIntl } from 'react-intl';
import { Image, ScrollView, StatusBar } from 'react-native';
import { useAction, useSelector } from '../../../../utils/hooks';
import { updatePortraitRequest } from './actions';
import { makeSelectUser } from '../../../../containers/app/selectors';
import messages from './messages';
import { makeSelectUploadMessageType } from './selectors';
import { BackButtonCol, Background, ContinueButtonRow, InfoRow, InfoText, LogoRow, OptionalText, TitleRow, TitleText } from './styles';
const AddUserPortraitScreen = ({
  navigation: {
    goBack,
    replace
  }
}) => {
  const {
    formatMessage
  } = useIntl();
  const savePortrait = useAction(updatePortraitRequest);
  const isUpdating = useSelector(makeSelectSelectedIsUpdating());
  const uploadMessageType = useSelector(makeSelectUploadMessageType());
  const {
    portraitUrl
  } = useSelector(makeSelectUser());
  const goBackToSignIn = useCallback(() => goBack(), []);
  const goToPermissions = () => replace(Screens.Onboarding.Permission);
  //("portraitUrl=>",portraitUrl)
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StatusBar, {
    barStyle: "dark-content",
    backgroundColor: "white"
  }), /*#__PURE__*/React.createElement(Background, null), /*#__PURE__*/React.createElement(SafeAreaContainer, null, /*#__PURE__*/React.createElement(ScrollView, {
    contentContainerStyle: {
      flex: 1
    },
    keyboardShouldPersistTaps: "always",
    keyboardDismissMode: "on-drag"
  }, /*#__PURE__*/React.createElement(LogoRow, null, /*#__PURE__*/React.createElement(BackButtonCol, null, /*#__PURE__*/React.createElement(IconButton, {
    source: images.icBackDark(),
    onPress: goBackToSignIn
  })), /*#__PURE__*/React.createElement(Image, {
    source: images.logoWithText()
  })), /*#__PURE__*/React.createElement(TitleRow, null, /*#__PURE__*/React.createElement(TitleText, null, formatMessage(messages.title))), /*#__PURE__*/React.createElement(InfoRow, null, /*#__PURE__*/React.createElement(InfoText, null, formatMessage(messages.info, {
    optional: /*#__PURE__*/React.createElement(OptionalText, {
      key: "1"
    }, formatMessage(messages.optional))
  }))), /*#__PURE__*/React.createElement(ImageUpload, {
    portraitUrl: portraitUrl,
    onUpload: savePortrait,
    actionInfoType: uploadMessageType
  }), /*#__PURE__*/React.createElement(ContinueButtonRow, null, /*#__PURE__*/React.createElement(GradientButton, {
    disabled: isUpdating,
    text: formatMessage(messages.next),
    onPress: goToPermissions
  })))));
};
export default AddUserPortraitScreen;
//# sourceMappingURL=index.js.map