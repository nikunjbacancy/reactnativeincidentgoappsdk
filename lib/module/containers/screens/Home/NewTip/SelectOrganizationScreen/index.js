import { images } from '../../../../../assets';
import { Header, LoadingIndicator, SafeAreaContainer } from '../../../../../components';
import isEmpty from 'lodash/isEmpty';
import React from 'react';
import { useIntl } from 'react-intl';
import { StatusBar } from 'react-native';
import { makeCall } from '../../../../../utils/device';
import { useAction, useSelector } from '../../../../../utils/hooks';
import NavigatorService from '../../../../../utils/navigation';
import { addSelectedOrganizationRequest, toggleSelectOrganization } from './actions';
import messages from './messages';
import { makeSelectEnableContinueButton, makeSelectError, makeSelectErrorMessage, makeSelectIntersectOrganizations } from './selectors';
import { Call911Button, Call911Container, Call911Info, Call911Title, ContinueScreenActionButton, ErrorMessage, ErrorRow, InfoRow, InfoText, ItemCheckImage, ItemRow, ItemText, List, MarginBottom } from './styles';
const OrganizationNotifyScreen = () => {
  const {
    formatMessage
  } = useIntl();
  const organizations = useSelector(makeSelectIntersectOrganizations());
  const nextButtonEnabled = useSelector(makeSelectEnableContinueButton());
  const error = useSelector(makeSelectError());
  const errorMessage = useSelector(makeSelectErrorMessage());
  const toggleSelectOrganizationAction = useAction(toggleSelectOrganization);
  const addSelectedOrganizationRequestAction = useAction(addSelectedOrganizationRequest);
  if (!organizations) return /*#__PURE__*/React.createElement(LoadingIndicator, null);
  const call911 = () => makeCall('911');
  const renderHeader = () => /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    title: formatMessage(messages.title)
  }), /*#__PURE__*/React.createElement(InfoRow, null, /*#__PURE__*/React.createElement(InfoText, null, formatMessage(messages.info))), error && /*#__PURE__*/React.createElement(ErrorRow, null, /*#__PURE__*/React.createElement(ErrorMessage, null, errorMessage)), /*#__PURE__*/React.createElement(MarginBottom, null));
  const renderItem = itemInfo => {
    const organization = itemInfo.item;
    return /*#__PURE__*/React.createElement(ItemRow, {
      onPress: () => toggleSelectOrganizationAction(organization.id)
    }, /*#__PURE__*/React.createElement(React.Fragment, null, organization.isSelected && /*#__PURE__*/React.createElement(ItemCheckImage, {
      source: images.icCheck()
    }), /*#__PURE__*/React.createElement(ItemText, null, itemInfo.item.name)));
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StatusBar, {
    barStyle: "dark-content",
    backgroundColor: "white"
  }), /*#__PURE__*/React.createElement(SafeAreaContainer, null, console.log("select org screen organizations==>", organizations), isEmpty(organizations) ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Header, {
    title: formatMessage(messages.title)
  }), /*#__PURE__*/React.createElement(Call911Container, null, /*#__PURE__*/React.createElement(Call911Title, null, formatMessage(messages.call911Title)), /*#__PURE__*/React.createElement(Call911Info, null, formatMessage(messages.call911Info)), /*#__PURE__*/React.createElement(Call911Button, {
    text: formatMessage(messages.call911),
    onPress: call911
  }))) : /*#__PURE__*/React.createElement(React.Fragment, null, renderHeader(), /*#__PURE__*/React.createElement(List, {
    keyExtractor: org => {
      var _org$id;
      return ((_org$id = org.id) === null || _org$id === void 0 ? void 0 : _org$id.toString()) || '';
    },
    data: organizations,
    extraData: organizations,
    renderItem: renderItem
  })), /*#__PURE__*/React.createElement(ContinueScreenActionButton, {
    disabled: !nextButtonEnabled,
    text: formatMessage(messages.continue),
    onCancel: NavigatorService.back,
    onPress: addSelectedOrganizationRequestAction,
    iconImage: images.icBack()
  })));
};
export default OrganizationNotifyScreen;
//# sourceMappingURL=index.js.map