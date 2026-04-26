import React from "react";
import AdminOnyPanel from "./adminRoute";
import {
  LoginButton,
  LogoutButton,
  ToggleAdminFlag,
} from "./components/toggleAdminFlag";
import { AppProvider } from "./store";

export default function AuthApp() {
  return (
    <AppProvider>
      <h1>Dashboard</h1>
      <div style={{ display: "flex", gap: 8 }}>
        <LoginButton />
        <LogoutButton />
        <ToggleAdminFlag />
      </div>
      <hr />
      <AdminOnyPanel />
    </AppProvider>
  );
}

// Landing page with login, logout and toggle admin panel flag button
// if admin panel falg enabled and logged in user has admin role with him
// we will show admin ui.
// wrapped the component with app provider
