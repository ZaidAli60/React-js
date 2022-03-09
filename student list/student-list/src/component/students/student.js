import React from 'react'
import "./student.css"
function Student({studitems,index,deleteHand,updataHandler}) {
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
      <button class="btn bg-danger text-white"onClick={() => deleteHand(index)}>Delete</button>
      <button class="btn bg-primary text-white"onClick={() => updataHandler(studitems,index)}>Updata</button>
    </div>
  )
}
export default Student;