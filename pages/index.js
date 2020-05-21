import React from 'react'
import Head from 'next/head'

import Navbar from '../components/navbar.component'
import Sidebar from '../components/sidebar.component'
import Carousel from '../components/carousel.component'
import MovieList from '../components/movie-list.component'
import Footer from '../components/footer.component'


const Home = () => (
  <>
    <Head>
      <title>Home</title>
      <link rel='stylesheet' href='https://bootswatch.com/4/superhero/bootstrap.min.css' />
      <script src="https://code.jquery.com/jquery-3.5.1.slim.js" integrity="sha256-DrT5NfxfbHvMHux31Lkhxg42LY6of8TaYyK50jnxRnM=" crossOrigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js" integrity="sha384-1CmrxMRARb6aLqgBO7yyAxTOQE2AKb9GfXnEo760AUcUmFx3ibVJJAzGytlQcNXd" crossOrigin="anonymous"></script>
    </Head>
    <Navbar />
    <div className="container home-page-padding">
      <div className="row">
        <div className="col-lg-3">
          <Sidebar />
        </div>
        <div className="col-lg-9">
          <Carousel />
          <div className="row">
            <MovieList />
          </div>
        </div>
      </div>
    </div>
    <Footer />
    <style jsx>
      {
        `
          .home-page-padding {
            padding-top: 3rem;
          }
        `
      }
    </style>
  </>
)

export default Home