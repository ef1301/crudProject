import React from "react";
import { Link } from "react-router-dom";

function AllCampusesView(props) {
    return (
        <div>
	    <h2><u>Currently Registered Campuses</u></h2>
            {props.campuses.map(campus => (
		   
                    <div id="all-card" key={campus.id}>
                <Link to={`/AllCampuses/${campus.id}`}>{campus.name}</Link>
		    <button onClick={() => props.handleRemoveCampus(campus.id)}>Delete Campus</button>
                <Link to="/EditCampus">Edit Campus</Link>
		    </div>
		
            ))}
	</div>
    )
}
export default AllCampusesView;


