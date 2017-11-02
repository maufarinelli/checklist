import * as types from '../actions/actionTypes';
import initialState from './initialState';

export function allChecklistsReducer(state = initialState.allChecklists, action) {
	switch (action.type) {
		case types.LOAD_CHECKLISTS_SUCCESS:
			return state;
			break;

		case types.CREATE_CHECKLIST_SUCCESS:
			return [
				...state,
				Object.assign({}, action.checklist)
			];
			break;

		case types.UPDATE_CHECKLIST_SUCCESS:
			return [
				...state.filter(checklist => checklist.id !== action.checklist.id),
				Object.assign({}, action.checklist)
			];
			break;

		default:
			return state;
	}
}