import * as React from "react";

React.useEffectEvent = React.experimental_useEffectEvent;

const isOutOfCurrentPage = event => {
  const to = event.relatedTarget || event.toElement;
  return !to || to.nodeName === "HTML";
}

export default function usePageLeave(cb) {
  const onLeave = React.useEffectEvent(e => {
    if (isOutOfCurrentPage(e)) {
      cb();
    }
  });

  React.useEffect(() => {
    document.addEventListener("mouseout", onLeave);
    return () => document.removeEventListener("mouseout", onLeave);
  }, [])
}
