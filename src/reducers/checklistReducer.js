import * as types from '../actions/actionTypes';
import initialState from './initialState';
import _ from 'lodash';

export function checklistReducer(state = initialState.checklist, action) {
	switch (action.type) {
		case types.LOAD_CHECKLIST:
			if (action.id) {
				return action.checklist
			}
			else {
				return {
					id: _.uniqueId(),
					title: '',
					items: []
				}
			}
			break;

		case types.CREATE_CHECKLIST:
			return {
				id: _.uniqueId(),
				title: '',
				items: []
			}
			break;

		case types.ADD_CHECKLIST_ITEM:
			var newItems = [
				...state.items,
				action.item
			];
			return Object.assign({}, state, {items: newItems});
			break;

		case types.DELETE_CHECKLIST_ITEM:
			var newItems = state.items.filter(item => {
				return item.id !== action.id
			});
			return Object.assign({}, state, {items: newItems});
			break;

		case types.UPDATE_CHECKLIST_TITLE:
			return Object.assign({}, state, {title: action.title});
			break;

		default:
			return state;
	}
}

// export function checklistItemReducer(state = initialState.checklistItem, action) {
// 	switch (action.type) {
// 		case types.CREATE_CHECKLIST_ITEM:
// 			var lastId = _.uniqueId();
// 			return [
// 				...state, {
// 					id: lastId,
// 					name: action.item,
// 					value: action.item,
// 					label: action.item
// 				}];
// 			break;
// 		default:
// 			return state;
// 	}
//}

// export function checklistTitleReducer(state = initialState.checklistTitle, action) {
// 	switch (action.type) {
// 		case types.CREATE_CHECKLIST_TITLE:
// 			return action.title;
// 			break;
// 		default:
// 			return state;
// 	}
// }