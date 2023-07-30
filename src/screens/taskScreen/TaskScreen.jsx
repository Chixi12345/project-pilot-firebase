import React, { useState } from "react";
import "./taskScreen.css";
import Navbar from "../../components/navBar/Navbar";
import Header from "../../components/header/Header";

import "../../components/calendarStyle/CalendarStyle.css";

import indexMainImg from "../../assets/icons/indexMainImg.svg";
import addTag from "../../assets/icons/addTag.svg";

import searchIcon from "../../assets/icons/searchIcon.svg";

import addTime from "../../assets/icons/addTime.svg";

import send from "../../assets/icons/send.svg";

import Calendar from "react-calendar";
import TasksCard from "../../components/tasksCard/TasksCard";

const TaskScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [showTag, setShowTag] = useState(false);

  const [priorTag, setPriorTag] = useState(0);
  const [showCalender, setShowCalender] = useState(false);
  const [date, setDate] = useState(new Date());

  const [tasks, setTasks] = useState([
    {
      taskHeader: "Do Math Homework",
      taskDescription: "Do chapter 2 to 5 for next week",
      taskDate: "Tues Aug 01 2023",
      taskPriority: "High",
    },

    {
      taskHeader: "Tack out dogs",
      taskDescription: "Do chapter 2 to 5 for next week",
      taskDate: "Tues Aug 01 2023",
      taskPriority: "Medium",
    },

    {
      taskHeader: "Business meeting with CEO",
      taskDescription: "Do chapter 2 to 5 for next week",
      taskDate: "Tues Aug 01 2023",
      taskPriority: "High",
    },

    {
      taskHeader: "Buy Grocery",
      taskDescription: "Do chapter 2 to 5 for next week",
      taskDate: "Tues Aug 01 2023",
      taskPriority: "Low",
    },

    {
      taskHeader: "Do Math Homework",
      taskDescription: "Do chapter 2 to 5 for next week",
      taskDate: "Tues Aug 01 2023",
      taskPriority: "Medium",
    },
  ]);

  const handleHighPrior = () => {
    setPriorTag(1);
  };

  const handleMediumPrior = () => {
    setPriorTag(2);
  };

  const handleLowPrior = () => {
    setPriorTag(3);
  };

  const openShowModal = () => {
    setShowModal(true);
  };

  const closeShowModal = () => {
    setShowModal(false);
  };

  const openShowTag = () => {
    setShowTag(true);
  };

  const closeShowTag = () => {
    setShowTag(false);
  };

  const handleShowTag = () => {
    setShowTag(!showTag);
  };

  const openShowCalender = () => {
    setShowCalender(true);
  };

  const closeShowCalender = () => {
    setShowCalender(false);
  };
  const handleChildClick = (event) => {
    // 👇️ stop event propagation (won't trigger parent's onClick)
    event.stopPropagation();

    // console.log("child clicked");
  };

  return (
    <div className="totalOntaskScreen_gen">
      <div className="taskScreen_containertt">
        <Header headerName="Tasks" />

        <div className="input-icons">
          <div className="input-img_gen">
            <img src={searchIcon} />
          </div>

          <div className="input-field">
            <input type="text" placeholder="Search for your task..." />
          </div>
        </div>

        <div className="taskcat_bodyyyy">
          <div className="taskCatHeading__">Today</div>

          {tasks.length >= 1 ? (
            <div>
              {tasks.map((task) => (
                <TasksCard
                  taskHeader={task.taskHeader}
                  taskDescription={task.taskDescription}
                  taskDate={task.taskDate}
                  taskPriority={task.taskPriority}
                />
              ))}
            </div>
          ) : (
            <div>No Task</div>
          )}
        </div>

        {showModal && (
          <div onClick={closeShowModal} className="indexModalGenn_container">
            <div
              style={{ height: showModal ? "fit-content" : "-2%" }}
              onClick={handleChildClick}
              className="indexModalGenn"
            >
              <div className="modalAdd_taskHead">Add Task</div>

              <div className="modalAdd_taskinput">
                <input type="text" placeholder="Add Task" />
              </div>

              <div className="modaldescription_taskHead">Description</div>
              <div className="modalAdd_descriptioninput">
                <textarea type="text" placeholder="Description" />
              </div>

              <div className="modalAdd_bottomFam">
                <div className="modalAdd_bottomFamFlex">
                  <div
                    onClick={openShowTag}
                    className="modalAdd_bottomFamTagImg"
                  >
                    <img src={addTag} />
                  </div>

                  <div
                    onClick={openShowCalender}
                    className="modalAdd_bottomFamTimeImg"
                  >
                    <img src={addTime} />
                  </div>
                </div>

                <div className="modalAdd_bottomFamSendImg">
                  <img src={send} />
                </div>
              </div>
            </div>
          </div>
        )}

        {showTag && (
          <div className="Indexmodal-container">
            <div className="Indexmodal-content">
              {/* <span onClick={handleShowTag} className="close-button">
                &times;
              </span> */}

              <div className="index_taskpriHead">Task Priority</div>
              <div className="index_taskpriHead_line"></div>
              <div
                onClick={handleHighPrior}
                style={{ background: priorTag === 1 ? "#8687E7" : "#272727" }}
                className="index_taskpriHeadImgGen"
              >
                <div className="index_taskpriHead_icon">
                  <img src={addTag} />
                </div>
                <div className="index_taskpriHead_icontext">High</div>
              </div>
              <div
                onClick={handleMediumPrior}
                style={{ background: priorTag === 2 ? "#8687E7" : "#272727" }}
                className="index_taskpriHeadImgGen"
              >
                <div className="index_taskpriHead_icon">
                  <img src={addTag} />
                </div>
                <div className="index_taskpriHead_icontext">Medium</div>
              </div>
              <div
                onClick={handleLowPrior}
                style={{ background: priorTag === 3 ? "#8687E7" : "#272727" }}
                className="index_taskpriHeadImgGen"
              >
                <div className="index_taskpriHead_icon">
                  <img src={addTag} />
                </div>
                <div className="index_taskpriHead_icontext">Low</div>
              </div>

              <div className="index_taskBtnFam">
                <button onClick={handleShowTag} className="index_taskCancelbtn">
                  Cancel
                </button>
                <button className="index_taskSavebtn">Save</button>
              </div>
            </div>
          </div>
        )}

        {showCalender && (
          <div className="Indexmodal-container_calender">
            <div className="Indexmodal-content_calender">
              <Calendar
                style={{ background: "#000" }}
                onChange={setDate}
                value={date}
              />

              <div className="index_taskBtnFam">
                <button
                  onClick={closeShowCalender}
                  className="index_taskCancelbtn"
                >
                  Cancel
                </button>
                <button className="index_taskSavebtn">Save</button>
              </div>

              {/* <p className="text-center">
                <span className="bold">Selected Date:</span>{" "}
                {date.toDateString()}
              </p> */}
            </div>
          </div>
        )}
        <Navbar openShowModal={openShowModal} />
      </div>
    </div>
  );
};

export default TaskScreen;
