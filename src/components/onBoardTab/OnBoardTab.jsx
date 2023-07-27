import React from "react";
import "./onBoardTab.css";

import onboard_one from "../../assets/icons/onboard_one.svg";
import navShowOne from "../../assets/icons/navShowOne.svg";

const OnBoardTab = ({
  firstImg,
  secondImg,
  onBoardHeader,
  onBoardSub,
  backBtntext,
  nextBtnText,
  handleTabBack,
  handleTabNext,
}) => {
  return (
    <div>
      <button className="onBoard_oneskip_btn">SKIP</button>

      <div className="onBoard_oneImgGen">
        <div className="onBoard_oneImg">
          <img src={firstImg} />
        </div>
        <div className="onBoard_onenavImg">
          <img src={secondImg} />
        </div>
      </div>

      <div className="onBoard_headText">{onBoardHeader}</div>
      <div className="onBoard_subText_">{onBoardSub} </div>

      <div className="onBoard_bottombtnFam">
        <button onClick={handleTabBack} className="onBoard_bottombtn_back">
          {backBtntext}
        </button>
        <button onClick={handleTabNext} className="onBoard_bottombtn_next">
          {nextBtnText}
        </button>
      </div>
    </div>
  );
};

export default OnBoardTab;
