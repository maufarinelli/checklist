import React from 'react';
import {Link} from 'react-router-dom';

class AboutPage extends React.Component {
    render() {
        return(
            <div>
                <h1>About</h1>
                <p>BORA</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
            </div>
        );
    }
}

export default AboutPage;