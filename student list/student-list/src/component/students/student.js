import React from 'react'
import "./student.css"
function Student({studitems,index,deleteHand}) {
  return (
    <div>
      <table className="tableitem" >
        <tr>
          <td>{index}</td>
          <td>{studitems.name}</td>
          <td>{studitems.rollNo}</td>
          <td>{studitems.stuClass}</td>
          <td>{studitems.batch}</td>
      
     
        </tr>

      </table>
      <button onClick={() => deleteHand(index)}>Delete</button>
    </div>
  )
}
export default Student;