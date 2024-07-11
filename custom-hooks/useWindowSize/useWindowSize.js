import * as React from "react";

export default function useWindowSize() {
  const [size, setSize] = React.useState({
    height: null,
    width: null
  });

  React.useLayoutEffect(() => {
    const handler = () => {
      setSize({
        height: window.innerHeight,
        width: window.innerWidth
      });
    };

    handler(); // set once at the beginning

    window.addEventListener("resize", handler);

    return () => {
      window.removeEventListener("resize", handler);
    }
  }, []);

  return size;
}
