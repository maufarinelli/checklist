import {combineReducers} from 'redux';
// import {
//     checklistItemsReducer as checklistItems,
//     checklistTitleReducer as checklistTitle
//} from './checklistItemsReducer';

import {allChecklistsReducer as allChecklists} from './allChecklistsReducer';
import {checklistReducer as checklist} from './checklistItemsReducer';

const rootReducer = combineReducers({
    allChecklists,
    checklist
});

export default rootReducer;