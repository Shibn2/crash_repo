export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILED = "FETCH_USER_FAILED";

export const fetchUser = () => ({ type: FETCH_USER_REQUEST });
export const fetchUserSuccess = () => ({ type: FETCH_USER_SUCCESS });
export const fetchUserFailed = () => ({ type: FETCH_USER_FAILED });
