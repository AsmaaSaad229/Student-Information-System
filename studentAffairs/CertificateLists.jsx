import React from 'react';
import Capture2 from '../assets/Capture2.PNG';
import '../styles/ControlAdmin.css';
import HeaderAffairs from './HeaderAffairs';

function CertificateLists() {
    return (
        <>
      <HeaderAffairs></HeaderAffairs>
            <div className="Control-Admin">
                <div className="Control-image">
                    <img src={Capture2} alt="Control Admin" />
                </div>
                <div className="Control-container">
                    <form action="your_action_here" method="post">
                    <h1> <b>Student Certificates</b> </h1>
                        <label htmlFor="certificate">Choose the certificate:</label>
                        <input list="certificates" name="certificate" id="certificate" />
                        <datalist id="certificates">
                            <option value="الى من يهمه الامر" />
                            <option value="بيان درجات" />
                            <option value="شهادة تخرج مؤقتة" />
                            <option value="شهادة تخرج مؤقتة(انجليزي)" />
                            <option value="شهادة قيد" />
                            <option value="شهادة حسن سير وسلوك" />
                            <option value="شهادة فصل" />
                            <option value="افادة" />
                        </datalist>
                        <label htmlFor="lname">National ID:</label>
                        <input type="text" id="lname" name="lname" />
                        <br />
                        <br />
                        <button type="submit">Display</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default CertificateLists;
