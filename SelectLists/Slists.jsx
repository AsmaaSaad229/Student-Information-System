import React, { useState } from 'react';
import Capture2 from '../assets/Capture2.PNG';
import HeaderAffairs from '../studentAffairs/HeaderAffairs';
import '../styles/ControlAdmin.css';
function Slists() {
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [selectedOption3, setSelectedOption3] = useState('');
  const [selectedOption4, setSelectedOption4] = useState('');

  const handleOptionChange1 = (e) => {
    setSelectedOption1(e.target.value);
  };

  const handleOptionChange2 = (e) => {
    setSelectedOption2(e.target.value);
  };

  const handleOptionChange3 = (e) => {
    setSelectedOption3(e.target.value);
  };

  const handleOptionChange4 = (e) => {
    setSelectedOption4(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      selectedOption1 === 'سجل الحضور' &&
      selectedOption2 === 'الهندسة الكهربية' &&
      selectedOption3 === 'حاسبات' &&
      selectedOption4 === 'الفرقة الثالثة'
    ) {
      window.location.href = '/attendance-record';
    } else if (
      selectedOption1 === 'سجل درجات اعمال السنة' &&
      selectedOption2 === 'الهندسة الكهربية' &&
      selectedOption3 === 'حاسبات' &&
      selectedOption4 === 'الفرقة الثالثة'
    ) {
      window.location.href = '/student-grade';
    } else {
      alert('The page not found');
    }
  };

  return (
    <>
      <HeaderAffairs></HeaderAffairs>
        <div className="Control-Admin">
        <div className="Control-image">
            <img src={Capture2} alt="Control Admin"/>
        </div>
        <div className="Control-container">
          <form onSubmit={handleSubmit}>
            <h1> <b>Student Lists</b> </h1>
            <label for="ltype"> </label>
            <select id="ltype" list="division" name="division" required  value={selectedOption1} onChange={handleOptionChange1}>
              <option value="">Select List Type </option>
              <option value="سجل الحضور">سجل الحضور </option>
              <option value="سجل درجات اعمال السنة">
                سجل درجات اعمال السنة
              </option>
            </select>

            <label for="departement"> </label>
            <select
              id="departement"
              value={selectedOption2}
              onChange={handleOptionChange2}
            >
              <option value=""> Select Department </option>
              <option value="الهندسة الكهربية"> الهندسة الكهربية </option>
              <option value="الهندسة المعمارية"> الهندسة المعمارية </option>
              <option value="الهندسة المدنية"> الهندسة المدنية </option>
            </select>

            <label for="division">  </label>
            <select
              id="division"
              value={selectedOption3}
              onChange={handleOptionChange3}
            >
              <option value="">Select Division </option>
              <option value="حاسبات">حاسبات </option>
              <option value="اتصالات">اتصالات</option>
              <option value="قوى والات">قوى والات </option>
            </select>

            <label for="academicyear">  </label>
            <select
              id="academicyear"
              value={selectedOption4}
              onChange={handleOptionChange4}
            >
              <option value="">Select Academic Year </option>
              <option value="الفرقة الاعدادية">الفرقة الاعدادية </option>
              <option value="الفرقة الاولى">الفرقة الاولى </option>
              <option value="الفرقة الثانية">الفرقة الثانية </option>
              <option value="الفرقة الثالثة">الفرقة الثالثة </option>
              <option value="الفرقة الرابعة">الفرقة الرابعة </option>
            </select>
            <br/>
            <button type="submit"> Display </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Slists;
