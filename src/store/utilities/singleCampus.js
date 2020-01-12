import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//Show Campus with No Students set
class singleCampus extends Component {
    constructor(props) {
        super(props);
    }

    deleteCampus = () => {
        for (let i = 0; i < this.props.allCampuses.length; i++) {
            if (this.props.name == this.props.allCampuses[i].name) {
                this.props.allCampuses.splice(i, 1);
            }
        }
    }

    display() {
        console.log(this.props.allCampuses);
        if (this.props.allCampuses.length === 0) {
            return (
                <div className="container">
                    <h1>Show Campus</h1>
                    <h2> Campus Name </h2>
                    <button>edit</button>
                    <button>delete</button>
                    <h2> Students on campus </h2>
                    <p>There are no students currently registered to this campus.</p>
                    <button>Add Students</button>
                </div>
            );
        }
        else {
            //How do I access a single element (campus from array)
            let items = this.props.singleCampus.map((element) => {
                return (
                    <div key={element} className="container">
                        <h1> Show Campus</h1>
                        <img src={element.imageURL} /><br />
                        Name: {element.name}<br />
                        {element.numStudents} students<br />
                        <button onclick={this.edit}>Edit</button>
                        <button>Delete</button>
                    </div>
                );
            });
            return items;
        }
    }

    render() {
        return (
            <div>
                <Link to="/">Home</Link>
                <Link to="/">Campuses</Link>
                <Link to="/">Students</Link>
                {this.display()}
            </div>
        );
    }
}

export default singleCampus;