import * as types from '../actions/actionTypes';
import initialState from './initialState';

export function allChecklistsReducer(state = initialState, action) {
    switch(action.type) {
        case types.LOAD_CHECKLISTS:
            return state.filter(checklist => checklist.id !== 0);
        default:
            return state;
    }
}

export function checklistsReducer(state = initialState, action) {
    switch(action.type) {
        case types.LOAD_CHECKLIST:
            return state.filter(checklist => checklist.id === action.id)[0];
            break;
        case types.RESET_CHECKLIST:
            return state.filter(checklist => checklist.id === action.id)[0];
            break;
        default:
            return state;
    }
}