/**
 *
 * AddContactScreen reducer
 *
 */

import produce, { Draft } from 'immer';
import filter from 'lodash/filter';
import startsWith from 'lodash/startsWith';
import { RESULTS } from 'react-native-permissions';

import {
  FILTER_CONTACTS,
  GET_CONTACTS_FAILURE,
  GET_CONTACTS_SUCCESS,
} from './constants';
import { AddContactActionTypes, AddContactState } from './types';

export const initialState: AddContactState = {
  contacts: [],
  filteredContacts: [],
  permissionStatus: RESULTS.UNAVAILABLE,
};

const addContactsScreenReducer = produce(
  (draft: Draft<AddContactState>, action: AddContactActionTypes) => {
    switch (action.type) {
      case GET_CONTACTS_SUCCESS:
        draft.contacts = action.payload.contacts;
        draft.filteredContacts = action.payload.filteredContacts;
        draft.permissionStatus = action.payload.permissionStatus;
        break;
      case GET_CONTACTS_FAILURE:
        draft.contacts = initialState.contacts;
        draft.filteredContacts = initialState.filteredContacts;
        draft.permissionStatus = initialState.permissionStatus;
        break;
      case FILTER_CONTACTS:
        draft.filteredContacts = filter(draft.contacts, item =>
          startsWith(item.name, action.payload),
        );
        break;
      default:
    }
  },
  initialState,
);

export default addContactsScreenReducer;
