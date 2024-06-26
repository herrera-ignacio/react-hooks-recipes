import * as React from "react";

export default function useFavicon(href) {
  React.useEffect(() => {
    let link = document.querySelector(`link[rel~="icon"]`);

    if (!link) {
      link = document.createElement("link");
      link.type = "image/x-icon";
      link.rel = "icon";
      link.href = href;
      document.head.appendChild(link);
    } else {
      link.href = href;
    }
  }, [href]);
}
