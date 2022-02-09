
function StudentList(props,index) {
    return (
        <div>
           
                
           <tr>
               <td>{props.index}</td>
                <td>{props.student.name}</td>
                <td>{props.student.roll}</td>
                <td>{props.student.section}</td>
                <td>{props.student.class}</td>
                <td>{props.student.batch}</td> 

            </tr>
         
        </div>
    )
}

export default StudentList;