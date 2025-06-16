import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { isIos } from '../../utils/device';
import styled from '../../utils/styled';
const SafeAreaContainer = ({
  style,
  keyboardStyle,
  children
}) => /*#__PURE__*/React.createElement(SafeAreaView, {
  style: style
}, isIos ? /*#__PURE__*/React.createElement(KeyboardFixView, {
  style: keyboardStyle,
  behavior: "padding"
}, children) : /*#__PURE__*/React.createElement(React.Fragment, null, children));
const KeyboardFixView = styled(KeyboardAvoidingView)`
  flex: 1;
`;
export default styled(SafeAreaContainer)`
  flex: 1;
  background: ${({
  theme
}) => theme.sdkBackgroundColor};
`;
//# sourceMappingURL=index.js.map