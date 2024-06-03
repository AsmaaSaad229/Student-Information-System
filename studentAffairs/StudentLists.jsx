
import React from 'react';
import Section from './Section';
import { useNavigate } from 'react-router-dom';
import Certificat from '../assets/Certificat.PNG';
function StudentLists() {
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/Sutdentlists');
    };
    return (
      <Section
        title="Student Lists"
        onClick={handleSubmit}
        Certificate={Certificat}
      />
    );
  }
  export default StudentLists;