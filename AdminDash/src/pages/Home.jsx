// import React from "react";
import { useNavigate } from "react-router-dom";
import {
  // BsFillArchiveFill
  BsPeopleFill,
  // BsFillBellFill,
  BsChevronRight,
} from "react-icons/bs";
import { FaPiggyBank } from "react-icons/fa";

import { FcMoneyTransfer, FcUnlock } from "react-icons/fc";
// import { Link } from "react-router-dom";

function Home() {

  const navigate = useNavigate ();

  const handleCardClick = () => {
    // Programmatically navigate to the desired route
    navigate("/plan/personal");
    // history.push("/plan");
  };

  return (
    <main className="main-container">
      <div className="main-title">
        <h3 className="dash-title">Plans</h3>
      </div>

      <div className="main-cards">
        <div className="card-content py-4" onClick={handleCardClick}>
          {/* <Link to="/plan"> */}
          <div className="bg-white card_icon">
            <FaPiggyBank className="fs-2 pink-icon" />
          </div>
          <div className="card-inner mx-3">
            <h5 className="text-dark font-weight-medium ">Personal</h5>
            <p className="  text-muted">
              locked your savings towards long term goals
            </p>
          </div>
          <BsChevronRight className="fs-4" />
          {/* </Link> */}
        </div>

        <div className="card-content py-4">
          <div className="bg-white card_icon">
            <BsPeopleFill className="fs-2 text-danger" />
          </div>
          <div className="card-inner mx-3">
            <h5 className="text-dark font-weight-medium ">Cliq</h5>
            <p className="  text-muted">
              Save towards milestones with friends.
            </p>
          </div>
          <BsChevronRight className="fs-4" />
        </div>

        <div className="card-content py-4">
          <div className="bg-white card_icon">
            <FcMoneyTransfer className="fs-2 text-danger" />
          </div>
          <div className="card-inner mx-3">
            <h5 className="text-dark font-weight-medium ">Soft</h5>
            <p className="  text-muted">
              Flexible savings, withdraw at any time.
            </p>
          </div>
          <BsChevronRight className="fs-4" />
        </div>

        <div className="card-content py-4">
          <div className="bg-white card_icon">
            <FcUnlock className="fs-2 text-danger" />
          </div>
          <div className="card-inner mx-3">
            <h5 className="text-dark font-weight-medium ">Locked</h5>
            <p className="  text-muted">
              Lorem ipsum dolor sit amet si consectetur.
            </p>
          </div>
          <BsChevronRight className="fs-4" />
        </div>
      </div>
    </main>
  );
}

export default Home;
