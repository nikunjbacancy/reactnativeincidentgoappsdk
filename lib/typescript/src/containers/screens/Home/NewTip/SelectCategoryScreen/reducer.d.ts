/**
 *
 * SelectCategoryScreen reducer
 *
 */
import { IncidentCategoryState, IncidentCategoryTypes } from './types';
export declare const initialState: IncidentCategoryState;
declare const incidentCategoryScreenReducer: <Base extends {
    readonly category?: {
        readonly name: string;
        readonly display: string;
        readonly notificationName: string;
        readonly imageUrl: string;
        readonly backgroundColor: string;
        readonly backgroundGradientColors: readonly string[];
        readonly order: number;
        readonly enabled: boolean;
    } | undefined;
}>(base?: Base | undefined, action: IncidentCategoryTypes) => Base;
export default incidentCategoryScreenReducer;
