import { AxiosResponse } from 'axios';
import { History, Id, Incident, IncidentActionRequest, IncidentChat, IncidentChatRequest, IncidentEscort, IncidentEscortRequest, IncidentPassive, IncidentPassiveEscortRequest, IncidentPassiveLogRequest, IncidentRequest, IncidentVideo, IncidentVideoUploadOptions, LatLng, ObjectId, QueryResult, QuerySpecification } from 'incident-code-core';
export declare const endpoints: {
    incidents: string;
};
declare const _default: {
    getAmazonOptions: (incident: Incident, filePath: string) => Promise<AxiosResponse<IncidentVideoUploadOptions>>;
    createIncident: (request?: IncidentRequest) => Promise<AxiosResponse<Incident>>;
    getVideo: (videoId?: Id) => Promise<AxiosResponse<IncidentVideo>>;
    getVideos: (incidentId?: Id) => Promise<AxiosResponse<QueryResult<IncidentVideo>>>;
    uploadVideo: (options: IncidentVideoUploadOptions) => Promise<void>;
    deleteIncident: (id?: Id) => Promise<AxiosResponse<any>>;
    doIncidentAction: (incidentActionRequest: IncidentActionRequest) => Promise<AxiosResponse<any>>;
    getIncidents: (query: QuerySpecification) => Promise<AxiosResponse<QueryResult<Incident>>>;
    getIncident: (id: Id) => Promise<AxiosResponse<Incident>>;
    startChat: (incidentChatRequest: IncidentChatRequest) => Promise<AxiosResponse<any>>;
    getChat: (id: Id) => Promise<AxiosResponse<IncidentChat>>;
    addLocation: (id: Id, latLng: LatLng) => Promise<AxiosResponse<any>>;
    startEscort: (request: IncidentEscortRequest) => Promise<AxiosResponse<Incident>>;
    getEscort: (incidentId: Id) => Promise<AxiosResponse<IncidentEscort>>;
    updateEscortState: (incidentEscortId: string | ObjectId | undefined, request: {
        state: string;
        comment?: string;
    }) => Promise<AxiosResponse<any>>;
    getPassiveEscort: (incidentId: Id) => Promise<AxiosResponse<IncidentPassive>>;
    createPassiveEscort: (request?: IncidentPassiveEscortRequest) => Promise<AxiosResponse<Incident>>;
    passiveToActiveEscort: (request: Incident) => Promise<AxiosResponse<void>>;
    passiveToPanicEscort: (request: Incident) => Promise<AxiosResponse<void>>;
    updatePassiveEscortLog: (request?: IncidentPassiveLogRequest) => Promise<AxiosResponse<void>>;
    updatePassiveEscortState: (incidentEscortId: string | ObjectId | undefined, request: {
        state: string;
        comment?: string;
    }) => Promise<AxiosResponse<any>>;
    updateIncidentChatHistory: (incidentId: Id, request: History) => Promise<AxiosResponse<void>>;
};
export default _default;
