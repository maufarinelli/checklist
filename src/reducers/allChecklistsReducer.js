import * as types from '../actions/actionTypes';
import initialState from './initialState';

export function allChecklistsReducer(state = initialState.allChecklists, action) {
	switch (action.type) {
		case types.LOAD_CHECKLISTS_SUCCESS:
			return action.checklists;

		case types.CREATE_CHECKLIST_SUCCESS:
			var newId = (state.length > 0) ? state[state.length - 1].id + 1 : 1;
			delete action.checklist.isNew;
			return [
				...state,
				Object.assign({}, action.checklist, {id: newId})
			];

		case types.UPDATE_CHECKLIST_SUCCESS:
			let index = state.map(function(checklist) {
				return checklist.id;
			}).indexOf(action.checklist.id),
				checklists = [...state];

			checklists.splice(index, 1, action.checklist);
			return checklists;

		default:
			return state;
	}
}