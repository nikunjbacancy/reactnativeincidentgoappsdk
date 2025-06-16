/**
 *
 * AddContactScreen saga
 *
 */

import * as api from '../../../../../api';
import { AxiosResponse } from 'axios';
import { AppUserContact } from 'incident-code-core';
import { PERMISSIONS, request, RESULTS } from 'react-native-permissions';
import Toast from 'react-native-root-toast';
import { call, put, takeLatest } from 'redux-saga/effects';
import { getContacts, isAndroid } from '../../../../../utils/device';
import { handleError } from '../../../../../utils/error';
import NavigatorService from '../../../../../utils/navigation';

import {
  addContactFailure,
  addContactSuccess,
  getContactsFailure,
  getContactsSuccess,
} from './actions';
import { ADD_CONTACT_REQUEST, GET_CONTACTS_REQUEST } from './constants';
import { AddContactRequestAction } from './types';

function* getContactsSaga():any {
  try {
    const permission = isAndroid
      ? PERMISSIONS.ANDROID.READ_CONTACTS
      : PERMISSIONS.IOS.CONTACTS;
    const permissionStatus = yield call(request, permission);
    //("contacts permission ==>",permission)
    //("contacts permissionStatus ==>",permissionStatus)
    if (permissionStatus === RESULTS.GRANTED) {
      const contacts: AppUserContact[] = yield call(getContacts);
      //("contacts ==>",contacts)
      return yield put(
        getContactsSuccess({
          contacts,
          filteredContacts: contacts,
          permissionStatus,
        }),
      );
    }
    return yield put(
      getContactsSuccess({
        contacts: [],
        filteredContacts: [],
        permissionStatus,
      }),
    );
  } catch (error: any) {
    yield put(getContactsFailure(handleError(error)));
  }
}

function* addContact({ payload }: AddContactRequestAction) {
  delete payload.id; // to let api generate id

  try {
    const response: AxiosResponse<AppUserContact> = yield call(
      api.user.addContact,
      payload,
    );
    yield put(addContactSuccess(response.data));
    yield call(NavigatorService.back);
  } catch (error: any) {
    Toast.show(error?.response?.data?.message, {
      position: Toast.positions.CENTER,
    });
    yield put(addContactFailure(handleError(error)));
  }
}

export default function* addContactScreenSaga() {
  yield takeLatest(GET_CONTACTS_REQUEST, getContactsSaga);
  yield takeLatest(ADD_CONTACT_REQUEST, addContact);
}
