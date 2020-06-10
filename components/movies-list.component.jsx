import React from 'react'
import MovieCard from './movie-card.component'


const MoviesList = ({movies}) => 
  movies.map((movie, idx) => 
    <MovieCard key={idx} movie={movie} />)
      
export default MoviesList


