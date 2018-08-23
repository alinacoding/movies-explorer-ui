import { UPDATE_SEARCH_RESULTS, CHANGE_TITLE_SEARCH_FIELD,
	CHANGE_ACTOR_SEARCH_FIELD, UPDATE_ACTOR_SUGGESTIONS,
	CLEAR_ACTOR_SUGGESTIONS,
	CHANGE_GENRE_SEARCH_FIELD, UPDATE_GENRE_SUGGESTIONS,
	CLEAR_GENRE_SUGGESTIONS,
	UPDATE_MOVIE_DATA, UPDATE_ALL_GENRES } from './constants.js';

export const updateSearchResults = (searchResults) => ({
	type: UPDATE_SEARCH_RESULTS,
	searchResults: searchResults
})

export const changeTitleSearchField = (titleSearchField) => {
	return ({
		type: CHANGE_TITLE_SEARCH_FIELD,
		titleSearchField: titleSearchField
	})
}

export const changeActorSearchField = (actorSearchField) => {
	return ({
		type: CHANGE_ACTOR_SEARCH_FIELD,
		actorSearchField: actorSearchField
	})
}

export const changeGenreSearchField = (genreSearchField) => {
	return ({
		type: CHANGE_GENRE_SEARCH_FIELD,
		genreSearchField: genreSearchField
	})
}

export const updateActorSuggestions = (actorSuggestions) => {
	return ({
		type: UPDATE_ACTOR_SUGGESTIONS,
		actorSuggestions: actorSuggestions
	})
}

export const clearActorSuggestions = () => ({
	type: CLEAR_ACTOR_SUGGESTIONS,
	actorSuggestions: []
})

export const updateGenreSuggestions = (genreSuggestions) => {
	return ({
		type: UPDATE_GENRE_SUGGESTIONS,
		genreSuggestions: genreSuggestions
	})
}

export const clearGenreSuggestions = () => ({
	type: CLEAR_GENRE_SUGGESTIONS,
	genreSuggestions: []
})

export const updateMovieData = (movieData) => ({
	type: UPDATE_MOVIE_DATA,
	allMovieData: movieData
})

export const updateAllGenres = (allGenres) => ({
	type: UPDATE_ALL_GENRES,
	allGenres: allGenres
})
