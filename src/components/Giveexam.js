import React, { useState } from "react";
import axios from "axios";
import "./giveexam.css";
import "./tailwind.css";
import { useEffect } from "react";

function Giveexam(props) {
  const { userInfo, rollNumber } = props;
  const [subjectCode, setSubjectCode] = useState("");
  const [questions, setQuestions] = useState([]);
  const [currentDate, setCurrentDate] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);
  const [success, setsuccess] = useState(false);
  const [timeLeft, setTimeLeft] = useState(3 * 60 * 60); 

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        clearInterval(timer);
        handleSubmission();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);
  const handleInputChange = (event) => {
    setSubjectCode(event.target.value);
  };

  const getExternalDate = () => {
    const externalDateApiUrl = "https://worldtimeapi.org/api/ip";
    return axios
      .get(externalDateApiUrl)
      .then((response) => {
        return response.data?.utc_datetime?.split("T")[0];
      })
      .catch((error) => {
        console.error("Error fetching external date:", error);
        return null;
      });
  };
  const handleSubmit = () => {
    getExternalDate().then((date) => {
      if (date) {
        setCurrentDate(date);
        const queryParams = `?subjectCode=${subjectCode}&date=${date}`;
        axios
          .get(`https://examai.onrender.com/getSubject/${queryParams}`)
          .then((response) => {
            setQuestions(response.data.questions);

            console.log("user info here ", response.data);
            setUserAnswers(Array(response.data.questions.length).fill(""));
          })
          .catch((error) => {
            console.error("Error while fetching data:", error);
            setQuestions([]);
            setUserAnswers([]);
          });
      } else {
        console.error("External date not available.");
      }
    });
  };

  const handleAnswerChange = (index) => {
    return (event) => {
      const updatedAnswers = [...userAnswers];
      updatedAnswers[index] = event.target.innerHTML;
      setUserAnswers(updatedAnswers);
    };
  };

  const handleSubmission = () => {
    setsuccess(true);
    if (userInfo) {
      const examData = {
        subjectCode: subjectCode,
        date: currentDate,
        rollNumber: rollNumber, // Include user information
        name: userInfo.name, // Include user information
        semester: userInfo.semester, // Include user information
        questions: questions.map((question, index) => ({
          question: question.question,
          marks: question.marks,
          userAnswer: userAnswers[index],
        })),
      };
      console.log("info = ", userInfo);

      axios
        .post("http://localhost:3001/submit-answer", examData)
        .then((response) => {
          console.log(response.data);
          // Handle success, e.g., show a success message
        })
        .catch((error) => {
          console.error("Error submitting answers:", error);
          // Handle error, e.g., show an error message
        });
    } else {
      console.error("User information not available.");
    }
  };
  return (
    <>
    <div>
      <div className="nav bg-blue-950 text-white flex justify-between items-center sticky top-0 z-10">
        <ul className="flex">
          <li className="p-4 cursor-pointer font-bold text-xl ">
            Discrete Mathematics Exam
          </li>
        </ul>
        <ul className="flex">
          <li className="p-4 cursor-pointer font-bold text-xl ">
            Time Left: {formatTime(timeLeft)}
          </li>
        </ul>
      </div>
      <div className="subcode m-3 flex items-center">
        <input
          type="text"
          className="w-56 mx-2 px-2 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
          placeholder="Enter Subject Code"
          value={subjectCode}
          onChange={handleInputChange}
        />

        <button
          className="text-white w-20 bg-gray-800 hover:bg-gray-900 focus:outline-none font-medium rounded-lg text-sm p-2  dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>

      {questions && questions.length > 0 ? (
        <div className=" m-auto p-20  ">
          <h3>Goodluck, Here are your Questions:</h3>
          <ul className="flex-col">
            {questions.map((question, index) => (
              <li key={index} className="p-4">
                <strong>Question {index + 1}:</strong>{" "}<strong>{question.question}</strong> {" "}
                (Marks: {question.marks})
                <div
                  className="answerfield w-full mt-2 p-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500 bg-slate-50"
                  contentEditable={true}
                  onBlur={handleAnswerChange(index)}
                >
                  {userAnswers[index]
                    ? userAnswers[index]
                    : "Enter Your answer"}
                </div>
              </li>
            ))}
          </ul>

          <button
            className=" ml-6 bg-blue-950 hover:bg-blue-700 text-white py-2 px-2 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out"
            onClick={handleSubmission}
          >
            Submit Answers
          </button>
        </div>
      ) : !success ? (
        <p className="font-bold text-center m-64 text-2xl" >No questions found for the entered subject code.</p>
      ) : (
        <p></p>
      )}
      <>
        {success ? (
          <h1 className="font-bold text-center mb-24 text-3xl" >Thanks Your Answers has been sent and will be evaluated soon</h1>
        ) : (
          <h1></h1>
        )}
      </>
    </div>
     <footer className="bg-blue-950 text-white p-4 text-center">
     <div className="mb-4">
       <strong>Helpline:</strong> +91-XXXXXXXXXX
     </div>
     <div className="mb-4">
       <strong>Questions or Concerns About the Exam?</strong>{" "}
       <a href="mailto:examquestions@example.com">examquestions@example.com</a>
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
   </>
  );
}

export default Giveexam;
function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}:${String(remainingSeconds).padStart(2, "0")}`;
}
