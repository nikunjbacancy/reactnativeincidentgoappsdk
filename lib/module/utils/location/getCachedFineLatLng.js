import getCachedFinePosition from './getCachedFinePosition';
const getCachedFineGeoPoint = async () => {
  const geoPosition = await getCachedFinePosition();
  return {
    lat: geoPosition.coords.latitude,
    lng: geoPosition.coords.longitude
  };
};
export default getCachedFineGeoPoint;
//# sourceMappingURL=getCachedFineLatLng.js.map