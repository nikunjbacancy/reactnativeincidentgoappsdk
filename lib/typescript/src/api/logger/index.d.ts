import { ErrorLog } from 'incident-code-core';
export declare enum LogLevel {
    log = "log",
    error = "error",
    debug = "debug",
    warn = "warn"
}
export declare const endpoints: {
    log: string;
};
declare const _default: {
    log: (context: string, message: string, ...args: any[]) => void;
    error: (context: string, message: string, ...args: any[]) => void;
    debug: (context: string, message: string, ...args: any[]) => void;
    warn: (context: string, message: string, ...args: any[]) => void;
    logError: (error: ErrorLog) => Promise<void>;
};
export default _default;
