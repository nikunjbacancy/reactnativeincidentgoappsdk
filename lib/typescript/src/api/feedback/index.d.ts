import { Feedback } from 'incident-code-core';
export declare const endpoints: {
    feedback: string;
};
declare const _default: {
    send: (feedback: Feedback) => Promise<import("axios").AxiosResponse<any>>;
};
export default _default;
