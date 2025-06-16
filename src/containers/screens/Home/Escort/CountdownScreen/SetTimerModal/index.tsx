import { images } from '../../../../../../assets';
import { Form, SubmitButtonField } from '../../../../../../components';
import React, { FC, useState } from 'react';
import { useIntl } from 'react-intl';
import { View } from 'react-native';
import Modal from 'react-native-modal';
import { useAction, useSelector } from '../../../../../../utils/hooks';

import { hideSetTimerModal } from '../actions';
import {
  SET_TIMER_VALUE_FAILURE,
  SET_TIMER_VALUE_REQUEST,
  SET_TIMER_VALUE_SUCCESS,
} from '../constants';
import messages from '../messages';
import { makeSelectDisplaySetTimerModal } from '../selectors';
import { InfoRow, SubHeader } from '../styles';
import {
  CloseButton,
  InputRow,
  ModalContainer,
  SetTimerErrorField,
  SubmitButtonRow,
  TimeInputField,
  TimerErrorField,
} from './styles';
import SetTimerSchema from './validator';

interface Props {}

const SetTimerModal: FC<Props> = () => {
  const { formatMessage } = useIntl();
  const schema = SetTimerSchema(formatMessage);
  const displaySetTimerModal = useSelector(makeSelectDisplaySetTimerModal());
  const hideModalAction = useAction(hideSetTimerModal);
  const [timerError, setTimerError] = useState('');

  const initialValues = {
    hours: '',
    minutes: '',
    seconds: '',
  };

  // //("displaySetTimerModal--->",displaySetTimerModal)
  
  const handleTimerError = (error: string) => {
    setTimerError(error);
    setTimeout(() => setTimerError(''), 3000); // clears error from UI after 3 seconds
  };

  return (
    <Modal
    useNativeDriver={true}
      animationIn="zoomIn"
      animationOut="zoomOut"
      isVisible={displaySetTimerModal}
      onBackButtonPress={hideModalAction}
      onBackdropPress={hideModalAction}
      avoidKeyboard
    >
      <ModalContainer>
        <CloseButton source={images.icClose()} onPress={hideModalAction} />
        <InfoRow>
          <SubHeader>{formatMessage(messages.setTimerHeader)}</SubHeader>
        </InfoRow>
        <Form
          start={SET_TIMER_VALUE_REQUEST}
          resolve={SET_TIMER_VALUE_SUCCESS}
          reject={SET_TIMER_VALUE_FAILURE}
          initialValues={initialValues}
          validationSchema={schema}
          // onResolve={() => setTimeout(() => {hideModalAction()}, 1000)}
          onResolve={hideModalAction}
          onReject={action => handleTimerError(action.payload.message)}
        >
          <InputRow>
            <TimeInputField
              name="hours"
              autoCompleteType="off"
              textContentType="none"
              keyboardType="number-pad"
              maxLength={2}
              placeholder={formatMessage(messages.hoursPlaceholder)}
            />
            <TimeInputField
              name="minutes"
              autoCompleteType="off"
              textContentType="none"
              keyboardType="number-pad"
              maxLength={2}
              placeholder={formatMessage(messages.minutesPlaceholder)}
            />
            <TimeInputField
              name="seconds"
              autoCompleteType="off"
              textContentType="none"
              keyboardType="number-pad"
              maxLength={2}
              placeholder={formatMessage(messages.secondsPlaceholder)}
            />
          </InputRow>
          <TimerErrorField name="hours" />
          <TimerErrorField name="minutes" />
          <TimerErrorField name="seconds" />
          <SetTimerErrorField>{timerError}</SetTimerErrorField>
          <View style={{ marginTop: 'auto' }} />
          <SubmitButtonRow>
            <SubmitButtonField text={formatMessage(messages.setTimerSubmit)} />
          </SubmitButtonRow>
        </Form>
      </ModalContainer>
    </Modal>
  );
};

export default SetTimerModal;
