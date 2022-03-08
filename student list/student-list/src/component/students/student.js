import React from 'react'
import "./student.css"
function Student(props, index) {
  return (
    <div>
      <table className="tableitem" >
        <tr>
          <td>{props.index}</td>
          <td>{props.studitems.name}</td>
          <td>{props.studitems.rollNo}</td>
          <td>{props.studitems.stuClass}</td>
          <td>{props.studitems.batch}</td>
        </tr>
      </table>
    </div>
  )
}
export default Student;