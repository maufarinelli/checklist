import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function checklistItemsReducer(state = initialState.checklistItems, action) {
    switch(action.type) {
        case types.LOAD_CHECKLIST_ITEMS:
            return state;
            break;
        case types.CREATE_CHECKLIST_ITEM:
            return [
                Object.assign({}, action.payload),
                ...state.checklistItems
            ];
            break;
        case types.UPDATE_CHECKLIST:
            //TODO: change logic
            return [
                Object.assign({}, action.payload),
                ...state.checklistItems
            ];
            break;
        default:
            return state;
    }
}