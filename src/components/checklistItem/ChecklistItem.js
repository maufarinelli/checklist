import React from 'react';
import PropTypes from 'prop-types';
import './checklist-item.css';

class ChecklistItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checked: this.props.checked
        };

        this.hendleCheckboxChange = this.hendleCheckboxChange.bind(this);
    }

    hendleCheckboxChange(event) {
        const value = event.target.checked;

        this.props.onCheckboxChange(event);

        this.setState({
            checked: value
        });
    }

    render() {
        const {id, name, label, onDelete} = this.props;
        const {checked} = this.state;
        return (
            <div className="form-check checkbox-input">
                <label className="form-check-label">
                    <input
                        id={id}
                        className="form-check-input"
                        type="checkbox"
                        name={name}
                        checked={checked}
                        onChange={this.hendleCheckboxChange}
                    />
                    {label}
                </label>
                <button data-id={id} className="btn btn-sm btn-danger" onClick={onDelete}>x</button>
            </div>
        );
    }
}

ChecklistItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onCheckboxChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default ChecklistItem;