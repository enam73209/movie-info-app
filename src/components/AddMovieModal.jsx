import React,{useState} from 'react';
import {Button, Modal, Form } from 'react-bootstrap';

const AddMovieModal = (props) => {
  const [newMovie, setNewMovie] = useState({
    title: '',
    openingText: '',
    releaseDate: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovie((prevMovie) => ({
      ...prevMovie,
      [name]: value,
    }));
  };

  const onSubmit=(e)=>{
    e.preventDefault();
    props.handleAddMovie(newMovie);
    setNewMovie({  title: '',openingText: '',releaseDate: ''})

  }
  return (
    <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={onSubmit}>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="Enter movie title"
                value={newMovie.title}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formOpeningText" className="mt-3">
              <Form.Label>Opening Text</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                name="openingText"
                placeholder="Enter opening text"
                value={newMovie.openingText}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="formReleaseDate" className="mt-3">
              <Form.Label>Release Date</Form.Label>
              <Form.Control
                type="date"
                name="releaseDate"
                value={newMovie.releaseDate}
                onChange={handleInputChange}
                required
              />
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-4">
              Add Movie
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
  );
};

export default AddMovieModal;