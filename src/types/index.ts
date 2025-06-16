/* eslint-disable import/prefer-default-export */
import {
  Incident,
  IncidentVideo,
  LatLng,
  Organization,
  OrganizationProcedure,
  OrganizationWithArea,
  ProcedureAction,
} from 'incident-code-core';
import { ReactElement, ReactNodeArray } from 'react';
import { MessageDescriptor } from 'react-intl';
import Reactotron from 'reactotron-react-native';

declare global {
  interface Console {
    tron: typeof Reactotron;
  }
}

// react-intl
type PrimitiveType = string | number | boolean | null | undefined | Date;

type FormatXMLElementFn = (...args: any[]) => string | object;

export interface FormatMessage {
  (
    descriptor: MessageDescriptor,
    values?: Record<string, PrimitiveType>,
  ): string;
  (
    descriptor: MessageDescriptor,
    values?: Record<string, PrimitiveType | ReactElement | FormatXMLElementFn>,
  ): string | ReactNodeArray;
}

// redux
export interface FluxAction {
  type: string;
  payload: any;
}

export interface FluxErrorAction {
  type: string;
  payload: Error;
  error: boolean;
}

export interface OrganizationSelection extends Organization {
  isSelected?: boolean;
}

export interface ProcedureSelection extends OrganizationProcedure {
  isSelected?: boolean;
}

export interface CountdownAction extends ProcedureAction {
  isCompleted?: boolean;
}

export interface IntersectOrganizationSelection extends OrganizationWithArea {
  isSelected?: boolean;
}

export interface LocalIncident extends Incident {
  videos?: IncidentVideo[];
  lastSentLocation?: LatLng;
}

export interface IncidentVideoInfo extends IncidentVideo {
  text?: string;
}

export enum LogEvent {
  TapCamera = 'TapCamera',
  TapFlash = 'TapFlash',
  TapMapFilter = 'TapMapFilter',
  TapMyLocation = 'TapMyLocation',
  TapRecord = 'TapRecord',
  TapStopRecord = 'TapStopRecord',
}

export interface GeocodeResponse {
  results: GeocodeResult[];
}

interface GeocodeResult {
  address_components: GeocodeAddressComponent[];
  formatted_address: string;
  partial_match: boolean;
  place_id: string;
  postcode_localities: string[];
  types: string[];
}

interface GeocodeAddressComponent {
  long_name: string;
  short_name: string;
  types: string[];
}
