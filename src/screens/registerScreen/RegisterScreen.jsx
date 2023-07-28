import React from "react";
import "./registerScreen.css";
import gobackIcon from "../../assets/icons/gobackIcon.svg";
import DefaultInput from "../../components/defaultInput/DefaultInput";
import DefaultButton from "../../components/defaultButton/DefaultButton";

import { useNavigate } from "react-router-dom";

const RegisterScreen = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleLoginSign = () => {
    navigate("/login");
  };

  const handleIndexPage = () => {
    navigate("/index");
  };

  return (
    <div className="totalOnRegisterScreen_gen">
      <div className="registerScreen_containertt">
        <div onClick={handleGoBack} className="gobackregister__">
          <img src={gobackIcon} />
        </div>

        <div className="registertext_heading">Register</div>

        <form>
          <DefaultInput
            label="First Name"
            inputPlaceholder="Enter your First Name"
            inputType="text"
          />

          <DefaultInput
            label="Last Name"
            inputPlaceholder="Enter your Last Name"
            inputType="text"
          />
          <DefaultInput
            label="Email"
            inputPlaceholder="Enter your Email"
            inputType="email"
          />

          <DefaultInput
            label="Password"
            inputPlaceholder="************"
            inputType="password"
          />

          <DefaultInput
            label="Confirm Password"
            inputPlaceholder="************"
            inputType="password"
          />
          <DefaultButton handleButton={handleIndexPage} btnText="Register" />

          <div className="register_toLogingen">
            <div className="register_toLoginText">Already have an account?</div>
            <div onClick={handleLoginSign} className="register_toLogin_btn">
              Login
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterScreen;
