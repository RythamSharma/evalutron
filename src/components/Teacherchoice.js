import React from "react";
import bg01 from "./pictures/bg01.png";
import { Link } from "react-router-dom";
export default function Studentchoice() {
  return (
    <div className=" md:mt-[-23px] bg-gradient-to-br from-amber-100 via-rose-300 to-fuchsia-500 h-[100vh] md:h-[90vh] w-[100vw] ">
      <h1
        className="heading hidden md:block "
        style={{
          fontSize: "70px",
        }}
      >
        EVALUTRON
      </h1>
      <h1
        className=" p-1   "
        style={{
          fontSize: "70px",
        }}
      >
        TEACHER
      </h1>
      <div className=" bg-gray-100 rounded-[70px] bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-30 h-[85vh] md:h-[76vh] items-center justify-center flex">
        <img src={bg01} className="hidden md:block w-96" alt="" />
        <div className="flex flex-col">
          <Link to="/logintea?action=exam">
            <button
              className="btn btn-outline-secondary m-2"
              style={{
                width: "350px",
              }}
              type="submit"
            >
              Create Exam
            </button>
          </Link>

          <Link to="/logintea?action=view">
            <button
              className="btn btn-outline-secondary m-2"
              style={{
                width: "350px",
              }}
              type="submit"
            >
              View Result
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
