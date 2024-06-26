import * as React from "react";

export default function useLockBodyScroll() {
  React.useLayoutEffect(() => {
    const originalOverflow = window.getComputedStyle(document.body).overflow;
    // prevent the user from scrolling the page
    document.body.style.overflow = "hidden";

    return () => {
      // restore the original overflow when the component is unmounted
      document.body.style.overflow = originalOverflow;
    }
  }, []);


}
