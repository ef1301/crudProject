import React from "react";
import { Link } from "react-router-dom";

function AllCampusesView(props) {
    return (
	    <Link to='/AllCampuses/${campus.id}'>
	    <h2><u>Currently Registered Campuses</u></h2>
            {props.campuses.map(campus => (
                    <div id="all-card" key={campus.id}>{campus.name}
		    <button onClick={() => props.handleRemoveCampus(campus.id)}>Delete Campus</button>
                <Link to="/EditCampus">Edit Campus</Link>
            </div>
            ))
            }
	    </Link>
    )
}
export default AllCampusesView;


