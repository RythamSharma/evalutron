import React from "react";
import stud from "./studlogin.png";
import bg01 from "./bg01.png";
import { Link } from "react-router-dom";
export default function Studentchoice() {
  return (
    <div className="containewr">
      <img src={stud} id="stud" alt="..." />
      <h1
        className="heading"
        style={{
          position: "absolute",
          top: "30px",
          left: "90px",
          fontSize: "70px",
        }}
      >
        EVALUTRON
      </h1>
      <h1
        className="heading"
        style={{
          position: "absolute",
          top: "30px",
          left: "567px",
          color: "#b19ea1",
          fontSize: "70px",
        }}
      >
        STUDENT
      </h1>
      <img
        src={bg01}
        style={{
          position: "absolute",
          top: "156px",
          left: "220px",
          width: "490px",
          height: "auto",
        }}
        id="stud"
        alt="..."
      />
      <Link to='/loginstu' >
        <button className="btn btn-outline-secondary" style={{width:'350px', position:'absolute',top:'320px',left:'1000px'}}
        type="submit">
          View Result
        </button>
        </Link>
        <Link to='/loginstu' >
        <button className="btn btn-outline-secondary" style={{width:'350px', position:'absolute',top:'370px',left:'1000px'}}
        type="submit">
          Give Exam
        </button>
        </Link>
    </div>
  );
}