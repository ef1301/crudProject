import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { currentCampusThunk } from "../../thunks";
//import { getSingleCampus } from "../utilities/reducers/campusReducer";
//Show Campus with No Students set
class SingleCampus extends Component {
  /*
    constructor(props) {
        super(props);
        this.state = {
            campus: this.props
        }
        console.log("Hello", this.props)
    }
*/
    componentDidMount() 
    {
	    this.props.fetchCurrentCampus(Number(this.props.match.params.campusId));
    }

    render() 
    {

      
        //Replace a href with react router
        return <div>
            <div className="home-container">
              <div className="header">
                <h1>Campus</h1>
                <div className="navbar">
                  <Link to="/">Home</Link>
                  <Link to="/AllCampuses">Campuses</Link>
                  <Link to="/AllStudents">Student</Link>
                </div>
              </div>
            </div>
            {(this.props.campus !== undefined) ? 
            <div>
              <h2>{this.props.campus.name}</h2>
              <img src={this.props.campus.imageURL} />
            </div> : <div>hello</div> } 
            <div>
              <h2>Campuses</h2>
              <p>There are </p>
            </div>
          </div>
        
    }
}

const mapStateToProps = state => {
  return {
    campus: state.campuses[0]
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchCurrentCampus: (id) => dispatch(currentCampusThunk(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus);
