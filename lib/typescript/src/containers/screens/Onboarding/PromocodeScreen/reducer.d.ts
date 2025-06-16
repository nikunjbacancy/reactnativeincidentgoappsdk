import { RegisterUserActionTypes, RegisterUserState } from './types';
export declare const initialState: RegisterUserState;
declare const RegisterUserScreenReducer: <Base extends {
    readonly access_token: string;
}>(base?: Base | undefined, action: RegisterUserActionTypes) => Base;
export default RegisterUserScreenReducer;
