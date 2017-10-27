import * as types from '../actions/actionTypes';
import initialState from './initialState';
import _ from 'lodash';

export function checklistItemsReducer(state = initialState, action) {
    switch(action.type) {
        case types.LOAD_CHECKLIST_ITEMS:
            //TODO: check this case
            if(action.id) {
                return state.filter(checklist => checklist.id === action.id)
            }
            return [];
            break;

        case types.CREATE_CHECKLIST_ITEM:
            var lastId = _.uniqueId();
            return [
                ...state, {
                    id: lastId,
                    name: action.item,
                    value: action.item,
                    label: action.item
                }];
            break;

        case types.UPDATE_CHECKLIST:
            if(action.id) {
                return state.filter(checklist => checklist.id === action.id);
            } else {
                throw 'Checklist not found';
            }
            break;

        case types.DELETE_CHECKLIST_ITEM:
            return state.filter(item => {
                return item.id !== action.id
            });
            break;

        default:
            return [];
    }
}

export function checklistTitleReducer(state = '', action) {
    switch(action.type) {
      case types.CREATE_CHECKLIST_TITLE:
          return action.title;
          break;
      default:
          return state;
    }
}