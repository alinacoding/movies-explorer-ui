import React from 'react';
import Movie from '../Movie/Movie';

const MovieList = ({ movies }) => {
	console.log("Movies", movies);
	return (
		<div>
			{movies.map((movies, i) => {
				return (
					<Movie 
						key={i} 
						title={movies.title} 
					/>
				)})
			}
		</div>
	);

}

export default MovieList;