// import App from 'next/app';
import Head from 'next/head'

import Navbar from '../components/navbar.component'
import Footer from '../components/footer.component'

// import Particles from 'react-particles-js'

// const particleOpt = {
//   particles: {
//     number: {
//       value: 200
//     },
//     color: {
//       value: '#16d47b'
//     },
//     size: {
//       value: 2
//     }
//   },

//   shape: {
//     type: {
//       value: 'polygon'
//     }
//   },

//   interactivity: {
//     events: {
//       onhover: {
//         enable: true,
//         mode: "repulse"
//       }
//     }
//   }
// }

// This default export is required in a new `pages/_app.js` file.
const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel='stylesheet' href='https://bootswatch.com/4/lux/bootstrap.min.css' />
        <script src="https://code.jquery.com/jquery-3.5.1.slim.js" integrity="sha256-DrT5NfxfbHvMHux31Lkhxg42LY6of8TaYyK50jnxRnM=" crossOrigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.bundle.min.js" integrity="sha384-1CmrxMRARb6aLqgBO7yyAxTOQE2AKb9GfXnEo760AUcUmFx3ibVJJAzGytlQcNXd" crossOrigin="anonymous"></script>
      </Head>
      <body>
        <Navbar />
        <div className="site-bg home-page-padding">
         {/* <Particles params={particleOpt} /> */}
          {/* // Component holds pages props where you navigation to, similar as children props */}
          <Component {...pageProps} />
        </div>
        <Footer />
      </body>
      <style jsx>
        {`
            .home-page-padding {
              padding-top: 3rem;
            }

            .site-bg {
              background-color: #1d1d1d;
            }  
        ` }
      </style>
    </>
  )
}

export default App





