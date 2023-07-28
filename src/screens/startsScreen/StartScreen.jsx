import React from "react";
import "./startScreen.css";
import gobackIcon from "../../assets/icons/gobackIcon.svg";
import { useNavigate } from "react-router-dom";

const StartScreen = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  const handleLoginNavi = () => {
    navigate("/login");
  };

  const handleRegisterNavi = () => {
    navigate("/register");
  };
  return (
    <div className="totalOnStartScreen_gen">
      <div className="startScreen_containertt">
        <div className="startScreen_gobackIcon" onClick={handleGoBack}>
          <img src={gobackIcon} />
        </div>

        <div className="startScreen_headertext">Welcome to ProjectPilot</div>

        <div className="startScreen_subText">
          Please login to your account or create new account to continue
        </div>

        <div className="startScreen_btnsGen">
          <button onClick={handleLoginNavi} className="startScreenSign_upbtn">
            Login{" "}
          </button>
          <button onClick={handleRegisterNavi} className="startScreenlogin_btn">
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
