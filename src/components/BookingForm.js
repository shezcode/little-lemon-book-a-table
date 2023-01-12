import React, {useState} from 'react'
import convertDate from '../utils'
import {fetchAPI, submitAPI} from '../utils'

const BookingForm = (props) => {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [guests, setGuests] = useState(1)
  const [occasion, setOccasion] = useState('Birthday')


  const changeDate = (event) => {
    setDate(event.target.value)
    props.dispatch({type: 'FETCH_TIMES', payload: fetchAPI(event.target.value)})
  }

  const changeTime = (event) => {
    setTime(event.target.value)
  }

  const changeGuests = (event) => {
    setGuests(event.target.value)
  }

  const changeOccasion = (event) => {
    setOccasion(event.target.value)
  }

  return (
    <form method='get' action='/' className='book-form'>
      <label htmlFor="date" className='subtitle primary-green'>Choose date</label>
      <input type="date" id='date' required
        value={date} onChange={changeDate}
        min={new Date().toISOString().slice(0, 10)}
        max={new Date(new Date().setDate(new Date().getDate() + 30)).toISOString().slice(0, 10)}
        className='lead-text'/>
      <label htmlFor="time" className='subtitle primary-green'>Choose time</label>
      <select required name="time" id="time" value={time} onChange={changeTime} className='lead-text'>
        {props.availableTimes.map((hour, index) => {
          return <option key={index} value={hour}>{hour}</option>
        })}
      </select>
      <label htmlFor="guests" className='subtitle primary-green'>Number of guests</label>
      <input type="number" required placeholder='1' min='1' max='10' id='guests' value={guests} onChange={changeGuests} className='lead-text'/>
      <label htmlFor="occasion" className='subtitle primary-green'>Occasion</label>
      <select name="occasion" required id="occasion" value={occasion} onChange={changeOccasion} className='lead-text'>
        <option value="birthday">Birthday</option>
        <option value="anniversary">Anniversary</option>
        <option value="bussiness meeting">Business meeting</option>
      </select>
      {date && guests > 1 && <div className='confirm-text paragraph-text'>
      <p>Currently booking a table for {guests} people, at {time} on the {convertDate(date)} for a {occasion}</p>
      </div>}
      {date && guests === 1 && <div className='confirm-text paragraph-text'>
      <p>Currently booking a table for {guests} person, at {time} on the {convertDate(date)} for a {occasion}</p>
      </div>}
      {!date && <div className='confirm-text paragraph-text'>
        <p>Please select a date</p>
        </div>}


      <button type='submit' className='lead-text primary-green form-btn'>Make your reservation</button>
    </form>
  )
}

export default BookingForm