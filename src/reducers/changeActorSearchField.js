import { CHANGE_ACTOR_SEARCH_FIELD } from '../constants.js';
import { initialState } from '../initialState.js';

export const changeActorSearchField = (state = initialState, action = {}) => {
	switch(action.type) {
		case CHANGE_ACTOR_SEARCH_FIELD:
			return Object.assign({}, state, {actorSearchField: action.actorSearchField})
		default:
			return state;
	}
}
