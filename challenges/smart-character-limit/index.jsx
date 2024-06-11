import * as React from "react";

function LimitedTextInput({ characterLimit = 20 }) {
  const [charsRemaining, setCharsRemaining] = React.useState(characterLimit);
  const [inputVal, setInputVal] = React.useState("");
  const exceedsLimit = charsRemaining < 0;

  const handleChange = (e) => {
    const newInput = e.target.value ?? "";
    setInputVal(newInput)
    setCharsRemaining(characterLimit - newInput.length)
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (exceedsLimit) {
      alert("The input exceeds the character limit. Please shorten your text.")
    } else {
      alert("Thanks for your submission")
      setInputVal("")
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="limited-text-input">Limited Text Input:</label>
        <span className={exceedsLimit ? "error" : "no-error"}>Characters remaining: {charsRemaining}</span>
      </div>
      <input
        type="text"
        placeholder="Enter some text"
        id="limited-text-input"
        value={inputVal}
        onChange={handleChange}
      />

      <button type="submit" className="primary">
        Submit
      </button>
    </form>
  );
}

export default LimitedTextInput;
