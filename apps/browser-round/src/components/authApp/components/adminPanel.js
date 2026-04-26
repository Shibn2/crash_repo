import React from "react";
import { useAppState } from "../store";
function AdminPanel() {
  const { user, theme } = useAppState();
  console.log("State checking from AdminPanel", user, "theme", theme);
  return (
    <div>
      <h2>Admin panel </h2>
      <p>
        Welcome, {user?.name}. Theme: {theme}{" "}
      </p>
      <ul>
        <li>View system metrics.</li>
        <li>Manage users.</li>
      </ul>
    </div>
  );
}

export default AdminPanel;
