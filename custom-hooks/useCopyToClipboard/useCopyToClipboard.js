import * as React from "react";

function oldSchoolCopy(text) {
  const tempTextArea = document.createElement("textarea");
  tempTextArea.value = text;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  document.execCommand("copy");
  document.body.removeChild(tempTextArea);
}

export default function useCopyToClipboard() {
  const [copiedText, setCopiedText] = React.useState(null);

  const copyToClipboard = React.useCallback(value => {
    const handleCopy = async () => {
      try {
        if (navigator?.clipboard?.writeText) {
          await navigator.clipboard.writeText(value);
        } else {
          oldSchoolCopy(value);
        }
      } catch (err) {
        throw new Error(err.message);
      } finally {
        setCopiedText(value);
      }
    }

    handleCopy();
  }, [])

  return [copiedText, copyToClipboard];
}
