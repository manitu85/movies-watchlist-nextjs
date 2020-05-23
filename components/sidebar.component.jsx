import React from 'react'

const Sidebar = (props) => (
  <>
    <h1 className="mt-3">{props.appName}</h1>
    <div className="list-group">
      <a href="#" className="list-group-item list-group-item-action">Category 1</a>
      <a href="#" className="list-group-item list-group-item-action">Category 2</a>
      <a href="#" className="list-group-item list-group-item-action">Category 3</a>
      <a href="#" className="list-group-item list-group-item-action">Category 4</a>
      <a href="#" className="list-group-item list-group-item-action">Category 5</a>
    </div>
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