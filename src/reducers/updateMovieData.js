import { UPDATE_MOVIE_DATA } from '../constants.js';
import { initialState } from '../initialState.js';

export const updateMovieData = (state = initialState, action = {}) => {
	switch(action.type) {
		case UPDATE_MOVIE_DATA:
			console.log("Action", action.allMovieData);
			return Object.assign({}, state, {allMovieData: action.allMovieData})
		default:
			return state;
	}
}
