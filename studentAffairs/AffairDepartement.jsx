import React from 'react';
import '../styles/Header1.css';
import Certificates from './Certificates';
import HeaderAffairs from './HeaderAffairs';
import StudentLists from './StudentLists';
import StudentResults from './StudentResults';
import affairs from '../assets/affairs.jpeg'
function AffairDepartement() {
    return(
     
      <div className='Studentaffairs'>
          <HeaderAffairs></HeaderAffairs>
          <img src={affairs} alt=" " />
        <div className='childrenComponent'>
           <StudentLists></StudentLists>
           <Certificates></Certificates>
           <StudentResults></StudentResults>
        </div>
     </div>
      );
    }
    
    export default AffairDepartement;
    