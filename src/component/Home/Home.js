import React, { useState } from "react";
import Alert from "../Alert";
import TextForm from "../InputElements/TextForm";
import PasswordInput from "../InputElements/PasswordInput";

export default function Home(props) {
  const [alert, setAlert] = useState(null);
  const showAlert = (type, message) => {
    if (type == null && message == null) {
      setAlert(null);
    } else {
      setAlert({
        msg: message,
        type: type,
      });
    }
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
      <Alert alert={alert} />
      <TextForm
        heading="Enter Email"
        placeholder="Enter Email"
        type="text"
        alert={alert}
        showAlert={showAlert}
      />
      <PasswordInput alert={alert} showAlert={props.showAlert} />
    </>
  );
}
