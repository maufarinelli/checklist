import * as types from '../actions/actionTypes';
import initialState from './initialState';

export function allChecklistsReducer(state = initialState, action) {
    switch(action.type) {
        case types.LOAD_CHECKLISTS:
            return state;
        default:
            return state;
    }
}