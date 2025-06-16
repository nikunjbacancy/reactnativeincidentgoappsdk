/**
 *
 * MyAccountScreen form validator
 *
 */

import { text } from '../../../../utils/regex';
import * as Yup from 'yup';
import messages from './messages';
const UpdateNameSchema = formatMessage => Yup.object().shape({
  firstName: Yup.string().matches(text, formatMessage(messages.nameValidate)).required(formatMessage(messages.nameValidate)),
  lastName: Yup.string().matches(text, formatMessage(messages.nameValidate)).required(formatMessage(messages.nameValidate))
});
export default UpdateNameSchema;
//# sourceMappingURL=validator.js.map