import React, { useState } from 'react'
import AddBook from '../components/addBook/AddBook'
import Booklist from '../components/book-list/Booklist'
import "./homepage.scss"
import { Col, Container, Row } from 'react-bootstrap'
const HomePage = () => {

    const [books, setBooks] = useState([]);

  return (
    <div id='home'>
      <Container>
        <Row>
          <Col>
          <AddBook setBooks={setBooks} books={books}/>
      <Booklist setBooks={setBooks} books={books}/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default HomePage
