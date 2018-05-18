import React, { Component } from 'react';
import SearchField from 'react-search-field';
import { connect } from 'react-redux';
import { updateSearchResults, changeTitleSearchField } from '../../actions'

const mapStateToProps = (state) => {
  return {
    titleSearchField: state.changeTitleSearchField.titleSearchField,
    actorSearchField: state.changeTitleSearchField.actorSearchField,
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
		const { titleSearchField, onSearchResultsChange} = this.props;
		if (titleSearchField !== nextProps.titleSearchField) {
			fetch('http://localhost:8080/movie-search', {
					method: 'post',
					headers: {'Content-Type': 'application/json'},
					body: JSON.stringify({
					title: titleSearchField
				})
			})
				.then(response => response.json())
				.then(searchResult => onSearchResultsChange(searchResult.movies))
				.catch(err => console.log(err))
		}
	}

	render() {
		console.log("Rendering TitleSearchField", this.props);
		const { titleSearchField, searchResults, onTitleChange } = this.props;
		console.log("TitleSearchField", titleSearchField);
		console.log("SearchResults", searchResults);
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