import * as React from "react";
import { closeIcon } from "./icons";

export default function ClickOutside() {
  const [isOpen, setIsOpen] = React.useState(false);
  const dialogRef = React.useRef();

  React.useEffect(() => {
    if (isOpen) {
      const handleEvent = (e) => {
        const dialog = dialogRef.current;
        if (dialog && !dialog.contains(e.target)) {
          // if clicked on an element outside the dialog
          setIsOpen(false);
        }
      };

      document.addEventListener("pointerdown", handleEvent)

      return () => {
        document.removeEventListener("pointerdown", handleEvent)
      };
    }
  }, [isOpen])

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false)
  };

  return (
    <>
      <section>
        <h1>Click Outside</h1>
        <button className="link" onClick={handleOpenModal}>
          Open Modal
        </button>
      </section>
      {isOpen && (
        <dialog ref={dialogRef}>
          <button onClick={handleCloseModal}>{closeIcon}</button>
          <h2>Modal</h2>
          <p>
            Click outside the modal to close (or use the button) whatever you
            prefer.
          </p>
        </dialog>
      )}
    </>
  );
}
