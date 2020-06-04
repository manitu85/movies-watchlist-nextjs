import React from 'react'
import { Container, Row, Col } from 'reactstrap'

import Sidebar from '../components/sidebar.component'
import CarouselSlider from '../components/carousel.component'
import MovieList from '../components/movies-list.component'

import { getMovies, getCategories } from '../actions'


const Home = ({ movies, images, categories }) => {
  // console.table(JSON.stringify(images)) // to show a obj.
  // console.table(categories);
  
  return (
    <Container>
      <Row>
        <Col xs={12} md={4}  lg={3} >
          <Sidebar 
            appName={'My Favorite'}
            categories={categories}
           />
        </Col>
        <Col xs={12} md={8}  lg={9}  >
          <CarouselSlider images={images} />
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
  const movies = await getMovies()  
  const categories = await getCategories()
  const images = movies.map(movie => ({
    id: `image-${movie.id}`,
    image: movie.image
    })
  )
  
  // will be passed to the pageProps
  return {
    props: { 
      movies,
      images,
      categories   
    } 
  }
}

// Old way to fetch data and pass to component
// Home.getStaticProps = async () => {
//   const movies = await getMovies()
//   return {
//     movies
//   }
// }

export default Home


// ctx - context