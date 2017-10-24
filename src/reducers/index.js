import {combineReducers} from 'redux';
import {
    checklistItemsReducer as checklistItems,
    checklistTitleReducer as checklistTitle
} from './checklistItemsReducer';
import {allChecklistsReducer as allChecklists} from './allChecklistsReducer';

const rootReducer = combineReducers({
    allChecklists,
    checklistItems,
    checklistTitle
});

export default rootReducer;