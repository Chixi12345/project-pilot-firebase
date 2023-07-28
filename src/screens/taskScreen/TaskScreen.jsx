import React, { useState } from "react";
import "./taskScreen.css";
import Navbar from "../../components/navBar/Navbar";
import Header from "../../components/header/Header";

import indexMainImg from "../../assets/icons/indexMainImg.svg";
import addTag from "../../assets/icons/addTag.svg";

import addTime from "../../assets/icons/addTime.svg";

import send from "../../assets/icons/send.svg";

const TaskScreen = () => {
  const [showModal, setShowModal] = useState(false);
  const [showTag, setShowTag] = useState(false);

  const [priorTag, setPriorTag] = useState(0);

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

  const handleChildClick = (event) => {
    // 👇️ stop event propagation (won't trigger parent's onClick)
    event.stopPropagation();

    // console.log("child clicked");
  };

  return (
    <div className="totalOntaskScreen_gen">
      <div className="taskScreen_containertt">
        <Header />

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

                  <div className="modalAdd_bottomFamTimeImg">
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
        <Navbar openShowModal={openShowModal} />
      </div>
    </div>
  );
};

export default TaskScreen;
