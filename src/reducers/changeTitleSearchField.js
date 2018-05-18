import { CHANGE_SEARCH_FIELD } from '../constants.js';
import { initialState } from '../initialState.js';

export const changeTitleSearchField = (state = initialState, action = {}) => {
	switch(action.type) {
		case CHANGE_SEARCH_FIELD:
			console.log("Action", action.titleSearchField);
			return Object.assign({}, state, {titleSearchField: action.titleSearchField})
		default:
			return state;
	}
}
