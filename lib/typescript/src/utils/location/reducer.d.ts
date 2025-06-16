import { LocationTrackListActionTypes, GetAllGeofencesState } from './types';
export declare const initialState: GetAllGeofencesState;
declare const geofenceReducer: <Base extends {
    readonly isLoading: boolean;
    readonly payload: any;
}>(base?: Base | undefined, action: LocationTrackListActionTypes) => Base;
export default geofenceReducer;
