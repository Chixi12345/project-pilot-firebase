import React from "react";
import "./defaultButton.css";

const DefaultButton = ({ btnText, handleButton }) => {
  return (
    <button onClick={handleButton} className="defaultButton_login_btn">
      {btnText}
    </button>
  );
};

export default DefaultButton;
