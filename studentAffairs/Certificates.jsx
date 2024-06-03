
import React from 'react';
import Section from './Section';
import { useNavigate } from 'react-router-dom';
import Certificat from '../assets/Certificat.PNG';
function Certificates() {
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate('/CertificateLists');
    };

    return (
        <Section
            title="Student Certificates"
            onClick={handleSubmit}
            Certificate={Certificat}
        />
    );
}

export default Certificates;
