// import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../assets/log.jpeg";
import {
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsArrowUpSquareFill,
  BsFillCreditCardFill,
  BsFillPersonFill,
  BsInfoSquareFill,
  BsPeopleFill,
  BsFillChatDotsFill,
  BsHandbagFill,
} from "react-icons/bs";
import { IoLogOut } from "react-icons/io5";
import PropTypes from "prop-types";
import { AiTwotonePieChart } from "react-icons/ai";

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? "sidebar-responsive" : ""}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <img src={logoImage} alt="Logo" />
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <div className="con-sidebar-list-item">
          <Link to="/">
            <li className="sidebar-list-item ">
              <BsGrid1X2Fill className="icon block" /> Dashboard
            </li>
          </Link>
        </div>
        <div className="con-sidebar-list-item">
          <Link to="/">
            <li className="sidebar-list-item active">
              <BsFillArchiveFill className="icon" /> Plan
            </li>
          </Link>
        </div>
        <div className="con-sidebar-list-item">
          <Link to="/purse">
            <li className="sidebar-list-item">
              <BsHandbagFill className="icon" /> Purse
            </li>
          </Link>
        </div>
        <div className="con-sidebar-list-item">
          <Link to="/investments">
            <li className="sidebar-list-item">
              <BsArrowUpSquareFill className="icon" /> Investments
            </li>
          </Link>
        </div>
        <div className="con-sidebar-list-item">
          <Link to="/banks-cards">
            <li className="sidebar-list-item">
              <BsFillCreditCardFill className="icon" />
              Banks & Cards
            </li>
          </Link>
        </div>
        <div className="con-sidebar-list-item">
          <Link to="/referral">
            <li className="sidebar-list-item">
              <BsPeopleFill className="icon" /> Referral Code
            </li>
          </Link>
        </div>
        <div className="con-sidebar-list-item">
          <Link to="/account">
            <li className="sidebar-list-item">
              <BsFillPersonFill className="icon" /> Account
            </li>
          </Link>
        </div>

        <div className="con-sidebar-list-item">
          <Link to="/account">
            <li className="sidebar-list-item">
              <AiTwotonePieChart className="icon" /> Portfolio
            </li>
          </Link>
        </div>

        <div className="con-sidebar-list-item">
          <Link to="/account">
            <li className="sidebar-list-item">
              <BsInfoSquareFill className="icon" /> About Harvest
            </li>
          </Link>
        </div>

        <div className="con-sidebar-list-item">
          <Link to="/account">
            <li className="sidebar-list-item">
              <BsFillChatDotsFill className="icon" /> Support
            </li>
          </Link>
        </div>

        <div className="con-sidebar-list-item">
          <Link to="/account">
            <li className="sidebar-list-item">
              <IoLogOut className="icon" /> Logout
            </li>
          </Link>
        </div>
      </ul>
    </aside>
  );
}

Sidebar.propTypes = {
  openSidebarToggle: PropTypes.bool.isRequired,
  OpenSidebar: PropTypes.func.isRequired,
};

export default Sidebar;
