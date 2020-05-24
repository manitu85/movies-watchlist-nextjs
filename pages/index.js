import React from 'react'
import { Container, Row, Col } from 'reactstrap';

import Sidebar from '../components/sidebar.component'
import Carousel from '../components/carousel.component'
import MovieList from '../components/movie-lists.component'

import { getMovies } from '../actions'


const Home = ({ movies }) => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={4}  lg={3} >
          <Sidebar appName={'My Favorite'} />
        </Col>
        <Col xs={12} md={8}  lg={9}  >
          <Carousel />
          <Row>
            <MovieList moviesData={movies || []} />
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export async function getStaticProps(context) {
  const movies = await getMovies(context)  // fetch movies
  return {
    props: { movies }, // will be passed to the pageProps
  }
}

// Pass fetched data via props to home component
// Home.getInitialProps = async () => {
//   const movies = await getMovies()
//   return {
//     movies
//   }
// }


export default Home

