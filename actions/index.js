import axios from 'axios'
import { CATEGORY_DATA } from '../resources/data'

const MOVIES_DATA = []
const BASE_URL = 'http://localhost:3000'

// Actions

export const getMovies = async () => {
  const res = await axios.get(`${BASE_URL}/api/v1/movies`)
  return res.data
}

export const getMovieById = async (id) => {
  const res = await axios.get(`${BASE_URL}/api/v1/movies/${id}`)
  return res.data
}

export const createMovie = async (movie) => {
  movie.id = Math.random().toString(16).substr(2, 5)
  const res = await axios.post(`${BASE_URL}/api/v1/movies`, movie)
  return res.data
}

export const deleteMovie = async (id) => {
  const res = await axios.delete(`${BASE_URL}/api/v1/movies/${id}`)
  return res.data
}

export const updateMovie = async (movie) => {
  const res = await axios.patch(`${BASE_URL}/api/v1/movies/${movie.id}`, movie)
  return res.data
}

export const getCategories = () =>  
  new Promise((resolve, reject) => 
    setTimeout(() => resolve(CATEGORY_DATA), 100))


