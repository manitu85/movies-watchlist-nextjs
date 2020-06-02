import React from 'react'
import Link from 'next/link'
import {
  Col,
  Card,
  CardText,
  CardBody,
  Button
} from 'reactstrap'


const MovieCard = ({ movie }) => {

  // Shorten text preview
  const shortenText = (str, maxLength) => str && str.length >= maxLength ? str.slice(0, maxLength) + '...' : str
  const { id, image, releaseYear, name, description, genre, rating } = movie
  return (
    <React.Fragment>
      <Col md={6} lg={4} className="mb-4">
        <Card className="card h-100">
          <Link  href='/movies/[id]' as={`/movies/${id}`}>
            <a><img className="card-img-top" src={image} alt={image} /></a>
          </Link>
          <CardBody className="card-body">
            <h6>{releaseYear}</h6>
            <small className="text-muted">{genre}</small>
            <h3 className="card-title">
              <Link  href='/movies/[id]' as={`/movies/${id}`}>
                <a>{name}</a>
              </Link>
            </h3>
            <CardText className="card-text">{shortenText(description, 130)}</CardText>
            <Link  href='/movies/[id]' as={`/movies/${id}`}>
              <Button color="success">
                <a >Read more</a>
              </Button>
            </Link>
          </CardBody>
          <div className="card-footer">
            <small className="text-white">{rating}</small>
          </div>
        </Card>
      </Col>
      <style jsx>
        {`
          .card-body {
            background-color: #3f3f3f !important;
          }
          .card-footer {
            background-color: #333;
          }
        `}
      </style>
    </React.Fragment>
  )
}

export default MovieCard