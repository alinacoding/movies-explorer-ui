import React from 'react';
import Movie from '../Movie/Movie';

const MovieList = ({ movies }) => {
	if (!movies) {
		return <div></div>
	}

	const itemStyles = {
		background: 'rgba(255, 179, 179, 0.3)',
	  padding: "5px",
	  margin: "2px",
		display: 'inline-block'
	};

	const movieItems = movies.map((movie, i) =>
		<div>
		<ul style ={itemStyles} key={i}> {movie.title} </ul>
		</div>
	);
	return (
		<div>{movieItems}</div>
	);
}

	// return (
		// <div>
		// 	{movies.map((movies, i) => {
		// 		return (
		// 			<Movie
		// 				key={i}
		// 				title={movies.title}
		// 			/>
		// 		)})
		// 	}
		// </div>
	// );

// }

export default MovieList;
