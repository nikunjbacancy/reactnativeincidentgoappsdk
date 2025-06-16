/* eslint-disable no-console */
import { AxiosResponse } from 'axios';
import {
  History,
  Id,
  Incident,
  IncidentActionRequest,
  IncidentChat,
  IncidentChatRequest,
  IncidentEscort,
  IncidentEscortRequest,
  IncidentPassive,
  IncidentPassiveEscortRequest,
  IncidentPassiveLogRequest,
  IncidentRequest,
  IncidentVideo,
  IncidentVideoRequest,
  IncidentVideoUploadOptions,
  LatLng,
  ObjectId,
  QueryResult,
  QuerySpecification,
} from 'incident-code-core';
import replace from 'lodash/replace';
import RNFetchBlob from 'rn-fetch-blob';
import { isIos } from '../../utils/device';
import { getCachedFineGeoPoint } from '../../utils/location';
import { deleteLocalVideo, getFileExtension } from '../../utils/video';

import axios from '../axios';

export const endpoints = {
  incidents: 'incidents',
};

export default {
  getAmazonOptions: async (incident: Incident, filePath: string) => {
    const newFilePath = isIos ? replace(filePath, 'file://', '') : filePath;
    const fileStat = await RNFetchBlob.fs.stat(newFilePath);
    const geoPoint = await getCachedFineGeoPoint();

    // @ts-ignore
    const amazonOptionsResponse: AxiosResponse<IncidentVideoUploadOptions> = await axios.post<
      IncidentVideoRequest,
      IncidentVideoUploadOptions
    >(`${endpoints.incidents}/video`, {
      format: getFileExtension(filePath),
      size: fileStat.size,
      incident: incident.id,
      location: geoPoint,
    });

    amazonOptionsResponse.data.filePath = newFilePath;

    return amazonOptionsResponse;
  },
  createIncident: async (request: IncidentRequest = {} as IncidentRequest) => {
    const geoPoint = await getCachedFineGeoPoint();
    return axios.post<Incident>(endpoints.incidents, {
      ...request,
      location: geoPoint,
    });
  },
  getVideo: (videoId?: Id) =>
    axios.get<IncidentVideo>(`${endpoints.incidents}/videos/${videoId}`),
  getVideos: (incidentId?: Id) =>
    axios.get<QueryResult<IncidentVideo>>(
      `${endpoints.incidents}/${incidentId}/videos/`,
    ),
  uploadVideo: async (options: IncidentVideoUploadOptions) => {
    if (!options.filePath) return;
    // upload to s3
    await RNFetchBlob.fetch(
      options.method as any,
      `https://${options.host}${options.path}`,
      options.headers as any,
      RNFetchBlob.wrap(options.filePath),
    );

    // delete video after upload
    await deleteLocalVideo(options.filePath);
  },
  deleteIncident: (id?: Id) => axios.delete(`${endpoints.incidents}/${id}`),
  doIncidentAction: (incidentActionRequest: IncidentActionRequest) =>
    axios.post(`${endpoints.incidents}/action`, incidentActionRequest),
  getIncidents: (query: QuerySpecification) =>
    axios.get<QueryResult<Incident>>(`${endpoints.incidents}/self`, {
      params: query,
    }),
  getIncident: (id: Id) => axios.get<Incident>(`${endpoints.incidents}/${id}`),
  startChat: (incidentChatRequest: IncidentChatRequest) =>
    axios.post(`${endpoints.incidents}/chat`, incidentChatRequest),
  getChat: (id: Id) =>
    axios.get<IncidentChat>(`${endpoints.incidents}/${id}/chat`),
  addLocation: (id: Id, latLng: LatLng) =>
    axios.post(`${endpoints.incidents}/${id}/location`, latLng),
  startEscort: async (
    request: IncidentEscortRequest,
  ): Promise<AxiosResponse<Incident>> =>
    axios.post(`${endpoints.incidents}/escort`, request),
  getEscort: async (incidentId: Id): Promise<AxiosResponse<IncidentEscort>> =>
    axios.get(`${endpoints.incidents}/${incidentId}/escort`),
  updateEscortState: (
    incidentEscortId: string | ObjectId | undefined,
    request: { state: string; comment?: string },
  ) =>
    axios.patch(
      `${endpoints.incidents}/${incidentEscortId}/escort/state`,
      request,
    ),
  getPassiveEscort: async (
    incidentId: Id,
  ): Promise<AxiosResponse<IncidentPassive>> =>
    axios.get(`${endpoints.incidents}/${incidentId}/escort/passive`),
  createPassiveEscort: async (
    request: IncidentPassiveEscortRequest = {} as IncidentPassiveEscortRequest,
  ) => {
    return axios.post<Incident>(`${endpoints.incidents}/escort/passive`, {
      ...request,
    });
  },
  passiveToActiveEscort: async (request: Incident) => {
    return axios.post<void>(`${endpoints.incidents}/escort/passive/expired`, {
      ...request,
    });
  },
  passiveToPanicEscort: async (request: Incident) => {
    return axios.post<void>(`${endpoints.incidents}/escort/passive/panic`, {
      ...request,
    });
  },
  updatePassiveEscortLog: async (
    request: IncidentPassiveLogRequest = {} as IncidentPassiveLogRequest,
  ) => {
    return axios.post<void>(`${endpoints.incidents}/escort/passive/log`, {
      ...request,
    });
  },
  updatePassiveEscortState: async (
    incidentEscortId: string | ObjectId | undefined,
    request: { state: string; comment?: string },
  ) =>
    axios.patch(
      `${endpoints.incidents}/${incidentEscortId}/escort/passive/state`,
      request,
    ),
  updateIncidentChatHistory: async (incidentId: Id, request: History) =>
    axios.post<void>(`${endpoints.incidents}/${incidentId}/history`, request),
};
