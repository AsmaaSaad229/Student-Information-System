import Capture2 from '../assets/Capture2.PNG';
import '../styles/ControlAdmin.css';
import Header1 from './Header1.jsx';
function ControlAdmin(){
    const handleSubmit = (event) => {
        event.preventDefault();
        window.location.href = "/ControlSheet";
    };


    return(
        <>
        <Header1></Header1>
        <div className="Control-Admin">
        <div className="Control-image">
            <img src={Capture2} alt="Control Admin"/>
        </div>
        <div className="Control-container">
            <form onSubmit={handleSubmit}>
                <h1><b>Control Sheet</b></h1>
                <label for="departement">Choose the department:</label>
                <select id="department" list="department" name="department" required>
                    <option value="">اختر القسم</option>
                    <option value="1">الهندسة الكهربية</option>
                    <option value="2">الهندسة المعمارية</option>
                    <option value="3">الهندسة المدنية</option>
                    <option value="4">عام</option>
                </select>
                <label for="division">Choose the division:</label>
                <select id="division" list="division" name="division" required>
                    <option value="">اختر الشعبة</option>
                    <option value="1">حاسبات</option>
                    <option value="2">اتصالات</option>
                    <option value="3">قوى وآلات</option>
                    <option value="4">شعبة عامة</option>
                </select>
                <label>Academic Year :</label>
                <input list="AYear" name="academicyear" id="academicyear" required/>
                <label>الفرقة:</label>
                <select id="ferka" list="ferka" name="ferka" required>
                    <option value="">اختر الفرقة</option>
                    <option value="1">الإعدادية</option>
                    <option value="2">الأولى</option>
                    <option value="3">الثانية</option>
                    <option value="4">الثالثة</option>
                    <option value="5">الرابعة</option>
                </select>
              <button type="submit">Display </button>
            </form>
        </div>
        </div>
        </>
    );
}
export default ControlAdmin;