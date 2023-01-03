import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'

const Card = ({ id, title, byline, image }) => {

  return (
    <div className="card">
      <Link to="/:id">
        <img src={image} className="article-image" />
        <h2>{title}</h2>
        <p>{byline}</p>
      </Link>
    </div>
  )
}

export default Card
