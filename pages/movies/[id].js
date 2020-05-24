import { useRouter } from 'next/router'
import { Container, Jumbotron, Button } from 'reactstrap';

import { getMovieById } from '../../actions'


const Movie = props => {
  const router = useRouter()
  const { id } = router.query
  const { movie } = props
  console.log('MOB', movie);
  

  return(
    <Container>
      <Jumbotron>
        <h1 className="display-4">{movie.name}</h1>
        <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-2" />
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </Container>
  )
}

export async function getStaticPaths(context) {
  const { id } = context.query
  const movie = await getMovieById(id)  // fetch movies
  return {
    props: { movie }, // will be passed to the pageProps
  }
}

export default Movie




 
 