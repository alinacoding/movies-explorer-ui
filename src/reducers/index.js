import { combineReducers } from 'redux';
import { changeTitleSearchField } from './changeTitleSearchField';
import { changeActorSearchField } from './changeActorSearchField';
import { changeGenreSearchField } from './changeGenreSearchField';
import { updateSearchResults } from './updateSearchResults';
import { updateMovieData } from './updateMovieData';
import { updateAllGenres } from './updateAllGenres';
import { handleActorSuggestions } from './handleActorSuggestions';
import { handleGenreSuggestions } from './handleGenreSuggestions';

export default combineReducers({
	changeTitleSearchField,
	changeGenreSearchField,
	updateSearchResults,
	changeActorSearchField,
	handleActorSuggestions,
	handleGenreSuggestions,
	updateMovieData,
	updateAllGenres
})
