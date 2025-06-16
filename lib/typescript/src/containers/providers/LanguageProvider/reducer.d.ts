/**
 *
 * LanguageProvider reducer
 *
 */
import { LanguageProviderState } from './types';
export declare const initialState: LanguageProviderState;
declare const languageProviderReducer: <Base extends {
    readonly locale: string;
}>(base?: Base | undefined, action: import("./types").ChangeLocaleAction) => Base;
export default languageProviderReducer;
