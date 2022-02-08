
// import React from 'react';
import React from "react";
// import {useState} from react;
import { useState } from 'react';


function Students() {
    const [students ] = useState([
      {
        name : "Zaid Ali",
        Roll : 5096,
        section : "A",
        class : "Web and mobile",
        batch : 4,
      },
      {
        name : "faisal",
        Roll : 50,
        section : "B",
        class : "Web and mobile",
        batch : 4,
      }
    ]);
  
    console.log(students)
  
    return (
      <div className="App">
      
        <h1>List of student</h1>
  
        <table>
          <tr>
            <th>NO</th>
            <th>student name</th>
            <th>Roll No</th>
            <th>Section</th>
            <th>Class</th>
            <th>Batch</th>
          </tr>
          {
            students.map((student,index) => {
              return(
                <tr>
                  <td>{index}</td>
                <td>{student.name}</td>
                <td>{student.Roll}</td>
                <td>{student.section}</td>
                <td>{student.class}</td>
                <td>{student.batch}</td>
              </tr>
              )
            }) 
          }
        
  
        
        </table>
      </div>
    );
  }
  export default Students;