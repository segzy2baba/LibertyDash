// import React from "react";
import {
  // BsFillArchiveFill
  BsPeopleFill,
  // BsFillBellFill,
  BsChevronRight,
 
} from "react-icons/bs";
import {
  // BsFillArchiveFill
  FaPiggyBank
 
 
} from "react-icons/fa";

// import PieChartBox from "../components/pieChartBox/PieChartBox";

function Home() {
 

  return (
    
    <main className="main-container">
      <div className="main-title">
        <h3 className="dash-title">Plans</h3>
      </div>

      <div className="main-cards">

        <div className="card-content py-4">

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
          
        </div>

        <div className="card-content py-4">

          <div className="bg-white card_icon">
          <BsPeopleFill className="fs-2 text-danger" />
          </div>

          <div className="card-inner mx-3">
           <h5 className="text-dark font-weight-medium ">Personal</h5>
            <p className="  text-muted">
              locked your savings towards long term goals
            </p>

          </div>
          <BsChevronRight className="fs-4" />
          
        </div>

       
       
       
      </div>

    
    </main>
  );
}

export default Home;
