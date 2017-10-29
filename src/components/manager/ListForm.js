import React from 'react';
import PropTypes from 'prop-types';
import ChecklistItem from '../checklistItem/ChecklistItem';
import TextInput from '../common/textInput/TextInput';
import Title from '../common/title/Title';
import * as checklistItemsActions from '../../actions/checklistItemsActions';

import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';

import './list-form.css';

const ListForm = ({
    checklistTitle,
    checklistItems,
    onDelete,
    onAddItem,
    onAddTitle
}) => (
    <div>
        <Title checklistTitle={checklistTitle}/>
        <form className="checklist-form">
            <TextInput
                id="checklist-title"
                label="Title : "
                value={checklistTitle}
                onAddTitle={onAddTitle}
            />

            {checklistItems.map(listItem => {
                return <ChecklistItem
                    key={listItem.id}
                    id={listItem.id}
                    name={listItem.name}
                    value={listItem.value}
                    label={listItem.label}
                    onDelete={onDelete} />
            })}

            <TextInput onAddItem={onAddItem} />
        </form>
    </div>
);

ListForm.propTypes = {
    onDelete: PropTypes.func.isRequired,
    checklistItems: PropTypes.array.isRequired,
    checklistTitle: PropTypes.string
};

function mapStateToProps(state, ownProps) {
    let items, title;

    if (ownProps.checklistItems && ownProps.checklistTitle) {
        items = ownProps.checklistItems;
        title = ownProps.checklistTitle;
    }

    return {
        checklistItems: items,
        checklistTitle: title
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(checklistItemsActions, dispatch)
    };
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(ListForm)
)