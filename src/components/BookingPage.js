import React, {useReducer} from 'react'
import BookingForm from './BookingForm'
import Footer from './Footer'
import Header from './Header'
import '../styles/Booking.css'

const BookingPage = () => {

  const initalizeTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']

  const updateTimes = (state, action) => {
    switch (action.type) {
      case 'FETCH_TIMES':
        return action.payload
      default:
        return state
    }
  }


  const [availableTimes, dispatch] = useReducer(updateTimes, initalizeTimes)

  return (
    <>
      <Header />
      <div className='book-container'>
        <div className='booking-title'>
          <h1 className='title primary-yellow'>Little Lemon</h1>
          <h2 className='subtitle white'>Book a table</h2>
        </div>
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        <Footer />
      </div>
    </>
  )
}

export default BookingPage