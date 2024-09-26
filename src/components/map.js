

 import React from "react";

 const students = [
     { id: 1, name: 'Jhon', score:80},
     { id: 2, name: 'Jhon2', score:70},
     { id: 3, name: 'Jhon3', score:85},
 ];

 function Map() {
     return (
         <ul>
         {students.map(student =>(
             <li key={student.id}>
                 {student.name} - score: {student.score}
             </li>
         ))}
        </ul>
     );
   }

export default Map;  


