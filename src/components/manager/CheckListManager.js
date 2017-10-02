import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import ListForm from './ListForm';

export class CheckListManager extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: 1,
            name: 'test',
            value: 'testando',
            label: 'Test'
        };
    }

    render() {
        return (
            <ListForm
                id={this.state.id}
                name={this.state.name}
                value={this.state.value}
                label={this.state.label} />
        );
    }
}

function mapStateToProps() {
    return {};
}

export default withRouter(
    connect(mapStateToProps)(CheckListManager)
)