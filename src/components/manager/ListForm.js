import React from 'react';
import CheckboxInput from '../common/checkbox/CheckboxInput';

const ListForm = ({id, name, value, label}) => (
    <form>
        <h1>Add a new checklist</h1>
        <CheckboxInput
            id={id}
            name={name}
            value={value}
            label={label} />
    </form>
);

export default ListForm;