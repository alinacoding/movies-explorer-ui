import { UPDATE_ALL_GENRES } from '../constants.js';
import { initialState } from '../initialState.js';

export const updateAllGenres = (state = initialState, action = {}) => {
	switch(action.type) {
		case UPDATE_ALL_GENRES:
			return Object.assign({}, state, {allGenres: action.allGenres})
		default:
			return state;
	}
}
