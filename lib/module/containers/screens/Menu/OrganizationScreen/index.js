import { colors } from '../../../../assets';
import { Header, LoadingIndicator, SafeAreaContainer, ScreenActionButton } from '../../../../components';
import Screens from '../../../../containers/providers/RoutesProvider/screens';
import reject from 'lodash/reject';
import React, { useEffect } from 'react';
import { useIntl } from 'react-intl';
import { StatusBar } from 'react-native';
import Toast from 'react-native-root-toast';
import { useAction, useSelector } from '../../../../utils/hooks';
import NavigatorService from '../../../../utils/navigation';
import { deleteUserOrganizationRequest, getUserOrganizationsRequest } from './actions';
import messages from './messages';
import OrganizationItem from './OrganizationItem';
import { makeSelectIsLoading, makeSelectUserOrganizations } from './selectors';
import { AddButtonRow, List } from './styles';
const OrganizationScreen = () => {
  const {
    formatMessage
  } = useIntl();
  const isLoading = useSelector(makeSelectIsLoading());
  const organizations = useSelector(makeSelectUserOrganizations());
  const getUserOrganizationsAction = useAction(getUserOrganizationsRequest);
  const deleteUserOrganizationAction = useAction(deleteUserOrganizationRequest);
  useEffect(() => {
    getUserOrganizationsAction();
  }, []);
  const onDelete = organization => {
    if (organizations.length === 1) {
      Toast.show(formatMessage(messages.alert), {
        position: Toast.positions.CENTER
      });
      return;
    }
    const filteredOrganizations = reject(organizations, {
      id: organization.id
    });
    deleteUserOrganizationAction(filteredOrganizations);
  };
  const goToSelectOrganization = () => {
    NavigatorService.navigate(Screens.Menu.Organization.SelectOrganizations);
  };
  const renderItem = itemInfo => /*#__PURE__*/React.createElement(OrganizationItem, {
    onDelete: onDelete,
    organization: itemInfo.item
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StatusBar, {
    barStyle: "dark-content",
    backgroundColor: "white"
  }), /*#__PURE__*/React.createElement(SafeAreaContainer, null, /*#__PURE__*/React.createElement(Header, {
    title: formatMessage(messages.title)
  }), isLoading ? /*#__PURE__*/React.createElement(LoadingIndicator, null) : /*#__PURE__*/React.createElement(List, {
    keyExtractor: org => {
      var _org$id;
      return ((_org$id = org.id) === null || _org$id === void 0 ? void 0 : _org$id.toString()) || '';
    },
    data: organizations,
    extraData: organizations,
    renderItem: renderItem
  }), /*#__PURE__*/React.createElement(AddButtonRow, null, /*#__PURE__*/React.createElement(ScreenActionButton, {
    onCancel: NavigatorService.back,
    onPress: goToSelectOrganization,
    text: formatMessage(messages.addNewOrganization),
    tintColor: colors.white
  }))));
};
export default OrganizationScreen;
//# sourceMappingURL=index.js.map