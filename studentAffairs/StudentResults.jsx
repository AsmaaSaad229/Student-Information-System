import React from 'react';
import Section from './Section';
import Certificat from '../assets/Certificat.PNG';
function StudentResults() {
    return (
      <Section
        title="Student Results"
        onClick={() => {
          // Add code to move to another component for student details
        }}
        Certificate={Certificat}
      />
    );
  }
  export default StudentResults;