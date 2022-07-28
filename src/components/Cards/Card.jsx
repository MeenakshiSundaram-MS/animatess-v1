import React from 'react'
import './Card.css'

function Card({name}) {
  return (
    <div className='card'>
        <span>{name}</span>
    </div>
  )
}

export default Card