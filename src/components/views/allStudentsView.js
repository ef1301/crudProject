import React from "react";

function AllStudentsView(props) {
    return (
        <div>
            <h1>ALLSTUDENTSVIEW IS RENDERING HERE</h1>
            {props.students.map(student => (
                <p key={student.id}>{student.name}<button onClick={() => props.handleRemoveStudent(student.id)}>Delete Student</button></p>
            ))
            }
        </div>
    )
}

export default AllStudentsView;
