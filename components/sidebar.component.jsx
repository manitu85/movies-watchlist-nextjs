import React from 'react'
import CreateMovieModal from './modal.component'
import { ListGroup, ListGroupItem, Badge } from 'reactstrap'


const Sidebar = ({ appName, categories, changeCategory, activeFilter }) => {

  const renderCategory = categories.map(category => (
    <a
      onClick={ () => changeCategory(category.name)  }
      key={category.id}
      href="#"
      className={`list-group-item list-group-item-action ${activeFilter ===  category.name ? 'active' : '' }`}>
      {category.name}
      <Badge pill className='float-right'>{category.badge}</Badge>
    </a>)
  )

  return (
    <>
      <h1 className="mt-3">{appName}</h1>
      <ListGroup>
        <ListGroupItem active tag="a" href="#" action>{appName} </ListGroupItem>
          { renderCategory }
        <CreateMovieModal  hasSubmit={false} />
      </ListGroup>
      {/* <style jsx>
        {`
          .active {
            background-color: orange;
          }
        `}
      </style> */}
    </>
  )
}


export default Sidebar