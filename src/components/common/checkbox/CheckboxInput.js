import React from 'react';

const CheckboxInput = ({id, name, value, label}) => (
    <div className="form-group">
        <div class="form-check">
            <label class="form-check-label">
              <input id={id} className="form-check-input" type="checkbox" name={name} value={value} />
              {label}
            </label>
          </div>
    </div>
);

export default CheckboxInput;