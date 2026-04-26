import React from "react";
import { useAppState } from "../store";

function withFeatureFlag(Wrapped, featureFlag, { onDisabled = "hide" } = {}) {
  return function FeatureGated(props) {
    const { flags } = useAppState();
    const enabled = flags[featureFlag];

    if (!enabled) {
      if (onDisabled === "disable") {
        return <Wrapped disabled data-flag-disabled />;
      }
      return null;
    }

    return <Wrapped {...props} />;
  };
}

export default withFeatureFlag;
// create withFeatureFlag accept wrapped component , featureFlag, { onDisabled = "hide"}
// retrieve flags from useAppState
// check wether the flag passed to the component is enabled or not?
// if not enabled return the disabled component if onDIsabled is disable else return null
// else return rendered wrapped component with props.
