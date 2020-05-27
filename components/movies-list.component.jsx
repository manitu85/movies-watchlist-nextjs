import React from 'react'
import MovieCard from './movie-card.component'


const MoviesList = ({moviesData}) => 
  moviesData.map((movie, i) => 
    <MovieCard key={i} movie={movie} />
  )
      
export default MoviesList



  


    


