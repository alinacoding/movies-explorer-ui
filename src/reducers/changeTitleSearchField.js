import { CHANGE_TITLE_SEARCH_FIELD } from '../constants.js';
import { initialState } from '../initialState.js';

export const changeTitleSearchField = (state = initialState, action = {}) => {
	switch(action.type) {
		case CHANGE_TITLE_SEARCH_FIELD:
			return Object.assign({}, state, {titleSearchField: action.titleSearchField})
		default:
			return state;
	}
}
