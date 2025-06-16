import keys from 'lodash/keys';
import reduce from 'lodash/reduce';
import replace from 'lodash/replace';

interface TPlaceholders {
  [key: string]: string;
}

const formatString = (str: string, placeholders: TPlaceholders): string => {
  return reduce(
    keys(placeholders),
    (prevStr: string, key: string) => {
      const reg = new RegExp(`\\\${${key}}`, 'gm');
      return replace(prevStr, reg, placeholders[key]);
    },
    str,
  );
};

export default formatString;
