import { images } from '../../../../../../assets';
import { GradientButton } from '../../../../../../components';
import React, { memo, useCallback, useState } from 'react';
import { useIntl } from 'react-intl';
import { Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import styled from '../../../../../../utils/styled';
import messages from '../messages';
const deviceHeight = Dimensions.get('window').height;
const SafeModal = ({
  isVisible,
  hideModal,
  onContinue,
  requestingImSafe
}) => {
  const {
    formatMessage
  } = useIntl();
  const [comment, setComment] = useState('');
  const handleContinue = useCallback(() => {
    onContinue(comment);
    setComment('');
  }, [comment, setComment]);
  return /*#__PURE__*/React.createElement(Modal, {
    useNativeDriver: true,
    animationIn: "zoomIn",
    animationOut: "zoomOut",
    isVisible: isVisible,
    onBackButtonPress: hideModal,
    onBackdropPress: hideModal,
    avoidKeyboard: true
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(CheckIcon, {
    source: images.icSuccess()
  }), /*#__PURE__*/React.createElement(Title, null, formatMessage(messages.safeModalTitle)), /*#__PURE__*/React.createElement(MessageRow, null, /*#__PURE__*/React.createElement(Message, null, formatMessage(messages.safeModalInfo))), /*#__PURE__*/React.createElement(InputRow, null, /*#__PURE__*/React.createElement(InputText, {
    value: comment,
    onChangeText: setComment,
    placeholder: formatMessage(messages.safeModalCommentPlaceholder)
  })), /*#__PURE__*/React.createElement(ButtonContainer, null, /*#__PURE__*/React.createElement(CancelButton, {
    onPress: hideModal,
    text: formatMessage(messages.safeModalCancel)
  }), /*#__PURE__*/React.createElement(ContinueButton, {
    onPress: handleContinue,
    text: formatMessage(messages.safeModalContinue),
    loading: requestingImSafe
  }))));
};
const Container = styled.View`
  align-items: center;
  border-radius: 20px;
  height: ${deviceHeight < 768 ? 360 : 430}px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  background-color: ${({
  theme
}) => theme.colors.white};
`;
const CheckIcon = styled.Image`
  margin-top: ${deviceHeight < 768 ? 20 : 30}px;
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
  margin: ${deviceHeight < 768 ? 10 : 20}px 0;
  text-align: center;
`;
const MessageRow = styled.View`
  flex: 1;
  padding: 0 30px;
`;
const Message = styled.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultFamily};
  font-size: 16px;
  color: ${({
  theme
}) => theme.colors.dark};
  text-align: center;
`;
const InputRow = styled.View`
  margin: ${deviceHeight < 768 ? 10 : 15}px 30px;
  background: ${({
  theme
}) => theme.colors.nearWhite};
  border-radius: 6px;
  height: ${deviceHeight < 768 ? 40 : 60}px;
  padding: 8px 0;
  align-self: stretch;
`;
const InputText = styled.TextInput.attrs(({
  theme
}) => ({
  placeholderTextColor: theme.colors.lighter,
  textAlignVertical: 'top'
}))`
  color: ${({
  theme
}) => theme.colors.dark};
  flex-grow: 1;
  padding: 0 15px;
  font-size: 15px;
`;
const ButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: auto;
  border-top-width: 1px;
  border-top-color: ${({
  theme
}) => theme.colors.nearWhite};
`;
const CancelButton = styled(GradientButton).attrs(({
  theme
}) => ({
  textStyle: {
    color: theme.colors.dark,
    textTransform: 'uppercase',
    fontSize: 18
  }
}))`
  flex: 0.5;
  height: ${deviceHeight < 768 ? 50 : 60}px;
  background-color: ${({
  theme
}) => theme.colors.white};
  border-radius: 0;
  border-bottom-left-radius: 20px;
`;
const ContinueButton = styled(GradientButton).attrs(({
  theme
}) => ({
  textStyle: {
    color: theme.colors.highlight,
    textTransform: 'uppercase',
    fontSize: 18
  }
}))`
  flex: 0.5;
  height: ${deviceHeight < 768 ? 50 : 60}px;
  background-color: ${({
  theme
}) => theme.colors.white};
  border-radius: 0;
  border-bottom-right-radius: 20px;
  border-left-width: 1px;
  border-left-color: ${({
  theme
}) => theme.colors.nearWhite};
`;
export default /*#__PURE__*/memo(SafeModal);
//# sourceMappingURL=index.js.map