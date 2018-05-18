import { combineReducers } from 'redux';
import { changeTitleSearchField } from './changeTitleSearchField';
import { changeActorSearchField } from './changeActorSearchField';
import { updateSearchResults } from './updateSearchResults';
import { handleActorSuggestions } from './handleActorSuggestions';

export default combineReducers({
	changeTitleSearchField, 
	updateSearchResults, 
	changeActorSearchField, 
	handleActorSuggestions
})
