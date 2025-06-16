/* eslint-disable no-param-reassign */
import { images } from '../../assets';
import { makeSelectGiftedChatUser } from '../../containers/app/selectors';
import forEach from 'lodash/forEach';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import Modal from 'react-native-modal';
import { useSelector } from '../../utils/hooks';
import styled from '../../utils/styled';
import uuid from 'uuid/v4';
import IconButton from '../IconButton';
import chatMessage from './messages';
const ChatModal = ({
  isVisible,
  hideModal,
  onShow,
  onHide,
  messages,
  onMessageSent,
  isReadMode
}) => {
  const {
    formatMessage
  } = useIntl();
  const user = useSelector(makeSelectGiftedChatUser());
  const [messagesWithPending, setMessagesWithPending] = useState(messages);
  useEffect(() => {
    setMessagesWithPending(messages);
  }, [messages]);
  const handleSendMessage = useCallback(messagesToSent => {
    forEach(messagesToSent, message => {
      message.pending = true;
    });
    setMessagesWithPending(prevState => GiftedChat.append(prevState, messagesToSent));
    onMessageSent(messagesToSent);
  }, []);
  const getGiftedChatMessage = useCallback(text => [{
    _id: uuid(),
    text,
    createdAt: new Date(),
    user
  }], []);
  const emptyInput = () => /*#__PURE__*/React.createElement(View, null);
  return /*#__PURE__*/React.createElement(Modal, {
    useNativeDriver: true,
    animationIn: "slideInUp",
    animationOut: "slideOutDown",
    isVisible: isVisible,
    onBackButtonPress: hideModal,
    onBackdropPress: hideModal,
    onModalWillShow: onShow,
    onModalWillHide: onHide,
    style: {
      margin: 0,
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(CloseButton, {
    source: images.icClose(),
    onPress: hideModal
  }), /*#__PURE__*/React.createElement(Content, null, /*#__PURE__*/React.createElement(GiftedChat, {
    user: user,
    messages: messagesWithPending,
    onSend: handleSendMessage,
    renderChatFooter: () => /*#__PURE__*/React.createElement(ChatFooter, null, /*#__PURE__*/React.createElement(TagContainer, {
      onPress: () => handleSendMessage(getGiftedChatMessage(formatMessage(chatMessage.iNeedHelp)))
    }, /*#__PURE__*/React.createElement(Tag, null, formatMessage(chatMessage.iNeedHelp))), /*#__PURE__*/React.createElement(TagContainer, {
      onPress: () => handleSendMessage(getGiftedChatMessage(formatMessage(chatMessage.someoneSuspicious)))
    }, /*#__PURE__*/React.createElement(Tag, null, formatMessage(chatMessage.someoneSuspicious)))),
    renderInputToolbar: isReadMode ? emptyInput : undefined
  }))));
};
const Container = styled.View`
  background-color: ${({
  theme
}) => theme.colors.white};
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  height: 80%;
  width: 100%;
  display: flex;
  position: relative;
`;
const Content = styled.View`
  flex: 1;
  padding: 15px 15px 25px;
`;
const CloseButton = styled(IconButton)`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background-color: ${({
  theme
}) => theme.colors.white};
  position: absolute;
  top: -60px;
  right: 20px;
`;
const ChatFooter = styled.View`
  height: 44px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;
const TagContainer = styled.TouchableOpacity`
  border: 0.5px solid ${({
  theme
}) => theme.colors.dark};
  justify-content: center;
  align-items: center;
  margin-left: 3px;
  margin-right: 3px;
  padding: 5px 10px;
  border-radius: 3px;
`;
const Tag = styled.Text`
  font-family: ${({
  theme
}) => theme.fonts.defaultFamily};
  font-size: ${({
  theme
}) => theme.fonts.normalSize};
  color: ${({
  theme
}) => theme.colors.dark};
  font-weight: 100;
`;
export default /*#__PURE__*/memo(ChatModal);
//# sourceMappingURL=index.js.map