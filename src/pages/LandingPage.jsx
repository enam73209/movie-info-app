import React,{useState} from 'react';
import {Container, Row, Col,Button, Modal, Form } from 'react-bootstrap';
import MovieCard from '../components/MovieCard';
import AddMovieModal from '../components/AddMovieModal';

const LandingPage = () => {
  const [movies,setMovies] =useState([
    {
      id: 1,
      title: "The Avengers",
      openingText: "Earth's mightiest heroes must come together...",
      releaseDate: "2012-05-04"
    },
    {
      id: 2,
      title: "Inception",
      openingText: "A thief who steals corporate secrets through...",
      releaseDate: "2010-07-16"
    },
    {
      id: 3,
      title: "The Dark Knight",
      openingText: "When the menace known as the Joker emerges...",
      releaseDate: "2008-07-18"
    },
    {
      id: 4,
      title: "Interstellar",
      openingText: "A team of explorers travel through a wormhole...",
      releaseDate: "2014-11-07"
    },
    {
      id: 5,
      title: "Forrest Gump",
      openingText: "The presidencies of Kennedy and Johnson, the Vietnam War...",
      releaseDate: "1994-07-06"
    },
    {
      id: 6,
      title: "The Matrix",
      openingText: "A computer hacker learns from mysterious rebels...",
      releaseDate: "1999-03-31"
    },
    {
      id: 7,
      title: "Gladiator",
      openingText: "A former Roman General sets out to exact vengeance...",
      releaseDate: "2000-05-05"
    },
    {
      id: 8,
      title: "Titanic",
      openingText: "A seventeen-year-old aristocrat falls in love with a...",
      releaseDate: "1997-12-19"
    },
    {
      id: 9,
      title: "Avatar",
      openingText: "A paraplegic Marine dispatched to the moon Pandora...",
      releaseDate: "2009-12-18"
    },
    {
      id: 10,
      title: "The Lord of the Rings: The Return of the King",
      openingText: "Gondor calls for aid. Rohan will answer.",
      releaseDate: "2003-12-17"
    },
    {
      id: 11,
      title: "Pulp Fiction",
      openingText: "The lives of two mob hitmen, a boxer, a gangster's wife...",
      releaseDate: "1994-10-14"
    },
    {
      id: 12,
      title: "Fight Club",
      openingText: "An insomniac office worker and a soap salesman build...",
      releaseDate: "1999-10-15"
    },
    {
      id: 13,
      title: "Joker",
      openingText: "In Gotham City, mentally troubled comedian Arthur Fleck...",
      releaseDate: "2019-10-04"
    },
    {
      id: 14,
      title: "The Shawshank Redemption",
      openingText: "Two imprisoned men bond over a number of years...",
      releaseDate: "1994-09-23"
    },
    {
      id: 15,
      title: "The Godfather",
      openingText: "The aging patriarch of an organized crime dynasty...",
      releaseDate: "1972-03-24"
    }
  ]);
  const [showModal, setShowModal] = useState(false);
  const handleShow = () =>{
    console.log(1);
    setShowModal(true);
  }
  const handleClose = () => setShowModal(false);



  const handleAddMovie = (newMovie) => {
    const NewMovieToAdd ={
      ...newMovie,
      id:movies.length+1
    }
    setMovies((prevMovies)=>[...prevMovies,NewMovieToAdd]);
    setShowModal(false);
  };
  return (
    <Container className="my-5 ">
      <div className="d-flex justify-content-center mb-4 ">
        <Button variant="primary" onClick={handleShow} className="mb-4">
          Add a New Movie
        </Button>
      </div>
      {/* Movie List */}
      <Row>
        {movies.map((movie) => (
          <Col key={movie.id} md={4} className="mb-4">
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>

      {/* Modal for Adding New Movie */}
      <AddMovieModal
        show={showModal}
        handleClose={handleClose}
        handleAddMovie={handleAddMovie}
      />

    </Container>
  );
};

export default LandingPage;