import React, { useMemo } from "react";
import { createContext, useContext, useReducer } from "react";
import { LOGIN_SUCCESS, LOGOUT, SET_FLAG, SET_THEME } from "./constants";

const AppStateContext = createContext();
const AppDispatchContext = createContext();

const INTIAL_STATE = {
  flags: {
    adminPanel: false,
    betaCheckout: false,
  },
  user: null,
  theme: "",
};

const reducer = (state = INTIAL_STATE, action) => {
  console.log("action", action);
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, user: action.payload };
    case LOGOUT:
      return { ...state, user: null };
    case SET_FLAG:
      return {
        ...state,
        flags: { ...state.flags, [action.flag]: action.value },
      };
    case SET_THEME:
      return { ...state, theme: action.payload };
    default:
      return { ...state };
  }
};

export function AppProvider({ children, initial = INTIAL_STATE }) {
  const [state, dispatch] = useReducer(reducer, initial);
  const updatedState = useMemo(() => state, [state]);
  return (
    <AppDispatchContext.Provider value={dispatch}>
      <AppStateContext.Provider value={updatedState}>
        {children}
      </AppStateContext.Provider>
    </AppDispatchContext.Provider>
  );
}

export function useAppState() {
  const ctx = useContext(AppStateContext);
  if (!ctx) {
    console.error(
      "You need to wrapp your component inside AppProvider inorder to access state "
    );
  }
  return ctx;
}

export function useAppDispatch() {
  const ctx = useContext(AppDispatchContext);
  if (!ctx) {
    console.error(
      "You need to wrapp your component inside AppProvider inorder to access state "
    );
  }
  return ctx;
}

// create two contexts 1. appStateContext, 2. appDispatchContext
// create a reducer with action and state and initialise the param state with a INITIAL_STATE user, theme, flags
// reducer actionstypes are LOGIN_SUCCESS, LOGOUT SET_THEME and SET_FLAG
// create app provider wich accepts children and initial , initialise state and dispatch with useReducer(reducer, initial), get a memoisedState value from state
// wrap children with 2 contexts
// create two custom hooks with useContext which uses appStateContext and appDispatchContext put a null checker for these ctx and return ctx
// from within the custom hook , use this custom hook from other areas where it is needed
