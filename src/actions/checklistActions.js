import * as types from './actionTypes';

export function loadChecklist(checklist) {
    return {type: types.LOAD_CHECKLIST, checklist};
}