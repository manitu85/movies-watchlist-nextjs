import React from 'react'
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';

const Sidebar = (props) => (
  <>
    <h1 className="mt-3">{props.appName}</h1>
    <ListGroup>
      <ListGroupItem active tag="a" href="#" action>movies genre lists</ListGroupItem>
        <a href="#" className="list-group-item list-group-item-action">Sci-Fi<Badge pill className='float-right'>27</Badge></a>
        <a href="#" className="list-group-item list-group-item-action">Fantasy<Badge pill className='float-right'>23</Badge></a>
        <a href="#" className="list-group-item list-group-item-action">Adventure<Badge pill className='float-right'>16</Badge></a>
        <a href="#" className="list-group-item list-group-item-action">Comedies<Badge pill className='float-right'>15</Badge></a>
        <a href="#" className="list-group-item list-group-item-action">Cartoons<Badge pill className='float-right'>11</Badge></a>
        <a href="#" className="list-group-item list-group-item-action">Drama<Badge pill className='float-right'>9</Badge></a>
        <a href="#" className="list-group-item list-group-item-action">Actions<Badge pill className='float-right'>3</Badge></a>
    </ListGroup>
    <style jsx>
      {`
        .list-group-item-action {
          color: #ec7d47;
        }

        .list-group-item-action:hover {
          color: #fff;
        }
    `}
    </style>
  </>
)

export default Sidebar