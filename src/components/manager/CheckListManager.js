import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import * as checklistActions from '../../actions/checklistActions';
import * as checklistsActions from '../../actions/checklistsActions';
import ListForm from './ListForm';
import _ from 'lodash';

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
		this.setState({checklist: nextProps.checklist});
	}

	onAddItem(item) {
		let updatedChecklist = Object.assign({}, this.state.checklist, {items: [...this.state.checklist.items, item]});
		this.setState((prevState, props) => ({
			checklist: updatedChecklist
		}));
		//this.props.actions.addChecklistItem(item);
		this.props.actions.saveChecklist(updatedChecklist);
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

function mapStateToProps(state, ownProps) {
	const checkListId = parseInt(ownProps.match.params.id, 10);
	let defaultChecklist = {
			id: _.uniqueId(),
			title: '',
			items: []
		},
		checklist = state.checklist;

	if (checkListId) {
		checklist = getChecklistById(state.allChecklists, checkListId) || defaultChecklist;
	}

	return {
		checklist: checklist
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