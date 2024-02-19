import React from "react";
import spinner from "./assets/loadingSpinner.gif";

const Spinner = () => {
  return (
    <img src={spinner} alt="" style={{ width: "100px", margin: "auto" }} />
  );
};

export default Spinner;
