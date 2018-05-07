import React, { Component } from 'react';
import SearchField from 'react-search-field';
import './App.css';
import MovieList from './components/MovieList/MovieList';

class App extends Component {

  constructor() {
      super();
      this.state = {
          searchText: '',
          searchResults: []
      };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.searchText !== prevState.searchText) {
      const { searchText } = this.state;
      fetch('http://localhost:8080/movie-search', {
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            title: searchText
          })
      })
        .then(response => response.json())
        .then(searchResult => this.setState({searchResults: searchResult.movies}))
        .catch(err => console.log(err))
    }

  }

  onChange = (value, event) => {
    console.log(value);
    this.setState({ searchText: value});
  }

  render() {

    const { searchResults } = this.state;

    return (
      <div>
        <SearchField 
          placeholder='Search item'
          onChange={this.onChange}
        />
        <MovieList movies = {searchResults}/>
      </div>
    )
  }
}

export default App;