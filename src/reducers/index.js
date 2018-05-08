import { combineReducers } from 'redux';
import { changeTitleSearchField } from './changeTitleSearchField';
import { updateSearchResults } from './updateSearchResults';

export default combineReducers({
	changeTitleSearchField, 
	updateSearchResults
})
