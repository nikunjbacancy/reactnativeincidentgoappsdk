/* eslint-disable no-unused-expressions */
import { GradientButton } from '../../../../../../components';
import React, { FC, useCallback } from 'react';
import { useIntl } from 'react-intl';
import Modal from 'react-native-modal';
import { useAction, useSelector } from '../../../../../../utils/hooks';
import styled from '../../../../../../utils/styled';

import { deleteIncidentRequest, hideCancelIncidentModal } from '../actions';
import messages from '../messages';
import { makeSelectDeletingIncident } from '../selectors';

interface Props {
  isVisible: boolean;
  onShow(): void;
  onHide(): void;
  onPressYes?(): void;
}

const CancelTipModal: FC<Props> = ({
  isVisible,
  onShow,
  onHide,
  onPressYes,
}) => {
  const { formatMessage } = useIntl();
  const hideModalAction = useAction(hideCancelIncidentModal);
  const deleteIncidentAction = useAction(deleteIncidentRequest);
  const deletingIncident = useSelector(makeSelectDeletingIncident());
  const handleDeleteIncidentAction = useCallback(() => {
    onPressYes?.();
    deleteIncidentAction();
  }, [onPressYes, deleteIncidentAction]);
  return (
    <Modal
    useNativeDriver={true}
      animationIn="zoomIn"
      animationOut="zoomOut"
      isVisible={isVisible}
      onBackButtonPress={hideModalAction}
      onBackdropPress={hideModalAction}
      onModalWillShow={onShow}
      onModalWillHide={onHide}
    >
      <Container>
        <Title>{formatMessage(messages.cancelIncidentTitle)}</Title>
        <Message>{formatMessage(messages.cancelIncidentMessage)}</Message>
        <ButtonContainer>
          <YesButton
            loading={deletingIncident}
            onPress={handleDeleteIncidentAction}
            text={formatMessage(messages.yes)}
          />
          <CancelButton onPress={hideModalAction}>
            <CancelText>{formatMessage(messages.no)}</CancelText>
          </CancelButton>
        </ButtonContainer>
      </Container>
    </Modal>
  );
};

const Container = styled.View`
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  height: 250px;
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
`;

const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.defaultSemiBoldFamily};
  font-size: 20px;
  line-height: 28px;
  color: ${({ theme }) => theme.colors.dark};
  margin: 20px 30px 0;
  text-align: center;
`;

const Message = styled.Text`
  font-family: ${({ theme }) => theme.fonts.defaultFamily};
  font-size: 16px;
  line-height: 24px;
  margin: auto 30px 0;
  color: ${({ theme }) => theme.colors.dark};
  text-align: center;
`;

const ButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: auto;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.nearWhite};
`;

const CancelButton = styled.TouchableOpacity`
  flex: 0.5;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  border-left-width: 1px;
  border-left-color: ${({ theme }) => theme.colors.nearWhite};
`;

const CancelText = styled.Text`
  color: ${({ theme }) => theme.colors.highlight};
  text-transform: uppercase;
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.defaultFamily};
`;

const YesButton = styled(GradientButton).attrs(({ theme }) => ({
  textStyle: {
    color: theme.colors.dark,
    textTransform: 'uppercase',
    fontSize: 18,
  },
}))`
  flex: 0.5;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.white};
`;

export default CancelTipModal;
