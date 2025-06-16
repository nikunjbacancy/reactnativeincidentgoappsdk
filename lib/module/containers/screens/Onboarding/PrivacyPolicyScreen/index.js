import { images } from '../../../../assets';
import React, { useCallback } from 'react';
import { LINKS } from '../../../../containers/app/constants';
import { MainView, BackButtonCol, BackButtonView, WebViewStyle } from './styles';
import { IconButton } from '../../../../components';
import { WebView } from 'react-native-webview';
const PrivacyPolicyScreen = ({
  navigation: {
    goBack
  }
}) => {
  const goBackToSignIn = useCallback(() => goBack(), []);
  return /*#__PURE__*/React.createElement(MainView, null, /*#__PURE__*/React.createElement(BackButtonView, null, /*#__PURE__*/React.createElement(BackButtonCol, null, /*#__PURE__*/React.createElement(IconButton, {
    source: images.icBackDark(),
    onPress: goBackToSignIn
  }))), /*#__PURE__*/React.createElement(WebViewStyle, null, /*#__PURE__*/React.createElement(WebView, {
    source: {
      uri: LINKS.privacy
    }
  })));
};
export default PrivacyPolicyScreen;
//# sourceMappingURL=index.js.map