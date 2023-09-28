import React from 'react'
import { Button } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';

  import 'react-toastify/dist/ReactToastify.css';
const AddedBook = ({isFormValid}) => {

    const notify = () => toast('Book Added', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });;

  return (
    <div>
      <Button className='mt-3 ' type='submit' onClick={notify} disabled={!isFormValid()}> Add Book
</Button>
        <ToastContainer />
    </div>
  )
}

export default AddedBook
