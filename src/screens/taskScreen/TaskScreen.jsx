import React, { useState } from "react";
import "./taskScreen.css";
import Navbar from "../../components/navBar/Navbar";
import Header from "../../components/header/Header";

import "../../components/calendarStyle/CalendarStyle.css";

import indexMainImg from "../../assets/icons/indexMainImg.svg";
import addTag from "../../assets/icons/addTag.svg";

import editpen from "../../assets/icons/editpen.svg";

import searchIcon from "../../assets/icons/searchIcon.svg";

import addTime from "../../assets/icons/addTime.svg";

import send from "../../assets/icons/send.svg";

import Calendar from "react-calendar";
import TasksCard from "../../components/tasksCard/TasksCard";
import EdittaskEach from "../../components/editTaskEach/EdittaskEach";
import tasktimer from "../../assets/icons/tasktimer.svg";
import taskflag from "../../assets/icons/taskflag.svg";
import tasktag from "../../assets/icons/tasktag.svg";

import tasktrash from "../../assets/icons/tasktrash.svg";

const TaskScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [showTag, setShowTag] = useState(false);

  const [priorTag, setPriorTag] = useState(0);
  const [showCalender, setShowCalender] = useState(false);
  const [date, setDate] = useState(new Date());
  const [completed, setCompleted] = useState(false);

  const [showEditTask, setShowEditTask] = useState(false);
  const [editTaskData, setEditTaskData] = useState({});

  const [tasks, setTasks] = useState([
    {
      taskHeader: "Do Math Homework",
      taskDescription: "Do chapter 2 to 5 for next week",
      taskDate: "Tues Aug 01 2023",
      taskPriority: "High",
      completed: false,
    },

    {
      taskHeader: "Tack out dogs",
      taskDescription: "Do chapter 2 to 5 for next week",
      taskDate: "Tues Aug 01 2023",
      taskPriority: "Medium",
      completed: false,
    },

    {
      taskHeader: "Business meeting with CEO",
      taskDescription: "Do chapter 2 to 5 for next week",
      taskDate: "Tues Aug 01 2023",
      taskPriority: "High",
      completed: false,
    },

    {
      taskHeader: "Buy Grocery",
      taskDescription: "Do chapter 2 to 5 for next week",
      taskDate: "Tues Aug 01 2023",
      taskPriority: "Low",
      completed: false,
    },

    {
      taskHeader: "Do Math Homework",
      taskDescription: "Do chapter 2 to 5 for next week",
      taskDate: "Tues Aug 01 2023",
      taskPriority: "Medium",
      completed: false,
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

  const handleOpenEditTask = () => {
    setShowEditTask(true);
  };

  const handleCloseEditTask = () => {
    setShowEditTask(false);
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
                <div
                  onClick={() => {
                    handleOpenEditTask();
                    setEditTaskData(task);
                  }}
                  style={{ width: "100%" }}
                >
                  <TasksCard
                    taskHeader={task.taskHeader}
                    taskDescription={task.taskDescription}
                    taskDate={task.taskDate}
                    taskPriority={task.taskPriority}
                    task={task}
                  />
                </div>
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

        {showEditTask && (
          <div
            onClick={handleCloseEditTask}
            className="indexModalGenn_container_editTask"
          >
            <div
              style={{ height: showModal ? "fit-content" : "-2%" }}
              onClick={handleChildClick}
              className="indexModalGenn_editTask"
            >
              <div
                onClick={handleCloseEditTask}
                className="inputCancel_editgen"
              >
                {" "}
                X
              </div>

              <div className="edit_inputGenFam_cont">
                <div className="edit_inputGen_firstFlex">
                  <div className="edit_inputGen_Box"></div>

                  <div className="edit_input_textGen">
                    <div className="edit_input_mainOne">
                      {editTaskData.taskHeader}
                    </div>
                    <div className="edit_input_mainTwo">
                      {editTaskData.taskDescription}
                    </div>
                  </div>
                </div>
                <div className="edit_input_imggg">
                  <img src={editpen} />
                </div>
              </div>

              <EdittaskEach
                taskIcon={tasktimer}
                taskName="Task Date "
                taskOpt={editTaskData.taskDate}
              />
              <EdittaskEach
                taskIcon={taskflag}
                taskName="Task Priority "
                taskOpt={editTaskData.taskPriority}
              />

              <EdittaskEach
                taskIcon={tasktag}
                taskName="Task Status "
                taskOpt={
                  editTaskData.completed === true ? "Completed" : "Incompleted"
                }
              />

              <div className="task_deletegen_fam">
                <div className="task_icon_delete">
                  <img src={tasktrash} />
                </div>
                <div className="task_text_deleteText">Delete Task</div>
              </div>
              {/* <EdittaskEach taskIcon={tasktrash} taskName={} taskOpt={} /> */}

              <div className="task_text_edit_task_____">Edit Task </div>
            </div>
          </div>
        )}

        <Navbar openShowModal={openShowModal} />
      </div>
    </div>
  );
};

export default TaskScreen;
