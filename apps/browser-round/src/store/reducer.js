import {
  FETCH_USER_REQUEST,
  FETCH_USER_FAILED,
  FETCH_USER_SUCCESS,
} from "./actions";

const initialData = {
  loading: false,
  user: null,
  error: false,
};

export function userReducer(state = initialData, action) {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_USER_FAILED:
      return { ...state, loading: false, user: action.error };
    case FETCH_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    default:
      return state;
  }
}
