/**
 *
 * SelectOrganizationScreen reducer
 *
 */
import { SelectOrganizationActionTypes, SelectOrganizationState } from './types';
export declare const initialState: SelectOrganizationState;
declare const selectOrganizationScreenReducer: <Base extends {
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
    readonly organizationGroups: any;
    readonly requestingOrganizations: boolean;
    readonly error: boolean;
    readonly errorMessage: string;
}>(base?: Base | undefined, action: SelectOrganizationActionTypes) => Base;
export default selectOrganizationScreenReducer;
