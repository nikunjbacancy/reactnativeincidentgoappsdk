import { LoginData } from 'containers/screens/Onboarding/SignInCodeScreen/types';
export declare const endpoints: {
    refreshToken: string;
    sendCode: string;
    login: string;
    registerUser: string;
};
declare const _default: {
    refreshToken: () => Promise<import("axios").AxiosResponse<any>>;
    sendCode: (params: any) => Promise<import("axios").AxiosResponse<any>>;
    login: (loginData: LoginData) => Promise<import("axios").AxiosResponse<any>>;
    userRegister: (params: any) => Promise<import("axios").AxiosResponse<any>>;
};
export default _default;
