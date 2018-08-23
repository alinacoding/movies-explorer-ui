import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import { connect } from 'react-redux';
import { updateSearchResults, changeGenreSearchField,
	updateGenreSuggestions, clearGenreSuggestions } from '../../actions.js';


const mapStateToProps = (state) => {
    return {
      titleSearchField: state.changeTitleSearchField.titleSearchField,
      actorSearchField: state.changeActorSearchField.actorSearchField,
      genreSearchField: state.changeGenreSearchField.genreSearchField,
      genreSuggestions: state.handleGenreSuggestions.genreSuggestions,
	    searchResults: state.updateSearchResults.searchResults,
      allGenres: state.updateAllGenres.allGenres,
			allMovieData: state.updateMovieData.allMovieData
	}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchResultsChange: (searchResults) => dispatch(updateSearchResults(searchResults)),
    onGenreChange: (event, { newValue }) => dispatch(changeGenreSearchField(newValue)),
    onGenreSuggestionsClearRequested: () => dispatch(clearGenreSuggestions()),
    dispatch
  }
}

const mergeProps = (stateProps, dispatchProps, { value }) => {
	return {
		...stateProps,
		...dispatchProps,
		onGenreSuggestionsFetchRequested:
			(value, allMovieData, allGenres) =>
				dispatchProps.dispatch(updateGenreSuggestions(getSuggestions(value, stateProps.allMovieData, stateProps.allGenres)))
  };
}

const getSuggestions = ({ value }, allMovieData, allGenres) => {
  const inputValue = value.trim().toLowerCase();
  if (inputValue === '') {
    return allGenres;
  }
  return allGenres.filter(genre => genre.toLowerCase().startsWith(inputValue));
}

const getSuggestionValue = (suggestion) => {
	return suggestion;
}

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
}

const alwaysTrue = () => true;

class GenreSearchField extends Component {

  componentWillReceiveProps(nextProps) {
		const { titleSearchField, actorSearchField,
      genreSearchField, onSearchResultsChange} = this.props;
		if (genreSearchField !== nextProps.genreSearchField) {
			fetch('http://localhost:8080/movie-search', {
					method: 'post',
					headers: {'Content-Type': 'application/json'},
					body: JSON.stringify({
					title: titleSearchField,
					actor: actorSearchField,
          genre: nextProps.genreSearchField
				})
			})
				.then(response => response.json())
				.then(searchResult => onSearchResultsChange(searchResult.movies))
				.catch(err => console.log(err))
		}
	}

	render() {
		const { genreSearchField, genreSuggestions,
			onGenreChange, onGenreSuggestionsFetchRequested,
			onGenreSuggestionsClearRequested } = this.props;

		const inputProps = {
			placeholder: 'Genres',
			value: genreSearchField,
			onChange: onGenreChange
		};

		return (
			<div>
	     	  <Autosuggest
	    	  suggestions={genreSuggestions}
					onSuggestionsFetchRequested={onGenreSuggestionsFetchRequested}
					onSuggestionsClearRequested={onGenreSuggestionsClearRequested}
					getSuggestionValue={getSuggestionValue}
					renderSuggestion={renderSuggestion}
          shouldRenderSuggestions={alwaysTrue}
					inputProps={inputProps}
					/>
			</div>
		)
	}

}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(GenreSearchField);
