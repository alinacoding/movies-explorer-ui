import { CHANGE_GENRE_SEARCH_FIELD } from '../constants.js';
import { initialState } from '../initialState.js';

export const changeGenreSearchField = (state = initialState, action = {}) => {
	switch(action.type) {
		case CHANGE_GENRE_SEARCH_FIELD:
			return Object.assign({}, state, {genreSearchField: action.genreSearchField})
		default:
			return state;
	}
}
