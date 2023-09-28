import React, { useState } from 'react';
import { Col, Container, Form, Row } from "react-bootstrap";
import axios from "axios";
import "./addbook.scss"
import AddedBook from '../toast/AddedBook';
const AddBook = ({ setBooks, books }) => {


  const initialFormData = {
    bookname: "",
    author: "",
    summary: "",
    bookImage: "",
    whoAdded: ""
  };

  const [formData, setFormData] = useState(initialFormData);

  const apiUrl = process.env.REACT_APP_API_URL;

  const handleFormData = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${apiUrl}/books`, formData);
      setBooks([...books, response.data]);
      setFormData(initialFormData);
    } catch (error) {
      console.log(error);
    }
  };

  const isFormValid = () => {
    return formData.bookname && formData.author && formData.summary && formData.bookImage;
  };

  return (
    <div id='addBook' >
      <Container>
        <h1 className='text-center text-light my-5'>BOOK STORE</h1>
        <h4 className='text-center text-white mb-5 fw-light'><small>Add a new book</small></h4>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col xs={12} md={3}>
              <Form.Group>
                <Form.Label>Book Name</Form.Label>
                <Form.Control
                  type="text"
                  name='bookname'
                  value={formData.bookname}
                  placeholder="Book Name"
                  onChange={(e) => handleFormData(e)}
                />
              </Form.Group>
            </Col>

            <Col xs={12} md={3}>
              <Form.Group>
                <Form.Label>Author</Form.Label>
                <Form.Control
                  type="text"
                  name='author'
                  value={formData.author}
                  placeholder="Author"
                  onChange={(e) => handleFormData(e)}
                />
              </Form.Group>
            </Col>

            <Col xs={12} md={3}>
              <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name='whoAdded'
                  value={formData.whoAdded}
                  placeholder="Who adds this book?"
                  onChange={(e) => handleFormData(e)}
                />
              </Form.Group>
            </Col>

            <Col xs={12} md={3}>
              <Form.Group>
                <Form.Label>Book Image (URL)</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Paste Image URL"
                  name='bookImage'
                  value={formData.bookImage}
                  onChange={(e) => handleFormData(e)}
                />
              </Form.Group>
            </Col>

            <Col xs={12} md={12}>
              <Form.Group>
                <Form.Label>
About the book</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Summary"
                  name='summary'
                  value={formData.summary}
                  onChange={(e) => handleFormData(e)}
                />
              </Form.Group>
              <AddedBook isFormValid={isFormValid} />
            </Col>


          </Row>


        </Form>
      </Container>
    </div>
  );
};

export default AddBook;
