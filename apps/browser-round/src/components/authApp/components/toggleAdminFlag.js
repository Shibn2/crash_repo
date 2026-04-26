import React from "react";
import { useAppDispatch, useAppState } from "../store";
import { LOGIN_SUCCESS, LOGOUT, SET_FLAG } from "../constants";

export function LoginButton() {
  const dispatch = useAppDispatch();
  const { user } = useAppState();
  return (
    <button
      onClick={() => {
        dispatch({
          type: LOGIN_SUCCESS,
          payload: { id: 1, name: "Shibin", roles: ["admin"] },
        });
      }}
      disabled={user}
    >
      Login
    </button>
  );
}

export function LogoutButton() {
  const dispatch = useAppDispatch();
  const { user } = useAppState();

  return (
    <button
      onClick={() => {
        dispatch({
          type: LOGOUT,
        });
      }}
      disabled={!user}
    >
      Logout
    </button>
  );
}

export function ToggleAdminFlag() {
  const dispatch = useAppDispatch();
  const state = useAppState();
  console.log("state", state);
  const { flags } = state;

  return (
    <button
      onClick={() => {
        dispatch({
          type: SET_FLAG,
          flag: "adminPanel",
          value: !flags.adminPanel,
        });
      }}
    >
      Toggle admin panel
    </button>
  );
}

// implement LogoutButton , LoginButton and ToggleAdminPanel buttons.
// retrieve dispatcher from useAppDispatch
// In ToggleAdminFlag retieve flag from useAppState hook.
// send this value in the dispatch action with type, flag and value
