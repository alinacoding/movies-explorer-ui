import React, { Component } from 'react';
import { connect } from 'react-redux';

import './App.css';
import TitleSearchField from './components/TitleSearchField/TitleSearchField';
import ActorSearchField from './components/ActorSearchField/ActorSearchField';
import MovieList from './components/MovieList/MovieList';


const mapStateToProps = (state) => {
  return {
    titleSearchField: state.changeTitleSearchField.titleSearchField,
    searchResults: state.updateSearchResults.searchResults
  };
}

class App extends Component {

  render() {

  const { searchResults } = this.props;

  return ( 
    <div>
      <TitleSearchField />
      <ActorSearchField />
      <MovieList movies = {searchResults}/>
    </div>
    )
  }
}

export default connect(mapStateToProps)(App);