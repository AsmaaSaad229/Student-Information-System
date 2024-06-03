
// App.js
import React from 'react';
// import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// import Slists from './SelectLists/Slists.jsx';
// import AttendanceRecord from './attendence/AttendenceRecord.jsx'
// import Grades from './studentgrades/Grades.jsx';
// import Home from './attendence/Home.jsx';
import Home from './Control/Home.jsx';
import ControlAdmin from './Control/ControlAdmin.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Control/Login';
import ControlSheet from './Control/ControlSheet';
import  AffairDepartement from './studentAffairs/AffairDepartement';
import Slists from './SelectLists/Slists';
import Grades from './studentgrades/Grades';
import AttendenceRecord from './attendence/AttendenceRecord';
import CertificateLists from './studentAffairs/CertificateLists';
const App = () => {
  return (
    
      <Router>
      <div>
        <Routes>
          <Route path="/"  element={<Home/>} /> 
          <Route path="/Home"  element={<Home/>} /> 
          <Route path="/login" element={<Login/>} /> 
          <Route path="/ControlAdmin" element={<ControlAdmin/>} />
          <Route path="/ControlSheet" element={<ControlSheet/>} />
          <Route path="/AffairDepartement" element={<AffairDepartement/>} />
          <Route path="/Sutdentlists" element={<Slists/>} />
          <Route path="/student-grade" element={<Grades/>} />
          <Route path="/attendance-record" element={<AttendenceRecord/>} />
          <Route path="/CertificateLists" element={<CertificateLists/>} />
          
        </Routes>
      </div>
      </Router>
    
      
    // <Router>
    //   <div>
    //     <Routes>
    //       <Route path="/attendance-record" element={<AttendanceRecord/>} />
    //       <Route path="/student-grade" element={<Grades/>} />
    //       <Route path="/" element={<Slists/>} />
    //     </Routes>
    //   </div>
    // </Router>
  );
};

export default App;
