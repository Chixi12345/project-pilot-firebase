import React from "react";
import "./defaultInput.css";

const DefaultInput = ({ label, inputType, inputPlaceholder }) => {
  return (
    <div className="defaultInput_username_">
      <div className="defaultInput_usernametext">{label}</div>
      <input type={inputType} placeholder={inputPlaceholder} />
    </div>
  );
};

export default DefaultInput;
