import { colors } from '../../../../assets';
import {
  Header,
  LoadingIndicator,
  SafeAreaContainer,
  ScreenActionButton,
} from '../../../../components';
import Screens from '../../../../containers/providers/RoutesProvider/screens';
import { Organization } from 'incident-code-core';
import reject from 'lodash/reject';
import React, { useEffect } from 'react';
import { useIntl } from 'react-intl';
import { ListRenderItemInfo, StatusBar } from 'react-native';
import Toast from 'react-native-root-toast';
import { OrganizationSelection } from 'types';
import { useAction, useSelector } from '../../../../utils/hooks';
import NavigatorService from '../../../../utils/navigation';

import {
  deleteUserOrganizationRequest,
  getUserOrganizationsRequest,
} from './actions';
import messages from './messages';
import OrganizationItem from './OrganizationItem';
import { makeSelectIsLoading, makeSelectUserOrganizations } from './selectors';
import { AddButtonRow, List } from './styles';

const OrganizationScreen = () => {
  const { formatMessage } = useIntl();

  const isLoading = useSelector(makeSelectIsLoading());
  const organizations = useSelector(makeSelectUserOrganizations());

  const getUserOrganizationsAction = useAction(getUserOrganizationsRequest);
  const deleteUserOrganizationAction = useAction(deleteUserOrganizationRequest);

  useEffect(() => {
    getUserOrganizationsAction();
  }, []);

  const onDelete = (organization: Organization) => {
    if (organizations.length === 1) {
      Toast.show(formatMessage(messages.alert), {
        position: Toast.positions.CENTER,
      });
      return;
    }
    const filteredOrganizations = reject(organizations, {
      id: organization.id,
    });
    deleteUserOrganizationAction(filteredOrganizations);
  };

  const goToSelectOrganization = () => {
    NavigatorService.navigate(Screens.Menu.Organization.SelectOrganizations);
  };

  const renderItem = (
    itemInfo: ListRenderItemInfo<OrganizationSelection>,
  ): React.ReactElement => (
    <OrganizationItem onDelete={onDelete} organization={itemInfo.item} />
  );

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <SafeAreaContainer>
        <Header title={formatMessage(messages.title)} />
        {isLoading ? (
          <LoadingIndicator />
        ) : (
          <List
            keyExtractor={(org: any) => org.id?.toString() || ''}
            data={organizations}
            extraData={organizations}
            renderItem={renderItem}
          />
        )}
        <AddButtonRow>
          <ScreenActionButton
            onCancel={NavigatorService.back}
            onPress={goToSelectOrganization}
            text={formatMessage(messages.addNewOrganization)}
            tintColor={colors.white}
          />
        </AddButtonRow>
      </SafeAreaContainer>
    </>
  );
};

export default OrganizationScreen;
