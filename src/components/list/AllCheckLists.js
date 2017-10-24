import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import * as checklistsActions from '../../actions/checklistsActions';
import {NavLink} from 'react-router-dom';

export class AllCheckLists extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {

    }

    render() {
        return (
            <div>
                <h1>All checklists</h1>
                <ul>
                    {this.props.list.map(checklist => {
                        return (<li key={checklist.id}><NavLink className="btn btn-default" to={'/checklist/' + checklist.id}>{checklist.title}</NavLink></li>);
                    })}
                </ul>
            </div>

        );
    }
}

function mapStateToProps(state, ownProps) {
    let list = state.allChecklists;
    return {list};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(checklistsActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AllCheckLists);