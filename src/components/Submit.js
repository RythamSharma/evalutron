import React, { useState, useEffect } from "react";

function Submit(props) {
  const { resrol, code, date } = props;
  const [studentResult, setStudentResult] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/getresultsteacher?rollNumber=${resrol}&subjectCode=${code}&date=${date}`, {
      method: "GET",
    })
      .then(response => response.json())
      .then(studentResults => {
        setStudentResult(studentResults);
      });
  }, [resrol, code, date]);

  return (
    <div>
      <h2>Student Result</h2>
      {studentResult && (
        <div>
          <p>Name: {studentResult.name}</p>
          <p>Date: {studentResult.date}</p>
          <p>Roll No.: {studentResult.rollNo}</p>
          <p>Marks: {studentResult.marks}</p>

          <h3>Questions</h3>
          <ul>
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
                <strong>Marks Got:</strong> {question['marks-got']}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Submit;