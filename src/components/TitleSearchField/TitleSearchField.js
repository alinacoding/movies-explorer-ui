import React, { Component } from 'react';
import SearchField from 'react-search-field';
import { connect } from 'react-redux';
import { updateSearchResults, changeTitleSearchField } from '../../actions'

const mapStateToProps = (state) => {
  return {
    titleSearchField: state.changeTitleSearchField.titleSearchField,
    actorSearchField: state.changeActorSearchField.actorSearchField,
    searchResults: state.updateSearchResults.searchResults
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchResultsChange: (searchResults) => dispatch(updateSearchResults(searchResults)),
    onTitleChange: (value, event) => dispatch(changeTitleSearchField(value))
  }
}

class TitleSearchField extends Component {

	componentWillReceiveProps(nextProps) {
		const { actorSearchField, titleSearchField, genreSearchField,
      onSearchResultsChange, onTitleChange} = this.props;
		if (titleSearchField !== nextProps.titleSearchField) {
      onTitleChange(nextProps.titleSearchField);
			fetch('http://localhost:8080/movie-search', {
					method: 'post',
					headers: {'Content-Type': 'application/json'},
					body: JSON.stringify({
					title: nextProps.titleSearchField,
          actor:  actorSearchField,
          genre: genreSearchField
				})
			})
				.then(response => response.json())
				.then(searchResult => onSearchResultsChange(searchResult.movies))
				.catch(err => console.log(err))
		}
	}

	render() {
		const { titleSearchField, searchResults, onTitleChange } = this.props;
		return (
		  <div>
		    <SearchField
		      placeholder='Search title'
		      onChange={onTitleChange}
		    />
		  </div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TitleSearchField);
