import React from "react";
import stud from "./studlogin.png";
import bg01 from "./bg01.png";
import { useState } from "react";
import {useNavigate} from 'react-router-dom';
import { useLocation } from "react-router-dom";
export default function Studentlogin(props) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const action = searchParams.get("action");
  const {setUserInfo,setRollNumber,userInfo,rollNumber}=props; 
  const [roll, setRoll] = useState('');
  const [pass, setPass] = useState('');
  let navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setRollNumber(roll)
    const userData = {
      username: roll,
      password: pass,
    };
    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      setUserInfo(data);
      // console.log(data);
      console.log(rollNumber)
      console.log(userInfo)
      if (!data.message) {
        if (action === "view") {
          navigate('/viewresult');
        }
        else if (action === "exam") {
          navigate("/giveexam");
        }
        console.log('Authentication successful');
        
      } else {
        console.error('Authentication failed');
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
      <form  onSubmit={handleSubmit} className="d-flex" role="search" >
        <input
          style={{width:'350px', position:'absolute',top:'320px',left:'1000px',borderRadius:'15px'}}
          className="form-control me-2"
          type="search"
          placeholder="Enter Your Roll no"
          aria-label="Search"
          onChange={(e)=>{setRoll(e.target.value)}}
          value={roll}
        />
         <input
          style={{width:'350px', position:'absolute',top:'370px',left:'1000px',borderRadius:'15px'}}
          className="form-control me-2"
          type="password"
          placeholder="Enter Your Password"
          aria-label="Search"
          onChange={(e)=>{setPass(e.target.value)}}
          value={pass}
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
