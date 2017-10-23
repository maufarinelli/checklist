import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import * as checklistsActions from '../../actions/checklistsActions';

export class AllCheckLists extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>All checklists</h1>
                <ul>
                    {this.props.list.map(checklist => {
                        return (<li>
                            <button id={checklist.id}>checklist.title</button>
                        </li>);
                    })}
                </ul>
            </div>

        );
    }
}

function mapStateToProps(state, ownProps) {
    let list = state;
    return list;
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(checklistsActions, dispatch)
    };
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(AllCheckLists)
)