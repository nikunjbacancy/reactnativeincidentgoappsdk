import { SignInCodeActionTypes, SendCodeState } from './types';
export declare const initialState: SendCodeState;
declare const SignInCodeScreenReducer: <Base extends {
    readonly newUser: boolean;
    readonly token: string;
}>(base?: Base | undefined, action: SignInCodeActionTypes) => Base;
export default SignInCodeScreenReducer;
