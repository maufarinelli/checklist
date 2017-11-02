import * as types from './actionTypes';

export function loadChecklist(id) {
    return {type: types.LOAD_CHECKLIST, id};
}

export function createChecklist() {
	return {type: types.CREATE_CHECKLIST};
}

export function addChecklistItem(item) {
	return {type: types.ADD_CHECKLIST_ITEM, item};
}

export function deleteChecklistItem(id) {
	return {type: types.DELETE_CHECKLIST_ITEM, id};
}

export function updateChecklistTitle(title) {
	return {type: types.UPDATE_CHECKLIST_TITLE, title};
}