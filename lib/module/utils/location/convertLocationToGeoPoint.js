const convertLocationToGeoPoint = location => ({
  type: 'Point',
  coordinates: [location.coords.longitude, location.coords.latitude]
});
export default convertLocationToGeoPoint;
//# sourceMappingURL=convertLocationToGeoPoint.js.map