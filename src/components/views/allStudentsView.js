import React from "react";

function AllStudentsView(props) {
    return (
        <div>
            <h1>ALLSTUDENTSVIEW IS RENDERING HERE</h1>
            {props.studentReducer.map(student => (
                <p key={student.id}>{student.name}<button onClick={() => props.handleRemoveStudent(student.id)}>Delete Campus</button></p>
            ))
            }
        </div>
    )
}

export default AllStudentsView;