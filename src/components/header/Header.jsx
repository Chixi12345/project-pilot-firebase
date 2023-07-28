import React from "react";
import "./header.css";
import sortindex from "../../assets/icons/sortindex.svg";

const Header = () => {
  return (
    <div className="indexScreenHeader_gen">
      <div className="indexScreenheader_img">
        <img src={sortindex} />
      </div>

      <div className="indexScreenHeader_text">Index</div>

      <div className="indexScreenHeader_profImg">de</div>
    </div>
  );
};

export default Header;
