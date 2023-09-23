import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home.js';
import Studentlogin from './components/Studentlogin.js';
import { useState } from 'react';
import Teacherlogin from './components/Teacherlogin.js';
import Studentchoice from './components/Studentchoice';
import Teacherchoice from './components/Teacherchoice';
import Createexam from './components/Createexam';
import Giveexam from './components/Giveexam';

function App() {
  const [userInfo, setUserInfo] = useState(null);
  const [rollNumber, setRollNumber] = useState("");
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loginstu" element={<Studentlogin setUserInfo={setUserInfo} userInfo={userInfo}  rollNumber={rollNumber}  setRollNumber={setRollNumber} />} />
        <Route path="/logintea" element={<Teacherlogin />} />
        <Route path="/studentchoice" element={<Studentchoice/>} />
        <Route path="/teacherchoice" element={<Teacherchoice/>} />
        <Route path="/createexam" element={<Createexam/>} />
        <Route path="/giveexam" element={<Giveexam userInfo={userInfo} rollNumber={rollNumber} />}/>
      </Routes>
    </Router>
  );
}

export default App;
