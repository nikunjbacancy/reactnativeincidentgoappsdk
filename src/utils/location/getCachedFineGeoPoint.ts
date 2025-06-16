import convertToGeoPoint from './convertToGeoPoint';
import getCachedFinePosition from './getCachedFinePosition';

const getCachedFineGeoPoint = async () => {
  const geoPosition = await getCachedFinePosition();
  console.log("geo postion==>",geoPosition)
  return convertToGeoPoint(geoPosition);
};

export default getCachedFineGeoPoint;
