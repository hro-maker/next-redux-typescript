import { authaction, authactions, authstate } from "./../../types/authreducer";
const initialState: authstate = {
  data: null,
  error: null,
  loading: false,
  message:null
};
export const authreducer = (
  state = initialState,
  action: authaction
): authstate => {
  switch (action.type) {
    case authactions.authenticate_success:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
        message:action.message || "authenticate success"
      };
    case authactions.authenticate_request:
      return {
        ...state,
        loading: true,
      };
      case authactions.clear_message:
      return {
        ...state,
        message: null,
      };
    case authactions.authenticate_failure:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.payload,
        message:action.message || "authenticate failure"
      };
    default:
      return state;
  }
};
