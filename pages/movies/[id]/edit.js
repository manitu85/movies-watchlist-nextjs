import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import CreateMovieForm from '../../../components/createMovieForm.component'
import { getMovieById, updateMovie } from '../../../actions'


const EditMovie = ({ movie }) => {

  const router = useRouter()

  const handleUpdateMovie = (movie) => {
    updateMovie(movie)
      .then((updatedData) => {
        router.push('/movies/[id]', `/movies/${movie.id}`)
        // router.push('/')
    })
  }

  return (
    <div className="container">
      <h1>Edit the Movie</h1>
      <CreateMovieForm 
        submitButtonText='Update'
        initialData={movie} 
        handleFormSubmit={handleUpdateMovie} 
        />
    </div>
  )
}

EditMovie.getInitialProps = async ({ query }) => {
  const movie = await getMovieById(query.id)
  return { movie }
}


export default EditMovie
