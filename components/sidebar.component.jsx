import React from 'react'
import CreateMovieModal from './modal.component'
import CreateMovieForm from './createMovieForm.component'
import { ListGroup, ListGroupItem, Badge } from 'reactstrap'

// import { createMovie } from '../actions';

const Sidebar = ({ appName, categories }) => {

  const renderCategory = categories.map(category => (
    <a
      key={category.id}
      href="#"
      className="list-group-item list-group-item-action">
      {category.name}
      <Badge pill className='float-right'>{category.badge}</Badge>
    </a>)
  )

  return (
    <>
      <h1 className="mt-3">{appName}</h1>
      <ListGroup>
        <ListGroupItem active tag="a" href="#" action>Categories: </ListGroupItem>
          { renderCategory }
        <CreateMovieModal  hasSubmit={false} />
      </ListGroup>
    </>
  )
}


export default Sidebar