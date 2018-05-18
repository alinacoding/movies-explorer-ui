import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import { connect } from 'react-redux';
import { updateSearchResults, changeActorSearchField, 
	updateActorSuggestions, clearActorSuggestions} from '../../actions.js';


const mapStateToProps = (state) => {
    return {
	    actorSearchField: state.changeActorSearchField.actorSearchField,
	    actorSuggestions: state.handleActorSuggestions.actorSuggestions,
	    searchResults: state.updateSearchResults.searchResults
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
			(value, searchResults) => dispatchProps.dispatch(updateActorSuggestions(getSuggestions(value, stateProps.searchResults)))
	};
}


const getSuggestions = ({ value }, searchResults) => {
	const inputValue = value.trim().toLowerCase();
	const inputLength = inputValue.length;

	return inputLength === 0 ? [] : 
		[...new Set([].concat.apply([], searchResults.map(movie => 
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
		const { actorSearchField,  onSearchResultsChange} = this.props;
		console.log(actorSearchField);
		if (actorSearchField !== nextProps.actorSearchField) {
			fetch('http://localhost:8080/movie-search', {
					method: 'post',
					headers: {'Content-Type': 'application/json'},
					body: JSON.stringify({
					actor: actorSearchField
				})
			})
				.then(response => response.json())
				.then(searchResult => onSearchResultsChange(searchResult.movies))
				.catch(err => console.log(err))
		}
	}


	componentDidMount() {
		const { actorSearchField, onSearchResultsChange } = this.props;
			fetch('http://localhost:8080/movie-search', {
					method: 'post',
					headers: {'Content-Type': 'application/json'},
					body: JSON.stringify({
					actor: actorSearchField
				})
			})
				.then(response => response.json())
				.then(searchResult => onSearchResultsChange(searchResult.movies))
				.catch(err => console.log(err))

	}

	render() {

		const { actorSearchField, actorSuggestions, 
			onActorChange, onSuggestionsFetchRequested, 
			onSuggestionsClearRequested } = this.props;
		console.log("ActorSearchField", actorSearchField);

		const inputProps = {
			placeholder: '', 
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
					inputProps={inputProps} />	    	      
			</div>	
		)		
	}
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(ActorSearchField);
