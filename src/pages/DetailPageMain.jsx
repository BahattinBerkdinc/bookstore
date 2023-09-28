import React from 'react'
import BookDetails from '../components/book-detail/BookDetails'
import { useParams } from 'react-router-dom';
const DetailPageMain = () => {

  const {bookId} = useParams();

  

  return (
    <div>
      <BookDetails bookId={bookId}/>
    </div>
  )
}

export default DetailPageMain
