import { Header, LoadingIndicator, SafeAreaContainer, ScreenActionButton } from '../../../../../components';
import { makeSelectAppUserContacts, makeSelectConfigs } from '../../../../../containers/app/selectors';
import Screens from '../../../../../containers/providers/RoutesProvider/screens';
import React from 'react';
import { useIntl } from 'react-intl';
import { StatusBar } from 'react-native';
import Toast from 'react-native-root-toast';
import { useSelector } from '../../../../../utils/hooks';
import NavigatorService from '../../../../../utils/navigation';
import ContactItem from './ContactItem';
import messages from './messages';
import NoData from './NoData';
import { AddContactButtonRow, DescriptionText, InfoRow, InfoText, InfoWarning, List } from './styles';
const ContactScreen = () => {
  const {
    formatMessage
  } = useIntl();
  const contacts = useSelector(makeSelectAppUserContacts());
  const configs = useSelector(makeSelectConfigs());
  const isLoading = false;
  const goToAddContact = () => {
    if (contacts.length < configs.contactLimit) {
      NavigatorService.navigate(Screens.Menu.ManageContact.AddContact);
    } else {
      Toast.show(formatMessage(messages.footerMax), {
        position: Toast.positions.CENTER
      });
    }
  };
  const renderItem = ({
    item
  }) => /*#__PURE__*/React.createElement(ContactItem, {
    contact: item
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StatusBar, {
    barStyle: "dark-content",
    backgroundColor: "white"
  }), /*#__PURE__*/React.createElement(SafeAreaContainer, null, /*#__PURE__*/React.createElement(Header, {
    title: formatMessage(messages.title)
  }), /*#__PURE__*/React.createElement(InfoRow, null, /*#__PURE__*/React.createElement(InfoText, null, formatMessage(messages.info)), /*#__PURE__*/React.createElement(InfoWarning, null, formatMessage(messages.warning))), !!contacts.length && /*#__PURE__*/React.createElement(DescriptionText, null, formatMessage(messages.title)), /*#__PURE__*/React.createElement(List, {
    keyExtractor: contact => {
      var _contact$id;
      return ((_contact$id = contact.id) === null || _contact$id === void 0 ? void 0 : _contact$id.toString()) || '';
    },
    data: contacts,
    ListEmptyComponent: isLoading ? /*#__PURE__*/React.createElement(LoadingIndicator, null) : /*#__PURE__*/React.createElement(NoData, null),
    extraData: contacts,
    renderItem: renderItem
  }), /*#__PURE__*/React.createElement(AddContactButtonRow, null, /*#__PURE__*/React.createElement(ScreenActionButton, {
    onPress: goToAddContact,
    text: formatMessage(messages.addContactTitle),
    onCancel: NavigatorService.back
  }))));
};
export default ContactScreen;
//# sourceMappingURL=index.js.map