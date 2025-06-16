/**
 *
 * OrganizationScreen reducer
 *
 */
import { OrganizationActionTypes, OrganizationState } from './types';
export declare const initialState: OrganizationState;
declare const organizationScreenReducer: <Base extends {
    readonly isLoading: boolean;
    readonly organizations: readonly {
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
    }[];
}>(base?: Base | undefined, action: OrganizationActionTypes) => Base;
export default organizationScreenReducer;
