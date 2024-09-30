import {  useState } from "react";
import { QRCode } from "react-qr-code";
import "./styles.css";

export const QRCodeGenerator = () => {
  const [value, setValue] = useState("");
  const [input, setInput] = useState("");

  const generateQRCode = (inputEvent) => {
    // console.log(inputEvent.key);
    if (inputEvent.key === "Enter") {
      if (!input || !input.trim()) {
        alert("Please Enter Some Values In The Input");
      } else {
        setValue(input);
        setInput("");
      }
    }
  };

  return (
    <div className="QRCode-container">
      <div className="QRCode-controls-container">
        <input
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => generateQRCode(e)}
          value={input}
          type="text"
          name="qr-code"
        />
        <button
          disabled={input === "" || input.trim() === "" ? true : false}
          onClick={() => {
            setValue(input);
            setInput("");
          }}
        >
          Generate QRCode
        </button>
      </div>
      <div className="QRCode">
        <QRCode background-color="#fff" size={400} value={value} />
      </div>
    </div>
  );
};
