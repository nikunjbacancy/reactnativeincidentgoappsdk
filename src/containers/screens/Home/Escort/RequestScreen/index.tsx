import { Header, SafeAreaContainer } from '../../../../../components';
import { addScreenAction } from '../../../../../containers/providers/RoutesProvider/actions';
import Screens from '../../../../../containers/providers/RoutesProvider/screens';
import React, { FC, useEffect } from 'react';
import { useIntl } from 'react-intl';
import { StatusBar } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { useAction, useBackButton, useSelector } from '../../../../../utils/hooks';
import NavigatorService from '../../../../../utils/navigation';

import { PanicOverlay } from '../RecordScreen/styles';
import { showCancelEscortModal } from './actions';
import CancelEscortModal from './CancelEscortModal';
import { SHOW_CANCEL_ESCORT_MODAL } from './constants';
import messages from './messages';
import {
  makeSelectRequestingEscort,
  makeSelectShouldShowCancelEscortModal,
} from './selectors';
import {
  CancelEscortButton,
  Container,
  RequestEscortContainer,
  RequestEscortLoading,
  RequestEscortMessage,
  RequestEscortTitle,
  RequestingContainer,
} from './styles';
import { EscortType } from './types';

interface RequestComponentProps {
  isPanic: boolean;
  requestType: EscortType;
}

type Props = NavigationStackScreenProps<RequestComponentProps>;

const RequestComponent: FC<Props> = ({ navigation }: Props) => {
  const isPanic = navigation.getParam('isPanic');
  const { formatMessage } = useIntl();

  const showCancelEscortModalAction = useAction(showCancelEscortModal);
  const addRequestingEscortScreenAction = useAction(addScreenAction);

  const requestingEscort = useSelector(makeSelectRequestingEscort());
  const shouldShowCancelEscortModal = useSelector(
    makeSelectShouldShowCancelEscortModal(),
  );

  useEffect(() => {
    if (requestingEscort) {
      addRequestingEscortScreenAction({
        type: SHOW_CANCEL_ESCORT_MODAL,
        actionText: formatMessage(messages.cancelRequest),
        action: showCancelEscortModalAction,
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

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <SafeAreaContainer>
        <Container isKeyboard={false}>
          <RequestEscortContainer>
            <Header title={formatMessage(messages.requestEscort)} />
            <RequestingContainer>
              <RequestEscortLoading />
              <RequestEscortTitle>{determineTitle()}</RequestEscortTitle>
              <RequestEscortMessage>
                {isPanic
                  ? formatMessage(messages.Panicmessage)
                  : formatMessage(messages.Livemessage)}
              </RequestEscortMessage>
            </RequestingContainer>
            {!isPanic && (
              <CancelEscortButton
                onPress={showCancelEscortModalAction}
                text={formatMessage(messages.cancelRequest)}
              />
            )}
          </RequestEscortContainer>
          <CancelEscortModal isVisible={shouldShowCancelEscortModal} />
        </Container>
      </SafeAreaContainer>
      {isPanic && <PanicOverlay />}
    </>
  );
};

export default RequestComponent;
