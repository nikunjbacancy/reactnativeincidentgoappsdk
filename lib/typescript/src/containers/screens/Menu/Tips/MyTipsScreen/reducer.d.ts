/**
 *
 * MyTipsScreen reducer
 *
 */
import { MyTipsActionTypes, MyTipsState } from './types';
export declare const initialState: MyTipsState;
declare const myTipsScreenReducer: <Base extends {
    readonly tips: {
        readonly Active: {
            readonly data: readonly {
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
            }[];
            readonly pageIndex: number;
            readonly hasMoreData: boolean;
        };
        readonly Closed: {
            readonly data: readonly {
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
            }[];
            readonly pageIndex: number;
            readonly hasMoreData: boolean;
        };
    };
    readonly isLoading: boolean;
    readonly isDeleting: boolean;
}>(base?: Base | undefined, action: MyTipsActionTypes) => Base;
export default myTipsScreenReducer;
