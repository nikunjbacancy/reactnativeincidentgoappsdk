import findIndex from 'lodash/fp/findIndex';
import flatten from 'lodash/fp/flatten';
import flow from 'lodash/fp/flow';

const getFlattenIndex = (query: object) => flow(flatten, findIndex(query));

export default getFlattenIndex;
