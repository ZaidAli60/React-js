import React,{useState} from 'react';
function Counter() {
    const [counter2,setcounter] = useState(0)
    let counter = 0;
    const increament = ()=>{
        counter = counter + 1;
        // alert("increament" + counter)
        setcounter(counter2 + 1)
    }
    const decreament = ()=>{
        counter = counter - 1;
        // alert("decreament" + counter)
        setcounter(counter2 - 1)

    }
   return(
       <div>
           <span><button onClick = {increament}>+</button></span>
           <h1>counter is :{counter2}</h1>
           <span><button onClick = {decreament}>-</button></span>

       </div>
   )  
}
export default Counter;