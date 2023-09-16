import "./form.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";

function FormPlan({ onClose }) {
  const [rangeValue, setRangeValue] = useState(0);
  const [isChecked, setIsChecked] = useState(false);


  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRangeChange = (e) => {
    setRangeValue(e.target.value);
  };

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    // Show the spinner when form is being submitted.
    setIsSubmitting(true);

    try {
      const result = await emailjs.sendForm(
        "service_fdiei61",
        "template_obfht6f",
        e.target,
        "ShudOni2uaIg47PSg"
      );

      console.log(result.text);
      onClose();
      e.target.reset(); // Clear the form
      window.alert("Form submitted successfully!");
    } catch (error) {
      console.error(error.text);
    } finally {
      // Hide the spinner when the submission is complete.
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="container border-bottom-0">
        <div className="form">
          <form className="register-form" onSubmit={sendEmail}>
            <div className="input-container">
              <label htmlFor="name">Name of Person Saving</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter Name"
                required
              />
            </div>
            <div className="input-container">
              <label htmlFor="targetAmount">Target Amount</label>
              <input
                type="number"
                id="Amount"
                name="Amount"
                placeholder="NGN 0"
                required
              />
            </div>

            <div
              className="toggle d-flex justify-content-start align-items-end mb-5"
              onClick={handleToggle}
            >
              <input
                className="toggle-checkbox"
                type="checkbox"
                checked={isChecked}
                onChange={() => {}}
              />
              <div
                className={`toggle-switch ${isChecked ? "checked" : ""}`}
              ></div>
              <span className="toggle-label">
                Earn interest on this saving plan
              </span>
            </div>

            <div className="input-container mb-5">
              <label htmlFor="savingFrequency">Saving Frequency</label>
              <select id="savingFrequency" name="savingFrequency" required>
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
              </select>
            </div>
            <div className="input-container range-container ">
              <label htmlFor="savingDuration" className="form-label">
                How long do you want to save for?
              </label>
              <input
                type="range"
                id="savingDuration"
                name="savingDuration"
                className="form-range"
                min="0"
                max="12"
                step="1"
                value={rangeValue}
                onChange={handleRangeChange}
              />
              <div className="tooltip1">{rangeValue} months</div>
            </div>
            <hr className="form-hr" />
            {isSubmitting ? (
              <button type="submit" className="create-button mb-4" disabled>
              
                Loading...
              </button>
            ) : (
              <button type="submit" className="create-button mb-4">
                PROCEED
              </button>
            )}
          </form>
        </div>
      </div>
    </>
  );
}

export default FormPlan;
