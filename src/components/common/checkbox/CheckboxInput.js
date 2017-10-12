import React from 'react';
import PropTypes from 'prop-types';
import './checkbox.css';

const CheckboxInput = ({id, name, value, label, onDelete}) => (
    <div className="form-check checkbox-input">
        <label className="form-check-label">
          <input id={id} className="form-check-input" type="checkbox" name={name} value={value} />
          {label}
        </label>
        <button data-id={id} className="btn btn-danger" onClick={onDelete}>x</button>
    </div>
);

CheckboxInput.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
};

export default CheckboxInput;