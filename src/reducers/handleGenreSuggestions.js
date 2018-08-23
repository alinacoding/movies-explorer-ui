import { UPDATE_GENRE_SUGGESTIONS, CLEAR_GENRE_SUGGESTIONS } from '../constants.js';
import { initialState } from '../initialState.js';

export const handleGenreSuggestions = (state = initialState, action = {}) => {
	switch(action.type) {
		case UPDATE_GENRE_SUGGESTIONS:
			return Object.assign({}, state, {genreSuggestions: action.genreSuggestions})
		case CLEAR_GENRE_SUGGESTIONS:
			return Object.assign({}, state, {actorSuggestions: []})
		default:
			return state;
	}
}
