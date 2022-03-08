import React from 'react'

function Student(props) {
  return (
    <div>
       <tr>
           <td>{props.studitems.name}</td>
           <td>{props.studitems.rollNo}</td>
           <td>{props.studitems.stuClass}</td>
           <td>{props.studitems.batch}</td>
           
       </tr>
    </div>
  )
}
export default Student;