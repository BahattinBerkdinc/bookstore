import React, { useEffect, useState } from 'react'
import "./bookdetails.scss"
import { Col, Container, Row } from 'react-bootstrap'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Loader from "../loader/Loader";
import placeholderBookImage from "../../assets/book-placeholder.jpeg"
const BookDetails = ({bookId}) => {

  

  const [selectedBook,setSelectedBook] =useState([])
  const [loading,setLoading] = useState(false);
  const apiUrl = process.env.REACT_APP_API_URL

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${apiUrl}/books/${bookId}`);
        setSelectedBook(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching book details:", error);
      }
    };

    fetchData();
  }, [bookId, apiUrl]); 



  return (
    <div className='book-details' 
          style={{backgroundImage:`url(${selectedBook.bookImage})`, backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center'}}>
          <Container className='book-details-cont'>
             {
              loading ? <Loader /> :  <Row>
              <Link to='/' > Back </Link>
                <Col xs={6} lg={3} className='mx-auto'>
                    <div className="detail-image ">
                    <img className='img-fluid' src={selectedBook.bookImage || placeholderBookImage} alt="" />
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
             }
          </Container>
          </div>
  )
}

export default BookDetails
