import * as types from '../actions/actionTypes';
import initialState from './initialState';
import _ from 'lodash';

export function checklistReducer(state = initialState, action) {
    let checklist;

    switch (action.type) {
        case types.LOAD_CHECKLIST:
            return {
                id: action.checklist.id,
                title: action.checklist.title,
                items: action.checklist.items
            };
            // checklist = state.filter(checklist => checklist.id === action.id);
            // return checklist[0];
            break;

        case types.RESET_CHECKLIST:
            return {
                id: 0,
                title: '',
                items: []
            };
            break;

        case types.CREATE_CHECKLIST_ITEM:
            let lastId = _.uniqueId();
            //checklist = state.filter(checklist => checklist.id === action.id);

            return {
                id: state.id,
                title: state.title,
                items: [
                ...state.items, {
                    id: lastId,
                    name: action.item,
                    value: action.item,
                    label: action.item
                }]
            };
            break;

        // case types.UPDATE_CHECKLIST:
        //     if (action.list) {
        //         return action.list;
        //     } else {
        //         throw 'Checklist not found';
        //     }
        //     break;

        case types.DELETE_CHECKLIST_ITEM:
            checklist = state.filter(checklist => checklist.id === action.id);

            return checklist[0].items.filter(item => {
                return item.id !== action.itemId
            });
            break;

        default:
            return {
                id: 0,
                title: '',
                items: []
            };
    }
}



// export function checklistItemsReducer(state = initialState, action) {
//     switch (action.type) {
//         case types.LOAD_CHECKLIST_ITEMS:
//             //TODO: check this case
//             if (action.id) {
//                 return state.filter(checklist => checklist.id === action.id)[0].items;
//             }
//             return state.filter(checklist => checklist.id === 0)[0].items;
//             break;
//
//         case types.CREATE_CHECKLIST_ITEM:
//             var lastId = _.uniqueId();
//             return [
//                 ...state, {
//                     id: lastId,
//                     name: action.item,
//                     value: action.item,
//                     label: action.item
//                 }];
//             break;
//
//         case types.UPDATE_CHECKLIST:
//             if (action.list) {
//                 return action.list;
//             } else {
//                 throw 'Checklist not found';
//             }
//             break;
//
//         case types.DELETE_CHECKLIST_ITEM:
//             return state.filter(item => {
//                 return item.id !== action.id
//             });
//             break;
//
//         default:
//             return state;
//     }
// }
//
// export function checklistTitleReducer(state = '', action) {
//     switch (action.type) {
//         case types.CREATE_CHECKLIST_TITLE:
//             return action.title;
//             break;
//         case types.UPDATE_CHECKLIST_TITLE:
//             return action.title;
//         default:
//             return state;
//     }
// }