import crashlytics from '@react-native-firebase/crashlytics';
const handleError = error => {
  var _error$response, _error$response3, _error$response5;
  //("error:" + JSON.stringify(error));
  crashlytics().log('handleError triggered...');
  crashlytics().recordError(error);
  if (error !== null && error !== void 0 && (_error$response = error.response) !== null && _error$response !== void 0 && _error$response.data.message) {
    var _error$response2;
    return new Error(error === null || error === void 0 || (_error$response2 = error.response) === null || _error$response2 === void 0 ? void 0 : _error$response2.data.message);
  }
  if (error !== null && error !== void 0 && (_error$response3 = error.response) !== null && _error$response3 !== void 0 && _error$response3.data.error) {
    var _error$response4;
    return new Error(error === null || error === void 0 || (_error$response4 = error.response) === null || _error$response4 === void 0 ? void 0 : _error$response4.data.error);
  }
  if (error !== null && error !== void 0 && (_error$response5 = error.response) !== null && _error$response5 !== void 0 && _error$response5.data) {
    var _error$response6;
    return new Error(error === null || error === void 0 || (_error$response6 = error.response) === null || _error$response6 === void 0 ? void 0 : _error$response6.data);
  }
  return new Error('Unknown error');
};
export default handleError;
//# sourceMappingURL=handleError.js.map