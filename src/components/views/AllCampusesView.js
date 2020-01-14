import React from "react";

function AllCampusesView(props) {
    return (
            <div>
	    <h2><u>Currently Registered Campuses</u></h2>
            {props.campuses.map(campus => (
                    <div id="all-card" key={campus.id}>
		    {campus.name}<br/>
		    <img src={campus.imageURL} alt={campus.name}/>
		    <button onClick={() => props.handleRemoveCampus(campus.id)}>Delete Campus</button></div>
            ))
            }
        </div>
    )
}
export default AllCampusesView;


