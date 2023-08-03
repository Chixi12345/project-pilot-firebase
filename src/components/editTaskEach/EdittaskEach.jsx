import React from "react";
import "./editTaskEach.css";
import tasktimer from "../../assets/icons/tasktimer.svg";

const EdittaskEach = ({ taskIcon, taskName, taskOpt }) => {
  return (
    <div className="editTask_genFam">
      <div className="editTask_famFlex">
        <div className="editTask_Imggg">
          <img src={taskIcon} />
        </div>
        <div className="editTask_text">{taskName}</div>
      </div>
      <div className="editTask_textDateee">{taskOpt}</div>
    </div>
  );
};

export default EdittaskEach;
