/**
 *
 * App reducer
 *
 */
/// <reference types="react-native-background-geolocation/src/declarations/types" />
/// <reference types="react-native-background-geolocation/src/declarations/interfaces/locationauthorizationalert" />
/// <reference types="react-native-background-geolocation/src/declarations/interfaces/permissionrationale" />
/// <reference types="react-native-background-geolocation/src/declarations/interfaces/config" />
/// <reference types="react-native-background-geolocation/src/declarations/interfaces/connectivitychangeevent" />
/// <reference types="react-native-background-geolocation/src/declarations/interfaces/currentpositionrequest" />
/// <reference types="react-native-background-geolocation/src/declarations/interfaces/geofence" />
/// <reference types="react-native-background-geolocation/src/declarations/interfaces/geofenceevent" />
/// <reference types="react-native-background-geolocation/src/declarations/interfaces/geofenceschangeevent" />
/// <reference types="react-native-background-geolocation/src/declarations/interfaces/heartbeatevent" />
/// <reference types="react-native-background-geolocation/src/declarations/interfaces/headlessevent" />
/// <reference types="react-native-background-geolocation/src/declarations/interfaces/httpevent" />
/// <reference types="react-native-background-geolocation/src/declarations/interfaces/motionactivityevent" />
/// <reference types="react-native-background-geolocation/src/declarations/interfaces/providerchangeevent" />
/// <reference types="react-native-background-geolocation/src/declarations/interfaces/location" />
/// <reference types="react-native-background-geolocation/src/declarations/interfaces/sqlquery" />
/// <reference types="react-native-background-geolocation/src/declarations/interfaces/logger" />
/// <reference types="react-native-background-geolocation/src/declarations/interfaces/motionchangeevent" />
/// <reference types="react-native-background-geolocation/src/declarations/interfaces/sensors" />
/// <reference types="react-native-background-geolocation/src/declarations/interfaces/state" />
/// <reference types="react-native-background-geolocation/src/declarations/interfaces/watchpositionrequest" />
/// <reference types="react-native-background-geolocation/src/declarations/interfaces/devicesettings" />
/// <reference types="react-native-background-geolocation/src/declarations/interfaces/notification" />
/// <reference types="react-native-background-geolocation/src/declarations/interfaces/deviceinfo" />
/// <reference types="react-native-background-geolocation/src/declarations/interfaces/authorization" />
/// <reference types="react-native-background-geolocation/src/declarations/interfaces/authorizationevent" />
/// <reference types="react-native-background-geolocation/src/declarations/interfaces/transistorauthorizationtoken" />
/// <reference types="react-native-background-geolocation/src/declarations/interfaces/subscription" />
/// <reference types="react-native-background-geolocation/src/declarations/backgroundgeolocation" />
import { TipCameraMode } from '../../components/TipCamera/types';
import { AppActionTypes, AppState } from './types';
export declare const initialState: AppState;
declare const appReducer: <Base extends {
    readonly isLoadingConfigs: boolean;
    readonly isLoadingProfile: boolean;
    readonly isLoadingTwilioToken: boolean;
    readonly user: {
        readonly id?: string | {
            readonly generationTime: number;
            readonly equals: (otherID: string | import("incident-code-core").ObjectId) => boolean;
            readonly getTimestamp: () => Date;
            readonly toHexString: () => string;
        } | undefined;
        readonly firstName?: string | undefined;
        readonly lastName?: string | undefined;
        readonly fullName?: string | undefined;
        readonly portraitUrl?: string | undefined;
        readonly email?: string | undefined;
        readonly phone?: string | undefined;
        readonly roles?: readonly string[] | undefined;
        readonly lastLocation?: {
            readonly type: "Point";
            readonly coordinates?: readonly [number, number] | undefined;
        } | undefined;
        readonly lastLocationExpiredAt?: Date | undefined;
        readonly registeredAt?: Date | undefined;
        readonly contacts?: readonly {
            readonly id?: string | undefined;
            readonly name?: string | undefined;
            readonly phone?: string | undefined;
            readonly title?: string | undefined;
            readonly notificationEnabled?: boolean | undefined;
        }[] | undefined;
        readonly settings?: {
            readonly [x: string]: any;
            readonly twilioSid?: string | undefined;
            readonly notificationEnabled?: boolean | undefined;
            readonly notificationDistance?: number | undefined;
        } | undefined;
        readonly organizations?: readonly (string | {
            readonly generationTime: number;
            readonly equals: (otherID: string | import("incident-code-core").ObjectId) => boolean;
            readonly getTimestamp: () => Date;
            readonly toHexString: () => string;
        } | {
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
        })[] | undefined;
    };
    readonly configs: {
        readonly remoteLogger: boolean;
        readonly contactLimit: number;
        readonly incidentDurationMs: number;
        readonly locationUpdateInterval: number;
        readonly defaultNotificationDistance: number;
        readonly maxNotificationDistance: number;
        readonly maxRecordDuration: number;
        readonly fetchInterval: number;
        readonly incidentCategories: readonly {
            readonly name: string;
            readonly display: string;
            readonly notificationName: string;
            readonly imageUrl: string;
            readonly backgroundColor: string;
            readonly backgroundGradientColors: readonly string[];
            readonly order: number;
            readonly enabled: boolean;
        }[];
        readonly getIncidentCategory: (category: string) => import("incident-code-core").IncidentCategoryConfig;
    };
    readonly nextOnboardingScreen: string;
    readonly newTip: {
        readonly incident?: {
            readonly videos?: readonly {
                readonly id?: string | {
                    readonly generationTime: number;
                    readonly equals: (otherID: string | import("incident-code-core").ObjectId) => boolean;
                    readonly getTimestamp: () => Date;
                    readonly toHexString: () => string;
                } | undefined;
                readonly location?: {
                    readonly type: "Point";
                    readonly coordinates?: readonly [number, number] | undefined;
                } | undefined;
                readonly address?: string | undefined;
                readonly url?: string | undefined;
                readonly duration?: number | undefined;
                readonly thumbnailUrl?: string | undefined;
                readonly incident?: string | {
                    readonly generationTime: number;
                    readonly equals: (otherID: string | import("incident-code-core").ObjectId) => boolean;
                    readonly getTimestamp: () => Date;
                    readonly toHexString: () => string;
                } | {
                    readonly id?: string | {
                        readonly generationTime: number;
                        readonly equals: (otherID: string | import("incident-code-core").ObjectId) => boolean;
                        readonly getTimestamp: () => Date;
                        readonly toHexString: () => string;
                    } | undefined;
                    readonly type: import("incident-code-core").IncidentType;
                    readonly createdAt?: Date | undefined;
                    readonly createdBy?: string | {
                        readonly id?: string | {
                            readonly generationTime: number;
                            readonly equals: (otherID: string | import("incident-code-core").ObjectId) => boolean;
                            readonly getTimestamp: () => Date;
                            readonly toHexString: () => string;
                        } | undefined;
                        readonly firstName?: string | undefined;
                        readonly lastName?: string | undefined;
                        readonly fullName?: string | undefined;
                        readonly portraitUrl?: string | undefined;
                        readonly email?: string | undefined;
                        readonly phone?: string | undefined;
                        readonly roles?: readonly string[] | undefined;
                        readonly lastLocation?: {
                            readonly type: "Point";
                            readonly coordinates?: readonly [number, number] | undefined;
                        } | undefined;
                        readonly lastLocationExpiredAt?: Date | undefined;
                        readonly registeredAt?: Date | undefined;
                        readonly contacts?: readonly {
                            readonly id?: string | undefined;
                            readonly name?: string | undefined;
                            readonly phone?: string | undefined;
                            readonly title?: string | undefined;
                            readonly notificationEnabled?: boolean | undefined;
                        }[] | undefined;
                        readonly settings?: {
                            readonly [x: string]: any;
                            readonly twilioSid?: string | undefined;
                            readonly notificationEnabled?: boolean | undefined;
                            readonly notificationDistance?: number | undefined;
                        } | undefined;
                        readonly organizations?: readonly (string | {
                            readonly generationTime: number;
                            readonly equals: (otherID: string | import("incident-code-core").ObjectId) => boolean;
                            readonly getTimestamp: () => Date;
                            readonly toHexString: () => string;
                        } | {
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
                        })[] | undefined;
                    } | {
                        readonly generationTime: number;
                        readonly equals: (otherID: string | import("incident-code-core").ObjectId) => boolean;
                        readonly getTimestamp: () => Date;
                        readonly toHexString: () => string;
                    } | undefined;
                    readonly updatedAt?: Date | undefined;
                    readonly actionHistory?: {
                        readonly callEmergency?: boolean | undefined;
                        readonly alertOrganization?: boolean | undefined;
                        readonly publicize?: boolean | undefined;
                        readonly alertContacts?: boolean | undefined;
                    } | undefined;
                    readonly address?: string | undefined;
                    readonly category?: string | undefined;
                    readonly code?: string | undefined;
                    readonly comment?: string | undefined;
                    readonly deletedAt?: Date | undefined;
                    readonly expiredAt?: Date | undefined;
                    readonly location?: {
                        readonly type: "Point";
                        readonly coordinates?: readonly [number, number] | undefined;
                    } | undefined;
                    readonly userDeletedAt?: Date | undefined;
                    readonly numberOfUploads?: number | undefined;
                    readonly hasChat?: boolean | undefined;
                    readonly isDeleted?: boolean | undefined;
                    readonly isPublic?: boolean | undefined;
                    readonly isReady?: boolean | undefined;
                    readonly isUserDeleted?: boolean | undefined;
                    readonly isPanic?: boolean | undefined;
                    readonly isSafe?: boolean | undefined;
                    readonly organization?: string | {
                        readonly generationTime: number;
                        readonly equals: (otherID: string | import("incident-code-core").ObjectId) => boolean;
                        readonly getTimestamp: () => Date;
                        readonly toHexString: () => string;
                    } | {
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
                    } | undefined;
                    readonly organizationArea?: string | {
                        readonly generationTime: number;
                        readonly equals: (otherID: string | import("incident-code-core").ObjectId) => boolean;
                        readonly getTimestamp: () => Date;
                        readonly toHexString: () => string;
                    } | {
                        readonly id?: string | {
                            readonly generationTime: number;
                            readonly equals: (otherID: string | import("incident-code-core").ObjectId) => boolean;
                            readonly getTimestamp: () => Date;
                            readonly toHexString: () => string;
                        } | undefined;
                        readonly organization?: string | {
                            readonly generationTime: number;
                            readonly equals: (otherID: string | import("incident-code-core").ObjectId) => boolean;
                            readonly getTimestamp: () => Date;
                            readonly toHexString: () => string;
                        } | {
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
                        } | undefined;
                        readonly name?: string | undefined;
                        readonly area?: {
                            readonly type: "Polygon";
                            readonly coordinates?: readonly [readonly (readonly [number, number])[]] | undefined;
                        } | undefined;
                        readonly address?: string | undefined;
                        readonly createdAt?: Date | undefined;
                        readonly updatedAt?: Date | undefined;
                    } | undefined;
                    readonly mapUrl?: string | undefined;
                    readonly thumbnailUrl?: string | undefined;
                    readonly isResolved?: boolean | undefined;
                    readonly resolveComment?: string | undefined;
                    readonly resolvedAt?: Date | undefined;
                    readonly isViolated?: boolean | undefined;
                    readonly reportedAt?: Date | undefined;
                    readonly reportedBy?: string | {
                        readonly id?: string | {
                            readonly generationTime: number;
                            readonly equals: (otherID: string | import("incident-code-core").ObjectId) => boolean;
                            readonly getTimestamp: () => Date;
                            readonly toHexString: () => string;
                        } | undefined;
                        readonly firstName?: string | undefined;
                        readonly lastName?: string | undefined;
                        readonly fullName?: string | undefined;
                        readonly portraitUrl?: string | undefined;
                        readonly email?: string | undefined;
                        readonly phone?: string | undefined;
                        readonly roles?: readonly string[] | undefined;
                        readonly lastLocation?: {
                            readonly type: "Point";
                            readonly coordinates?: readonly [number, number] | undefined;
                        } | undefined;
                        readonly lastLocationExpiredAt?: Date | undefined;
                        readonly registeredAt?: Date | undefined;
                        readonly contacts?: readonly {
                            readonly id?: string | undefined;
                            readonly name?: string | undefined;
                            readonly phone?: string | undefined;
                            readonly title?: string | undefined;
                            readonly notificationEnabled?: boolean | undefined;
                        }[] | undefined;
                        readonly settings?: {
                            readonly [x: string]: any;
                            readonly twilioSid?: string | undefined;
                            readonly notificationEnabled?: boolean | undefined;
                            readonly notificationDistance?: number | undefined;
                        } | undefined;
                        readonly organizations?: readonly (string | {
                            readonly generationTime: number;
                            readonly equals: (otherID: string | import("incident-code-core").ObjectId) => boolean;
                            readonly getTimestamp: () => Date;
                            readonly toHexString: () => string;
                        } | {
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
                        })[] | undefined;
                    } | {
                        readonly generationTime: number;
                        readonly equals: (otherID: string | import("incident-code-core").ObjectId) => boolean;
                        readonly getTimestamp: () => Date;
                        readonly toHexString: () => string;
                    } | undefined;
                    readonly violationAction?: import("incident-code-core").ViolationAction | undefined;
                    readonly violationComment?: string | undefined;
                    readonly violationType?: import("incident-code-core").ViolationType | undefined;
                    readonly isNewIncident?: boolean | undefined;
                } | undefined;
                readonly uploadId?: number | undefined;
                readonly isUploaded?: boolean | undefined;
                readonly isDeleted?: boolean | undefined;
                readonly createdBy?: string | {
                    readonly id?: string | {
                        readonly generationTime: number;
                        readonly equals: (otherID: string | import("incident-code-core").ObjectId) => boolean;
                        readonly getTimestamp: () => Date;
                        readonly toHexString: () => string;
                    } | undefined;
                    readonly firstName?: string | undefined;
                    readonly lastName?: string | undefined;
                    readonly fullName?: string | undefined;
                    readonly portraitUrl?: string | undefined;
                    readonly email?: string | undefined;
                    readonly phone?: string | undefined;
                    readonly roles?: readonly string[] | undefined;
                    readonly lastLocation?: {
                        readonly type: "Point";
                        readonly coordinates?: readonly [number, number] | undefined;
                    } | undefined;
                    readonly lastLocationExpiredAt?: Date | undefined;
                    readonly registeredAt?: Date | undefined;
                    readonly contacts?: readonly {
                        readonly id?: string | undefined;
                        readonly name?: string | undefined;
                        readonly phone?: string | undefined;
                        readonly title?: string | undefined;
                        readonly notificationEnabled?: boolean | undefined;
                    }[] | undefined;
                    readonly settings?: {
                        readonly [x: string]: any;
                        readonly twilioSid?: string | undefined;
                        readonly notificationEnabled?: boolean | undefined;
                        readonly notificationDistance?: number | undefined;
                    } | undefined;
                    readonly organizations?: readonly (string | {
                        readonly generationTime: number;
                        readonly equals: (otherID: string | import("incident-code-core").ObjectId) => boolean;
                        readonly getTimestamp: () => Date;
                        readonly toHexString: () => string;
                    } | {
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
                    })[] | undefined;
                } | {
                    readonly generationTime: number;
                    readonly equals: (otherID: string | import("incident-code-core").ObjectId) => boolean;
                    readonly getTimestamp: () => Date;
                    readonly toHexString: () => string;
                } | undefined;
                readonly createdAt?: Date | undefined;
                readonly updatedAt?: Date | undefined;
            }[] | undefined;
            readonly lastSentLocation?: {
                readonly lat: number;
                readonly lng: number;
            } | undefined;
            readonly id?: string | {
                readonly generationTime: number;
                readonly equals: (otherID: string | import("incident-code-core").ObjectId) => boolean;
                readonly getTimestamp: () => Date;
                readonly toHexString: () => string;
            } | undefined;
            readonly type: import("incident-code-core").IncidentType;
            readonly createdAt?: Date | undefined;
            readonly createdBy?: string | {
                readonly id?: string | {
                    readonly generationTime: number;
                    readonly equals: (otherID: string | import("incident-code-core").ObjectId) => boolean;
                    readonly getTimestamp: () => Date;
                    readonly toHexString: () => string;
                } | undefined;
                readonly firstName?: string | undefined;
                readonly lastName?: string | undefined;
                readonly fullName?: string | undefined;
                readonly portraitUrl?: string | undefined;
                readonly email?: string | undefined;
                readonly phone?: string | undefined;
                readonly roles?: readonly string[] | undefined;
                readonly lastLocation?: {
                    readonly type: "Point";
                    readonly coordinates?: readonly [number, number] | undefined;
                } | undefined;
                readonly lastLocationExpiredAt?: Date | undefined;
                readonly registeredAt?: Date | undefined;
                readonly contacts?: readonly {
                    readonly id?: string | undefined;
                    readonly name?: string | undefined;
                    readonly phone?: string | undefined;
                    readonly title?: string | undefined;
                    readonly notificationEnabled?: boolean | undefined;
                }[] | undefined;
                readonly settings?: {
                    readonly [x: string]: any;
                    readonly twilioSid?: string | undefined;
                    readonly notificationEnabled?: boolean | undefined;
                    readonly notificationDistance?: number | undefined;
                } | undefined;
                readonly organizations?: readonly (string | {
                    readonly generationTime: number;
                    readonly equals: (otherID: string | import("incident-code-core").ObjectId) => boolean;
                    readonly getTimestamp: () => Date;
                    readonly toHexString: () => string;
                } | {
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
                })[] | undefined;
            } | {
                readonly generationTime: number;
                readonly equals: (otherID: string | import("incident-code-core").ObjectId) => boolean;
                readonly getTimestamp: () => Date;
                readonly toHexString: () => string;
            } | undefined;
            readonly updatedAt?: Date | undefined;
            readonly actionHistory?: {
                readonly callEmergency?: boolean | undefined;
                readonly alertOrganization?: boolean | undefined;
                readonly publicize?: boolean | undefined;
                readonly alertContacts?: boolean | undefined;
            } | undefined;
            readonly address?: string | undefined;
            readonly category?: string | undefined;
            readonly code?: string | undefined;
            readonly comment?: string | undefined;
            readonly deletedAt?: Date | undefined;
            readonly expiredAt?: Date | undefined;
            readonly location?: {
                readonly type: "Point";
                readonly coordinates?: readonly [number, number] | undefined;
            } | undefined;
            readonly userDeletedAt?: Date | undefined;
            readonly numberOfUploads?: number | undefined;
            readonly hasChat?: boolean | undefined;
            readonly isDeleted?: boolean | undefined;
            readonly isPublic?: boolean | undefined;
            readonly isReady?: boolean | undefined;
            readonly isUserDeleted?: boolean | undefined;
            readonly isPanic?: boolean | undefined;
            readonly isSafe?: boolean | undefined;
            readonly organization?: string | {
                readonly generationTime: number;
                readonly equals: (otherID: string | import("incident-code-core").ObjectId) => boolean;
                readonly getTimestamp: () => Date;
                readonly toHexString: () => string;
            } | {
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
            } | undefined;
            readonly organizationArea?: string | {
                readonly generationTime: number;
                readonly equals: (otherID: string | import("incident-code-core").ObjectId) => boolean;
                readonly getTimestamp: () => Date;
                readonly toHexString: () => string;
            } | {
                readonly id?: string | {
                    readonly generationTime: number;
                    readonly equals: (otherID: string | import("incident-code-core").ObjectId) => boolean;
                    readonly getTimestamp: () => Date;
                    readonly toHexString: () => string;
                } | undefined;
                readonly organization?: string | {
                    readonly generationTime: number;
                    readonly equals: (otherID: string | import("incident-code-core").ObjectId) => boolean;
                    readonly getTimestamp: () => Date;
                    readonly toHexString: () => string;
                } | {
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
                } | undefined;
                readonly name?: string | undefined;
                readonly area?: {
                    readonly type: "Polygon";
                    readonly coordinates?: readonly [readonly (readonly [number, number])[]] | undefined;
                } | undefined;
                readonly address?: string | undefined;
                readonly createdAt?: Date | undefined;
                readonly updatedAt?: Date | undefined;
            } | undefined;
            readonly mapUrl?: string | undefined;
            readonly thumbnailUrl?: string | undefined;
            readonly isResolved?: boolean | undefined;
            readonly resolveComment?: string | undefined;
            readonly resolvedAt?: Date | undefined;
            readonly isViolated?: boolean | undefined;
            readonly reportedAt?: Date | undefined;
            readonly reportedBy?: string | {
                readonly id?: string | {
                    readonly generationTime: number;
                    readonly equals: (otherID: string | import("incident-code-core").ObjectId) => boolean;
                    readonly getTimestamp: () => Date;
                    readonly toHexString: () => string;
                } | undefined;
                readonly firstName?: string | undefined;
                readonly lastName?: string | undefined;
                readonly fullName?: string | undefined;
                readonly portraitUrl?: string | undefined;
                readonly email?: string | undefined;
                readonly phone?: string | undefined;
                readonly roles?: readonly string[] | undefined;
                readonly lastLocation?: {
                    readonly type: "Point";
                    readonly coordinates?: readonly [number, number] | undefined;
                } | undefined;
                readonly lastLocationExpiredAt?: Date | undefined;
                readonly registeredAt?: Date | undefined;
                readonly contacts?: readonly {
                    readonly id?: string | undefined;
                    readonly name?: string | undefined;
                    readonly phone?: string | undefined;
                    readonly title?: string | undefined;
                    readonly notificationEnabled?: boolean | undefined;
                }[] | undefined;
                readonly settings?: {
                    readonly [x: string]: any;
                    readonly twilioSid?: string | undefined;
                    readonly notificationEnabled?: boolean | undefined;
                    readonly notificationDistance?: number | undefined;
                } | undefined;
                readonly organizations?: readonly (string | {
                    readonly generationTime: number;
                    readonly equals: (otherID: string | import("incident-code-core").ObjectId) => boolean;
                    readonly getTimestamp: () => Date;
                    readonly toHexString: () => string;
                } | {
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
                })[] | undefined;
            } | {
                readonly generationTime: number;
                readonly equals: (otherID: string | import("incident-code-core").ObjectId) => boolean;
                readonly getTimestamp: () => Date;
                readonly toHexString: () => string;
            } | undefined;
            readonly violationAction?: import("incident-code-core").ViolationAction | undefined;
            readonly violationComment?: string | undefined;
            readonly violationType?: import("incident-code-core").ViolationType | undefined;
            readonly isNewIncident?: boolean | undefined;
        } | undefined;
        readonly organization?: {
            readonly area?: string | {
                readonly generationTime: number;
                readonly equals: (otherID: string | import("incident-code-core").ObjectId) => boolean;
                readonly getTimestamp: () => Date;
                readonly toHexString: () => string;
            } | {
                readonly id?: string | {
                    readonly generationTime: number;
                    readonly equals: (otherID: string | import("incident-code-core").ObjectId) => boolean;
                    readonly getTimestamp: () => Date;
                    readonly toHexString: () => string;
                } | undefined;
                readonly organization?: string | {
                    readonly generationTime: number;
                    readonly equals: (otherID: string | import("incident-code-core").ObjectId) => boolean;
                    readonly getTimestamp: () => Date;
                    readonly toHexString: () => string;
                } | {
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
                } | undefined;
                readonly name?: string | undefined;
                readonly area?: {
                    readonly type: "Polygon";
                    readonly coordinates?: readonly [readonly (readonly [number, number])[]] | undefined;
                } | undefined;
                readonly address?: string | undefined;
                readonly createdAt?: Date | undefined;
                readonly updatedAt?: Date | undefined;
            } | undefined;
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
        } | undefined;
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
        readonly comment?: string | undefined;
    };
    readonly tipCamera: {
        readonly videoIndex: number;
        readonly mode: TipCameraMode;
    };
    readonly twilio: {
        readonly initialized: boolean;
        readonly accessToken: {
            readonly access_token?: string | undefined;
            readonly token_type?: string | undefined;
            readonly expires_in?: number | undefined;
            readonly expires_at?: number | undefined;
            readonly refresh_token?: string | undefined;
            readonly scope?: string | undefined;
            readonly isValid?: boolean | undefined;
        };
    };
    readonly incidentEscortData?: {
        readonly incidentEscort: {
            readonly id?: string | {
                readonly generationTime: number;
                readonly equals: (otherID: string | import("incident-code-core").ObjectId) => boolean;
                readonly getTimestamp: () => Date;
                readonly toHexString: () => string;
            } | undefined;
            readonly state: import("incident-code-core").IncidentEscortState;
            readonly panicAt?: Date | undefined;
            readonly safeAt?: Date | undefined;
            readonly isAudioRecEnabled?: boolean | undefined;
            readonly isVideoRecEnabled?: boolean | undefined;
            readonly hasComposition?: boolean | undefined;
            readonly isCompositionReady?: boolean | undefined;
            readonly isRoomActive?: boolean | undefined;
            readonly canceledAt?: Date | undefined;
            readonly onSafeComment?: string | undefined;
            readonly twilio?: {
                readonly roomId: string;
                readonly userId?: string | undefined;
                readonly organizationId?: string | undefined;
                readonly mediaRecords?: readonly {
                    readonly recordingSid: string;
                    readonly sourceSid?: string | undefined;
                    readonly recordingUri: string;
                    readonly mediaUri?: string | undefined;
                    readonly duration?: number | undefined;
                    readonly size?: number | undefined;
                    readonly codec: string;
                    readonly trackName?: string | undefined;
                    readonly type?: string | undefined;
                    readonly recordingStatus?: string | undefined;
                }[] | undefined;
                readonly mediaCompositions?: readonly {
                    readonly compositionSid: string;
                    readonly compositionUri?: string | undefined;
                    readonly mediaUri?: string | undefined;
                    readonly duration?: number | undefined;
                    readonly size?: number | undefined;
                    readonly percentageDone?: number | undefined;
                    readonly secondsRemaining?: number | undefined;
                    readonly failedOperation?: string | undefined;
                    readonly errorMessage?: string | undefined;
                    readonly timestamp?: Date | undefined;
                }[] | undefined;
            } | undefined;
            readonly lastAccess?: {
                readonly id: string | {
                    readonly generationTime: number;
                    readonly equals: (otherID: string | import("incident-code-core").ObjectId) => boolean;
                    readonly getTimestamp: () => Date;
                    readonly toHexString: () => string;
                };
                readonly name: string;
                readonly timestamp: Date;
            } | undefined;
            readonly createdAt?: Date | undefined;
            readonly updatedAt?: Date | undefined;
            readonly fromTimerExpired?: boolean | undefined;
        };
        readonly organization: {
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
        };
    } | undefined;
    readonly incidentPassiveEscortData?: {
        readonly id: string | {
            readonly generationTime: number;
            readonly equals: (otherID: string | import("incident-code-core").ObjectId) => boolean;
            readonly getTimestamp: () => Date;
            readonly toHexString: () => string;
        } | {
            readonly id?: string | {
                readonly generationTime: number;
                readonly equals: (otherID: string | import("incident-code-core").ObjectId) => boolean;
                readonly getTimestamp: () => Date;
                readonly toHexString: () => string;
            } | undefined;
            readonly type: import("incident-code-core").IncidentType;
            readonly createdAt?: Date | undefined;
            readonly createdBy?: string | {
                readonly id?: string | {
                    readonly generationTime: number;
                    readonly equals: (otherID: string | import("incident-code-core").ObjectId) => boolean;
                    readonly getTimestamp: () => Date;
                    readonly toHexString: () => string;
                } | undefined;
                readonly firstName?: string | undefined;
                readonly lastName?: string | undefined;
                readonly fullName?: string | undefined;
                readonly portraitUrl?: string | undefined;
                readonly email?: string | undefined;
                readonly phone?: string | undefined;
                readonly roles?: readonly string[] | undefined;
                readonly lastLocation?: {
                    readonly type: "Point";
                    readonly coordinates?: readonly [number, number] | undefined;
                } | undefined;
                readonly lastLocationExpiredAt?: Date | undefined;
                readonly registeredAt?: Date | undefined;
                readonly contacts?: readonly {
                    readonly id?: string | undefined;
                    readonly name?: string | undefined;
                    readonly phone?: string | undefined;
                    readonly title?: string | undefined;
                    readonly notificationEnabled?: boolean | undefined;
                }[] | undefined;
                readonly settings?: {
                    readonly [x: string]: any;
                    readonly twilioSid?: string | undefined;
                    readonly notificationEnabled?: boolean | undefined;
                    readonly notificationDistance?: number | undefined;
                } | undefined;
                readonly organizations?: readonly (string | {
                    readonly generationTime: number;
                    readonly equals: (otherID: string | import("incident-code-core").ObjectId) => boolean;
                    readonly getTimestamp: () => Date;
                    readonly toHexString: () => string;
                } | {
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
                })[] | undefined;
            } | {
                readonly generationTime: number;
                readonly equals: (otherID: string | import("incident-code-core").ObjectId) => boolean;
                readonly getTimestamp: () => Date;
                readonly toHexString: () => string;
            } | undefined;
            readonly updatedAt?: Date | undefined;
            readonly actionHistory?: {
                readonly callEmergency?: boolean | undefined;
                readonly alertOrganization?: boolean | undefined;
                readonly publicize?: boolean | undefined;
                readonly alertContacts?: boolean | undefined;
            } | undefined;
            readonly address?: string | undefined;
            readonly category?: string | undefined;
            readonly code?: string | undefined;
            readonly comment?: string | undefined;
            readonly deletedAt?: Date | undefined;
            readonly expiredAt?: Date | undefined;
            readonly location?: {
                readonly type: "Point";
                readonly coordinates?: readonly [number, number] | undefined;
            } | undefined;
            readonly userDeletedAt?: Date | undefined;
            readonly numberOfUploads?: number | undefined;
            readonly hasChat?: boolean | undefined;
            readonly isDeleted?: boolean | undefined;
            readonly isPublic?: boolean | undefined;
            readonly isReady?: boolean | undefined;
            readonly isUserDeleted?: boolean | undefined;
            readonly isPanic?: boolean | undefined;
            readonly isSafe?: boolean | undefined;
            readonly organization?: string | {
                readonly generationTime: number;
                readonly equals: (otherID: string | import("incident-code-core").ObjectId) => boolean;
                readonly getTimestamp: () => Date;
                readonly toHexString: () => string;
            } | {
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
            } | undefined;
            readonly organizationArea?: string | {
                readonly generationTime: number;
                readonly equals: (otherID: string | import("incident-code-core").ObjectId) => boolean;
                readonly getTimestamp: () => Date;
                readonly toHexString: () => string;
            } | {
                readonly id?: string | {
                    readonly generationTime: number;
                    readonly equals: (otherID: string | import("incident-code-core").ObjectId) => boolean;
                    readonly getTimestamp: () => Date;
                    readonly toHexString: () => string;
                } | undefined;
                readonly organization?: string | {
                    readonly generationTime: number;
                    readonly equals: (otherID: string | import("incident-code-core").ObjectId) => boolean;
                    readonly getTimestamp: () => Date;
                    readonly toHexString: () => string;
                } | {
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
                } | undefined;
                readonly name?: string | undefined;
                readonly area?: {
                    readonly type: "Polygon";
                    readonly coordinates?: readonly [readonly (readonly [number, number])[]] | undefined;
                } | undefined;
                readonly address?: string | undefined;
                readonly createdAt?: Date | undefined;
                readonly updatedAt?: Date | undefined;
            } | undefined;
            readonly mapUrl?: string | undefined;
            readonly thumbnailUrl?: string | undefined;
            readonly isResolved?: boolean | undefined;
            readonly resolveComment?: string | undefined;
            readonly resolvedAt?: Date | undefined;
            readonly isViolated?: boolean | undefined;
            readonly reportedAt?: Date | undefined;
            readonly reportedBy?: string | {
                readonly id?: string | {
                    readonly generationTime: number;
                    readonly equals: (otherID: string | import("incident-code-core").ObjectId) => boolean;
                    readonly getTimestamp: () => Date;
                    readonly toHexString: () => string;
                } | undefined;
                readonly firstName?: string | undefined;
                readonly lastName?: string | undefined;
                readonly fullName?: string | undefined;
                readonly portraitUrl?: string | undefined;
                readonly email?: string | undefined;
                readonly phone?: string | undefined;
                readonly roles?: readonly string[] | undefined;
                readonly lastLocation?: {
                    readonly type: "Point";
                    readonly coordinates?: readonly [number, number] | undefined;
                } | undefined;
                readonly lastLocationExpiredAt?: Date | undefined;
                readonly registeredAt?: Date | undefined;
                readonly contacts?: readonly {
                    readonly id?: string | undefined;
                    readonly name?: string | undefined;
                    readonly phone?: string | undefined;
                    readonly title?: string | undefined;
                    readonly notificationEnabled?: boolean | undefined;
                }[] | undefined;
                readonly settings?: {
                    readonly [x: string]: any;
                    readonly twilioSid?: string | undefined;
                    readonly notificationEnabled?: boolean | undefined;
                    readonly notificationDistance?: number | undefined;
                } | undefined;
                readonly organizations?: readonly (string | {
                    readonly generationTime: number;
                    readonly equals: (otherID: string | import("incident-code-core").ObjectId) => boolean;
                    readonly getTimestamp: () => Date;
                    readonly toHexString: () => string;
                } | {
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
                })[] | undefined;
            } | {
                readonly generationTime: number;
                readonly equals: (otherID: string | import("incident-code-core").ObjectId) => boolean;
                readonly getTimestamp: () => Date;
                readonly toHexString: () => string;
            } | undefined;
            readonly violationAction?: import("incident-code-core").ViolationAction | undefined;
            readonly violationComment?: string | undefined;
            readonly violationType?: import("incident-code-core").ViolationType | undefined;
            readonly isNewIncident?: boolean | undefined;
        };
        readonly procedure: string | {
            readonly generationTime: number;
            readonly equals: (otherID: string | import("incident-code-core").ObjectId) => boolean;
            readonly getTimestamp: () => Date;
            readonly toHexString: () => string;
        } | {
            readonly id?: string | {
                readonly generationTime: number;
                readonly equals: (otherID: string | import("incident-code-core").ObjectId) => boolean;
                readonly getTimestamp: () => Date;
                readonly toHexString: () => string;
            } | undefined;
            readonly organization: string | {
                readonly generationTime: number;
                readonly equals: (otherID: string | import("incident-code-core").ObjectId) => boolean;
                readonly getTimestamp: () => Date;
                readonly toHexString: () => string;
            } | {
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
            };
            readonly name: string;
            readonly timer: number;
            readonly actions: readonly {
                readonly id?: string | undefined;
                readonly name: string;
                readonly finalAction?: boolean | undefined;
            }[];
            readonly createdAt?: Date | undefined;
            readonly updatedAt?: Date | undefined;
            readonly isDeleted?: boolean | undefined;
        };
        readonly isSafetyTimer: boolean;
    } | undefined;
    readonly location?: {
        readonly timestamp: string;
        readonly age: number;
        readonly odometer: number;
        readonly is_moving: boolean;
        readonly uuid: string;
        readonly event?: string | undefined;
        readonly mock?: boolean | undefined;
        readonly sample?: boolean | undefined;
        readonly coords: {
            readonly floor?: number | undefined;
            readonly latitude: number;
            readonly longitude: number;
            readonly accuracy: number;
            readonly altitude?: number | undefined;
            readonly ellipsoidal_altitude?: number | undefined;
            readonly altitude_accuracy?: number | undefined;
            readonly heading?: number | undefined;
            readonly heading_accuracy?: number | undefined;
            readonly speed?: number | undefined;
            readonly speed_accuracy?: number | undefined;
        };
        readonly battery: {
            readonly is_charging: boolean;
            readonly level: number;
        };
        readonly extras?: {
            readonly [x: string]: string | number | boolean | readonly string[] | readonly number[] | any | readonly (readonly number[])[] | readonly boolean[] | readonly any[] | null;
        } | undefined;
        readonly geofence?: {
            readonly timestamp: string;
            readonly identifier: string;
            readonly action: string;
            readonly location: any;
            readonly extras?: {
                readonly [x: string]: string | number | boolean | readonly string[] | readonly number[] | any | readonly (readonly number[])[] | readonly boolean[] | readonly any[] | null;
            } | undefined;
        } | undefined;
        readonly activity: {
            readonly type: import("react-native-background-geolocation").MotionActivityType;
            readonly confidence: number;
        };
        readonly provider?: {
            readonly enabled: boolean;
            readonly status: import("react-native-background-geolocation").AuthorizationStatus;
            readonly network: boolean;
            readonly gps: boolean;
            readonly accuracyAuthorization: import("react-native-background-geolocation").AccuracyAuthorization;
        } | undefined;
    } | undefined;
}>(base?: Base | undefined, action: AppActionTypes) => Base;
export default appReducer;
