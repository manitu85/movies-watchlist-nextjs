import React, { Component } from 'react'

class MovieList extends Component {

  // Shorten text preview
  shortenText = (str, maxLength) => {
    // if( str && str.length >= maxLength ) {
    //   return str.slice(0, maxLength) + '...'
    // }
    // return str

    return str && str.length >= maxLength ? str.slice(0, maxLength) + '...' : str

  }

  // Define method for render movie list
  renderMoviesList = movies => movies.map(movie => (
      <div key={movie.id} className="col-lg-4 col-md-6 mb-4">
        <div className="card h-100">
          <a href="#"><img className="card-img-top" src={movie.image} alt={movie.image} /></a>
          <div className="card-body">
            <h6>{movie.releaseYear}</h6>
            <small className="text-muted">{movie.genre}</small>
            <h4 className="card-title">
              <a href="#">{movie.name}</a>
            </h4>
          <p className="card-text">{this.shortenText(movie.description, 150)}</p>
          </div>
          <div className="card-footer">
            <small className="text-white">{movie.rating}</small>
          </div>
        </div>
      </div>
    )
   )
  

  render() {
    const { moviesData } = this.props
    return (
      <>
        {this.renderMoviesList(moviesData)}

        <style jsx>
          {`
            .card-body {
              background-color: #182025;
            }
            .card-footer {
              background-color: rgb(74, 74, 74);
            }
          `}
        </style>
      </>
    )
  }
}



export default MovieList