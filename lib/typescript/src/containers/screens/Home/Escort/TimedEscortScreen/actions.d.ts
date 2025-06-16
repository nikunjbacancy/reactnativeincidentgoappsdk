/**
 *
 * TimedEscortScreen actions
 *
 */
import { Id } from 'incident-code-core';
import { IntersectOrganizationSelection, ProcedureSelection } from 'types';
import { TimedEscortActionTypes } from './types';
export declare const getIntersectOrganizationsRequest: () => TimedEscortActionTypes;
export declare const getIntersectOrganizationsSuccess: (payload: {
    organizations: IntersectOrganizationSelection[];
    organizationGroups: any[];
}) => TimedEscortActionTypes;
export declare const getIntersectOrganizationsFailure: (error: Error) => TimedEscortActionTypes;
export declare const getOrganizationProceduresRequest: (id: Id) => TimedEscortActionTypes;
export declare const getOrganizationProceduresSuccess: (procedures: ProcedureSelection[]) => TimedEscortActionTypes;
export declare const getOrganizationProceduresFailure: (error: Error) => TimedEscortActionTypes;
export declare const toggleSelectOrganization: (id: Id) => TimedEscortActionTypes;
export declare const toggleSelectProcedure: (id: Id) => TimedEscortActionTypes;
export declare const clearSelections: () => {
    type: string;
};
