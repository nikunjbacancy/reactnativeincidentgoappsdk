import deburr from 'lodash/deburr';
import forEach from 'lodash/forEach';
import replace from 'lodash/replace';
import sortBy from 'lodash/sortBy';
import Contacts from 'react-native-contacts';
const formatContact = (id, contact, phoneNumber) => {
  const {
    jobTitle,
    middleName,
    givenName,
    familyName
  } = contact;
  let name;
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
    notificationEnabled: true
  };
};
const getContacts = () => {
  return new Promise((resolve, reject) => {
    Contacts.getAll((error, allContacts) => {
      //("get Contact from device==>",error)
      if (error) {
        reject(error);
        return;
      }
      const contactMap = new Map();
      forEach(allContacts, contact => {
        forEach(contact.phoneNumbers, (phone, index) => {
          if (!contactMap.has(phone.number)) {
            const id = `${contact.recordID}-${index}`;
            contactMap.set(id, formatContact(id, contact, phone));
          }
        });
      });
      const contacts = sortBy(Array.from(contactMap.values()), contact => deburr(contact.name));
      resolve(contacts);
    });
  });
};
export default getContacts;
//# sourceMappingURL=getContacts.js.map