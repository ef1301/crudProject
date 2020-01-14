import React from "react";

function AllCampusesView(props) {
    return (
        <div>
            {props.campuses.map(campus => (
                    <div id="all-card" key={campus.id}>{campus.name}
		    <button onClick={() => props.handleRemoveCampus(campus.id)}>Delete Campus</button></div>
            ))
            }
        </div>
    )
}
export default AllCampusesView;


