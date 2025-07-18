import { GradientButton } from '../../../../../../components';
import toLower from 'lodash/toLower';
import React, { FC, memo, useCallback, useState } from 'react';
import { useIntl } from 'react-intl';
import { Dimensions } from 'react-native';
import Modal from 'react-native-modal';
import styled from '../../../../../../utils/styled';

import messages from '../messages';

const deviceHeight = Dimensions.get('window').height;

interface Props {
  isVisible: boolean;
  hideModal(): void;
  onConfirm(comment?: string): void;
}

const ExitPanicModal: FC<Props> = ({ isVisible, hideModal, onConfirm }) => {
  const { formatMessage } = useIntl();
  const [comment, setComment] = useState('');
  const [error, setError] = useState(false);
  const handleContinue = useCallback(() => {
    if (toLower(comment) === 'exit') {
      onConfirm(comment);
      setComment('');
      setError(false);
      hideModal();
    } else {
      setError(true);
    }
  }, [comment, setComment, setError]);
  return (
    <Modal
      useNativeDriver={true}
      animationIn="zoomIn"
      animationOut="zoomOut"
      isVisible={isVisible}
      onBackButtonPress={hideModal}
      onBackdropPress={hideModal}
      avoidKeyboard
    >
      <Container>
        <Title>{formatMessage(messages.exitPanicModalTitle)}</Title>
        <MessageRow>
          <Message>{formatMessage(messages.exitPanicModalInfo)}</Message>
        </MessageRow>
        <InputRow>
          <InputText
            value={comment}
            onChangeText={setComment}
            placeholder={formatMessage(messages.exitPanicModalPlaceholder)}
          />
        </InputRow>
        {error && (
          <ErrorText>
            {formatMessage(messages.exitPanicModalInputValidation)}
          </ErrorText>
        )}
        <ButtonContainer>
          <CancelButton
            onPress={hideModal}
            text={formatMessage(messages.exitPanicModalCancel)}
          />
          <ConfirmButton
            onPress={handleContinue}
            text={formatMessage(messages.exitPanicModalConfirm)}
          />
        </ButtonContainer>
      </Container>
    </Modal>
  );
};

const Container = styled.View`
  align-items: center;
  border-radius: 20px;
  height: ${deviceHeight < 768 ? 210 : 270}px;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.defaultBoldFamily};
  font-size: ${({ theme }) => theme.fonts.titleSize};
  color: ${({ theme }) => theme.colors.dark};
  margin: ${deviceHeight < 768 ? 10 : 20}px 0;
  text-align: center;
`;

const MessageRow = styled.View`
  flex: 1;
  padding: 0 30px;
`;

const Message = styled.Text`
  font-family: ${({ theme }) => theme.fonts.defaultFamily};
  font-size: 16px;
  color: ${({ theme }) => theme.colors.dark};
  text-align: center;
`;

const InputRow = styled.View`
  margin: ${deviceHeight < 768 ? 8 : 10}px 30px;
  background: ${({ theme }) => theme.colors.nearWhite};
  border-radius: 6px;
  height: ${deviceHeight < 768 ? 40 : 60}px;
  padding: 8px 0;
  align-self: stretch;
`;

const InputText = styled.TextInput.attrs(({ theme }) => ({
  placeholderTextColor: theme.colors.lighter,
  textAlignVertical: 'top',
}))`
  color: ${({ theme }) => theme.colors.dark};
  flex-grow: 1;
  padding: 0 15px;
  font-size: 15px;
`;

const ButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: auto;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.nearWhite};
`;

const CancelButton = styled(GradientButton).attrs(({ theme }) => ({
  textStyle: {
    color: theme.colors.dark,
    textTransform: 'uppercase',
    fontSize: 18,
  },
}))`
  flex: 0.5;
  height: ${deviceHeight < 768 ? 50 : 60}px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0;
  border-bottom-left-radius: 20px;
`;

const ConfirmButton = styled(GradientButton).attrs(({ theme }) => ({
  textStyle: {
    color: theme.colors.highlight,
    textTransform: 'uppercase',
    fontSize: 18,
  },
}))`
  flex: 0.5;
  height: ${deviceHeight < 768 ? 50 : 60}px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0;
  border-bottom-right-radius: 20px;
  border-left-width: 1px;
  border-left-color: ${({ theme }) => theme.colors.nearWhite};
`;

const ErrorText = styled.Text`
  align-self: flex-start;
  margin-left: 30px;
  margin-bottom: 5px;
  font-family: ${({ theme }) => theme.fonts.defaultFamily};
  font-size: ${({ theme }) => theme.fonts.smallSize};
  color: ${({ theme }) => theme.colors.red};
`;

export default memo(ExitPanicModal);
