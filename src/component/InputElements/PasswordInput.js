import React, { useState, useEffect } from "react";
import propTypes from "prop-types";

export default function PasswordInput(props) {
  const [password, setPassword] = useState("");
  const [isPasswordSecure, setIsPasswordSecure] = useState([]);

  const checkPassword = [
    "At least one upper case English letter",
    "At least one lower case English letter",
    "At least one digit",
    "At least one special character",
    "Minimum eight in length",
  ];

  const speak = () => {
    let msg = new SpeechSynthesisUtterance(password);

    window.speechSynthesis.speak(msg);
  };

  useEffect(() => {
    let arr = [];
    return () => {
      checkPassword.forEach((value, index) => {
        arr.push(false);
      });
    };
  }, []);

  const changeInputValue = (event) => {
    let value = event.target.value;
    setPassword(value);

    let checkPassword = [
      "(?=.*?[A-Z])",
      "(?=.*?[a-z])",
      "(?=.*?[0-9])",
      "(?=.*?[#?!@$%^&*-])",
      ".{8,}",
    ];

    let arr = [];
    checkPassword.forEach((regex, index) => {
      if (value.match(regex)) {
        arr.push(true);
      } else {
        arr.push(false);
      }
    });
    setIsPasswordSecure(arr);
  };

  return (
    <>
      <div className="container">
        <div className="container-fluid">
          <div className="mb-3 ">
            <input
              type={props.type}
              className="form-control"
              placeholder={props.placeholder}
              value={password}
              onChange={changeInputValue}
            />
          </div>

          {checkPassword.map((value, index) => {
            return (
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={isPasswordSecure[index]}
                  id="flexCheckIndeterminate"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexCheckIndeterminate"
                >
                  {value}
                </label>
              </div>
            );
          })}

          <div className="col-auto mt-3">
            <button
              type="submit"
              className="btn btn-primary "
              onClick={() => {
                console.log(password);
              }}
            >
              Submit
            </button>
            <button
              type="submit"
              onClick={speak}
              className="btn btn-warning mx-2 my-2"
              id="toggle"
            >
              Speak
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

PasswordInput.propTypes = {
  type: propTypes.string.isRequired, // => isRequired Means That is required field
  placeholder: propTypes.string.isRequired,
};

PasswordInput.defaultProps = {
  type: "password",
  placeholder: "Enter Password",
};
