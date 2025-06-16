import { images } from '../../../../assets';
import { GradientButton, PaddingView, SafeAreaContainer } from '../../../../components';
import React from 'react';
import { useIntl } from 'react-intl';
import { Image, ScrollView, StatusBar } from 'react-native';
import { useAction } from '../../../../utils/hooks';
import { allPermissionsRequest, goToNextScreen } from './actions';
import messages from './messages';
import { Background, ButtonRow, ItemIcon, ItemRow, ItemText, LogoRow, NotYetButton, TitleRow, TitleText } from './syles';
const PermissionScreen = () => {
  const {
    formatMessage
  } = useIntl();
  const allPermissionsAction = useAction(allPermissionsRequest);
  const goToNextScreenAction = useAction(goToNextScreen);
  const handleRequestAllPermissions = () => {
    allPermissionsAction(formatMessage(messages.openPermissionsConfig));
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StatusBar, {
    barStyle: "dark-content",
    backgroundColor: "white"
  }), /*#__PURE__*/React.createElement(Background, null), /*#__PURE__*/React.createElement(SafeAreaContainer, null, /*#__PURE__*/React.createElement(ScrollView, null, /*#__PURE__*/React.createElement(LogoRow, null, /*#__PURE__*/React.createElement(Image, {
    source: images.logoWithText()
  })), /*#__PURE__*/React.createElement(TitleRow, null, /*#__PURE__*/React.createElement(TitleText, null, formatMessage(messages.title))), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ItemRow, null, /*#__PURE__*/React.createElement(ItemIcon, {
    source: images.icLocation()
  }), /*#__PURE__*/React.createElement(ItemText, null, formatMessage(messages.location))), /*#__PURE__*/React.createElement(ItemRow, null, /*#__PURE__*/React.createElement(ItemIcon, {
    source: images.icCamera()
  }), /*#__PURE__*/React.createElement(ItemText, null, formatMessage(messages.camera))), /*#__PURE__*/React.createElement(ItemRow, null, /*#__PURE__*/React.createElement(ItemIcon, {
    source: images.icMicrophone()
  }), /*#__PURE__*/React.createElement(ItemText, null, formatMessage(messages.microphone))), /*#__PURE__*/React.createElement(PaddingView, {
    size: 1
  })), /*#__PURE__*/React.createElement(ButtonRow, null, /*#__PURE__*/React.createElement(NotYetButton, {
    onPress: goToNextScreenAction,
    text: formatMessage(messages.notYet)
  }), /*#__PURE__*/React.createElement(GradientButton, {
    onPress: () => handleRequestAllPermissions(),
    text: formatMessage(messages.allow)
  })))));
};
export default PermissionScreen;
//# sourceMappingURL=index.js.map