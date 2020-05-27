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
  //  console.table(movie);

  // Shorten text preview
  const shortenText = (str, maxLength) => str && str.length >= maxLength ? str.slice(0, maxLength) + '...' : str

  return (
    <React.Fragment>
      <Col md={6} lg={4} className="mb-4">
        <Card className="card h-100">
          <Link  href='/movies/[id]' as={`/movies/${movie.id}`}>
            <a><img className="card-img-top" src={movie.image} alt={movie.image} /></a>
          </Link>
          <CardBody className="card-body">
            <h6>{movie.releaseYear}</h6>
            <small className="text-muted">{movie.genre}</small>
            <h3 className="card-title">
              <Link  href='/movies/[id]' as={`/movies/${movie.id}`}>
                <a>{movie.name}</a>
              </Link>
            </h3>
            <CardText className="card-text">{shortenText(movie.description, 130)}</CardText>
            <Link  href='/movies/[id]' as={`/movies/${movie.id}`}>
              <Button color="primary">
                <a >Read more</a>
              </Button>
            </Link>
          </CardBody>
          <div className="card-footer">
            <small className="text-white">{movie.rating}</small>
          </div>
        </Card>
      </Col>
      <style jsx>
        {`
          .card-body {
            background-color: #182025;
          }
          .card-footer {
            background-color: rgb(74, 74, 74);
          }
        `}
      </style>
    </React.Fragment>
  )
}

export default MovieCard