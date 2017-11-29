import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import _ from 'lodash';
import './text-input.css';

export class TextInput extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			id: this.props.id,
			name: this.props.name || '',
			value: this.props.value || '',
			label: this.props.label || ''
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
	}
	
	handleChange(event) {
		this.setState({
			id: this.props.id === 'checklist-title' ? this.props.id : _.uniqueId(event.target.value + '_'),
			name: event.target.value,
			value: event.target.value,
			label: event.target.value.substring(0, 1).toUpperCase() + event.target.value.substring(1)
		});
	}

	handleKeyPress(event) {
		if (event.key === 'Enter') {
			event.preventDefault();

			if (event.currentTarget.id === 'checklist-title') {
				this.props.onUpdate(this.state.value);
			} else {
				this.props.onAdd(this.state);
			}

			this.setState((prevState, props) => ({
				id: '',
				name: '',
				value: '',
				label: ''
			}));
		}
	}

	render() {
		return (
			<div className={"form-group " + (this.props.type === 'input-add-item' ? 'checklist-input-add-item' : '')}>
				{this.props.label ? <label htmlFor={this.props.id}>{this.props.label}</label> : ''}
				<div>
					<input
						className="form-control"
						type="text"
						name={this.state.name}
						id={this.state.id}
						value={this.state.value}
						onChange={this.handleChange}
						onKeyPress={this.handleKeyPress}
						placeholder={this.state.label ? '' : 'Add a new item'}/>
				</div>
			</div>
		);
	}
}

TextInput.propTypes = {
	type: PropTypes.string,
	id: PropTypes.string,
	label: PropTypes.string,
	value: PropTypes.string,
	onAdd: PropTypes.func,
	onUpdate: PropTypes.func
};

function mapStateToProps(state, ownProps) {
	return {
		type: ownProps.type,
		id: ownProps.id,
		label: ownProps.label,
		name: ownProps.name,
		value: ownProps.value
	};
}

export default withRouter(
	connect(mapStateToProps)(TextInput)
)