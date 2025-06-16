import { colors } from '../../../../../assets';
import {
  ErrorView,
  Header,
  LoadingIndicator,
  SafeAreaContainer,
  ScreenActionButton,
} from '../../../../../components';
import { AppUserContact } from 'incident-code-core';
import debounce from 'lodash/debounce';
import React, { FC, useCallback, useEffect } from 'react';
import { useIntl } from 'react-intl';
import { ListRenderItemInfo, StatusBar } from 'react-native';
import { RESULTS } from 'react-native-permissions';
import { useAction, useSelector } from '../../../../../utils/hooks';
import NavigatorService from '../../../../../utils/navigation';

import messages from '../ContactScreen/messages';
import {
  addContactRequest,
  filterContacts,
  getContactsRequest,
} from './actions';
import ContactItem from './ContactItem';
import {
  makeSelectFilteredContacts,
  makeSelectPermissionStatus,
} from './selectors';
import {
  BackButtonRow,
  Container,
  ErrorContainer,
  ErrorHeader,
  ErrorText,
  InputRow,
  List,
  NoMatchesContainer,
  NoMatchesText,
  TextInput,
} from './styles';

const AddContactScreen: FC = () => {
  const { formatMessage } = useIntl();

  const getContactsRequestAction = useAction(getContactsRequest);
  const filterContactsAction = useAction(filterContacts);
  const addContactRequestAction = useAction(addContactRequest);

  const filteredContacts = useSelector(makeSelectFilteredContacts());
  const permissionStatus = useSelector(makeSelectPermissionStatus());

  useEffect(() => {
    getContactsRequestAction();
  }, []);

  const onSelectContact = useCallback((contact: AppUserContact) => {
    addContactRequestAction(contact);
  }, []);

  if (permissionStatus === RESULTS.UNAVAILABLE) return <LoadingIndicator />;
  if (permissionStatus !== RESULTS.GRANTED)
    return (
      <>
        <StatusBar barStyle="dark-content" backgroundColor="white" />
        <SafeAreaContainer>
          <ErrorContainer>
            <ErrorHeader>
              <ErrorText>{formatMessage(messages.addContactTitle)}</ErrorText>
              <ErrorView
                errorMessage={formatMessage(messages.contactPermissionError)}
              />
            </ErrorHeader>
          </ErrorContainer>
        </SafeAreaContainer>
      </>
    );

  const debouncedFilterContacts = debounce((filterText: string) => {
    filterContactsAction(filterText);
  }, 100);

  const renderItem = (itemInfo: ListRenderItemInfo<AppUserContact>) => (
    <ContactItem person={itemInfo.item} onSelectContact={onSelectContact} />
  );

  const renderEmpty = () => (
    <NoMatchesContainer>
      <NoMatchesText>{formatMessage(messages.noMatches)}</NoMatchesText>
    </NoMatchesContainer>
  );

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <SafeAreaContainer>
        <Container>
          <Header title={formatMessage(messages.addContactTitle)} />
          <InputRow>
            <TextInput
              keyboardAppearance="light"
              placeholder={formatMessage(messages.searchPlaceholder)}
              onChangeText={debouncedFilterContacts}
            />
          </InputRow>
          <List
            data={filteredContacts}
            keyboardShouldPersistTaps="always"
            keyExtractor={(item: any) => item?.id || ''}
            ListEmptyComponent={renderEmpty()}
            renderItem={renderItem}
          />
        </Container>
        <BackButtonRow>
          <ScreenActionButton
            onCancel={NavigatorService.back}
            tintColor={colors.white}
          />
        </BackButtonRow>
      </SafeAreaContainer>
    </>
  );
};

export default AddContactScreen;
