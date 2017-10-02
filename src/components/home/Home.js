import React from 'react';
import {Link} from 'react-router-dom';
import './home.css';

class HomePage extends React.Component {
    render() {
        return(
            <div className="jumbotron home">
                <h1>CheckList</h1>
                <Link to="/add-checklist" className="btn btn-primary btn-lg">Add CheckList</Link>
                <Link to="/list" className="btn btn-primary btn-lg">See All</Link>
            </div>
        );
    }
}

export default HomePage;