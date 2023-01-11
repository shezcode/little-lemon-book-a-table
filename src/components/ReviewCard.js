import React from 'react'

const ReviewCard = (props) => {
  return (
    <div>
      <div className='test-card'>
        <h3 className='lead-text'>{props.name}</h3>
        <div className='pic-review'>
          <img src={props.avatar} alt={props.alt} className='avatar'/>
          <p className='paragraph-text'>{props.text}</p>
        </div>
        <h4 className='lead-text'>{props.rating}</h4>
      </div>
    </div>
  )
}

export default ReviewCard