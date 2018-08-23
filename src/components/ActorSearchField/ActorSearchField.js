import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import { connect } from 'react-redux';
import { updateSearchResults, changeActorSearchField,
	updateActorSuggestions, clearActorSuggestions} from '../../actions.js';

const mapStateToProps = (state) => {
    return {
	    actorSearchField: state.changeActorSearchField.actorSearchField,
	    titleSearchField: state.changeTitleSearchField.titleSearchField,
	    actorSuggestions: state.handleActorSuggestions.actorSuggestions,
	    searchResults: state.updateSearchResults.searchResults,
			allMovieData: state.updateMovieData.allMovieData
	}
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchResultsChange: (searchResults) => dispatch(updateSearchResults(searchResults)),
    onActorChange: (event, { newValue }) => dispatch(changeActorSearchField(newValue)),
    onSuggestionsClearRequested: () => dispatch(clearActorSuggestions()),
    dispatch
  }
};

const mergeProps = (stateProps, dispatchProps, { value }) => {
	return {
		...stateProps,
		...dispatchProps,
		onSuggestionsFetchRequested:
			(value, allMovieData) =>
				dispatchProps.dispatch(updateActorSuggestions(getSuggestions(value, stateProps.allMovieData)))
	};
}

const getSuggestions = ({ value }, allMovieData) => {
	const inputValue = value.trim().toLowerCase();
	const inputLength = inputValue.length;

	return inputLength === 0 ? [] :
		[...new Set([].concat.apply([], allMovieData.map(movie =>
			movie.peopleRoles.actors.filter(actor =>
			actor.toLowerCase().includes(inputValue)))))];
};

const getSuggestionValue = (suggestion) => {
	return suggestion;
};

const renderSuggestion = (suggestion) => {
	if (!suggestion) {
		return <div></div>
	} else {
		return (
		  <div>
		    {suggestion}
		  </div>
		);
	}
};

class ActorSearchField extends Component {

	componentWillReceiveProps(nextProps) {
		const { titleSearchField, actorSearchField, genreSearchField, onSearchResultsChange} = this.props;
		if (actorSearchField !== nextProps.actorSearchField) {
			fetch('http://localhost:8080/movie-search', {
					method: 'post',
					headers: {'Content-Type': 'application/json'},
					body: JSON.stringify({
					title: titleSearchField,
					actor: nextProps.actorSearchField,
					genre: genreSearchField
				})
			})
				.then(response => response.json())
				.then(searchResult => onSearchResultsChange(searchResult.movies))
				.catch(err => console.log(err))
		}
	}

	render() {
		const { actorSearchField, actorSuggestions,
			onActorChange, onSuggestionsFetchRequested,
			onSuggestionsClearRequested } = this.props;
		const inputProps = {
			placeholder: 'Actors',
			value: actorSearchField,
			onChange: onActorChange
		};

		return (
			<div>
	     	  <Autosuggest
	    	  suggestions={actorSuggestions}
					onSuggestionsFetchRequested={onSuggestionsFetchRequested}
					onSuggestionsClearRequested={onSuggestionsClearRequested}
					getSuggestionValue={getSuggestionValue}
					renderSuggestion={renderSuggestion}
					inputProps={inputProps}
					/>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ActorSearchField);
