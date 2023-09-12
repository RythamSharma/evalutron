import React from "react";
import stud from "./studlogin.png";
import bg01 from "./bg01.png";
export default function studentlogin() {
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
        Teacher
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
      <form className="d-flex" role="search" >
        <input
          style={{width:'350px', position:'absolute',top:'320px',left:'1000px',borderRadius:'15px'}}
          className="form-control me-2"
          type="search"
          placeholder="Enter Your ID"
          aria-label="Search"
        />
         <input
          style={{width:'350px', position:'absolute',top:'370px',left:'1000px',borderRadius:'15px'}}
          className="form-control me-2"
          type="search"
          placeholder="Enter Your Password"
          aria-label="Search"
        />
        <button className="btn btn-outline-secondary" style={{width:'350px', position:'absolute',top:'450px',left:'1000px'}}
        type="submit">
          Login
        </button>
        <button className="btn btn-link" style={{width:'350px', position:'absolute',top:'500px',left:'1121px'}}>
          Create Account?
        </button>
      </form>
    </div>
  );
}
