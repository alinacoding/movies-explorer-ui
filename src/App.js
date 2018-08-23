import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import TitleSearchField from './components/TitleSearchField/TitleSearchField';
import ActorSearchField from './components/ActorSearchField/ActorSearchField';
import MovieList from './components/MovieList/MovieList';

import { updateSearchResults, updateMovieData } from './actions'


const mapStateToProps = (state) => {
  return {
    allMovieData: state.updateMovieData.allMovieData,
    titleSearchField: state.titleSearchField,
    actorSearchField: state.actorSearchField,
    searchResults: state.updateSearchResults.searchResults
  };
}


const mapDispatchToProps = (dispatch) => {
  return {
    onSearchResultsChange: (searchResults) => dispatch(updateSearchResults(searchResults)),
    onMovieDataChange: (movieData) => dispatch(updateMovieData(movieData))
  }
}

class App extends Component {

  componentDidMount() {
		const { titleSearchField, onSearchResultsChange, onMovieDataChange} = this.props;
			fetch('http://localhost:8080/movie-search', {
					method: 'post',
					headers: {'Content-Type': 'application/json'},
					body: JSON.stringify({
					title: this.props.titleSearchField,
				})
			})
				.then(response => response.json())
				.then(searchResult => {
          onSearchResultsChange(searchResult.movies);
          onMovieDataChange(searchResult.movies);
        })
				.catch(err => console.log(err))

	}

  render() {
    return (
      <div>
        <ActorSearchField />
        <MovieList movies = {this.props.searchResults}/>
      </div>
      )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
