import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import * as checklistItemsActions from '../../../actions/checklistItemsActions';

export class TextInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    handleChange(event) {
        this.setState({text: event.target.value});
    }

    handleKeyPress(event) {
        if(event.key === 'Enter'){
            event.preventDefault();
            this.props.actions.createChecklistItem(this.state.text);
					  this.setState({text: ''});
        }
    }

    render() {
        return (
            <div className="form-group">
                <input
                    className="form-control"
                    type="text"
                    name="new-item"
                    value={this.state.text}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                    placeholder="Add a new item" />
            </div>
        );
    }
}

TextInput.propTypes = {

};

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(checklistItemsActions, dispatch)
    };
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(TextInput)
)