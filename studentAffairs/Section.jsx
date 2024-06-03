import React from 'react';
import '../styles/Header1.css';


function Section({ title, onClick ,Certificate}) {
  return (
    <div className='section_container'>
      <header className='head'>
        <h2>{title}</h2>
      </header>
      <img src={Certificate} alt=""/>
      <footer>
        <button onClick={onClick}>Go</button>
      </footer>
    </div>
  );
}
export default Section;