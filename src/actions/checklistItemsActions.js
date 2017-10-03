import * as types from './actionTypes';

export function loadChecklistItems() {
    return {type: types.LOAD_CHECKLIST_ITEMS}
}

export function createChecklistItem(item) {
    return {type: types.CREATE_CHECKLIST_ITEM, item};
}

//TODO: verify it
export function updateChecklistItem(item) {
    return {type: types.UPDATE_CHECKLIST, item};
}