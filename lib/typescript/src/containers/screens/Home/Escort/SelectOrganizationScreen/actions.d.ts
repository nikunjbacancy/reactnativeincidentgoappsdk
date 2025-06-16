/**
 *
 * SelectOrganizationScreen actions
 *
 */
import { Id } from 'incident-code-core';
import { Location } from 'react-native-background-geolocation';
import { IntersectOrganizationSelection } from 'types';
import { SelectOrganizationActionTypes } from './types';
export declare const getIntersectOrganizationsRequest: (onLocation: (location: Location) => void) => SelectOrganizationActionTypes;
export declare const getIntersectOrganizationsSuccess: (organizations: IntersectOrganizationSelection[]) => any;
export declare const getIntersectOrganizationsFailure: (error: Error) => SelectOrganizationActionTypes;
export declare const toggleSelectOrganization: (id: Id) => SelectOrganizationActionTypes;
