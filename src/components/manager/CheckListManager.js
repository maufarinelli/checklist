import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import * as checklistActions from '../../actions/checklistActions';
import ListForm from './ListForm';

export class CheckListManager extends React.Component {
	constructor(props) {
		super(props);

		this.onAddItem = this.onAddItem.bind(this);
		this.onDeleteItem = this.onDeleteItem.bind(this);
		this.onUpdateTitle = this.onUpdateTitle.bind(this);
	}

	onAddItem(item) {
		this.props.actions.addChecklistItem(item);
	}

	onDeleteItem(event) {
		var id = parseInt(event.target.dataset.id);
		this.props.actions.deleteChecklistItem(id);
		event.preventDefault();
	}

	onUpdateTitle(title) {
		this.props.actions.updateChecklistTitle(title);
	}

	render() {
		return (
			<ListForm
					checklist={this.props.checklist}
					onAddItem={this.onAddItem}
					onDeleteItem={this.onDeleteItem}
					onUpdateTitle={this.onUpdateTitle}
				/>
		);
	}
}

function getChecklistById(allCheckLists, id) {
	return allCheckLists.filter(checklist => checklist.id === id)[0];
}

function mapStateToProps(state, ownProps) {
	const checkListId = parseInt(ownProps.match.params.id, 10);
	let checklist = state.checklist;

	if (checkListId) {
		checklist = getChecklistById(state.allChecklists, checkListId);
	}

	return {
		checklist: checklist
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(checklistActions, dispatch)
	};
}

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(CheckListManager)
)