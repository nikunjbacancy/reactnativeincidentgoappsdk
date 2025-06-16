import { images } from '../../../../../../assets';
import { Form, SubmitButtonField } from '../../../../../../components';
import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { View } from 'react-native';
import Modal from 'react-native-modal';
import { useAction, useSelector } from '../../../../../../utils/hooks';
import { hideSetTimerModal } from '../actions';
import { SET_TIMER_VALUE_FAILURE, SET_TIMER_VALUE_REQUEST, SET_TIMER_VALUE_SUCCESS } from '../constants';
import messages from '../messages';
import { makeSelectDisplaySetTimerModal } from '../selectors';
import { InfoRow, SubHeader } from '../styles';
import { CloseButton, InputRow, ModalContainer, SetTimerErrorField, SubmitButtonRow, TimeInputField, TimerErrorField } from './styles';
import SetTimerSchema from './validator';
const SetTimerModal = () => {
  const {
    formatMessage
  } = useIntl();
  const schema = SetTimerSchema(formatMessage);
  const displaySetTimerModal = useSelector(makeSelectDisplaySetTimerModal());
  const hideModalAction = useAction(hideSetTimerModal);
  const [timerError, setTimerError] = useState('');
  const initialValues = {
    hours: '',
    minutes: '',
    seconds: ''
  };

  // //("displaySetTimerModal--->",displaySetTimerModal)

  const handleTimerError = error => {
    setTimerError(error);
    setTimeout(() => setTimerError(''), 3000); // clears error from UI after 3 seconds
  };
  return /*#__PURE__*/React.createElement(Modal, {
    useNativeDriver: true,
    animationIn: "zoomIn",
    animationOut: "zoomOut",
    isVisible: displaySetTimerModal,
    onBackButtonPress: hideModalAction,
    onBackdropPress: hideModalAction,
    avoidKeyboard: true
  }, /*#__PURE__*/React.createElement(ModalContainer, null, /*#__PURE__*/React.createElement(CloseButton, {
    source: images.icClose(),
    onPress: hideModalAction
  }), /*#__PURE__*/React.createElement(InfoRow, null, /*#__PURE__*/React.createElement(SubHeader, null, formatMessage(messages.setTimerHeader))), /*#__PURE__*/React.createElement(Form, {
    start: SET_TIMER_VALUE_REQUEST,
    resolve: SET_TIMER_VALUE_SUCCESS,
    reject: SET_TIMER_VALUE_FAILURE,
    initialValues: initialValues,
    validationSchema: schema
    // onResolve={() => setTimeout(() => {hideModalAction()}, 1000)}
    ,
    onResolve: hideModalAction,
    onReject: action => handleTimerError(action.payload.message)
  }, /*#__PURE__*/React.createElement(InputRow, null, /*#__PURE__*/React.createElement(TimeInputField, {
    name: "hours",
    autoCompleteType: "off",
    textContentType: "none",
    keyboardType: "number-pad",
    maxLength: 2,
    placeholder: formatMessage(messages.hoursPlaceholder)
  }), /*#__PURE__*/React.createElement(TimeInputField, {
    name: "minutes",
    autoCompleteType: "off",
    textContentType: "none",
    keyboardType: "number-pad",
    maxLength: 2,
    placeholder: formatMessage(messages.minutesPlaceholder)
  }), /*#__PURE__*/React.createElement(TimeInputField, {
    name: "seconds",
    autoCompleteType: "off",
    textContentType: "none",
    keyboardType: "number-pad",
    maxLength: 2,
    placeholder: formatMessage(messages.secondsPlaceholder)
  })), /*#__PURE__*/React.createElement(TimerErrorField, {
    name: "hours"
  }), /*#__PURE__*/React.createElement(TimerErrorField, {
    name: "minutes"
  }), /*#__PURE__*/React.createElement(TimerErrorField, {
    name: "seconds"
  }), /*#__PURE__*/React.createElement(SetTimerErrorField, null, timerError), /*#__PURE__*/React.createElement(View, {
    style: {
      marginTop: 'auto'
    }
  }), /*#__PURE__*/React.createElement(SubmitButtonRow, null, /*#__PURE__*/React.createElement(SubmitButtonField, {
    text: formatMessage(messages.setTimerSubmit)
  })))));
};
export default SetTimerModal;
//# sourceMappingURL=index.js.map