import React from "react";
import AdminPanel from "./components/adminPanel";
import withAuth from "./HOC/withAuth";
import withFeatureFlag from "./HOC/withFeatureFlag";

const NotAllowed = () => <div>Not allowed (Need admin role)</div>;
const TurnOnFlag = () => <div>Feature off. Ask an admin to enable flag.</div>;

const GatedByFlag = withFeatureFlag(AdminPanel, "adminPanel", {
  onDisabled: "hide",
});

const AdminOnyPanel = withAuth(GatedByFlag, {
  allowedRoles: ["admin"],
  Fallback: <NotAllowed />,
});

export default AdminOnyPanel;

// create GatedByFlag component with withFeatureFlag HOC with AdminPanel passing as first param.
// create AdminOnlyPanel component with withAuth HOC passing GatedByFlag inside it.
// return AdminOnlyPanel component;
