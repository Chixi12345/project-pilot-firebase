import React, { useEffect } from "react";
import "./homeScreen.css";
import landing_logo from "../../assets/icons/landing_logo.svg";
import { useNavigate } from "react-router-dom";
const HomeScreen = () => {
  const navigate = useNavigate();
  useEffect(() => {
    // After 3 seconds, navigate to the target page
    const timeout = setTimeout(() => {
      navigate("/onboarding"); // Replace "/target-page" with the path of the page you want to navigate to
    }, 3000);

    // Clean up the timer to prevent memory leaks
    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="totalHomeScreen_gen">
      <div className="homeScreen_containertt">
        <div className="landing_logoIcon">
          <img src={landing_logo} />
        </div>
        <div className="landing_logo_text">ProjectPilot</div>
      </div>
    </div>
  );
};

export default HomeScreen;
