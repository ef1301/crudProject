import React from "react";

function AllStudentsView(props) {
    console.log("propsss", props.allStudents);
    return (
        <div>
            <h1>ALLSTUDENTSVIEW IS RENDERING HERE</h1>
            {props.allStudents.map(student => (
                <p key={student.id}>{student.name}<button onClick={() => props.handleRemoveStudent(student.id)}>Delete Student</button></p>
            ))
            }
        </div>
    )
}

export default AllStudentsView;
