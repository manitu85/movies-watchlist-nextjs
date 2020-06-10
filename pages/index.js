import React, { useState } from 'react'
import { Container, Row, Col } from 'reactstrap'

import Sidebar from '../components/sidebar.component'
import CarouselSlider from '../components/carousel.component'
import MovieList from '../components/movies-list.component'

import styles from '../sass/main.module.scss'

// import Particles from 'react-particles-js'

import { getMovies, getCategories } from '../actions'

const Home = ({ movies, images, categories }) => {
  // console.table(JSON.stringify(images)) // to show a obj.
  // console.table(categories);

  const [filter, setFilter] = useState('all')

  const changeCategory = category => setFilter(category)
  
  const filterMovies = movies => {
    if (filter === 'all') return movies
    
    return movies.filter(movie =>  movie.genre && movie.genre.includes(filter))
  }

  return (
    <>
        {/* <Particles params={particleOpt} /> */}
        <Container>
          <Row>
            <Col xs={12} md={4} lg={3} >
              <Sidebar
                appName={'Categories:'}
                categories={categories}
                changeCategory={changeCategory}
                activeFilter={filter}
              />
            </Col>
            <Col xs={12} md={8} lg={9}  >
              <CarouselSlider images={images} />
              <h1 className={styles.filterHeadings}>{filter} movies</h1>
              <Row>
                <MovieList movies={filterMovies(movies) || []} />
              </Row>
            </Col>
          </Row>
        </Container>
    </>
  )
}

// Pass fetched data via props to component during the built-time
export async function getStaticProps(ctx) { // ctx - context
  const movies = await getMovies()
  const categories = await getCategories()
  const images = movies.map(movie => ({ // obj.
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


export default Home



// TO-DO: 
  // detach inputs to 2 components 
  // 3. attach to heroku app
  // 4. eventually particles effect to home page

// Old way to fetch data and pass to component
// Home.getStaticProps = async () => {
//   const movies = await getMovies()
//   return {
//     movies
//   }
// }