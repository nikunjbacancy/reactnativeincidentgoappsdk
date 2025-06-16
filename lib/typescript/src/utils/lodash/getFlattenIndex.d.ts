/// <reference types="lodash" />
declare const getFlattenIndex: (query: object) => <T>(array: import("lodash").List<import("lodash").Many<T>> | null | undefined) => number;
export default getFlattenIndex;
