/**
 *
 * SignInCodeScreen form validator
 *
 */
import { FormatMessage } from 'types';
import * as Yup from 'yup';
declare const SignInCodeSchema: (formatMessage: FormatMessage) => Yup.ObjectSchema<Yup.Shape<object, {
    code: string;
}>>;
export default SignInCodeSchema;
