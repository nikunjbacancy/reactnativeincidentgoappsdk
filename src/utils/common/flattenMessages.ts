import produce, { Draft } from 'immer';
import assign from 'lodash/assign';
import isString from 'lodash/isString';
import keys from 'lodash/keys';
import reduce from 'lodash/reduce';

const flattenMessages = (
  nestedMessages: { [key: string]: any },
  prefix = '',
): {} =>
  reduce(
    keys(nestedMessages),
    (messages, key: any) => {
      const value = nestedMessages[key];
      const prefixedKey: string = prefix ? `${prefix}.${key}` : key;

      if (isString(value)) {
        return produce(messages, (draft: Draft<any>) => {
          draft[prefixedKey] = value;
        });
      }
      return assign(messages, flattenMessages(value, prefixedKey));
    },
    {},
  );

export default flattenMessages;
