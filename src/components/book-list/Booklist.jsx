import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Form, Row } from 'react-bootstrap'
import {BsChevronDoubleRight} from 'react-icons/bs'
import "./booklist.scss"
import { Link } from 'react-router-dom'
import bookPlaceholder from "../../assets/book-placeholder.jpeg"
import Loader from '../loader/Loader'

const Booklist = ({setBooks, books}) => {

  const [loading,setLoading] = useState(false);
  const [searchBook, setSearchBook] = useState("");


  const apiUrl = process.env.REACT_APP_API_URL

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {


      try {
        const response = await axios.get(`${apiUrl}/books`);
        setBooks(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching books:", error.message);
      }
    };
  
    fetchData();
  }, [setBooks,apiUrl]);

  // const handleDelete = async (id) => {
  //   try {
  //     await axios.delete(`https://649d59739bac4a8e669d9e74.mockapi.io/api/v1/books/${id}`);
  //     setBooks(books.filter((book) => book.id !== id));
  //   } catch (error) {
  //     console.error("Error deleting book:", error);
  //   }
  // }

  const handleSearch = (e) => {
    const newSearchBook = e.target.value;
    setSearchBook(newSearchBook);
  }
  console.log(searchBook);

  const filteredBook = books.filter((book) => book.bookname.toLowerCase().includes(searchBook.toLowerCase()));
  console.log(filteredBook);
  

  return (
    <section className="booklist">
    <Container>

      <Row>
        <Form>
          <h3 className='text-center text-white mb-3'>Search Book</h3>
          <Form.Control onChange={handleSearch} className='mb-5' type="text" placeholder="Search book" />
        </Form>
      {
        loading ? <Loader/> : filteredBook.map((book) => (
          <Col key={book.id} xs={6} md={4} lg={3} className='mb-5'>
              <div className='book-content h-100'>
                <div className="img-book">
                <img src={book.bookImage ? book.bookImage : bookPlaceholder} alt="" />
                </div>
                <h3>{book.bookname}</h3>
                <span>{book.author}</span>
                <Link to={`/${book.id}`}>
About the book <BsChevronDoubleRight/></Link>
                <small className='text-white'>This book added by <span>{book.whoAdded}</span></small>
              </div>
          </Col>
        ))
      }
      </Row>
    </Container>
  </section>
  )
}

export default Booklist
