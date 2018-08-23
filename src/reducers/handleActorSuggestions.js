import { UPDATE_ACTOR_SUGGESTIONS, CLEAR_ACTOR_SUGGESTIONS } from '../constants.js';
import { initialState } from '../initialState.js';

export const handleActorSuggestions = (state = initialState, action = {}) => {
	switch(action.type) {
		case UPDATE_ACTOR_SUGGESTIONS:
			return Object.assign({}, state, {actorSuggestions: action.actorSuggestions})
		case CLEAR_ACTOR_SUGGESTIONS:
			return Object.assign({}, state, {actorSuggestions: []})
		default:
			return state;
	}
}
