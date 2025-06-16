import { colors } from '../../../../../assets';
import { ErrorView, Header, LoadingIndicator, SafeAreaContainer, ScreenActionButton } from '../../../../../components';
import debounce from 'lodash/debounce';
import React, { useCallback, useEffect } from 'react';
import { useIntl } from 'react-intl';
import { StatusBar } from 'react-native';
import { RESULTS } from 'react-native-permissions';
import { useAction, useSelector } from '../../../../../utils/hooks';
import NavigatorService from '../../../../../utils/navigation';
import messages from '../ContactScreen/messages';
import { addContactRequest, filterContacts, getContactsRequest } from './actions';
import ContactItem from './ContactItem';
import { makeSelectFilteredContacts, makeSelectPermissionStatus } from './selectors';
import { BackButtonRow, Container, ErrorContainer, ErrorHeader, ErrorText, InputRow, List, NoMatchesContainer, NoMatchesText, TextInput } from './styles';
const AddContactScreen = () => {
  const {
    formatMessage
  } = useIntl();
  const getContactsRequestAction = useAction(getContactsRequest);
  const filterContactsAction = useAction(filterContacts);
  const addContactRequestAction = useAction(addContactRequest);
  const filteredContacts = useSelector(makeSelectFilteredContacts());
  const permissionStatus = useSelector(makeSelectPermissionStatus());
  useEffect(() => {
    getContactsRequestAction();
  }, []);
  const onSelectContact = useCallback(contact => {
    addContactRequestAction(contact);
  }, []);
  if (permissionStatus === RESULTS.UNAVAILABLE) return /*#__PURE__*/React.createElement(LoadingIndicator, null);
  if (permissionStatus !== RESULTS.GRANTED) return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StatusBar, {
    barStyle: "dark-content",
    backgroundColor: "white"
  }), /*#__PURE__*/React.createElement(SafeAreaContainer, null, /*#__PURE__*/React.createElement(ErrorContainer, null, /*#__PURE__*/React.createElement(ErrorHeader, null, /*#__PURE__*/React.createElement(ErrorText, null, formatMessage(messages.addContactTitle)), /*#__PURE__*/React.createElement(ErrorView, {
    errorMessage: formatMessage(messages.contactPermissionError)
  })))));
  const debouncedFilterContacts = debounce(filterText => {
    filterContactsAction(filterText);
  }, 100);
  const renderItem = itemInfo => /*#__PURE__*/React.createElement(ContactItem, {
    person: itemInfo.item,
    onSelectContact: onSelectContact
  });
  const renderEmpty = () => /*#__PURE__*/React.createElement(NoMatchesContainer, null, /*#__PURE__*/React.createElement(NoMatchesText, null, formatMessage(messages.noMatches)));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StatusBar, {
    barStyle: "dark-content",
    backgroundColor: "white"
  }), /*#__PURE__*/React.createElement(SafeAreaContainer, null, /*#__PURE__*/React.createElement(Container, null, /*#__PURE__*/React.createElement(Header, {
    title: formatMessage(messages.addContactTitle)
  }), /*#__PURE__*/React.createElement(InputRow, null, /*#__PURE__*/React.createElement(TextInput, {
    keyboardAppearance: "light",
    placeholder: formatMessage(messages.searchPlaceholder),
    onChangeText: debouncedFilterContacts
  })), /*#__PURE__*/React.createElement(List, {
    data: filteredContacts,
    keyboardShouldPersistTaps: "always",
    keyExtractor: item => (item === null || item === void 0 ? void 0 : item.id) || '',
    ListEmptyComponent: renderEmpty(),
    renderItem: renderItem
  })), /*#__PURE__*/React.createElement(BackButtonRow, null, /*#__PURE__*/React.createElement(ScreenActionButton, {
    onCancel: NavigatorService.back,
    tintColor: colors.white
  }))));
};
export default AddContactScreen;
//# sourceMappingURL=index.js.map