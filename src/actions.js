import {UPDATE_SEARCH_RESULTS, CHANGE_SEARCH_FIELD} from './constants.js';

export const updateSearchResults = (searchResults) => ({
	type: UPDATE_SEARCH_RESULTS,
	searchResults: searchResults
})

export const changeTitleSearchField = (titleSearchField) => {
	console.log(titleSearchField);
	return ({
		type: CHANGE_SEARCH_FIELD,
		titleSearchField: titleSearchField
	})
}

