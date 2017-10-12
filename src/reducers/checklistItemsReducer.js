import * as types from '../actions/actionTypes';
import initialState from './initialState';
import _ from 'lodash';

export function checklistItemsReducer(state = initialState.checklistItems, action) {
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

        case types.DELETE_CHECKLIST_ITEM:
            return state.filter(item => {
                return item.id !== action.id
            });
            break;

        default:
            return state;
    }
}

export function checklistTitleReducer(state = initialState.checklistTitle, action) {
    switch(action.type) {
      case types.CREATE_CHECKLIST_TITLE:
          return action.title;
          break;
			default:
				return state;
    }
}