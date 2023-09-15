// import { useState } from 'react';

import FormPlan from "./Form/FormPlan";

function Model({ isOpen, onClose }) {

    if (!isOpen) return null;

    
  return (
    <div className="custom-modal"> {/* Change the class name here */}
      <div className="modal-content text-center"> {/* Center content using text-center */}
        <span className="modal-close" onClick={onClose}>
          &times;
        </span>
        <h5 className="brcolor">Create a Personal Savings Plan</h5>
        <p className="fw-light">Start a savings plan to smash your goals</p>

        {/* Include the FormComponent */}
        <FormPlan onClose={onClose} />
      </div>
    </div>
  )
}

export default Model