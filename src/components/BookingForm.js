import React, {useState} from 'react'

const BookingForm = () => {
  const [date, setDate] = useState(null)
  const [time, setTime] = useState('17:00')
  const [guests, setGuests] = useState(1)
  const [occasion, setOccasion] = useState('Birthday')

  const changeDate = (event) => {
    setDate(event.target.value)
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
      <input type="date" id='date'
        value={date} onChange={changeDate} />
      <label htmlFor="time" className='subtitle primary-green'>Choose time</label>
      <select name="time" id="time" value={time} onChange={changeTime}>
        <option value="17:00">17:00</option>
        <option value="18:00">18:00</option>
        <option value="19:00">19:00</option>
        <option value="20:00">20:00</option>
        <option value="21:00">21:00</option>
        <option value="22:00">22:00</option>
      </select>
      <label htmlFor="guests" className='subtitle primary-green'>Number of guests</label>
      <input type="number" placeholder='1' min='1' max='10' id='guests' value={guests} onChange={changeGuests}/>
      <label htmlFor="occasion" className='subtitle primary-green'>Occasion</label>
      <select name="occasion" id="occasion" value={occasion} onChange={changeOccasion}>
        <option value="">Birthday</option>
        <option value="">Anniversary</option>
        <option value="">Business meeting</option>
        <option value="">Other</option>
      </select>
      {date}
      <br></br>
      {time}
      <button type='submit'>Make your reservation</button>
    </form>
  )
}

export default BookingForm