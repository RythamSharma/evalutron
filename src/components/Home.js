import React from "react";
import logo from "./pictures/logo.png";
import Card from "./Card";
import practice from "./pictures/practicer.png";
import learning from "./pictures/learning.png"
import mock from "./pictures/mock.png";
import result from "./pictures/result.png";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <>
      <nav className="bg-white dark:bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
        <div className="max-w-full flex flex-wrap items-center justify-evenly md:justify-between mx-auto p-0">
          <a href="https://flowbite.com/" className="flex items-center">
            <img src={logo} className="w-32 mr-2" alt="Flowbite Logo" />
            <span className="self-center text-2xl col-p md:text-3xl font-extralight whitespace-nowrap dark:text-[#2e2a73]">
              Evalutron
            </span>
          </a>
          <div className="flex md:order-2">
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-md md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-300 dark:hover:bg-[#2e2a73] dark:focus:ring-gray-100"
              aria-controls="navbar-sticky"
              aria-expanded={isMenuOpen ? "true" : "false"}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`w-5 h-5 ${isMenuOpen ? "transform rotate-90" : ""}`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between w-full ${
              isMenuOpen ? "block" : "hidden"
            } md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-2 font-medium  rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-white md:dark:bg-white dark:border-gray-700">
              <li>
                <a
                  href="/"
                  className={` block py-2 pl-3 pr-4 text-black col-p text-xl rounded md:bg-transparent  md:p-0 ${
                    location.pathname === "/" ? "md:dark:text-[#2e2a73]" : ""
                  } `}
                  aria-current="page"
                  onClick={closeMenu}
                >
                  Home
                </a>
              </li>
              <Link to="/About">
                <li
                  onClick={closeMenu}
                  className={`block py-2 pl-3 pr-4 text-black rounded col-p text-xl hover:bg-[#2e2a73] md:hover:bg-transparent  md:p-0 md:dark:hover:text-[#2e2a73] dark:text-black dark:hover:bg-[#2e2a73] dark:hover:text-white md:dark:hover:bg-transparent ${
                    location.pathname === "/About"
                      ? "md:dark:text-[#2e2a73]"
                      : ""
                  } dark:border-gray-700 transition-colors duration-200 ease-in-out `}
                >
                  About
                </li>
              </Link>
              <Link to="/Shop">
                <li
                  onClick={closeMenu}
                  className={`block py-2 pl-3 pr-4 text-black rounded col-p text-xl ${
                    location.pathname === "/Shop"
                      ? "md:dark:text-[#2e2a73]"
                      : ""
                  } hover:bg-[#2e2a73] md:hover:bg-transparent md:p-0 md:dark:hover:text-[#2e2a73] dark:text-black dark:hover:bg-[#2e2a73] dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 transition-colors duration-200 ease-in-out `}
                >
                  Help
                </li>
              </Link>
              <Link to="/Contact">
                <li
                  onClick={closeMenu}
                  className={`block py-2 pl-3 pr-4 text-black rounded col-p text-xl hover:bg-[#2e2a73] md:hover:bg-transparent md:p-0 md:dark:hover:text-[#2e2a73] dark:text-black dark:hover:bg-[#2e2a73] dark:hover:text-white md:dark:hover:bg-transparent ${
                    location.pathname === "/Contact"
                      ? "md:dark:text-[#2e2a73]"
                      : ""
                  } dark:border-gray-700 transition-colors duration-200 ease-in-out `}
                >
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
      <div className="body-container mt-[90px] md:mt-[98px]  bg-gradient-to-br from-rose-200 to-fuchsia-500 h-fit p-9  flex flex-row justify-evenly items-center">
        <div className=" flex-row hidden md:flex ">
          <img className="w-96" src={mock} alt="" />
          <img className="w-96" src={practice} alt="" />
        </div>
        <div className="flex flex-col">
          <p className="text-3xl ml-2">Are you a Teacher?</p>
          <Link to="/teacherchoice">
            <button className="body-btn ml-12 md:ml-0 mt-3">Teacher</button>
          </Link>
          <p className="text-3xl mt-4 ml-2">Are you a Student?</p>
          <Link to="/studentchoice">
            <button className="body-btn ml-12 md:ml-0 mt-3 ">Student</button>
          </Link>
        </div>
      </div>
      <div className="container  ">
        <div className="flex flex-col md:flex-row justify-center items-center">
          <div className="col-md-3">
            <Card description="Practice" img={practice} />
          </div>
          <div className="col-md-3">
            <Card description="Mock Test" img={mock} />
          </div>
          <div className="col-md-3">
            <Card description="E-Learning" img={learning} mar="63px" />
          </div>
          <div className="col-md-3">
            <Card description="Result" img={result} />
          </div>
        </div>
      </div>

      <div className="container flex flex-wrap max-w-screen-lg justify-evenly md:ml-72 ">
            <div className="w-full md:w-5/12 p-5">
              <img className="mr-5 mt-5 w-96 " src={learning} alt="..." />
              <h2 className="col-p text-[#2e2a73] text-4xl" >What is Evalutron?</h2>
              <p className="col-p w-64 md:w-96" > "Evalutron," A fully AI-based exam evaluation system using the MERN stack. Implemented automatic evaluation of both multiple-choice and subjective answers, significantly reducing the burden on teachers. </p>
            </div>
            <div className="w-full md:w-5/12 p-5  ">
              <img className="mr-5 mt-5 w-72 " src={result} alt="..." />
              <h2 className="col-p text-[#2e2a73] text-4xl" >Why should I use it? </h2>
              <p className="col-p w-64 md:w-96" >Incorporated innovative features for future enhancements, showcasing a commitment to ongoing improvement in exam assessment technology. </p>
            </div>
      </div>  
      <Footer />
    </>
  );
}
