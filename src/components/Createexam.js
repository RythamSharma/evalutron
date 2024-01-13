import axios from "axios";
import React, { useState } from "react";

export default function Createexam() {
  const [numQuestions, setNumQuestions] = useState(0);
  const [evaluationMessage, setEvaluationMessage] = useState("");
  const [examData, setExamData] = useState({
    subjectCode: "",
    semester: "",
    date: "",
    time: "",
    questions: [],
    comment: "", // New state variable to store the comment
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setExamData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleQuestionChange = (index, event) => {
    const { value } = event.target;
    setExamData((prevState) => {
      const newQuestions = [...prevState.questions];
      if (!newQuestions[index]) {
        newQuestions[index] = {};
      }
      newQuestions[index].question = value;
      return {
        ...prevState,
        questions: newQuestions,
      };
    });
  };

  const handleMarksChange = (index, event) => {
    const { value } = event.target;
    setExamData((prevState) => {
      const newQuestions = [...prevState.questions];
      if (!newQuestions[index]) {
        newQuestions[index] = {};
      }
      newQuestions[index].marks = value;
      return {
        ...prevState,
        questions: newQuestions,
      };
    });
  };

  const handleCommentChange = (event) => {
    const { name, value } = event.target;
    setExamData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const jsonData = JSON.stringify(examData, null, 2);
    axios
      .post("http://localhost:3001/insertquestion", jsonData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setEvaluationMessage("Questions Uploaded Successfully!");
        console.log("Data sent successfully:", response.data);
      })
      .catch((error) => {
        setEvaluationMessage("Failed to upload questions. Please try again.");
        console.error("Error sending data:", error);
      });
  };

  const generateInputs = () => {
    return Array.from({ length: numQuestions }, (_, index) => (
      <div key={index} className="flex flex-col m-6">
        <label htmlFor={`q${index}`}>Question {index + 1}</label>
        <textarea
          className="questionfield w-full h-96 mx-2 my-2 px-2 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 resize-none"
          id={`q${index}`}
          placeholder={`Enter Question ${index + 1}`}
          onChange={(e) => handleQuestionChange(index, e)}
          rows="4"
        ></textarea>
        <input
          className="w-96 h-12 mx-2 my-2 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          type="number"
          placeholder={`Marks for Question ${index + 1}`}
          onChange={(e) => handleMarksChange(index, e)}
        />
      </div>
    ));
  };

  return (
    <>
      <div className="nav bg-blue-950 text-white flex justify-between items-center sticky top-0 z-10">
        <ul className="flex">
          <li className="p-4 cursor-pointer font-bold text-xl ">
            Questionnaire Development Portal
          </li>
        </ul>
        <ul className="flex">
          <li className="p-4 cursor-pointer font-bold text-xl ">About</li>
        </ul>
      </div>
      <div>
        <h2 className="text-4xl font-extrabold text-center m-14">
          Exam Construction Suite
        </h2>
        <div className="container flex">
          <label className="ml-9">
            Number of Questions:
            <input
              type="number"
              className="w-56 mx-2 px-2 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              name="numQuestions"
              value={numQuestions}
              onChange={(e) => setNumQuestions(parseInt(e.target.value, 10))}
            />
          </label>
          <br />
          <label>
            Subject Code:
            <input
              className="w-56 mx-2 px-2 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              type="text"
              name="subjectCode"
              value={examData.subjectCode}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Semester:
            <input
              type="text"
              name="semester"
              value={examData.semester}
              className="w-56 mx-2 px-2 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Date of Exam:
            <input
              type="date"
              name="date"
              className="w-56 mx-2 px-2 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              value={examData.date}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Time of Exam:
            <input
              type="time"
              name="time"
              className="w-56 mx-2 px-2 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
              value={examData.time}
              onChange={handleChange}
            />
          </label>
          <br />
        </div>
        <h2 className="ml-7 text-2xl mt-32">Questions and Marks</h2>
        {generateInputs()}
        <label className="ml-7 mb-20 ">
          Comment for Checking Methodology:
          <textarea
            className="w-full h-32 mx-2 my-2 px-2 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            name="comment"
            value={examData.comment}
            onChange={handleCommentChange}
          ></textarea>
          <button
            className=" bg-blue-950 hover:bg-blue-700 text-white py-2 px-2 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </label>

        {evaluationMessage && (
          <p className="text-4xl font-extrabold text-center mb-24">
            {evaluationMessage}
          </p>
        )}
        <footer className="bg-blue-950 text-white p-4 text-center">
          <div className="mb-4">
            <strong>Helpline:</strong> +91-XXXXXXXXXX
          </div>
          <div className="mb-4">
            <strong>Questions or Concerns About the Exam?</strong>{" "}
            <a href="mailto:examquestions@example.com">
              examquestions@example.com
            </a>
          </div>
          <div className="mb-4">
            <strong>Report Wrong Questions:</strong>{" "}
            <a href="mailto:examreport@example.com">examreport@example.com</a>
          </div>
          <div className="mb-4">
            <strong>Technical Support:</strong>{" "}
            <a href="mailto:techsupport@example.com">techsupport@example.com</a>
          </div>
          <div className="mb-4">
            <strong>Lost Network?</strong> Call: +91-1234567890
          </div>
          <div>
            <p>Credits &copy; {new Date().getFullYear()} Evalutron</p>
          </div>
        </footer>
      </div>
    </>
  );
}
