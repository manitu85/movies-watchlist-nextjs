import { useRouter } from 'next/router'
import Link from 'next/link'
import { Container, Jumbotron, Button } from 'reactstrap'

import { getMovieById, deleteMovie } from '../../../actions'


const Movie = props => {
  const router = useRouter()
  const { id } = router.query
  const { movie } = props

  const handleDeleteMovie = id => {
    deleteMovie(id)
      .then(() => {
        router.push('/')
      })
  }

  
  if (router.isFallback) return <div>Loading...</div>
  // router.isFallback && <div>Loading...</div>

  return (
    <Container>
      <Jumbotron>
        <h1 className="display-4">{movie.name}</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Link href="/movies/[id]/edit" as={`/movies/${id}/edit`}>
            <Button
              outline
              color="primary"
            >Edit</Button>
          </Link>{' '}
          <Button
            outline
            color="danger"
            onClick={() => handleDeleteMovie(id)}>Delete Movie</Button>
        </p>
      </Jumbotron>
      <p className='text-desc'>{movie.longDesc} </p>
      <style jsx>
        {`
          .text-desc {
            font-size: 18px;
          }
        `}
      </style>
    </Container>
  )
}


export async function getStaticPaths() {
  return {
    paths: [{ params: { id: `...` } }],
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const { id } = params
  const movie = await getMovieById(id)
  return {
    props: { movie }
  }
}

export default Movie








