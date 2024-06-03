import React from 'react';
import CollegeLogo from '../assets/ColegeLogo.png';
import '../styles/Header1.css';
import { useNavigate } from 'react-router-dom';
function Header1() {
    const navigate = useNavigate() ;
    return (
        <div className='header1_container'>
        <header className='head'>
            <div className="logo-section">
              <img src={CollegeLogo} alt="college Logo"/>
              <h2>Faculty of Engineering Aswan University</h2>
            </div>
            <div className="button-section">
              <button onClick={() => { navigate("./Login") }}>Login</button>
              <button>Sign up</button>
            </div>
        </header>
      
        <nav>
          <a href="./Home">Home</a>
          <a href="#">Departments</a>
          <a href="#">Students</a>
          <a href="#">Student Affairs</a>
        </nav>
      </div>
      
    );
}

export default Header1;
