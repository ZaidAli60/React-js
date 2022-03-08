import React from 'react'
import './ind.css';
import Student from '../students/student';
import { data  } from '../data';

import {useState} from 'react';

function StudentList() {
const [studData, setstudData] = useState(data)
const [name, setname] = useState("");
const [rollNo, setrollNo] = useState("");
const [stuClass, setstuClass] = useState("");
const [batch, setbatch] = useState("");

const formSubmit = ()=>{
    const obj = {
        name,
        rollNo,
        stuClass,
        batch,
    }
    console.log(obj)
    setstudData([obj,...studData])
    
}



    return (
        <div className='abc my-4' >
            <h1>Add New Student</h1>
            <div className='inputBox my-4'>
               
                <input type="text" className='inp my-2' onChange={(event) =>setname(event.target.value)} placeholder='Enter Your name'/>
                <br />
                <input type="text" className='inp my-2' onChange={(e)=>(setrollNo(e.target.value))} placeholder='Enter Your Roll No'/>
                <br />
                <input type="text" className='inp my-2' onChange={(e)=>{setstuClass(e.target.value)}} placeholder='Enter Your Class' />
                <br />
                <input type="text" className='inp my-2' onChange={(e)=>{setbatch(e.target.value)}} placeholder='Enter Your Batch' />
                <br />
                <button type="submit" onClick={formSubmit} class="btn btn-primary">Submit</button>
            </div>
          

            <div className='container'>
                <h2>List of Student</h2>
                <table >
                    <tr>
                        <th>Name</th>
                        <th>Roll No</th>
                        <th>Student Class</th>
                        <th>Batch</th>
                    </tr>
                    {/* <tr>
                        <td>{name}</td>
                        <td>{rollNo}</td>
                        <td>{stuClass}</td>
                        <td>{batch}</td>
                    </tr> */}
                 
                </table>
                <table>
                    
                    <tr>
                        {
                          studData.map((item)=>{
                              return (<Student  studitems={item} />)
                          })
                        }
                    </tr>
                    
                </table>
                   
                
            </div>
            {/* <div className='container'>
               
            </div> */}
        </div>
    )
}
export default StudentList;
