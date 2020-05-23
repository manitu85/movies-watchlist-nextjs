import React from 'react'

import Sidebar from '../components/sidebar.component'
import Carousel from '../components/carousel.component'
import MovieList from '../components/movie-lists.component'

import { getMovies } from '../actions'


const Home = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <Sidebar appName={'My Favorite:'} />
        </div>
        <div className="col-lg-9">
          <Carousel />
          <div className="row">
            <MovieList moviesData={props.movies || []} />
          </div>
        </div>
      </div>
    </div>
  )
}

// Pass fetched data via props to home component
Home.getInitialProps = async () => {
  const movies = await getMovies()
  return {
    movies
  }
}




export default Home