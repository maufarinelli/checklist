import React from 'react';
import PropTypes from 'prop-types';

const CheckboxInput = ({id, name, value, label}) => (
    <div className="form-check">
        <label className="form-check-label">
          <input id={id} className="form-check-input" type="checkbox" name={name} value={value} />
          {label}
        </label>
    </div>
);

CheckboxInput.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
};

export default CheckboxInput;