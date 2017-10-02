import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';

export class AllCheckLists extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        return (
            <div>AllCheckLists</div>
        );
    }
}

function mapStateToProps() {
    return {};
}

export default withRouter(
    connect(mapStateToProps)(AllCheckLists)
)