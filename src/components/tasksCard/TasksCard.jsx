import React from "react";
import "./tasksCard.css";

const TasksCard = ({ taskHeader, taskDescription, taskDate, taskPriority }) => {
  return (
    <div className="taskCard_gen_fam">
      <div className="taskCard_header_text">{taskHeader}</div>
      <div className="taskCard_dateGen_flex">
        <div className="taskCard_date"> {taskDate}</div>
        <div
          style={{
            background:
              taskPriority === "High"
                ? "#ff8080"
                : taskPriority === "Medium"
                ? "#ffcc80"
                : taskPriority === "Low"
                ? "#809CFF"
                : "#000",
          }}
          className="taskCard_prior"
        >
          {taskPriority}
        </div>
      </div>
    </div>
  );
};

export default TasksCard;
