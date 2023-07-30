import React from "react";
import "./navbar.css";
import IndexIcon from "../../assets/IndexIcon";

import indexHome from "../../assets/icons/indexHome.svg";

import taskHome from "../../assets/icons/taskHome.svg";
import focusHome from "../../assets/icons/focusHome.svg";

import profileHome from "../../assets/icons/profileHome.svg";

import { useNavigate, useLocation } from "react-router-dom";

const Navbar = ({ openShowModal, openShowCalender }) => {
  const location = useLocation();

  const { pathname } = location;

  const splitLocation = pathname.split("/");
  const navigate = useNavigate();

  const handleTaskScreen = () => {
    navigate("/taskscreen");
  };

  const handleFocusScreen = () => {
    navigate("/focusmode");
  };

  const handleProfileScreen = () => {
    navigate("/profilescreen");
  };

  const handleIndexScreen = () => {
    navigate("/index");
  };

  return (
    <div className="navbar_genFam">
      <div className="navBar_IndexGenFam">
        <div onClick={handleIndexScreen} className="navBar_indexFlex">
          <div className="navBar_indexFlexImg">
            <img src={indexHome} />
          </div>
          <div
            className={
              splitLocation[1] === "index"
                ? "navBar_indexFlexText_active"
                : "navBar_indexFlexText"
            }
          >
            Index
          </div>
        </div>

        <div onClick={handleTaskScreen} className="navBar_taskFlex">
          <div className="navBar_taskFlexImg">
            <img src={taskHome} />
          </div>
          <div
            className={
              splitLocation[1] === "taskscreen"
                ? "navBar_indexFlexText_active"
                : "navBar_indexFlexText"
            }
          >
            Tasks
          </div>
        </div>
      </div>

      <div className="navBar_focusGenFam">
        <div onClick={handleFocusScreen} className="navBar_focusFlex">
          <div className="navBar_focusFlexImg">
            <img src={focusHome} />
          </div>
          <div
            className={
              splitLocation[1] === "focusmode"
                ? "navBar_indexFlexText_active"
                : "navBar_indexFlexText"
            }
          >
            Focus
          </div>
        </div>

        <div onClick={handleProfileScreen} className="navBar_profileFlex">
          <div className="navBar_profileFlexImg">
            <img src={profileHome} />
          </div>
          <div
            className={
              splitLocation[1] === "profilescreen"
                ? "navBar_indexFlexText_active"
                : "navBar_indexFlexText"
            }
          >
            Profile
          </div>
        </div>
      </div>

      <div onClick={openShowModal} className="addTaskBtn_gen">
        +
      </div>
    </div>
  );
};

export default Navbar;
