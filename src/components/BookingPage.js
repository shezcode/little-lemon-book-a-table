import React from 'react'
import BookingForm from './BookingForm'
import Footer from './Footer'
import Header from './Header'
import '../styles/Booking.css'

const BookingPage = () => {
  return (
    <>
      <Header />
      <div className='booking-title'>
        <h1 className='title primary-yellow'>Little Lemon</h1>
        <h2 className='subtitle white'>Book a table</h2>
      </div>

      <BookingForm />
      <Footer />
    </>
  )
}

export default BookingPage