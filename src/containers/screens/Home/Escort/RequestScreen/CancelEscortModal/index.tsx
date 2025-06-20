import { GradientButton } from '../../../../../../components';
import { ClearLocationData } from '../../../../../../containers/app/actions';
import React, { FC, useCallback } from 'react';
import { useIntl } from 'react-intl';
import Modal from 'react-native-modal';
import { useAction } from '../../../../../../utils/hooks';
import { stopBackgroundGeolocation } from '../../../../../../utils/location/backgroundGeolocation';
import styled from '../../../../../../utils/styled';

import { cancelEscortRequest, hideCancelEscortModal } from '../actions';
import messages from '../messages';

interface Props {
  isVisible: boolean;
}

const CancelEscortModal: FC<Props> = ({ isVisible }) => {
  const { formatMessage } = useIntl();
  const hideModalAction = useAction(hideCancelEscortModal);
  const cancelEscortAction = useAction(cancelEscortRequest);
  const clearLocation = useAction(ClearLocationData);

  const cancelEscort = useCallback(() => {
    cancelEscortAction();
    stopBackgroundGeolocation(clearLocation);
  }, [cancelEscortAction]);

  return (
    <Modal
    useNativeDriver={true}
      animationIn="zoomIn"
      animationOut="zoomOut"
      isVisible={isVisible}
      onBackButtonPress={hideModalAction}
      onBackdropPress={hideModalAction}
    >
      <Container>
        <Title>{formatMessage(messages.cancelEscortModalTitle)}</Title>
        <ButtonContainer>
          <CancelEscortButton onPress={cancelEscort}>
            <CancelText>{formatMessage(messages.cancelEscort)}</CancelText>
          </CancelEscortButton>
          <ContinueEscortButton
            onPress={hideModalAction}
            text={formatMessage(messages.continueEscort)}
          />
        </ButtonContainer>
      </Container>
    </Modal>
  );
};

const Container = styled.View`
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  height: 280px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.defaultBoldFamily};
  font-size: 18px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.dark};
  margin: 30px 30px 5px;
  text-align: center;
`;

const ButtonContainer = styled.View`
  display: flex;
  margin-top: auto;
`;

const CancelEscortButton = styled.TouchableOpacity`
  height: 60px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.nearWhite};
`;

const CancelText = styled.Text`
  color: ${({ theme }) => theme.colors.dark};
  text-transform: uppercase;
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.defaultFamily};
`;

const ContinueEscortButton = styled(GradientButton).attrs(({ theme }) => ({
  textStyle: {
    color: theme.colors.highlight,
    textTransform: 'uppercase',
    fontSize: 18,
  },
}))`
  height: 60px;
  background-color: ${({ theme }) => theme.colors.white};
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.colors.nearWhite};
  border-radius: 0;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

export default CancelEscortModal;
