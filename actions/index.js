import axios from 'axios'
import { CATEGORY_DATA } from '../resources/data'


const MOVIES_DATA = []
const BASE_URL = 'http://localhost:3000'

// Actions

export const createMovie = async (movie) => {
  movie.id = Math.random().toString(16).substr(2, 5)
  const create = await axios.post(`${BASE_URL}/api/v1/movies`, movie)
  return create.data
}


export const getCategories = () =>  
  new Promise((resolve, reject) => 
    setTimeout(() => resolve(CATEGORY_DATA), 100))


export const getMovieById = async (id) => {
  const res = await axios.get(`${BASE_URL}/api/v1/movies/${id}`)
  return res.data
}


export const getMovies = async () => {
  const res = await axios.get(`${BASE_URL}/api/v1/movies`)
  return res.data
}



// export const createMovie = (movie) => 
//   new Promise((resolve, reject) => {
//     // Create ID for movie
//     movie.id = Math.random().toString(36).substr(2, 7)
//     MOVIES_DATA.push(movie)
//     setTimeout(() => {
//       resolve(MOVIES_DATA)
//     }, 50)
// })


// export const getMovieById = (id) => 
//   new Promise((resolve, reject) => {
//     const movieIndex = MOVIES_DATA.findIndex(movie => movie.id === id)
//     const movie = MOVIES_DATA[movieIndex]
//     setTimeout(() => resolve(movie), 100)
//   })


// export const getMovies = () => 
//   new Promise((resolve, reject) => 
//     setTimeout(() => resolve(MOVIES_DATA), 100))

 // console.log('c% Index:', movie, 'color: orange; font-size: 60px;', );