import keys from 'lodash/keys';
import reduce from 'lodash/reduce';
import replace from 'lodash/replace';
const formatString = (str, placeholders) => {
  return reduce(keys(placeholders), (prevStr, key) => {
    const reg = new RegExp(`\\\${${key}}`, 'gm');
    return replace(prevStr, reg, placeholders[key]);
  }, str);
};
export default formatString;
//# sourceMappingURL=formatString.js.map