const convertPositionToPoint = position => {
  // mongodb use longitude/latitude
  return {
    type: 'Point',
    coordinates: [position.coords.longitude, position.coords.latitude]
  };
};
export default convertPositionToPoint;
//# sourceMappingURL=convertToGeoPoint.js.map