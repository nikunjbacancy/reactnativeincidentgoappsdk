"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _deburr = _interopRequireDefault(require("lodash/deburr"));
var _forEach = _interopRequireDefault(require("lodash/forEach"));
var _replace = _interopRequireDefault(require("lodash/replace"));
var _sortBy = _interopRequireDefault(require("lodash/sortBy"));
var _reactNativeContacts = _interopRequireDefault(require("react-native-contacts"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
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
  const phone = (0, _replace.default)(phoneNumber.number, /[(,)\s-]/g, '');
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
    _reactNativeContacts.default.getAll((error, allContacts) => {
      //("get Contact from device==>",error)
      if (error) {
        reject(error);
        return;
      }
      const contactMap = new Map();
      (0, _forEach.default)(allContacts, contact => {
        (0, _forEach.default)(contact.phoneNumbers, (phone, index) => {
          if (!contactMap.has(phone.number)) {
            const id = `${contact.recordID}-${index}`;
            contactMap.set(id, formatContact(id, contact, phone));
          }
        });
      });
      const contacts = (0, _sortBy.default)(Array.from(contactMap.values()), contact => (0, _deburr.default)(contact.name));
      resolve(contacts);
    });
  });
};
var _default = exports.default = getContacts;
//# sourceMappingURL=getContacts.js.map