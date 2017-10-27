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

export class ListForm extends React.Component {
    constructor(props) {
        super(props);

        this.onDelete = this.onDelete.bind(this);
    }

    onDelete(event) {
        event.preventDefault();
        this.props.actions.deleteChecklistItem(event.currentTarget.dataset.id);
    }

    render() {
        return (
            <div>
                <Title checklistTitle={this.props.checklistTitle}/>
                <form className="checklist-form">
                    <TextInput
                        type="horizontal-form"
                        id="checklist-title"
                        label="Title : "
                        value={this.props.checklistTitle}/>

                    {this.props.checklistItems.map(listItem => {
                        return <ChecklistItem
                            key={listItem.id}
                            id={listItem.id}
                            name={listItem.name}
                            value={listItem.value}
                            label={listItem.label}
                            onDelete={this.onDelete}/>
                    })}

                    <TextInput type="input-add-item" />
                </form>
            </div>
        );
    }
}

ListForm.propTypes = {
    checklistItems: PropTypes.array.isRequired,
    checklistTitle: PropTypes.string
};

function mapStateToProps(state, ownProps) {
    let {checklistItems, checklistTitle} = state;

    if (ownProps.checklistItems && ownProps.checklistTitle) {
        checklistItems = ownProps.checklistItems;
        checklistTitle = ownProps.checklistTitle;
    }
    return {
        checklistItems,
        checklistTitle
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