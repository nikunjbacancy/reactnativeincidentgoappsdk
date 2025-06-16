/**
 *
 * SelectOrganizationScreen reducer
 *
 */
import { TimedEscortActionTypes, TimedEscortState } from './types';
export declare const initialState: TimedEscortState;
declare const timedEscortScreenReducer: <Base extends {
    readonly organizations?: readonly {
        readonly isSelected?: boolean | undefined;
        readonly id?: string | {
            readonly generationTime: number;
            readonly equals: (otherID: string | import("incident-code-core").ObjectId) => boolean;
            readonly getTimestamp: () => Date;
            readonly toHexString: () => string;
        } | undefined;
        readonly name?: string | undefined;
        readonly phone?: string | undefined;
        readonly imageUrl?: string | undefined;
        readonly createdAt?: Date | undefined;
        readonly updatedAt?: Date | undefined;
        readonly isDeleted?: boolean | undefined;
    }[] | undefined;
    readonly organizationGroups?: readonly any[] | undefined;
    readonly requestingOrganizations: boolean;
    readonly error: boolean;
    readonly errorMessage: string;
    readonly requestingProcedures: boolean;
    readonly procedures?: readonly {
        readonly isSelected?: boolean | undefined;
        readonly id?: string | {
            readonly generationTime: number;
            readonly equals: (otherID: string | import("incident-code-core").ObjectId) => boolean;
            readonly getTimestamp: () => Date;
            readonly toHexString: () => string;
        } | undefined;
        readonly organization: string | {
            readonly generationTime: number;
            readonly equals: (otherID: string | import("incident-code-core").ObjectId) => boolean;
            readonly getTimestamp: () => Date;
            readonly toHexString: () => string;
        } | {
            readonly id?: string | {
                readonly generationTime: number;
                readonly equals: (otherID: string | import("incident-code-core").ObjectId) => boolean;
                readonly getTimestamp: () => Date;
                readonly toHexString: () => string;
            } | undefined;
            readonly name?: string | undefined;
            readonly phone?: string | undefined;
            readonly imageUrl?: string | undefined;
            readonly createdAt?: Date | undefined;
            readonly updatedAt?: Date | undefined;
            readonly isDeleted?: boolean | undefined;
        };
        readonly name: string;
        readonly timer: number;
        readonly actions: readonly {
            readonly id?: string | undefined;
            readonly name: string;
            readonly finalAction?: boolean | undefined;
        }[];
        readonly createdAt?: Date | undefined;
        readonly updatedAt?: Date | undefined;
        readonly isDeleted?: boolean | undefined;
    }[] | undefined;
}>(base?: Base | undefined, action: TimedEscortActionTypes) => Base;
export default timedEscortScreenReducer;
