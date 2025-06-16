import { images } from '../../../../../assets';
import { Header, LoadingIndicator, SafeAreaContainer } from '../../../../../components';
import isEmpty from 'lodash/isEmpty';
import React, { FC } from 'react';
import { useIntl } from 'react-intl';
import { ListRenderItemInfo, StatusBar } from 'react-native';
import { OrganizationSelection } from 'types';
import { makeCall } from '../../../../../utils/device';
import { useAction, useSelector } from '../../../../../utils/hooks';
import NavigatorService from '../../../../../utils/navigation';

import {
  addSelectedOrganizationRequest,
  toggleSelectOrganization,
} from './actions';
import messages from './messages';
import {
  makeSelectEnableContinueButton,
  makeSelectError,
  makeSelectErrorMessage,
  makeSelectIntersectOrganizations,
} from './selectors';
import {
  Call911Button,
  Call911Container,
  Call911Info,
  Call911Title,
  ContinueScreenActionButton,
  ErrorMessage,
  ErrorRow,
  InfoRow,
  InfoText,
  ItemCheckImage,
  ItemRow,
  ItemText,
  List,
  MarginBottom,
} from './styles';

const OrganizationNotifyScreen: FC = () => {
  const { formatMessage } = useIntl();

  const organizations = useSelector(makeSelectIntersectOrganizations());
  const nextButtonEnabled = useSelector(makeSelectEnableContinueButton());
  const error = useSelector(makeSelectError());
  const errorMessage = useSelector(makeSelectErrorMessage());

  const toggleSelectOrganizationAction = useAction(toggleSelectOrganization);
  const addSelectedOrganizationRequestAction = useAction(
    addSelectedOrganizationRequest,
  );

  if (!organizations) return <LoadingIndicator />;

  const call911 = () => makeCall('911');

  const renderHeader = () => (
    <>
      <Header title={formatMessage(messages.title)} />
      <InfoRow>
        <InfoText>{formatMessage(messages.info)}</InfoText>
      </InfoRow>
      {error && (
        <ErrorRow>
          <ErrorMessage>{errorMessage}</ErrorMessage>
        </ErrorRow>
      )}
      <MarginBottom />
    </>
  );

  const renderItem = (itemInfo: ListRenderItemInfo<OrganizationSelection>) => {
    const organization = itemInfo.item;

    return (
      <ItemRow onPress={() => toggleSelectOrganizationAction(organization.id)}>
        <>
          {organization.isSelected && (
            <ItemCheckImage source={images.icCheck()} />
          )}
          <ItemText>{itemInfo.item.name}</ItemText>
        </>
      </ItemRow>
    );
  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <SafeAreaContainer>
        {console.log("select org screen organizations==>",organizations)}
        {isEmpty(organizations) ? (
          <>
            <Header title={formatMessage(messages.title)} />
            <Call911Container>
              <Call911Title>
                {formatMessage(messages.call911Title)}
              </Call911Title>
              <Call911Info>{formatMessage(messages.call911Info)}</Call911Info>
              <Call911Button
                text={formatMessage(messages.call911)}
                onPress={call911}
              />
            </Call911Container>
          </>
        ) : (
          <>
            {renderHeader()}
            <List
              keyExtractor={(org: any) => org.id?.toString() || ''}
              data={organizations}
              extraData={organizations}
              renderItem={renderItem}
            />
          </>
        )}
        <ContinueScreenActionButton
          disabled={!nextButtonEnabled}
          text={formatMessage(messages.continue)}
          onCancel={NavigatorService.back}
          onPress={addSelectedOrganizationRequestAction}
          iconImage={images.icBack()}
        />
      </SafeAreaContainer>
    </>
  );
};

export default OrganizationNotifyScreen;
