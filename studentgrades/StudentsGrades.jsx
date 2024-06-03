function StudentsGrades() {
    const handlePrint = () => {
        window.print();
      };
    return (
     <>
     <h2><u>كشف درجات اعمال السنة-الفرقة الثالثة -قسم حاسبات للعام الجامعي 2023/2024</u></h2>
    <table className ="grades">
        <thead>
            <tr>
                <th>أعمال السنة</th>
                <th>الحالة الدراسية</th>
                <th>اسم الطالب</th>
				<th>رقم الجلوس</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>49</td>
				<td>مستجد</td>
                <td>محمود محمدعلي</td>
                <td>3241</td>
            </tr>
			<tr>
                <td>44</td>
				<td>مستجد</td>
                <td>احمد مصطفى حسن</td>
                <td>3242</td>
            </tr>
			 <tr>
                <td>49</td>
				<td>مستجد</td>
                <td>محمود محمدعلي</td>
                <td>3243</td>
                
            </tr>
			 <tr>
                <td>49</td>
				<td>مستجد</td>
                <td>محمود محمدعلي</td>
                <td>3244</td>
            </tr>
			 <tr>
                <td>49</td>
				<td>مستجد</td>
                <td>محمود محمدعلي</td>
                <td>3245</td>
            </tr>
			 <tr>
                <td></td>
				<td></td>
                <td>احمد محمد مصطفى</td>
                <td>3246</td>
            </tr>
			 <tr>
			    <td></td> 
				<td></td>
                <td> احمد محمد مصطفى</td>
                <td>3247</td>
            </tr>
            <tr>
                <td></td>
				<td></td>
                <td> احمد محمد مصطفى</td>
                <td>3248</td>
            </tr>
			 <tr>
			    <td></td>
				<td></td>
                <td> احمد محمد مصطفى</td>
                <td>3249</td>
            </tr>
			 <tr>
                <td></td>
				<td></td>
                <td> احمد محمد مصطفى</td>
                <td>3250</td>
            </tr>
        </tbody>
    </table>
    <button onClick={handlePrint}>Print</button>
     </>
    );
  }
  export default StudentsGrades;