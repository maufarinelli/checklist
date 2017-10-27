import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import * as checklistsActions from '../../actions/checklistsActions';
import {Link} from 'react-router-dom';
import './all-checklists.css';

export class AllCheckLists extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div classame="all-checklists">
                <h1>All checklists</h1>
                <ul className="list-group">
                    {this.props.list.map(checklist => {
                        return (<li className="list-group-item" key={checklist.id}>
                            <Link
                                className="all-checklists-link"
                                to={`/checklist/${checklist.id}`}
                            >{checklist.title}
                            </Link>
                        </li>);
                    })}
                </ul>
            </div>

        );
    }
}

function mapStateToProps(state, ownProps) {
    let list = state.allChecklists;
    return {list};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(checklistsActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AllCheckLists);