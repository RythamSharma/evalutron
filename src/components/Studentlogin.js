import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import img from "./pictures/practicer.png";
export default function Studentlogin(props) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const action = searchParams.get("action");
  const { setUserInfo, setRollNumber, userInfo, rollNumber } = props;
  const [roll, setRoll] = useState("");
  const [pass, setPass] = useState("");
  let navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setRollNumber(roll);
    const userData = {
      username: roll,
      password: pass,
    };
    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await response.json();
      setUserInfo(data);
      // console.log(data);
      console.log(rollNumber);
      console.log(userInfo);
      if (!data.message) {
        if (action === "view") {
          navigate("/viewresultstudent");
        } else if (action === "exam") {
          navigate("/giveexam");
        }
        console.log("Authentication successful");
      } else {
        console.error("Authentication failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tl overflow-hidden  from-blue-600 via-blue-100 to-amber-100">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center bg-gray-900 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20 p-20 w-full  md:w-[50vw]"
      >
          <h1
          className="  mb-[-15px]  md:mb-3 font-extrabold text-black heading "
          style={{ fontSize: "60px" }}
        >
          EVALUTRON
        </h1>
        <h1
          className="  mb-[-1px]  md:mb-[25px] font-extralight text-black  "
          style={{ fontSize: "20px" }}
        >
          STUDENT
        </h1>
        <div className="flex flex-row  ">
          <div>
            <img src={img} className="w-96" alt="" />
          </div>
          <div className="flex flex-col mt-11">
            <input
              style={{
                width: "350px",
                marginBottom:'7px',
                border: "none",
                borderBottom: "1px solid black",
                backgroundColor:'transparent'
              }}
              className="form-control me-2"
              type="search"
              placeholder="Enter Your Roll no"
              onChange={(e) => setRoll(e.target.value)}
              value={roll}
            />

            <input
              style={{
                width: "350px",
                border: "none",
                borderBottom: "1px solid black",
                backgroundColor:'transparent'
              }}
              className="form-control me-2"
              type="password"
              placeholder="Enter Your Password"
              onChange={(e) => setPass(e.target.value)}
              value={pass}
            />
            <button
              className="btn btn-outline-secondary text-white border-white "
              style={{ width: "348px", marginTop: "10px" }}
              type="submit"
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
