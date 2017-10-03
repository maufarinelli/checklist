import {combineReducers} from 'redux';
import checklistItems from './checklistItemsReducer';

const rootReducer = combineReducers({
    checklistItems
});

export default rootReducer;