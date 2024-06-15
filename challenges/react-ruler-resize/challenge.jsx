import * as React from "react";

export default function ReactRuler() {
  const [width, setWidth] = React.useState(null);

  return (
    <section>
      <h1>React Ruler</h1>
      <p>(Resize the ruler)</p>
      <article>
        <label>width: {Math.floor(width)}</label>
      </article>
    </section>
  );
}
