import { UPDATE_SEARCH_RESULTS, CHANGE_SEARCH_FIELD,
	UPDATE_ACTOR_SUGGESTIONS, CLEAR_ACTOR_SUGGESTIONS,
	UPDATE_MOVIE_DATA } from './constants.js';

export const updateSearchResults = (searchResults) => ({
	type: UPDATE_SEARCH_RESULTS,
	searchResults: searchResults
})

export const changeTitleSearchField = (titleSearchField) => {
	console.log("ActionT", titleSearchField);
	return ({
		type: CHANGE_SEARCH_FIELD,
		titleSearchField: titleSearchField
	})
}

export const changeActorSearchField = (actorSearchField) => {
	console.log("ActionA", actorSearchField);
	return ({
		type: CHANGE_SEARCH_FIELD,
		actorSearchField: actorSearchField
	})
}

export const updateActorSuggestions = (actorSuggestions) => {
	console.log(actorSuggestions);
	return ({
		type: UPDATE_ACTOR_SUGGESTIONS,
		actorSuggestions: actorSuggestions
	})
}

export const clearActorSuggestions = () => ({
	type: CLEAR_ACTOR_SUGGESTIONS,
	actorSuggestions: []
})

export const updateMovieData = (movieData) => ({
	type: UPDATE_MOVIE_DATA,
	allMovieData: movieData
})
