import * as React from "react";

function TextInput() {
  const inputRef = React.useRef();

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  return (
    <div>
      <h1>Autofocus Input</h1>
      <label htmlFor="focus">Email Address</label>
      <input ref={inputRef} id="focus" type="email" placeholder="Enter your email" />
    </div>
  );
}

export default TextInput;
