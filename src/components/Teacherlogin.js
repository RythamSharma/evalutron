import React from "react";
import stud from "./studlogin.png";
import bg01 from "./bg01.png";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import { useLocation } from "react-router-dom";
export default function Teacherlogin() {
  const navigate= useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const action = searchParams.get("action");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    const userData = {
      username: username,
      password: password,
    };
    try {
      const response = await fetch('http://localhost:3001/loginT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      if (response.ok) {
        const data = await response.json();
        if (action === "view") {
          navigate('/viewresult');
        }
        else if (action === "exam") {
          navigate("/createexam");
        }
        console.log(data);
        if (!data.message) {
          console.log('Authentication successful');
        } else {
          console.error('Authentication failed');
        }
      } else {
        console.error('Server returned an error:', response.status);
      }
    } catch (error) {
      console.error('Error:', error);
    }
    
  }
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
      <form className="d-flex" onSubmit={handleSubmit} role="search" >
        <input
          style={{width:'350px', position:'absolute',top:'320px',left:'1000px',borderRadius:'15px'}}
          className="form-control me-2"
          type="search"
          placeholder="Enter Your ID"
          aria-label="Search"
          onChange={(e)=>{setUsername(e.target.value)}}
          value={username}
        />
         <input
          style={{width:'350px', position:'absolute',top:'370px',left:'1000px',borderRadius:'15px'}}
          className="form-control me-2"
          type="password"
          placeholder="Enter Your Password"
          aria-label="Search"
          onChange={(e)=>{setPassword(e.target.value)}}
          value={password}
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
