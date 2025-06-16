/**
 *
 * SignInScreen form validations
 *
 */
import { FormatMessage } from '../../../../types';
import * as Yup from 'yup';
declare const SignInSchema: (formatMessage: FormatMessage) => Yup.ObjectSchema<Yup.Shape<object, {
    phone: string;
    agreeTos: boolean;
}>>;
export default SignInSchema;
