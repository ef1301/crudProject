import React from "react";

function AllStudentsView(props) {
    //console.log("propsss", props.allStudents);
    return (
        <div>
            {props.allStudents.map(student => (
                    <div id="all-card" key={student.id}>
		    {student.name} <br/>
		   <u>GPA: </u>{student.gpa} <br/>
		    <button onClick={() => props.handleRemoveStudent(student.id)}>Delete Student</button></div>
            ))
            }
        </div>
    )
}

export default AllStudentsView;
