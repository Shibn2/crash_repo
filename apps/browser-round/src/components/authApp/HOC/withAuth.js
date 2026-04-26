import React from "react";
import { useAppState } from "../store";

export default function withAuth(Wrapper, { allowedRoles, Fallback }) {
  return function AuthGuard(props) {
    const { user } = useAppState();
    const ok = allowedRoles.some((role) => user?.roles.includes(role));
    if (!ok) {
      return Fallback ?? <div>Unauthorised user!!!</div>;
    }
    return <Wrapper {...props} />;
  };
}

// create withAuth HOC, which accepts, wrapped component, then an object of { allowedRoles, Fallback }
// return a functional component AuthGuard which accepts props
// retrieve user from appStateContext, by calling useAppState hook.
// check allowedRoles with .some wether any of the roles in present in the user.roles
// if above check is false return Fallback component or <div> Sign into continue</div>
// else return Wrapped component rendered with props.
