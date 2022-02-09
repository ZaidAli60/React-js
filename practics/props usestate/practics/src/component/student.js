import {useState} from 'react';
import {data} from "./data"
import StudentList from './studentsList';

function Student() {

    const [Students , setStudent] = useState(data);
    const [name, setname] = useState("");
    const [roll, setroll] = useState("");
    const [section, setsection] = useState("");
    const [batch, setbatch] = useState("");
 
    const formHanlder = ()=>{
        const obj = {
            name,
            roll,
            section,
            // classe : classe,
            batch,
        }

        // console.log(obj)
    }
    
    return(
        <div>
            <h1>Add the new student</h1>
            <input type="text" placeholder='name' onChange={(e)=> setname(e.target.value)} />
            <input type="text" placeholder='roll' onChange={(e)=> setroll(e.target.value)} />
            <input type="text" placeholder='section'onChange={(e)=> setsection(e.target.value)} />
            <input type="text" placeholder='batch' onChange={(e)=> setbatch(e.target.value)} />

            <button type='submit' onClick={formHanlder}>Submit</button>
            <hr />

            <h1>List of the students</h1>
            <table>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>RollNo</th>
                    <th>Section</th>
                    <th>Class</th>
                    <th>Batch</th>
                </tr>
             
            </table>
                <table>
                        
            {
                    Students.map((item,index)=>{
                        return(<StudentList index = {index} student = {item} />)
                    })
                }  
                </table>
               
            
        </div>
    )
}

export default Student;