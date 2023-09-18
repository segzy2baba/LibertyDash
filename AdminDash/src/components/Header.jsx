// import React from "react";
import {
  BsBell,
  BsJustify,
} from "react-icons/bs";
import PropTypes from "prop-types";


function Header({ OpenSidebar }) {
  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
      <div className="header-left">
      <div className="main-title">
        <h5 className="fs-6">PLAN</h5>
      </div>
      </div>
      <div className="header-right">
        <BsBell className="icon" />
      </div>
    </header>
  );
}

Header.propTypes = {
  OpenSidebar: PropTypes.func.isRequired,
};

export default Header;
