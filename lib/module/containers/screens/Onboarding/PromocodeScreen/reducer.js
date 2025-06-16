/**
 *
 * MyAccountScreen reducer
 *
 */
import produce from 'immer';
import { REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS, REGISTER_USER_FAILURE } from './constants';
export const initialState = {
  access_token: ''
};
const RegisterUserScreenReducer = produce((draft, action) => {
  console.log(draft);
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      // draft.isUpdating = true;
      break;
    case REGISTER_USER_SUCCESS:
      // draft.isUpdating = false;
      // draft.uploadMessageType = PortraitMessageType.UploadSuccess;
      break;
    case REGISTER_USER_FAILURE:
      // draft.isUpdating = false;
      // draft.uploadMessageType = PortraitMessageType.UploadFail;
      break;
    default:
      break;
  }
}, initialState);
export default RegisterUserScreenReducer;
//# sourceMappingURL=reducer.js.map