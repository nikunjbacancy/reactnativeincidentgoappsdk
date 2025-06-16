import { images } from '../../../../../assets';
import {
  Header,
  LoadingIndicator,
  SafeAreaContainer,
  ScreenActionButton,
} from '../../../../../components';
import Screens from '../../../../../containers/providers/RoutesProvider/screens';
import isEmpty from 'lodash/isEmpty';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { useIntl } from 'react-intl';
import { Keyboard, ListRenderItemInfo, StatusBar, View, EmitterSubscription } from 'react-native';
import { ScreenProps } from 'react-native-screens';
import { withNavigationFocus } from 'react-navigation';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { OrganizationSelection, ProcedureSelection } from 'types';
import { makeCall } from '../../../../../utils/device';
import { useAction, useSelector } from '../../../../../utils/hooks';
import NavigatorService from '../../../../../utils/navigation';

import {
  getIntersectOrganizationsRequest,
  getOrganizationProceduresRequest,
  toggleSelectOrganization,
  toggleSelectProcedure,
} from './actions';
import messages from './messages';
import {
  makeSelectEnableNextButton,
  makeSelectError,
  makeSelectErrorMessage,
  makeSelectIntersectOrganizations,
  makeSelectOrganizationProcedures,
  makeSelectRequestingOrganizations,
  makeSelectSelectedOrganization,
  makeSelectSelectedProcedure,
} from './selectors';
import {
  Call911Button,
  Call911Container,
  Call911Info,
  Call911Title,
  Container,
  ErrorMessage,
  ErrorRow,
  InfoRow,
  InfoText,
  ItemCheckImage,
  ItemRow,
  ItemText,
  List,
  NextButtonRow,
  ProcedureList,
} from './styles';

interface Params {
  safetyTimer: boolean;
}

interface Props extends NavigationStackScreenProps<Params, ScreenProps> {
  isFocused: boolean;
}

