import {combineReducers} from 'redux';
//import {checklistReducer as checklist} from './checklistReducer';
import {allChecklistsReducer as allChecklists} from './allChecklistsReducer';

const rootReducer = combineReducers({
	allChecklists
});

export default rootReducer;