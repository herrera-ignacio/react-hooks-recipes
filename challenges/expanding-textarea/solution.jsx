import * as React from "react";

export default function ExpandingTextarea() {
  const [text, setText] = React.useState("");
  const textAreaRef = React.useRef(null);

  const handleChange = (e) => {
    setText(e.target.value)
    textAreaRef.current.style.height = "inherit"; // this is needed for shrinking
    const scrollHeight = textAreaRef.current.scrollHeight;
    textAreaRef.current.style.height = scrollHeight + "px";
  }

  return (
    <section className="container">
      <h1>Expanding Textarea</h1>
      <label htmlFor="textarea">Enter or paste in some text</label>
      <textarea
        ref={textAreaRef}
        id="textarea"
        placeholder="Enter some text"
        value={text}
        onChange={handleChange}
        rows={1}
      />
    </section>
  );
}
