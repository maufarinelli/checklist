import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import * as checklistItemsActions from '../../actions/checklistItemsActions';
import ListForm from './ListForm';
import _ from 'lodash';

export class CheckListManager extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.checklistID,
            items: this.props.checklistItems,
            title: this.props.checklistTitle
        };

        this.onDeleteItem = this.onDeleteItem.bind(this);
        this.onAddItem = this.onAddItem.bind(this);
    }

    componentWillMount() {
        this.props.actions.loadChecklist(this.props.checklistID);
    }

    componentWillUnmount() {
        this.props.actions.resetChecklist();
    }

    onDeleteItem(event) {
        event.preventDefault();
        this.props.actions.deleteChecklistItem(event.currentTarget.dataset.id);
    }

    onAddItem(value) {
        this.props.actions.createChecklistItem(this.props.checklistID, value);
    }

    onAddTitle(value) {
        this.props.actions.createChecklistTitle(this.props.checklistID, value);
    }

    render() {
        return (this.props.checklistItems.length > 0 ?
                <ListForm
                    onAddItem={this.onAddItem}
                    onDelete={this.onDeleteItem}
                    onAddTitle={this.onAddTitle}
                    checklistItems={this.state.items}
                    checklistTitle={this.state.title}
                /> :
                <ListForm />
        );
    }
}

function getChecklistById(allCheckLists, id) {
    return allCheckLists.filter(checklist => checklist.id === id)[0];
}

function mapStateToProps(state, ownProps) {
    const checkListId = parseInt(ownProps.match.params.id, 10) || 0;
    let checklist;

    if(_.isArray(state.checklist)) {
        checklist = getChecklistById(state.allChecklists, checkListId);
    } else {
        checklist = {
            id: state.checklist.id,
            items: state.checklist.items,
            title: state.checklist.title
        };
    }

    return {
        checklistID: checklist.id,
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