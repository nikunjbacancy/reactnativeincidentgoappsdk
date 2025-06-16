import { Config } from 'incident-code-core';
export declare const endpoints: {
    configs: string;
};
declare const _default: {
    getConfigs: () => Promise<import("axios").AxiosResponse<Config>>;
};
export default _default;
