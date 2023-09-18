// import { useState } from 'react';

import FormPlan from "./Form/FormPlan";
import PropTypes from "prop-types";

function Model({ isOpen, onClose }) {

    if (!isOpen) return null;

    
  return (
    <div className="custom-modal"> 
      <div className="modal-content text-center"> 
        <span className="modal-close" onClick={onClose}>
          &times;
        </span>
        <h5 className="brcolor">Create a Personal Savings Plan</h5>
        <p className="fw-light">Start a savings plan to smash your goals</p>
        <FormPlan onClose={onClose} />
      </div>
    </div>
  )
}

Model.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Model