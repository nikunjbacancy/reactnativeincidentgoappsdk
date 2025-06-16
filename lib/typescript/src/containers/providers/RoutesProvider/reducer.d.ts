/**
 *
 * Routes reducer
 *
 */
import { RoutesProviderActionTypes, RoutesProviderState } from './types';
export declare const initialState: RoutesProviderState;
declare const routesProviderReducer: <Base extends {
    readonly screenAction?: {
        readonly type?: string | undefined;
        readonly action: () => void;
        readonly actionText: string;
        readonly cancel: () => void;
        readonly loading?: boolean | undefined;
        readonly disabled?: boolean | undefined;
    } | undefined;
    readonly showDuressInfo: boolean;
}>(base?: Base | undefined, action: RoutesProviderActionTypes) => Base;
export default routesProviderReducer;
