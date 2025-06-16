import { images } from '../../assets';
import isString from 'lodash/isString';
import React from 'react';
import Modal from 'react-native-modal';
import styled from '../../utils/styled';
import { ScrollView } from 'react-native';
import GradientButton from '../GradientButton';
export let ScreenActionModalType = /*#__PURE__*/function (ScreenActionModalType) {
  ScreenActionModalType["Success"] = "Success";
  ScreenActionModalType["Error"] = "Error";
  return ScreenActionModalType;
}({});
const PanicActionModal = ({
  type = ScreenActionModalType.Success,
  isVisible,
  title,
  message,
  actionPositiveText,
  actionNagetiveText,
  onAction,
  onHide,
  showIcon = true
}) => {
  const icon = type === ScreenActionModalType.Success ? images.welcomeMap() : images.icError();
  return /*#__PURE__*/React.createElement(Modal, {
    useNativeDriver: true,
    animationIn: "zoomIn",
    animationOut: "zoomOut",
    isVisible: isVisible,
    onBackButtonPress: onHide,
    onBackdropPress: onHide,
    style: {
      paddingVertical: 50
    }
  }, showIcon ? /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Title, null, title), /*#__PURE__*/React.createElement(SuccessIcon, {
    source: icon
  }), /*#__PURE__*/React.createElement(MessageRow, null, isString(message) ? /*#__PURE__*/React.createElement(Message, null, message) : /*#__PURE__*/React.createElement(React.Fragment, null, message)), /*#__PURE__*/React.createElement(ActionButton, {
    text: actionPositiveText,
    onPress: onAction
  }), /*#__PURE__*/React.createElement(ActionNegativeButton, {
    text: actionNagetiveText,
    onPress: onHide
  })) : /*#__PURE__*/React.createElement(DetailContainer, null, /*#__PURE__*/React.createElement(Title, null, title), /*#__PURE__*/React.createElement(ScrollView, null, /*#__PURE__*/React.createElement(TextBody, null, message))));
};
const Container = styled.View`
  align-items: center;
  border-radius: 20px;
  background-color: ${({
  theme
}) => theme.colors.white};
  padding: 0 30px;
`;
const DetailContainer = styled.SafeAreaView`
  align-items: center;
  border-radius: 20px;
  background-color: ${({
  theme
}) => theme.colors.white};
  padding: 30px 30px;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const SuccessIcon = styled.Image`
  margin-top: 0px;
  margin-bottom: 10px;
`;
const Title = styled.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultBoldFamily};
  font-size: ${({
  theme
}) => theme.fonts.titleSize};
  color: ${({
  theme
}) => theme.colors.dark};
  margin: 20px 0;
  margin-bottom: 10px;
  text-align: center;
`;
const MessageRow = styled.View`
  
`;
const Message = styled.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultBoldFamily};
  font-size: 16px;
  color: ${({
  theme
}) => theme.colors.dark};
  text-align: center;
`;
const TextBody = styled.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultBoldFamily};
  font-size: 16px;
  color: ${({
  theme
}) => theme.colors.dark};
  text-align: center;
  padding: 10px 10px;
  padding-top:0;
`;
const ActionButton = styled(GradientButton)`
  margin: 10px auto 10px;
  width: 300px;  
`;
const ActionNegativeButton = styled(GradientButton)`
  margin: 10px auto 10px;
  width: 300px;  
  margin-bottom: 20px;
`;
export default PanicActionModal;
//# sourceMappingURL=index.js.map