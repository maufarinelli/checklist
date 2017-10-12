import {combineReducers} from 'redux';
import {
    checklistItemsReducer as checklistItems,
    checklistTitleReducer as checklistTitle
} from './checklistItemsReducer';

const rootReducer = combineReducers({
    checklistItems,
    checklistTitle
});

export default rootReducer;