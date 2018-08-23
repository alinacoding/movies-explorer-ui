import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import TitleSearchField from './components/TitleSearchField/TitleSearchField';
import ActorSearchField from './components/ActorSearchField/ActorSearchField';
import GenreSearchField from './components/GenreSearchField/GenreSearchField';
import MovieList from './components/MovieList/MovieList';

import { updateSearchResults, updateMovieData, updateAllGenres } from './actions'

const mapStateToProps = (state) => {
  return {
    allMovieData: state.updateMovieData.allMovieData,
    allGenres: state.updateAllGenres.allGenres,
    titleSearchField: state.changeTitleSearchField.titleSearchField,
    actorSearchField: state.changeActorSearchField.actorSearchField,
    genreSearchField: state.changeGenreSearchField.genreSearchField,
    searchResults: state.updateSearchResults.searchResults
  };
}

const getAllGenres = (allMovieData) => {
  return [...new Set([].concat.apply([], allMovieData.map(movie =>
  			movie.genres)))];
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchResultsChange: (searchResults) => dispatch(updateSearchResults(searchResults)),
    onMovieDataChange: (movieData) => dispatch(updateMovieData(movieData)),
    onAllGenresChange: (allGenres) => dispatch(updateAllGenres(allGenres))
  }
}

class App extends Component {

  async componentDidMount() {
    const { titleSearchField, onSearchResultsChange, onMovieDataChange, onAllGenresChange } = this.props;
    const response = await fetch('http://localhost:8080/movie-search', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
      title: titleSearchField
      })
    })
    const searchResult = await response.json();

    onSearchResultsChange(searchResult.movies);
    onMovieDataChange(searchResult.movies);
    onAllGenresChange(getAllGenres(searchResult.movies));
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <TitleSearchField />
        <ActorSearchField />
        <GenreSearchField />
        <MovieList movies = {this.props.searchResults}/>
      </div>
      )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
