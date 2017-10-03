import React from 'react';
import PropTypes from 'prop-types';
import CheckboxInput from '../common/checkbox/CheckboxInput';

const ListForm = ({checklistItems}) => (
    <form>
        <h1>Add a new checklist</h1>
        {checklistItems.map(listItem => {
            return <CheckboxInput
                key={listItem.id}
                id={listItem.id}
                name={listItem.name}
                value={listItem.value}
                label={listItem.label} />
        })}
    </form>
);

ListForm.propTypes = {
    checklistItems: PropTypes.array.isRequired
};

export default ListForm;