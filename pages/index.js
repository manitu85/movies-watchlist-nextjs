import React from 'react'
import { Container, Row, Col } from 'reactstrap';

import Sidebar from '../components/sidebar.component'
import Carousel from '../components/carousel.component'
import MovieList from '../components/movies-list.component'

import { getMovies } from '../actions'


const Home = ({ movies, images }) => {
  // console.table(JSON.stringify(images)) // to show a obj.

  return (
    <Container>
      <Row>
        <Col xs={12} md={4}  lg={3} >
          <Sidebar appName={'My Favorite'} />
        </Col>
        <Col xs={12} md={8}  lg={9}  >
          <Carousel images={images} />
          <Row>
            <MovieList moviesData={movies || []} />
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

// Pass fetched data via props to home component during the built-time
export async function getStaticProps(ctx) {
  const movies = await getMovies(ctx)  // fetch movies
  const images = movies.map(movie => ({
    id: `image-${movie.id}`,
    image: movie.image
    })
  )
  
  return {
    props: { 
      movies,
      images 
    } // will be passed to the pageProps
  }
}

// Old way to fetch data and pass to component
// Home.getInitialProps = async () => {
//   const movies = await getMovies()
//   return {
//     movies
//   }
// }

export default Home


// ctx - context