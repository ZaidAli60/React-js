
import {useState} from 'react';

function FromHandling() {
 const [name ,setName] = useState("");

 var fromHandling = (e) =>{
    setName(e.target.value);
    // console.log(e)
 }
    return(
        <div>
            <input type="text" onChange={fromHandling} />
            <p>name is : {name}</p>
        </div>
    )
}

export default FromHandling;