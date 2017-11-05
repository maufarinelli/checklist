import * as types from '../actions/actionTypes';
import initialState from './initialState';

export function checklistReducer(state = initialState.checklist, action) {
	switch (action.type) {
		case types.LOAD_CHECKLIST:
			if (action.checklist) {
				return action.checklist
			}
			else {
				return {
					id: 0,
					title: '',
					items: []
				}
			}

		default:
			return state;
	}
}