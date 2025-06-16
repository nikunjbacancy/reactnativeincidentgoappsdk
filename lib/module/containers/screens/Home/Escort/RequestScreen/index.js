import { Header, SafeAreaContainer } from '../../../../../components';
import { addScreenAction } from '../../../../../containers/providers/RoutesProvider/actions';
import Screens from '../../../../../containers/providers/RoutesProvider/screens';
import React, { useEffect } from 'react';
import { useIntl } from 'react-intl';
import { StatusBar } from 'react-native';
import { useAction, useBackButton, useSelector } from '../../../../../utils/hooks';
import NavigatorService from '../../../../../utils/navigation';
import { PanicOverlay } from '../RecordScreen/styles';
import { showCancelEscortModal } from './actions';
import CancelEscortModal from './CancelEscortModal';
import { SHOW_CANCEL_ESCORT_MODAL } from './constants';
import messages from './messages';
import { makeSelectRequestingEscort, makeSelectShouldShowCancelEscortModal } from './selectors';
import { CancelEscortButton, Container, RequestEscortContainer, RequestEscortLoading, RequestEscortMessage, RequestEscortTitle, RequestingContainer } from './styles';
const RequestComponent = ({
  navigation
}) => {
  const isPanic = navigation.getParam('isPanic');
  const {
    formatMessage
  } = useIntl();
  const showCancelEscortModalAction = useAction(showCancelEscortModal);
  const addRequestingEscortScreenAction = useAction(addScreenAction);
  const requestingEscort = useSelector(makeSelectRequestingEscort());
  const shouldShowCancelEscortModal = useSelector(makeSelectShouldShowCancelEscortModal());
  useEffect(() => {
    if (requestingEscort) {
      addRequestingEscortScreenAction({
        type: SHOW_CANCEL_ESCORT_MODAL,
        actionText: formatMessage(messages.cancelRequest),
        action: showCancelEscortModalAction
      });
    }
  }, [requestingEscort]);
  useBackButton(() => {
    //("isPanic=======>",isPanic)
    if (!isPanic) {
      NavigatorService.navigate(Screens.Home.Escort.EscortType);
    }
    return true;
  });
  const determineTitle = () => {
    if (isPanic) {
      return formatMessage(messages.Panictitle);
    }
    return formatMessage(messages.Livetitle);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StatusBar, {
    barStyle: "dark-content",
    backgroundColor: "white"
  }), /*#__PURE__*/React.createElement(SafeAreaContainer, null, /*#__PURE__*/React.createElement(Container, {
    isKeyboard: false
  }, /*#__PURE__*/React.createElement(RequestEscortContainer, null, /*#__PURE__*/React.createElement(Header, {
    title: formatMessage(messages.requestEscort)
  }), /*#__PURE__*/React.createElement(RequestingContainer, null, /*#__PURE__*/React.createElement(RequestEscortLoading, null), /*#__PURE__*/React.createElement(RequestEscortTitle, null, determineTitle()), /*#__PURE__*/React.createElement(RequestEscortMessage, null, isPanic ? formatMessage(messages.Panicmessage) : formatMessage(messages.Livemessage))), !isPanic && /*#__PURE__*/React.createElement(CancelEscortButton, {
    onPress: showCancelEscortModalAction,
    text: formatMessage(messages.cancelRequest)
  })), /*#__PURE__*/React.createElement(CancelEscortModal, {
    isVisible: shouldShowCancelEscortModal
  }))), isPanic && /*#__PURE__*/React.createElement(PanicOverlay, null));
};
export default RequestComponent;
//# sourceMappingURL=index.js.map