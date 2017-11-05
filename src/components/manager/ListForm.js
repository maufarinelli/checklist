import React from 'react';
import PropTypes from 'prop-types';
import ChecklistItem from '../checklistItem/ChecklistItem';
import TextInput from '../common/textInput/TextInput';
import Title from '../common/title/Title';

import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

import './list-form.css';

const ListForm = ({checklist, onAddItem, onDeleteItem, onUpdateTitle}) => (
	<div>
		<Title checklistTitle={checklist.title}/>
		<form className="checklist-form">
			<TextInput
				type="horizontal-form"
				id="checklist-title"
				label="Title : "
				name="checklist-title"
				value={checklist.title}
				onUpdate={onUpdateTitle} />

			{checklist.items.map(listItem => {
				return <ChecklistItem
					key={listItem.id}
					id={listItem.id}
					name={listItem.name}
					value={listItem.value}
					label={listItem.label}
					onDelete={onDeleteItem} />
			})}

			<TextInput onAdd={onAddItem} type="input-add-item" />
		</form>
	</div>
);

ListForm.propTypes = {
	checklist: PropTypes.object.isRequired,
	onAddItem: PropTypes.func.isRequired,
	onDeleteItem: PropTypes.func.isRequired,
	onUpdateTitle: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
	let {checklist} = state;

	if (ownProps.checklist) {
		checklist = ownProps.checklist
	}
	return {
		checklist
	};
}

export default withRouter(
	connect(mapStateToProps)(ListForm)
)