import React, { useState } from "react";

import logo from '../components/pictures/logo.png'

import logo2 from '../components/pictures/logo2.png';
import resultlogo from '../components/pictures/resultlogo.png';

import './ViewResult.css';
import { useNavigate } from "react-router-dom";

const ResultPage = (props) => {
  const{setcode, setresrol,code,rollNumber}=props;
  const [date, setDate] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    // Implement the logic to submit the form data here.
    event.preventDefault();
    navigate("/Submit")
  };
  setresrol(rollNumber);
  return (
    <div className="container_outer">
    <div className="input-container">
      <span className="para">
        <p>RESULT</p>
      </span>
      <input
        className="input-field"
        type="text"
        placeholder="Enter Subject code"
        value={code}
        onChange={(event) => setcode(event.target.value)}
      />
      <input
        className="input-field"
        type="date"
        placeholder="Enter Date"
        value={date}
        onChange={(event) => setDate(event.target.value)}
      />
      <button className="submit-button" onClick={handleSubmit}>
        Submit
      </button>

      <div >
        <img className="image-container" src={logo2} alt=" " />
      </div>

      <div >
        <img className="bottom-left-image-container" src={resultlogo} alt="" />
      </div>

      <div>
        <img  className="top-left-image-container" src={logo} alt="none" />
      </div>
    </div>
    </div>
  );
};

export default ResultPage;