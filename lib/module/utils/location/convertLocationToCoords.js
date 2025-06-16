const convertLocationToCoords = location => {
  const [longitude, latitude] = location.coordinates;
  return {
    latitude,
    longitude
  };
};
export default convertLocationToCoords;
//# sourceMappingURL=convertLocationToCoords.js.map