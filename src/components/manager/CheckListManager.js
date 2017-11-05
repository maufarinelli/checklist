import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import * as checklistActions from '../../actions/checklistActions';
import * as checklistsActions from '../../actions/checklistsActions';
import ListForm from './ListForm';

export class CheckListManager extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			checklist: Object.assign({}, this.props.checklist)
		};

		this.onAddItem = this.onAddItem.bind(this);
		this.onDeleteItem = this.onDeleteItem.bind(this);
		this.onUpdateTitle = this.onUpdateTitle.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.newChecklistId) {
			nextProps.history.push(`/checklist/${nextProps.newChecklistId}`);
			this.props.actions.saveChecklist(nextProps.checklist);
		}
		this.setState({checklist: nextProps.checklist});
	}

	onAddItem(item) {
		let updatedChecklist = Object.assign({}, this.state.checklist, {items: [...this.state.checklist.items, item]});
		this.setState((prevState, props) => ({
			checklist: updatedChecklist
		}));

		this.props.actions.saveChecklist(updatedChecklist);
		//this.updateNewChecklistId(updatedChecklist);
	}

	onDeleteItem(event) {
		let updatedItems = this.state.checklist.items.filter(item => {
			return item.id !== event.target.dataset.id;
		});
		let updatedChecklist = Object.assign({}, this.state.checklist, {items: updatedItems});
		this.props.actions.saveChecklist(updatedChecklist);
		event.preventDefault();
	}

	onUpdateTitle(title) {
		let updatedChecklist = Object.assign({}, this.state.checklist, {title: title});
		//this.updateNewChecklistId(updatedChecklist);
		this.props.actions.saveChecklist(updatedChecklist);
	}

	render() {
		return (
			<ListForm
					checklist={this.state.checklist}
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

function getNextId(checklists) {
	return (checklists.length > 0) ? checklists[checklists.length - 1].id + 1 : 1;
}

function mapStateToProps(state, ownProps) {
	const checkListId = parseInt(ownProps.match.params.id, 10);
	let newChecklistId,
		defaultChecklist = {
			id: 0,
			title: '',
			items: []
		},
		checklist;

	if(state.checklist.id === 0 && !checkListId) {
		checklist = Object.assign({}, state.checklist, {id: getNextId(state.allChecklists)});
		newChecklistId = checklist.id;
	}
	else {
		checklist = state.checklist
	}

	if (checkListId) {
		checklist = getChecklistById(state.allChecklists, checkListId) || defaultChecklist;
	}

	return {
		checklist: checklist,
		newChecklistId: newChecklistId
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators({...checklistActions, ...checklistsActions}, dispatch)
	};
}

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(CheckListManager)
)