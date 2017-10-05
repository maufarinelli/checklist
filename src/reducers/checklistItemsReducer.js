import * as types from '../actions/actionTypes';
import initialState from './initialState';
import _ from 'lodash';

export default function checklistItemsReducer(state = initialState.checklistItems, action) {
    switch(action.type) {
        case types.LOAD_CHECKLIST_ITEMS:
            return state;
            break;

        case types.CREATE_CHECKLIST_ITEM:
            var lastId = _.last(state).id;
            return [
                ...state, {
                    id: ++lastId,
                    name: action.item,
                    value: action.item,
                    label: action.item
                }];
            break;

        case types.UPDATE_CHECKLIST:
            //TODO: change logic
            return [
                Object.assign({}, action.payload),
                ...state
            ];
            break;

        default:
            return state;
    }
}