import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  Form,
  Alert,
} from "react-bootstrap";
import MovieCard from "../components/MovieCard";
import AddMovieModal from "../components/AddMovieModal";
import { Spinner } from "react-bootstrap";

const LandingPage = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://movie-info-app-react-http-default-rtdb.firebaseio.com/movies.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      const loadedMovies = [];
      for (const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        });
      }
      setMovies(loadedMovies);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => {
    console.log(1);
    setShowModal(true);
  };
  const handleClose = () => setShowModal(false);

  const handleAddMovie = async (newMovie) => {
    setError(null);
    try {
      const response = await fetch(
        "https://movie-info-app-react-http-default-rtdb.firebaseio.com/movies.json",
        {
          method: "POST",
          body: JSON.stringify(newMovie),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Faild to Add Movie");
      }
      await fetchMovies();
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <Container className="my-5 ">
      <div className="d-flex justify-content-center mb-4 ">
        <Button variant="primary" onClick={handleShow} className="mb-4">
          Add a New Movie
        </Button>
      </div>
      {/* Display error if it exists */}
      {error && <Alert variant="danger">{error}</Alert>}
      {/* Movie List */}
      {!isLoading && movies.length > 0 && (
        <Row>
          {movies.map((movie) => (
            <Col key={movie.name} md={4} className="mb-4">
              <MovieCard movie={movie} />
            </Col>
          ))}
        </Row>
      )}
      {isLoading && (
        <div className="text-center">
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
      )}
      {!isLoading && movies.length === 0 && <p>Found No Movies</p>}

      {/* Modal for Adding New Movie */}
      <AddMovieModal
        show={showModal}
        handleClose={handleClose}
        handleAddMovie={handleAddMovie}
        error={error}
      />
    </Container>
  );
};

export default LandingPage;
