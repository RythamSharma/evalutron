import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home.js';
import Studentlogin from './components/Studentlogin.js';
import Teacherlogin from './components/Teacherlogin.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loginstu" element={<Studentlogin />} />
        <Route path="/logintea" element={<Teacherlogin />} />
      </Routes>
    </Router>
  );
}

export default App;
