/**
 *
 * UpdateNameScreen form validator
 *
 */
import { FormatMessage } from '../../../../types';
import * as Yup from 'yup';
declare const UpdateNameSchema: (formatMessage: FormatMessage) => Yup.ObjectSchema<Yup.Shape<object, {
    firstName: string;
    lastName: string;
}>>;
export default UpdateNameSchema;
