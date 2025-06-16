/* eslint-disable no-param-reassign */
import { images } from '../../assets';
import { makeSelectGiftedChatUser } from '../../containers/app/selectors';
import { Organization } from 'incident-code-core';
import forEach from 'lodash/forEach';
import React, { FC, memo, useCallback, useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { View } from 'react-native';
import {
  GiftedChat,
  IMessage as GiftedChatMessage,
} from 'react-native-gifted-chat';
import Modal from 'react-native-modal';
import { useSelector } from '../../utils/hooks';
import styled from '../../utils/styled';
import uuid from 'uuid/v4';

import IconButton from '../IconButton';
import chatMessage from './messages';

type Props = {
  isVisible: boolean;
  hideModal(): void;
  onShow?(): void;
  onHide?(): void;
  organization: Organization;
  messages: GiftedChatMessage[];
  onMessageSent(message: GiftedChatMessage[]): void;
  isReadMode?: boolean;
};

const ChatModal: FC<Props> = ({
  isVisible,
  hideModal,
  onShow,
  onHide,
  messages,
  onMessageSent,
  isReadMode,
}) => {
  const { formatMessage } = useIntl();
  const user = useSelector(makeSelectGiftedChatUser());

  const [messagesWithPending, setMessagesWithPending] = useState(messages);

  useEffect(() => {
    setMessagesWithPending(messages);
  }, [messages]);

  const handleSendMessage = useCallback(
    (messagesToSent: GiftedChatMessage[]) => {
      forEach(messagesToSent, message => {
        message.pending = true;
      });

      setMessagesWithPending(prevState =>
        GiftedChat.append(prevState, messagesToSent),
      );

      onMessageSent(messagesToSent);
    },
    [],
  );
  const getGiftedChatMessage = useCallback(
    (text: string): GiftedChatMessage[] => [
      {
        _id: uuid(),
        text,
        createdAt: new Date(),
        user,
      },
    ],
    [],
  );
  const emptyInput = () => <View />;
  return (
    <Modal
      useNativeDriver={true}
      animationIn="slideInUp"
      animationOut="slideOutDown"
      isVisible={isVisible}
      onBackButtonPress={hideModal}
      onBackdropPress={hideModal}
      onModalWillShow={onShow}
      onModalWillHide={onHide}
      style={{ margin: 0, justifyContent: 'flex-end' }}
    >
      <Container>
        <CloseButton source={images.icClose()} onPress={hideModal} />
        <Content>
          <GiftedChat
            user={user}
            messages={messagesWithPending}
            onSend={handleSendMessage}
            renderChatFooter={() => (
              <ChatFooter>
                <TagContainer
                  onPress={() =>
                    handleSendMessage(
                      getGiftedChatMessage(
                        formatMessage(chatMessage.iNeedHelp),
                      ),
                    )
                  }
                >
                  <Tag>{formatMessage(chatMessage.iNeedHelp)}</Tag>
                </TagContainer>
                <TagContainer
                  onPress={() =>
                    handleSendMessage(
                      getGiftedChatMessage(
                        formatMessage(chatMessage.someoneSuspicious),
                      ),
                    )
                  }
                >
                  <Tag>{formatMessage(chatMessage.someoneSuspicious)}</Tag>
                </TagContainer>
              </ChatFooter>
            )}
            renderInputToolbar={isReadMode ? emptyInput : undefined}
          />
        </Content>
      </Container>
    </Modal>
  );
};

const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.white};
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

const CloseButton = styled(IconButton as any)`
  width: 44px;
  height: 44px;
  border-radius: 22px;
  background-color: ${({ theme }) => theme.colors.white};
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
  border: 0.5px solid ${({ theme }) => theme.colors.dark};
  justify-content: center;
  align-items: center;
  margin-left: 3px;
  margin-right: 3px;
  padding: 5px 10px;
  border-radius: 3px;
`;

const Tag = styled.Text`
  font-family: ${({ theme }) => theme.fonts.defaultFamily};
  font-size: ${({ theme }) => theme.fonts.normalSize};
  color: ${({ theme }) => theme.colors.dark};
  font-weight: 100;
`;

export default memo(ChatModal);
