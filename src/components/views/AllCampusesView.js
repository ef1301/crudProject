import React from "react";

function AllCampusesView(props) {
    return (
        <div>
            {props.campuses.map(campus => (
                    <p key={campus.id}>{campus.name}
		    <button onClick={() => props.handleRemoveCampus(campus.id)}>Delete Campus</button></p>
            ))
            }
        </div>
    )
}
export default AllCampusesView;


