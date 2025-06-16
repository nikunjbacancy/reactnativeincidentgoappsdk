/* eslint-disable no-console */

import replace from 'lodash/replace';
import RNFetchBlob from 'rn-fetch-blob';
import { isIos } from '../../utils/device';
import { getCachedFineGeoPoint } from '../../utils/location';
import { deleteLocalVideo, getFileExtension } from '../../utils/video';
import axios from '../axios';
export const endpoints = {
  incidents: 'incidents'
};
export default {
  getAmazonOptions: async (incident, filePath) => {
    const newFilePath = isIos ? replace(filePath, 'file://', '') : filePath;
    const fileStat = await RNFetchBlob.fs.stat(newFilePath);
    const geoPoint = await getCachedFineGeoPoint();

    // @ts-ignore
    const amazonOptionsResponse = await axios.post(`${endpoints.incidents}/video`, {
      format: getFileExtension(filePath),
      size: fileStat.size,
      incident: incident.id,
      location: geoPoint
    });
    amazonOptionsResponse.data.filePath = newFilePath;
    return amazonOptionsResponse;
  },
  createIncident: async (request = {}) => {
    const geoPoint = await getCachedFineGeoPoint();
    return axios.post(endpoints.incidents, {
      ...request,
      location: geoPoint
    });
  },
  getVideo: videoId => axios.get(`${endpoints.incidents}/videos/${videoId}`),
  getVideos: incidentId => axios.get(`${endpoints.incidents}/${incidentId}/videos/`),
  uploadVideo: async options => {
    if (!options.filePath) return;
    // upload to s3
    await RNFetchBlob.fetch(options.method, `https://${options.host}${options.path}`, options.headers, RNFetchBlob.wrap(options.filePath));

    // delete video after upload
    await deleteLocalVideo(options.filePath);
  },
  deleteIncident: id => axios.delete(`${endpoints.incidents}/${id}`),
  doIncidentAction: incidentActionRequest => axios.post(`${endpoints.incidents}/action`, incidentActionRequest),
  getIncidents: query => axios.get(`${endpoints.incidents}/self`, {
    params: query
  }),
  getIncident: id => axios.get(`${endpoints.incidents}/${id}`),
  startChat: incidentChatRequest => axios.post(`${endpoints.incidents}/chat`, incidentChatRequest),
  getChat: id => axios.get(`${endpoints.incidents}/${id}/chat`),
  addLocation: (id, latLng) => axios.post(`${endpoints.incidents}/${id}/location`, latLng),
  startEscort: async request => axios.post(`${endpoints.incidents}/escort`, request),
  getEscort: async incidentId => axios.get(`${endpoints.incidents}/${incidentId}/escort`),
  updateEscortState: (incidentEscortId, request) => axios.patch(`${endpoints.incidents}/${incidentEscortId}/escort/state`, request),
  getPassiveEscort: async incidentId => axios.get(`${endpoints.incidents}/${incidentId}/escort/passive`),
  createPassiveEscort: async (request = {}) => {
    return axios.post(`${endpoints.incidents}/escort/passive`, {
      ...request
    });
  },
  passiveToActiveEscort: async request => {
    return axios.post(`${endpoints.incidents}/escort/passive/expired`, {
      ...request
    });
  },
  passiveToPanicEscort: async request => {
    return axios.post(`${endpoints.incidents}/escort/passive/panic`, {
      ...request
    });
  },
  updatePassiveEscortLog: async (request = {}) => {
    return axios.post(`${endpoints.incidents}/escort/passive/log`, {
      ...request
    });
  },
  updatePassiveEscortState: async (incidentEscortId, request) => axios.patch(`${endpoints.incidents}/${incidentEscortId}/escort/passive/state`, request),
  updateIncidentChatHistory: async (incidentId, request) => axios.post(`${endpoints.incidents}/${incidentId}/history`, request)
};
//# sourceMappingURL=index.js.map