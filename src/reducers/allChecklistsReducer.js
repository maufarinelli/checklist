import * as types from '../actions/actionTypes';
import initialState from './initialState';

export function allChecklistsReducer(state = initialState.allChecklists, action) {
	switch (action.type) {
		case types.LOAD_CHECKLISTS_SUCCESS:
			return action.checklists;

		case types.CREATE_CHECKLIST_SUCCESS:
			return [
				...state,
				Object.assign({}, action.checklist)
			];

		case types.UPDATE_CHECKLIST_SUCCESS:
			let index = state.indexOf(action.checklist),
				checklists = [...state];

			return checklists.splice(index, 1, action.checklist);
			// return [
			// 	Object.assign({}, action.checklist),
			// 	...state.filter(checklist => checklist.id !== action.checklist.id)
			// ];

		default:
			return state;
	}
}