import React from "react";

function AllStudentsView(props) {
    console.log("propsss", props.allStudents);
    return (
        <div>
            {props.allStudents.map(student => (
                <div className="container"><p key={student.id}>{student.name}<button onClick={() => props.handleRemoveStudent(student.id)}>Delete Student</button></p></div>
            ))
            }
        </div>
    )
}

export default AllStudentsView;
