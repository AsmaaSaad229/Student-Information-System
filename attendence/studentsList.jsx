import React from 'react';
function StudentsList() {
  const handlePrint = () => {
    window.print();
  };
   return (
      <>
      <h2><u>كشف بأسماء طلاب الفرقة الثالثة -قسم حاسبات للعام الجامعي 2023/2024</u></h2>
      <table className ="students">
        <thead>
            <tr>
			    <th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th>
                <th>حالة القيد</th>
                <th>الاسم</th>
				<th>م</th>
            </tr>
        </thead>
        <tbody>
            <tr>
			    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
				<td></td>
                <td> احمد محمد مصطفى</td>
                <td>1</td>
            </tr>
			<tr>
			    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
				<td></td>
                <td> احمد محمد مصطفى</td>
                <td>2</td>
                
                
            </tr>
			 <tr>
			    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
				<td></td>
                <td> احمد محمد مصطفى</td>
                <td>3</td>
                
                
            </tr>
			 <tr>
			    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                <td>باق</td>
                <td> احمد محمد مصطفى</td>
                <td>4</td>
                
            </tr>
			 <tr>
			    <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
                
               <td>باق</td>
                <td> احمد محمد مصطفى</td>
                <td>5</td>
              
            </tr>
			 <tr>
			    <td></td> <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
				<td></td>
                <td> احمد محمد مصطفى</td>
                <td>6</td>
            </tr>
			 <tr>
			    <td></td> <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
				<td></td>
                <td> احمد محمد مصطفى</td>
                <td>7</td>
            </tr>
            <tr>
			    <td></td> <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
				<td></td>
                <td> احمد محمد مصطفى</td>
                <td>8</td>
            </tr>
			 <tr>
			    <td></td> <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
				<td></td>
                <td> احمد محمد مصطفى</td>
                <td>9</td>
            </tr>
			 <tr>
			    <td></td> <td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td>
				<td></td>
                <td> احمد محمد مصطفى</td>
                <td>10</td>
            </tr>
        </tbody>
    </table>
    <button onClick={handlePrint}>Print</button>
      </>
   );

}
export default StudentsList;
