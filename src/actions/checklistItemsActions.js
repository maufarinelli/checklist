import * as types from './actionTypes';

export function loadChecklistItems() {
    return {type: types.LOAD_CHECKLIST_ITEMS};
}

export function createChecklistTitle(title) {
	return {type: types.CREATE_CHECKLIST_TITLE, title};
}

export function createChecklistItem(item) {
    return {type: types.CREATE_CHECKLIST_ITEM, item};
}

//TODO: verify it
export function updateChecklistItem(item) {
    return {type: types.UPDATE_CHECKLIST, id: item.id};
}

export function deleteChecklistItem(id) {
	return {type: types.DELETE_CHECKLIST_ITEM, id};
}