import React from 'react'
import './ind.css';

function StudentList() {
    return (
        <div className='abc my-4' >
            <h1>Add New Student</h1>
            <div className='inputBox my-4'>
               
                <input type="text" className='inp my-2' placeholder='Enter Your name'/>
                <br />
                <input type="text" className='inp my-2' placeholder='Enter Your Roll No'/>
                <br />
                <input type="text" className='inp my-2' placeholder='Enter Your Class' />
                <br />
                <button type="button" class="btn btn-primary">Submit</button>
            </div>
        </div>
    )
}
export default StudentList;