const EscortScreen: FC<Props> = ({ isFocused, navigation }) => {
  const isSafetyTimer = navigation.getParam('safetyTimer');
  const { formatMessage } = useIntl();

  const [isKeyboardShow, setIsKeyboardShow] = useState(false);
  const [checkedOrg, setCheckedOrg] = useState<any>(null);

  const organizations = useSelector(makeSelectIntersectOrganizations());

  const organization = useSelector(makeSelectSelectedOrganization());
  const procedures = useSelector(makeSelectOrganizationProcedures());
  const procedure = useSelector(makeSelectSelectedProcedure());

  const nextButtonEnabled = useSelector(makeSelectEnableNextButton());
  const error = useSelector(makeSelectError());
  const errorMessage = useSelector(makeSelectErrorMessage());
  const requestingOrganizations = useSelector(
    makeSelectRequestingOrganizations(),
  );
  console.log("=requestingOrganizations===>",requestingOrganizations)
  const toggleSelectOrganizationAction = useAction(toggleSelectOrganization);
  const toggleSelectProcedureAction = useAction(toggleSelectProcedure);
  const getIntersectOrganizationsAction = useAction(
    getIntersectOrganizationsRequest,
  );

  const getOrganizationProceduresAction = useAction(
    getOrganizationProceduresRequest,
  );

  const goToSelectProcedure = () => {
    if (checkedOrg) {
      toggleSelectOrganizationAction(checkedOrg);
      if (!isSafetyTimer) {
        getOrganizationProceduresAction(checkedOrg);
      } else {
        goToSafetyTimerCountdown();
      }
    }
  };

  const goToCountdownAction = () => {
    NavigatorService.navigate(Screens.Home.Escort.Countdown, {
      procedure,
      organization,
    });
  };

  const goToSafetyTimerCountdown = () => {
    NavigatorService.navigate(Screens.Home.Escort.Countdown, {
      procedure,
      organization,
      isSafetyTimer,
    });
  };

  const procedureSelectionBack = () => {
    toggleSelectProcedureAction(null);
    toggleSelectOrganizationAction(null);
    if (organizations && organizations.length <= 1) {
      NavigatorService.navigate(Screens.Home.Escort.EscortType);
    }
  };

  useEffect(() => {
    console.log("organization====>",organization)
    console.log("isSafetyTimer====>",isSafetyTimer)
    if (organization && isSafetyTimer) {
      goToSafetyTimerCountdown();
    }
  }, [organization, isSafetyTimer]);

  useEffect(() => {
    if (isFocused) {
      getIntersectOrganizationsAction();
      let subscriptions: EmitterSubscription[];
      subscriptions = [
        Keyboard.addListener(
          'keyboardDidShow',
          () => setIsKeyboardShow(true),
        ),
        Keyboard.addListener(
          'keyboardDidHide',
          () => setIsKeyboardShow(false),
        )
      ];
  
      return () => {
        subscriptions.forEach((s) => s?.remove?.());
      }
    }
    else
    {
      return () => {}
    }

  }, [isFocused]);

  useEffect(() => {
    if (organizations?.length === 1) {
      const { id } = organizations[0];
      if (id !== checkedOrg) {
        setCheckedOrg(id);
        toggleSelectOrganizationAction(id);
        if (!isSafetyTimer) {
          getOrganizationProceduresAction(id);
        }
      }
    }
  }, [organizations?.length]);

  const call911 = useCallback(() => makeCall('911'), []);

  if (requestingOrganizations) return <LoadingIndicator />;

  const renderTimedHeader = () => (
    <>
      <Header title={formatMessage(messages.timedTitle)} />
      <InfoRow>
        <InfoText>{formatMessage(messages.timedInfo)}</InfoText>
      </InfoRow>
      {error && (
        <ErrorRow>
          <ErrorMessage>{errorMessage}</ErrorMessage>
        </ErrorRow>
      )}
    </>
  );
  const renderSafetyHeader = () => (
    <>
      <Header title={formatMessage(messages.safetyTitle)} />
      <InfoRow>
        <InfoText>{formatMessage(messages.safetyInfo)}</InfoText>
      </InfoRow>
      {error && (
        <ErrorRow>
          <ErrorMessage>{errorMessage}</ErrorMessage>
        </ErrorRow>
      )}
    </>
  );

  const renderItem = (itemInfo: ListRenderItemInfo<OrganizationSelection>) => {
    const org = itemInfo.item;

    return (
      <ItemRow onPress={() => setCheckedOrg(org.id)}>
        <>
          {org.id === checkedOrg && (
            <ItemCheckImage source={images.icCheck()} />
          )}
          <ItemText>{`${org.name}`}</ItemText>
        </>
      </ItemRow>
    );
  };

  const renderOrganizations = () => {
    console.log("organizations=>",organizations)
    if (isEmpty(organizations)) {
      return (
        <>
          <Header
            title={
              isSafetyTimer
                ? formatMessage(messages.safetyTitle)
                : formatMessage(messages.timedTitle)
            }
          />
          <Call911Container>
            <Call911Title>
              {isSafetyTimer
                ? formatMessage(messages.safetyCall911Title)
                : formatMessage(messages.timedCall911Title)}
            </Call911Title>
            <Call911Info>{formatMessage(messages.call911Info)}</Call911Info>
            <Call911Button
              text={formatMessage(messages.call911)}
              onPress={call911}
            />
          </Call911Container>
        </>
      );
    }
    return (
      <>
        {isSafetyTimer ? renderSafetyHeader() : renderTimedHeader()}
        <List
          keyExtractor={(org: any) => org?.id?.toString() || ''}
          data={organizations || []}
          // extraData={organizations}
          renderItem={renderItem}
        />
        <View style={{ marginTop: 'auto' }} />
        <NextButtonRow>
          <ScreenActionButton
            disabled={!checkedOrg}
            text={
              isSafetyTimer
                ? formatMessage(messages.next)
                : formatMessage(messages.selectProcedure)
            }
            onPress={goToSelectProcedure}
            onCancel={NavigatorService.back}
          />
        </NextButtonRow>
      </>
    );
  };

  // TODO: refactor renderHeader to work for both scenarios
  const renderProcedureSelection = () => {
    const renderedProcedures =
      procedures?.filter(p => p.organization === organization?.id) || [];
    return (
      <>
        <Header title={formatMessage(messages.timedTitle)} />
        <InfoRow>
          <InfoText>{formatMessage(messages.procedureSelection)}</InfoText>
        </InfoRow>
        {error && (
          <ErrorRow>
            <ErrorMessage>{errorMessage}</ErrorMessage>
          </ErrorRow>
        )}
        {!renderedProcedures.length && (
          <InfoRow>
            <InfoText>{formatMessage(messages.noProcedures)}</InfoText>
          </InfoRow>
        )}
        {procedures && (
          <ProcedureList
            keyExtractor={(proc: any) => proc.id?.toString() || ''}
            data={renderedProcedures}
            extraData={renderedProcedures}
            renderItem={renderProcedure}
          />
        )}
        <NextButtonRow>
          <ScreenActionButton
            disabled={!nextButtonEnabled}
            text={formatMessage(messages.next)}
            onPress={goToCountdownAction}
            onCancel={procedureSelectionBack}
          />
        </NextButtonRow>
      </>
    );
  };

  const renderProcedure = (
    itemInfo: ListRenderItemInfo<ProcedureSelection>,
  ) => {
    const proced = itemInfo.item;

    return (
      <ItemRow onPress={() => toggleSelectProcedureAction(proced.id)}>
        <>
          {proced.isSelected && <ItemCheckImage source={images.icCheck()} />}
          <ItemText>{proced.name}</ItemText>
        </>
      </ItemRow>
    );
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <SafeAreaContainer>
        <Container isKeyboard={isKeyboardShow}>
          {organization ? renderProcedureSelection() : renderOrganizations()}
        </Container>
      </SafeAreaContainer>
    </>
  );
};

export default withNavigationFocus(EscortScreen);
