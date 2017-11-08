import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
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
		this.onCheckboxChange = this.onCheckboxChange.bind(this);
	}

	componentWillReceiveProps(nextProps) {
		this.setState({checklist: nextProps.checklist});
	}

	isNewChecklist() {
		return !!this.props.newChecklistId;
	}

	changeRoot() {
		this.props.history.push(`/checklist/${this.props.newChecklistId}`);
	}

	onAddItem(item) {
		let updatedChecklist = Object.assign({}, this.state.checklist, {items: [...this.state.checklist.items, item]});
		this.setState((prevState, props) => ({
			checklist: updatedChecklist
		}));

		this.props.actions.saveChecklist(updatedChecklist);

		if(this.isNewChecklist()) {
			this.changeRoot();
		}
	}

	onDeleteItem(event) {
		let updatedItems = this.state.checklist.items.filter(item => {
			return item.id !== event.target.dataset.id;
		});
		let updatedChecklist = Object.assign({}, this.state.checklist, {items: updatedItems});
		this.props.actions.saveChecklist(updatedChecklist);

		if(this.isNewChecklist()) {
			this.changeRoot();
		}

		event.preventDefault();
	}

	onUpdateTitle(title) {
		let updatedChecklist = Object.assign({}, this.state.checklist, {title: title});
		this.props.actions.saveChecklist(updatedChecklist);

		if(this.isNewChecklist()) {
			this.changeRoot();
		}
	}

	onCheckboxChange(event) {
		let updatedItems = this.state.checklist.items.map(item => {
			if(item.id === event.target.id) {
				return {
					id: item.id,
					name: item.name,
					label: item.label,
					checked: event.target.checked
				};
			}
			else {
				return {
					id: item.id,
					name: item.name,
					label: item.label,
					checked: item.checked
				};
			}
		});
		let updatedChecklist = Object.assign({}, this.state.checklist, {items: updatedItems});
		this.props.actions.saveChecklist(updatedChecklist);
	}

	render() {
		return (
			<ListForm
					checklist={this.state.checklist}
					onAddItem={this.onAddItem}
					onDeleteItem={this.onDeleteItem}
					onUpdateTitle={this.onUpdateTitle}
					onCheckboxChange={this.onCheckboxChange}
				/>
		);
	}
}

function getChecklistById(checklists, id) {
	return checklists.filter(checklist => checklist.id === id)[0];
}

function getNextId(checklists) {
	return (checklists.length > 0) ? checklists[checklists.length - 1].id + 1 : 1;
}

function mapStateToProps(state, ownProps) {
	const checklistId = parseInt(ownProps.match.params.id, 10);
	let newChecklistId,
		defaultChecklist = {
			id: 1,
			title: '',
			items: [],
			isNew: true
		},
		checklist;

	if(!checklistId) {
		checklist = Object.assign({}, defaultChecklist, {id: getNextId(state.checklists)});
		newChecklistId = checklist.id;
	}
	else {
		checklist = getChecklistById(state.checklists, checklistId) || defaultChecklist;
	}

	return {
		checklist: checklist,
		newChecklistId: newChecklistId
	};
}

function mapDispatchToProps(dispatch) {
	return {
		actions: bindActionCreators(checklistsActions, dispatch)
	};
}

export default withRouter(
	connect(mapStateToProps, mapDispatchToProps)(CheckListManager)
)