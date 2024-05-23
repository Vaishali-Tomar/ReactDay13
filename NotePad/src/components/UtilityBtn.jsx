import "./UtilityBtn.css"


import React from "react";

const UtilityBtn = ({ dispatch }) => {
  return (
    <div className="main">
      <button  className="btn"  onClick={() => dispatch({ type: "CONVERT_UPPCASE" })}>
        Convert to Uppercase
      </button>
      <button className="btn"  onClick={() => dispatch({ type: "CONVERT_LOWERCASE" })}>
        Convert to Lowercase
      </button>
      <button className="btn"  onClick={() => dispatch({ type: "CLEAR_TEXT" })}>
        Clear Text
      </button>
      <button className="btn"  onClick={() => dispatch({ type: "COPY_TEXT" })}>
        Copy to Clipboard
      </button>
    </div>
  );
};

export default UtilityBtn;
