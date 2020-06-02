import { MOVIES_DATA } from '../resources/data'
import { CATEGORY_DATA } from '../resources/data'

// Actions

export const createMovie = (movie) => 
  new Promise((resolve, reject) => {
    // Create ID for movie
    MOVIES_DATA.push(movie)
    setTimeout(() => {
      resolve(MOVIES_DATA)
      // reject('Cannot fetch data!')
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


export const getMovies = () => 
  new Promise((resolve, reject) => 
    setTimeout(() => resolve(MOVIES_DATA), 100))


 // console.log('c% Index:', movie, 'color: orange; font-size: 60px;', );