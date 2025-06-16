import { AppUserContact } from 'incident-code-core';
import deburr from 'lodash/deburr';
import forEach from 'lodash/forEach';
import replace from 'lodash/replace';
import sortBy from 'lodash/sortBy';
import Contacts, { Contact } from 'react-native-contacts';

const formatContact = (
  id: string,
  contact: Contact,
  phoneNumber: Contacts.PhoneNumber,
): AppUserContact => {
  const { jobTitle, middleName, givenName, familyName } = contact;

  let name: string;

  if (middleName) {
    name = `${givenName || ''} ${middleName || ''} ${familyName || ''}`;
  } else {
    name = `${givenName || ''} ${familyName || ''}`;
  }

  const phone = replace(phoneNumber.number, /[(,)\s-]/g, '');

  return {
    id,
    name,
    title: jobTitle,
    phone,
    notificationEnabled: true,
  };
};

const getContacts = (): Promise<AppUserContact[]> => {
  return new Promise((resolve, reject) => {
    Contacts.getAll((error, allContacts) => {
      //("get Contact from device==>",error)
      if (error) {
        reject(error);
        return;
      }

      const contactMap = new Map<string, AppUserContact>();
      forEach(allContacts, contact => {
        forEach(contact.phoneNumbers, (phone, index) => {
          if (!contactMap.has(phone.number)) {
            const id = `${contact.recordID}-${index}`;
            contactMap.set(id, formatContact(id, contact, phone));
          }
        });
      });

      const contacts = sortBy(Array.from(contactMap.values()), contact =>
        deburr(contact.name),
      );

      resolve(contacts);
    });
  });
};

export default getContacts;
