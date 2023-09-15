import React from "react";
import {
  BsBell,
  // BsFillEnvelopeFill,
  // BsPersonCircle,
//   BsSearch,
  BsJustify,
} from "react-icons/bs";

function Header({ OpenSidebar }) {
  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
      <div className="header-left">
      <div className="main-title">
        <h4>PLAN</h4>
      </div>
      </div>
      <div className="header-right">
        <BsBell className="icon" />
        {/* <BsFillEnvelopeFill className="icon" />
        <BsPersonCircle className="icon" /> */}
      </div>
    </header>
  );
}

export default Header;
