import React from "react";
import "./loginScreen.css";
import gobackIcon from "../../assets/icons/gobackIcon.svg";
import google from "../../assets/icons/google.svg";

import { useNavigate } from "react-router-dom";
import DefaultInput from "../../components/defaultInput/DefaultInput";
import DefaultButton from "../../components/defaultButton/DefaultButton";

const LoginScreen = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleRegisterUrl = () => {
    navigate("/register");
  };

  const handleIndexPage = () => {
    navigate("/index");
  };
  return (
    <div className="totalOnLoginScreen_gen">
      <div className="loginScreen_containertt">
        <div className="loginScreen_goBack" onClick={handleGoBack}>
          <img src={gobackIcon} />
        </div>

        <div className="loginScreen_loginText">Login</div>

        <form className="loginScreen_form">
          <DefaultInput
            label="Username"
            inputType="text"
            inputPlaceholder="Enter your Username"
          />

          <DefaultInput
            label="Password"
            inputType="password"
            inputPlaceholder="************"
          />

          <DefaultButton handleButton={handleIndexPage} btnText="Login" />
        </form>

        <div className="loginScreen_breakGen">
          <div className="loginScreen_break_sub">or</div>
        </div>

        <div className="login_withGoogleFam">
          <div className="login_withGoogleImg">
            <img src={google} />
          </div>
          <div className="login_withGoogle_text">Login with Google</div>
        </div>

        <div className="loginScreen_registerFam">
          <div className="loginScreen_registerText">
            Don’t have an account?{" "}
          </div>
          <div onClick={handleRegisterUrl} className="loginScreen_registerBtnn">
            Register
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
