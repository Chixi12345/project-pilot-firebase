import React, { useState } from "react";
import "./onBoarding.css";
import OnBoardTab from "../../components/onBoardTab/OnBoardTab";
import onboard_one from "../../assets/icons/onboard_one.svg";
import onboard_two from "../../assets/icons/onboard_two.svg";
import onBoardThree from "../../assets/icons/onBoardThree.svg";

import navShowOne from "../../assets/icons/navShowOne.svg";
import navShowTwo from "../../assets/icons/navShowTwo.svg";
import navShowThree from "../../assets/icons/navShowThree.svg";

import { useNavigate } from "react-router-dom";

const OnBoarding = () => {
  const navigate = useNavigate();

  const [tab, setTab] = useState(1);

  const handleStartScreen = () => {
    navigate("/startspage");
  };
  const handleTabOne = () => {
    setTab(1);
  };
  const handleTabTwo = () => {
    setTab(2);
  };

  const handleTabThree = () => {
    setTab(3);
  };
  return (
    <div className="totalOnboardingScreen_gen">
      <div className="onboardingScreen_containertt">
        {tab === 1 && (
          <OnBoardTab
            firstImg={onboard_one}
            secondImg={navShowOne}
            onBoardHeader="Manage your tasks"
            onBoardSub="You can easily manage all of your daily tasks in DoMe for free"
            // backBtntext="Back"
            nextBtnText="Next"
            handleTabNext={handleTabTwo}
            handleTabBack={handleTabOne}
            handleStartScreen={handleStartScreen}
          />
        )}
        {tab === 2 && (
          <OnBoardTab
            firstImg={onboard_two}
            secondImg={navShowTwo}
            onBoardHeader="Create daily routine"
            onBoardSub="In Uptodo  you can create your personalized routine to stay productive"
            backBtntext="Back"
            nextBtnText="Next"
            handleTabNext={handleTabThree}
            handleTabBack={handleTabOne}
            handleStartScreen={handleStartScreen}
          />
        )}
        {tab === 3 && (
          <OnBoardTab
            firstImg={onBoardThree}
            secondImg={navShowThree}
            onBoardHeader="Organize your tasks"
            onBoardSub="You can organize your daily tasks by adding your tasks into separate categories"
            backBtntext="Back"
            nextBtnText="Get Started"
            handleTabNext={handleStartScreen}
            handleTabBack={handleTabTwo}
            handleStartScreen={handleStartScreen}
          />
        )}
      </div>
    </div>
  );
};

export default OnBoarding;
