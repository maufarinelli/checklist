import * as types from './actionTypes';
import {ChecklistsApi} from '../api/mockChecklistsApi';

export function loadChecklistsSuccess(checklists) {
	return {type: types.LOAD_CHECKLISTS_SUCCESS, checklists};
}

export function createChecklistSuccess(checklist) {
	return {type: types.CREATE_CHECKLIST_SUCCESS, checklist};
}

export function updateChecklistSuccess(checklist) {
	return {type: types.UPDATE_CHECKLIST_SUCCESS, checklist};
}

// export function updateNewChecklistId(checklist) {
// 	return {type: types.UPDATE_NEW_CHECKLIST_ID, checklist};
// }

export function loadChecklists() {
	return function dispatchChecklists(dispatch) {
		return ChecklistsApi.getAllCourses().then(checklists => {
			dispatch(loadChecklistsSuccess(checklists));
		}).catch(error => {
			throw(error);
		});
	};
}

export function saveChecklist(checklist) {
	return function(dispatch, getState) {
		return ChecklistsApi.saveChecklist(checklist)
			.then(savedChecklist => {
				!checklist.isNew ? dispatch(updateChecklistSuccess(savedChecklist)) : dispatch(createChecklistSuccess(savedChecklist));
			}).catch(error => {
				//dispatch(ajaxCallError(error));
				throw(error);
			});
	};
}