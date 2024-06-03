
import im4 from '../assets/im4.jpg'
import  '../styles/Home.css';
import Header1 from './Header1.jsx';
function Home(){
return (
    <>
    
        <Header1></Header1>
      <div>
       <marquee>Faculty of Engineering Aswan University</marquee>
     </div>
      <img src={im4} alt="Faculty of Engineering Aswan University" />
    </>
);


}
export default  Home;