import "./Input.css";
import { useState } from "react";

export default function Input({ type, legend, placeHolder }) {
  const [placeHolderValue, setPlaceHolderValue] = useState(placeHolder);
  const [inputValue, setInputValue] = useState("");
  function handleOnChange(e) {
    setInputValue(e.target.value);
  }
  function handleFocus() {
    setPlaceHolderValue("");
  }
  function handleBlur() {
    setPlaceHolderValue(placeHolder);
  }
  return (
    <div className="input-wrapper">
      <p style={inputValue ? { display: "inline" } : { display: "none" }}>
        {legend}
      </p>
      <input
        type={type}
        placeholder={placeHolderValue}
        value={inputValue}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleOnChange}
      />
    </div>
  );
}
