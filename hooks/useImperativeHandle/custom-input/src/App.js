import { useImperativeHandle, forwardRef, useRef } from 'react';

const MyInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      focus() {
        inputRef.current.focus();
      },
      scrollIntoView() {
        inputRef.current.scrollIntoView();
      }
    };
  }, []);

  return <input {...props} ref={inputRef} />;
});

function Form() {
  const myInputRef = useRef(null);

  function handleClick() {
    myInputRef.current.focus();
  }

  return (
    <>
      <MyInput ref={myInputRef} />
      <button onClick={handleClick}>
        Focus the input
      </button>
    </>
  );
}

function App() {
  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
