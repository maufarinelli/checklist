import * as types from './actionTypes';

export function loadChecklist(checklist) {
    return {type: types.LOAD_CHECKLIST, checklist};
}

export function resetChecklist() {
    return {type: types.RESET_CHECKLIST};
}

export function loadChecklistItems() {
    return {type: types.LOAD_CHECKLIST_ITEMS};
}

export function createChecklistTitle(title) {
    return {type: types.CREATE_CHECKLIST_TITLE, title};
}

export function updateChecklistTitle(title) {
    return {type: types.UPDATE_CHECKLIST_TITLE, title};
}

export function createChecklistItem(item) {
    return {type: types.CREATE_CHECKLIST_ITEM, item};
}

// export function updateChecklistItems(list) {
//     return {type: types.UPDATE_CHECKLIST, list};
// }

export function deleteChecklistItem(id) {
	return {type: types.DELETE_CHECKLIST_ITEM, id};
}