import React from 'react'
import CreateMovieModal from './modal.component'
import CreateMovieForm from './createMovieForm.component'
import { ListGroup, ListGroupItem, Badge } from 'reactstrap'

import { createMovie } from '../actions';

const Sidebar = ({ appName, categories }) => {

  const handleCreateMovie = (movie) => {
    createMovie(movie).then((movies) => {
        console.log(JSON.stringify(movies))
      })
  }

  return (
    <>
      <h1 className="mt-3">{appName}</h1>
      <ListGroup>
        <ListGroupItem active tag="a" href="#" action>movies genre lists</ListGroupItem>
        {
          categories.map(category => 
            <a  
              key={category.id}  
              href="#" 
              className="list-group-item list-group-item-action">
                {category.name}
                <Badge pill className='float-right'>{category.badge}</Badge>
            </a>)
        }
        <CreateMovieModal  hasSubmit={false} >
          <CreateMovieForm handleCreateMovie={handleCreateMovie} />
        </CreateMovieModal>
      </ListGroup>
      <style jsx>
        {`
          .list-group-item-action {
            color: #e9800d;
          }

          .list-group-item-action:hover {
            color: #202020;
          }
      `}
      </style>
    </>
  )
}


export default Sidebar