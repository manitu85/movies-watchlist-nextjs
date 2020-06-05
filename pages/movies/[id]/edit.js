import React from 'react'
import Router from 'next/router'
import CreateMovieForm from '../../../components/createMovieForm.component'
import { getMovieById, updateMovie } from '../../../actions'


class EditMovie extends React.Component {

  static async getInitialProps({ query }) {
    const movie = await getMovieById(query.id)
    return { movie }
  }

  handleUpdateMovie = (movie) => {
    updateMovie(movie)
      .then((updatedMovie) => {
        Router.push(`/movies/${movie.id}`)
    })
    // setModal(!modal)
  }

  render() {
    const { movie } = this.props
    return (
      <div className="container">
        <h1>Edit the Movie</h1>
        <CreateMovieForm 
          submitButtonText='Update'
          initialData={movie} 
          handleFormSubmit={this.handleUpdateMovie} 
          />
      </div>
    )
  }
}

// TO-DO ADD getStaticProps and convert to functional component
export default EditMovie
