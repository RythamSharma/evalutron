import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import img from "./pictures/practicer.png";
export default function Teacherlogin() {
  const navigate = useNavigate();
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
      const response = await fetch("http://localhost:3001/loginT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      if (response.ok) {
        const data = await response.json();
        if (action === "view") {
          navigate("/viewresult");
        } else if (action === "exam") {
          navigate("/createexam");
        }
        console.log(data);
        if (!data.message) {
          console.log("Authentication successful");
        } else {
          console.error("Authentication failed");
        }
      } else {
        console.error("Server returned an error:", response.status);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tl overflow-hidden  to-amber-100 via-rose-100 from-fuchsia-500">
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
          TEACHER
        </h1>
        <div className="flex flex-row  ">
          <div>
            <img src={img} className="w-96" alt="" />
          </div>
          <div className="flex flex-col mt-11">
            <input
              style={{
                width: "350px",
                border: "none",
                marginBottom: "7px",
                borderBottom: "1px solid black",
                backgroundColor: "transparent",
              }}
              className="form-control me-2"
              type="search"
              placeholder="Enter Your ID"
              aria-label="Search"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              value={username}
            />
            <input
              style={{
                width: "350px",
                border: "none",
                borderBottom: "1px solid black",
                backgroundColor: "transparent",
              }}
              className="form-control me-2"
              type="password"
              placeholder="Enter Your Password"
              aria-label="Search"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
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
