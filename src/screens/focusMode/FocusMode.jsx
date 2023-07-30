import React, { useState } from "react";
import "./focusMode.css";
import Navbar from "../../components/navBar/Navbar";
import Header from "../../components/header/Header";
import "../../components/calendarStyle/CalendarStyle.css";

import indexMainImg from "../../assets/icons/indexMainImg.svg";
import addTag from "../../assets/icons/addTag.svg";

import addTime from "../../assets/icons/addTime.svg";

import send from "../../assets/icons/send.svg";

import Calendar from "react-calendar";

import { useStopwatch } from "react-timer-hook";
import "../../components/timerStyle/timerStyle.css";

const FocusMode = () => {
  const [showModal, setShowModal] = useState(false);
  const [showTag, setShowTag] = useState(false);

  const [showCalender, setShowCalender] = useState(false);
  const [date, setDate] = useState(new Date());
  const [priorTag, setPriorTag] = useState(0);

  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: true });

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
    <div className="totalOnFocusScreen_gen">
      <div className="focusScreen_containertt">
        <Header headerName="Focus" />

        <div
          className="focus_stopwatchGenFam"
          style={{ textAlign: "center", marginTop: "70px" }}
        >
          <div className="focus_stopwatchGenText">Stopwatch </div>

          <div
            className="focus_stopwatchGenTime_heading"
            // style={{ fontSize: "16px" }}
          >
            <div className="flex_alignStopwatch">
              <div className="focus_stopwatchGenHead_span">Days</div>
              <div className="focus_stopwatchGenTime_mainSpan">{days}</div>
            </div>
            <div className="flex_alignStopwatch">
              <div className="focus_stopwatchGenHead_span">Hours</div>
              <div className="focus_stopwatchGenTime_mainSpan">{hours}</div>
            </div>

            <div className="flex_alignStopwatch">
              <div className="focus_stopwatchGenHead_span">Minutes</div>
              <div className="focus_stopwatchGenTime_mainSpan">{minutes}</div>
            </div>

            <div className="flex_alignStopwatch">
              <div className="focus_stopwatchGenHead_span">Seconds</div>
              <div className="focus_stopwatchGenTime_mainSpan">{seconds}</div>
            </div>
          </div>

          <div className="focus_stopwatch_runIndicate">
            {isRunning ? "Running" : "Not running"}
          </div>
          <button className="focus_stopwatch_btn" onClick={start}>
            Start
          </button>
          <button className="focus_stopwatch_btn" onClick={pause}>
            Pause
          </button>
          <button className="focus_stopwatch_btn" onClick={reset}>
            Reset
          </button>
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

export default FocusMode;
