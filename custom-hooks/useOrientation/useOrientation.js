import * as React from "react";

export default function useOrientation() {
  const [orientation, setOrientation] = React.useState({
    angle: 0,
    type: "UNKNOWN"
  });

  React.useLayoutEffect(() => {
    const handleScreenOrientationChange = () => {
      const { angle, type } = window.screen.orientation;
      setOrientation({ angle, type });
    }

    const handleWindowOrientationChange = () => {
      setOrientation({
        type: "UNKNOWN",
        angle: window.orientation
      });
    }

    if (window.screen?.orientation) {
      handleScreenOrientationChange();
      window.screen.orientation.addEventListener("change", handleScreenOrientationChange);
      return () => window.screen.orientation.removeEventListener("change", handleScreenOrientationChange);
    } else {
      handleWindowOrientationChange();
      window.addEventListener("orientationchange", handleWindowOrientationChange);
      return () => window.removeEventListener("orientationchange", handleWindowOrientationChange);
    }
  }, [])

  return orientation;
}
