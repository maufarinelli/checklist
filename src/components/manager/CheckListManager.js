import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import * as checklistItemsActions from '../../actions/checklistItemsActions';
import ListForm from './ListForm';

export class CheckListManager extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (this.props.checklistItems.length > 0 ?
          <ListForm
            checklistItems={this.props.checklistItems}
            checklistTitle={this.props.checklistTitle}
          /> :
          <ListForm />
        );
    }
}

function getChecklistById(allCheckLists, id) {
    return allCheckLists.filter(checklist => checklist.id === id)[0];
}

function mapStateToProps(state, ownProps) {
    const checkListId = parseInt(ownProps.match.params.id, 10);

    let checklist = {
        items: state.checklistItems,
        title: state.checklistTitle
    };

    if(checkListId) {
        checklist = getChecklistById(state.allChecklists, checkListId);
    }

    return {
        checklistItems: checklist.items,
        checklistTitle: checklist.title
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