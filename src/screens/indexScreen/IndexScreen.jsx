import React, { useState } from "react";
import "./indexScreen.css";
import "../../components/calendarStyle/CalendarStyle.css";
import sortindex from "../../assets/icons/sortindex.svg";
import indexMainImg from "../../assets/icons/indexMainImg.svg";
import addTag from "../../assets/icons/addTag.svg";

import addTime from "../../assets/icons/addTime.svg";

import send from "../../assets/icons/send.svg";

import Navbar from "../../components/navBar/Navbar";
import Header from "../../components/header/Header";

import Calendar from "react-calendar";

// import "react-calendar/dist/Calendar.css";

const IndexScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [showTag, setShowTag] = useState(false);

  const [priorTag, setPriorTag] = useState(0);
  const [showCalender, setShowCalender] = useState(false);
  const [date, setDate] = useState(new Date());

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
    <div className="totalOnIndexScreen_gen">
      <div className="indexScreen_containertt">
        <Header headerName="Index" />

        <div className="index_welcomeFamily">
          <div className="index_welcomeImg">
            <img src={indexMainImg} />
          </div>

          <div className="index_welcomeHead_text">
            What do you want to do today?
          </div>
          <div className="index_welcomeSub_text">Tap + to add your tasks</div>
        </div>

        <Navbar
          openShowCalender={openShowCalender}
          openShowModal={openShowModal}
        />

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
      </div>
    </div>
  );
};

export default IndexScreen;
