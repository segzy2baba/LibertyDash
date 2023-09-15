// import React from 'react'
import { useState } from 'react'
import Modal from "../components/Model";

function Plan() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
        // console.log("work" , isModalOpen)
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };

  return (
    <>
    <main className="plan-container mt-5 ">
    <section className=" ">
      <div className="p-3">
        <div className="text-center">
          <img src="../c.jpg" alt="calender" />
        </div>
        <h3 className="mt-3 text-center text-brown">No personal Savings Plan!</h3>
        <p className="text-center">
          Smash your financial goals by starting a personal
          <br />savings plan today!
        </p>
        <div className="text-center">
          <button className="btn btn-brown px-4"
             onClick={openModal}
          >
            START A SAVINGS PLAN
          </button>
        </div>
      </div>
    </section>
    <Modal isOpen={isModalOpen} onClose={closeModal} />
    </main>

    </>
  )
}

export default Plan