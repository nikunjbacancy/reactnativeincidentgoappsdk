import logger from '../../api/logger';
const onSuccess = (resolve, position, isManual, coarseLocation) => {
  // appNative.event.emit(AppEvent.LocationUpdated)
  const type = coarseLocation == null ? 'fine' : 'coarse';
  const from = isManual == null ? 'watcher' : 'manual';
  logger.debug('LocationService', `receive a ${type} location by ${from}`, position);
  resolve(position);
};
export default onSuccess;
//# sourceMappingURL=onSuccess.js.map