import { CHANGE_SEARCH_FIELD } from '../constants.js';
import { initialState } from '../initialState.js';

export const changeActorSearchField = (state = initialState, action = {}) => {
	switch(action.type) {
		case CHANGE_SEARCH_FIELD:
			console.log("Action", action.actorSearchField);
			return Object.assign({}, state, {actorSearchField: action.actorSearchField})
		default:
			return state;
	}
}
