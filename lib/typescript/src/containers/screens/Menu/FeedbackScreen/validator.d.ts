/**
 *
 * FeedbackScreen form validator
 *
 */
import { FormatMessage } from 'types';
import * as Yup from 'yup';
declare const UpdateNameSchema: (formatMessage: FormatMessage) => Yup.ObjectSchema<Yup.Shape<object, {
    email: string;
    comment: string;
}>>;
export default UpdateNameSchema;
