import React from "react";
import { Link } from "react-router-dom";

function AllStudentsView(props) {
    //console.log("propsss", props.allStudents);
    return (
      <div>
        <h2>
          <u>Currently Registered Students</u>
        </h2>
            
            {props.allStudents.map(student => (

              <div id="all-card" key={student.id}>
                <Link to={`/AllStudents/${student.id}`}>{student.name}</Link>
               <u>GPA: </u>
            {student.gpa} <br />
                <img class="single-student img" src={student.imageURL} alt={student.name} max-height="3%" max-width="3%" /> <br />
		    <div className="add">
		    <Link to={`/AllStudents/EditStudent/${student.id}`}>Edit Student</Link>
		    <button onClick={() => props.handleRemoveStudent(student.id)}>
                Delete Student
              </button>
              <br />
            </div>
          </div>
        ))}
      </div>
    );
}

export default AllStudentsView;
