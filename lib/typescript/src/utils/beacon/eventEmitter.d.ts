declare const eventEmitter: () => Promise<{
    name: string;
    address: string;
} | null>;
export default eventEmitter;
