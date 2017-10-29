import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import * as checklistItemsActions from '../../../actions/checklistItemsActions';
import './text-input.css';

export class TextInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: props.value || ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.state.text = nextProps.value;
    }

    handleChange(event) {
        this.setState({text: event.target.value});
    }

    handleKeyPress(event) {
        if (event.key === 'Enter') {
            event.preventDefault();

            if (event.currentTarget.id === 'checklist-title') {
                this.props.onAddTitle(this.state.text);
            } else {
                this.props.onAddItem(this.state.text);
            }

            this.setState((prevState, props) => ({text: ''}));
        }
    }

    render() {
        return (
            <div className="form-group">
                {this.props.label ? <label htmlFor={this.props.id}>{this.props.label}</label> : ''}
                <div>
                    <input
                        className="form-control"
                        type="text"
                        name="new-item"
                        id={this.props.id}
                        value={this.state.text}
                        onChange={this.handleChange}
                        onKeyPress={this.handleKeyPress}
                        placeholder={this.props.label ? '' : 'Add a new item'}/>
                </div>
            </div>
        );
    }
}

TextInput.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    onAddItem: PropTypes.func,
    onAddTitle: PropTypes.func
};

function mapStateToProps(state, ownProps) {
    return {
        id: ownProps.id,
        label: ownProps.label,
        value: ownProps.value
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(checklistItemsActions, dispatch)
    };
}

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(TextInput)
)