import React, { useState, useEffect } from "react";
import propTypes from "prop-types";

export default function TextForm(props) {
  const [email, setEmail] = useState("");
  const [isEmailCorrect, setIsEmailCorrect] = useState(false);

  const changeInputValue = (event) => {
    let value = event.target.value;
    setEmail(value);
    let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    let element = document.getElementById("email-input");

    if (email.match(regex)) {
      setIsEmailCorrect(true);
      element.className = "form-control is-valid";

      props.showAlert(null, null);
    } else {
      setIsEmailCorrect(false);
      element.className = "form-control is-invalid";

      props.showAlert("Warning", "Enter Valid Email");
    }
  };

  return (
    <>
      <div className="container">
        <div className="container-fluid">
          <h1>Login Form</h1>
          <div className="mb-3 ">
            <label htmlFor={props.heading} className="form-label">
              {props.heading}
            </label>
            <input
              type={props.type}
              id="email-input"
              className="form-control"
              placeholder={props.placeholder}
              value={email}
              onChange={changeInputValue}
            />
          </div>
        </div>
      </div>
    </>
  );
}

TextForm.propTypes = {
  type: propTypes.string.isRequired, // => isRequired Means That is required field
  placeholder: propTypes.string.isRequired,
};

TextForm.defaultProps = {
  type: "text",
  placeholder: "Enter Text",
};
