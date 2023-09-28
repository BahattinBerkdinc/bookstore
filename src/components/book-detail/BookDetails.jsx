import React, { useEffect, useState } from 'react'
import "./bookdetails.scss"
import { Col, Container, Row } from 'react-bootstrap'
import axios from 'axios';
import { Link } from 'react-router-dom';
const BookDetails = ({bookId}) => {

  const [selectedBook,setSelectedBook] =useState([])

  console.log(bookId);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://649d59739bac4a8e669d9e74.mockapi.io/api/v1/books/${bookId}`);
        setSelectedBook(response.data);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchData();
  }, [bookId]); 

  console.log(selectedBook);


  return (
    <div className='book-details' 
    style={{backgroundImage:`url(${selectedBook.bookImage})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center'}}>
    <Container className='book-details-cont'>
        <Row>
          <Link to='/' > Back </Link>
            <Col xs={6} lg={3} className='mx-auto'>
                <div className="detail-image ">
                <img className='img-fluid' src={selectedBook.bookImage} alt="" />
                </div>
            </Col>
            <Col xs={12} lg={9}>
                <div className="detail-content">
                <h3 className='text-white text-center fw-light'>{selectedBook.bookname}</h3>
                <p className='text-white  fw-light'>Author : {selectedBook.author}</p>
                <h3>Summary</h3>
                <p className='text-white  fw-light'>{selectedBook.summary}</p>
                <span>this book added by <span>{selectedBook.whoAdded}</span></span>
                </div>
            </Col>
        </Row>
    </Container>
    </div>
  )
}

export default BookDetails
