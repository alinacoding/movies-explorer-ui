import {UPDATE_SEARCH_RESULTS} from '../constants.js';
import { initialState } from '../initialState.js';

export const updateSearchResults = (state = initialState, action = {}) => {
	switch(action.type) {
		case UPDATE_SEARCH_RESULTS:
			return Object.assign({}, state, {searchResults: action.searchResults})
		default:
			return state;
	}
} 
