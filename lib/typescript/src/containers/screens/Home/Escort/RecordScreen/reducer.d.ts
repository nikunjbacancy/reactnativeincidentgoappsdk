/**
 *
 * SelectOrganizationScreen reducer
 *
 */
import { RecordScreenActionTypes, RecordState, RecordType } from './types';
export declare const initialState: RecordState;
declare const recordScreenReducer: <Base extends {
    readonly shouldShowCallModal: boolean;
    readonly shouldShowSafeModal: boolean;
    readonly shouldShowExitPanicModal: boolean;
    readonly shouldShowPanicInfo: boolean;
    readonly recordType: RecordType;
    readonly shouldShowChatModal: boolean;
    readonly messages: readonly {
        readonly _id: string | number;
        readonly text: string;
        readonly createdAt: number | Date;
        readonly user: {
            readonly _id: string | number;
            readonly name?: string | undefined;
            readonly avatar?: string | ((x: any) => JSX.Element) | undefined;
        };
        readonly image?: string | undefined;
        readonly video?: string | undefined;
        readonly audio?: string | undefined;
        readonly system?: boolean | undefined;
        readonly sent?: boolean | undefined;
        readonly received?: boolean | undefined;
        readonly pending?: boolean | undefined;
        readonly quickReplies?: {
            readonly type: "checkbox" | "radio";
            readonly values: readonly {
                readonly title: string;
                readonly value: string;
                readonly messageId?: any;
            }[];
            readonly keepIt?: boolean | undefined;
        } | undefined;
    }[];
    readonly requestingImSafe: boolean;
    readonly isPanicMode: boolean;
    readonly fromPassiveEscort: boolean;
    readonly error: boolean;
    readonly errorMessage: string;
    readonly appState: import("react-native").AppStateStatus;
}>(base?: Base | undefined, action: RecordScreenActionTypes) => Base;
export default recordScreenReducer;
