import React from 'react';
import PropTypes from 'prop-types';
import './checklist-item.css';

const ChecklistItem = ({id, name, value, label, onDelete}) => (
    <div className="form-check checkbox-input">
        <label className="form-check-label">
          <input id={id} className="form-check-input" type="checkbox" name={name} value={value} />
          {label}
        </label>
        <button data-id={id} className="btn btn-sm btn-danger" onClick={onDelete}>x</button>
    </div>
);

ChecklistItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
};

export default ChecklistItem;