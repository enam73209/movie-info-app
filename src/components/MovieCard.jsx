import React from 'react';
import { Card, Button} from 'react-bootstrap';

const MovieCard = (props) => {
  const movie = props.movie;
  return (
    <Card style={{ width: '18rem', backgroundColor: '#f4f4f9', border: '1px solid #ddd' }}>
    <Card.Body>
      <Card.Title>{movie.title}</Card.Title>
      <Card.Text>
        <strong>Opening Text:</strong> {movie.openingText}
      </Card.Text>
      <Card.Text>
        <strong>Release Date:</strong> {movie.releaseDate}
      </Card.Text>
    </Card.Body>
  </Card>
  );
};

export default MovieCard;