import axios from 'axios'
// import { MOVIES_DATA } from '../resources/data'
import { CATEGORY_DATA } from '../resources/data'


const MOVIES_DATA = []
const BASE_URL = 'http://localhost:3000'

// Actions

export const createMovie = (movie) => 
  new Promise((resolve, reject) => {
    // Create ID for movie
    movie.id = Math.random().toString(36).substr(2, 7)
    MOVIES_DATA.push(movie)
    setTimeout(() => {
      resolve(MOVIES_DATA)
    }, 50)
})


export const getCategories = () =>  
  new Promise((resolve, reject) => 
    setTimeout(() => resolve(CATEGORY_DATA), 100))


export const getMovieById = (id) => 
  new Promise((resolve, reject) => {
    const movieIndex = MOVIES_DATA.findIndex(movie => movie.id === id)
    const movie = MOVIES_DATA[movieIndex]
    setTimeout(() => resolve(movie), 100)
  })


// export const getMovies = () => 
//   new Promise((resolve, reject) => 
//     setTimeout(() => resolve(MOVIES_DATA), 100))

export const getMovies = async () => {
  const res = await axios.get(`${BASE_URL}/api/v1/movies`)
  return res.data
}

 // console.log('c% Index:', movie, 'color: orange; font-size: 60px;', );