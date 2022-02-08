
import {useState} from 'react';

function FromHandling() {
 const [name ,setName] = useState("");
 const [password ,setPassword] = useState("");
 const [Class ,setClass] = useState("");
 const [section ,setSection] = useState("");

 const fromSubmit = () =>{
    const obj = {
        name,
        password,
        Class,
        section,

    }
console.log(obj)

 }

//  var fromHandling = (e) =>{
//     setName(e.target.value);
    // console.log(e)
//  }
    return(
        <div>
            <input type="text" placeholder='name' onChange={(e)=> setName(e.target.value)} />
            <input type="password"placeholder='password' onChange={(e)=> setPassword(e.target.value)} />
            <input type="text" placeholder='Enter your class' onChange={(e)=> setClass(e.target.value)} />
            <input type="text" placeholder='Enter your section' onChange={(e)=> setSection(e.target.value)} />
            <button type='submit' onClick={fromSubmit}>Submit</button>
            <p>name is : {name}</p>
            <p>class is : {Class}</p>
            <p>section is : {section}</p>

        </div>
    )
}

export default FromHandling;