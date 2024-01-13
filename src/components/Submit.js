import React, { useState, useEffect } from "react";
import "./Submit.css";

function Submit(props) {
  const { resrol, code, date } = props;
  const [studentResult, setStudentResult] = useState(null);

  useEffect(() => {
    fetch(
      `http://localhost:3001/getresultsstudent?rollNumber=${resrol}&subjectCode=${code}&date=${date}`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((studentResults) => {
        setStudentResult(studentResults);
      });
  }, [resrol, code, date]);

  return (
    <>
      <div className="nav bg-blue-950 text-white flex justify-between items-center sticky top-0 z-10">
        <ul className="flex">
          <li className="p-4 cursor-pointer font-bold text-xl ">
            Result Portal
          </li>
        </ul>
        <ul className="flex">
          <li className="p-4 cursor-pointer font-bold text-xl ">About</li>
        </ul>
      </div>

      <div>
        <h2 className="heading">Student Result</h2>
        {studentResult && (
          <div className="main">
            <div className="main3">
              <p>Name: {studentResult.name}</p>
              <p>Date: {studentResult.date}</p>
              <p>Roll No.: {studentResult.rollNumber}</p>
            </div>

            <h3 className="head">Result:-</h3>
            <ul className="main2">
              {studentResult.questions.map((question, i) => (
                <li key={i}>
                  <strong>Question:</strong> {question.question}
                  <br />
                  <strong>Marks:</strong> {question.marks}
                  <br />
                  <strong>User Answer:</strong> {question.userAnswer}
                  <br />
                  <strong>Feedback:</strong> {question.feedback}
                  <br />
                  <strong>Marks Got:</strong> {question["marks-got"]}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Submit;
