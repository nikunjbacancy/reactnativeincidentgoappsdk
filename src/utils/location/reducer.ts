/**
 *
 * EscortTypeScreen reducer
 *
 */
import produce, { Draft } from 'immer';

import { GET_ALL_GEOFENCS_SUCCESS, GET_ALL_GEOFENCS_FAILURE, SET_SITE_KEY_LOCATION_SUCCESS, SET_SITE_KEY_LOCATION_FAILURE, GET_ALL_GEOFENCS_REQUEST } from './constants';
import { LocationTrackListActionTypes, GetAllGeofencesState } from './types';

export const initialState: GetAllGeofencesState = {
    isLoading: false,
    payload: undefined,
};

const geofenceReducer = produce(
    (draft: Draft<GetAllGeofencesState>, action: LocationTrackListActionTypes) => {
        switch (action.type) {
            case GET_ALL_GEOFENCS_REQUEST:
                draft.isLoading = true;
                break;
            case GET_ALL_GEOFENCS_SUCCESS:
                draft.isLoading = false;
                draft.payload = action.payload
                break;
            case GET_ALL_GEOFENCS_FAILURE:
                draft.isLoading = false;
                draft.payload = null
                break;
            case SET_SITE_KEY_LOCATION_SUCCESS:
                draft.isLoading = false;
                draft.payload = action.payload
                break;
            case SET_SITE_KEY_LOCATION_FAILURE:
                draft.isLoading = true;
                draft.payload = null
                break;
            default:
                break;
        }
    },
    initialState,
);

export default geofenceReducer;
