import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import * as checklistItemsActions from '../../actions/checklistItemsActions';
import ListForm from './ListForm';

export class CheckListManager extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checklistItems: Array.from(this.props.checklistItems)
        };
    }

    render() {
        return (this.state.checklistItems.length > 0 ? <ListForm checklistItems={this.state.checklistItems} /> : <ListForm />);
    }
}

function getCourseById(allCheckLists, id) {
    return allCheckLists.filter(checklist => checklist.id === id);
}

function mapStateToProps(state, ownProps) {
    //const checkListId = ownProps.params.id;
    let checklistItems = state.checklistItems;

    // if(checkListId) {
    //     checklist = getCourseById(state.allCheckLists, checkListId);
    // }

    return {
        checklistItems: checklistItems
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(checklistItemsActions, dispatch)
    };
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(CheckListManager)
)