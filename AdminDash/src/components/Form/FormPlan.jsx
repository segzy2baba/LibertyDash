import "./form.css";
import { useState } from "react";

function FormPlan() {
  const [rangeValue, setRangeValue] = useState(0);

  const handleRangeChange = (e) => {
    setRangeValue(e.target.value);
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div className="container border-bottom-0">
        <div className="form">
          <form className="register-form">
            <div className="input-container">
              <label htmlFor="name">Name of Person Saving</label>
              <input type="text" id="name" placeholder="Enter Name" />
            </div>
            <div className="input-container">
              <label htmlFor="password">Target Amount</label>
              <input type="password" id="password" placeholder="NGN 0" />
            </div>

            <div className="toggle d-flex justify-content-start align-items-end mb-5" onClick={handleToggle}>
              <input
                className="toggle-checkbox"
                type="checkbox"
                checked={isChecked}
                onChange={() => {}}
              />
              <div
                className={`toggle-switch ${isChecked ? "checked" : ""}`}
              ></div>
              <span className="toggle-label">Earn interest on this saving plan</span>
            </div>

            <div className="input-container mb-5">
              <label htmlFor="email">Saving Frequency</label>
              <select id="email">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="input-container range-container ">
              <label htmlFor="customRange1" className="form-label">
                How long do you want to save for?
              </label>
              <input
                type="range"
                className="form-range"
                id="customRange1"
                min="0"
                max="12"
                step="1"
                value={rangeValue}
                onChange={handleRangeChange}
              />
              <div className="tooltip1">{rangeValue} months</div>
            </div>
            <hr className="form-hr" />
            <button className="create-button mb-4">PROCEED</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default FormPlan;
