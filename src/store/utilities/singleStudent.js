
import React, {Component} from 'react';


class singleStudent extends React.Component
{
    constructor(props) {
        super(props);
        this.state = 
        {
            firstName: '',
            lastName: '',
            email: '',
            imageURL: '',
            isRegistered: false,
            gpa: 0.0
        }

        // this.editStudent = this.editStudent.bind(this);
        // this.deleteStudent = this.removeTrack.bind(this);
    }


    renderDisplay() {

    }

    addToCampus() {
        if (this.state.isRegistered === false) {
            return (
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Name:
                            <input type="text" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <input type="submit" value="Submit" />
                    </form>
                </div>
            )
        }
    }



    render() {
        return (
            <div className="studentView">
                <h1>Show Student</h1>

                    <h2>{this.state.firstName} {this.state.lastName}</h2>
                {this.renderDisplay()}
            </div>
        );
    }
}




export default singleStudent;