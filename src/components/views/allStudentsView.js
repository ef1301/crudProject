import React from "react";

function AllStudentsView(props) {
    //console.log("propsss", props.allStudents);
    return (
            <div>
	    <h2><u>Currently Registered Students</u></h2>
            {props.allStudents.map(student => (
                    <div id="all-card" key={student.id}>
		    {student.name} <br/>
		    <u>GPA: </u>{student.gpa} <br/>
		    <img src={student.imageURL} alt={student.name}/>
		    <button onClick={() => props.handleRemoveStudent(student.id)}>Delete Student</button></div>
            ))
            }
        </div>
    )
}

export default AllStudentsView;
