import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './DetailView.css'

const DetailView = ({ articles, id }) => {
  const [article, setArticle] = useState([])

  useEffect(() => {
    const selectedArticle = articles.find(article => {
      return article.id == id
    })
    setArticle(selectedArticle)
  }, [])

  const subsection = article.subsection && ` | ${article.subsection}`

  return (
    <section>
      <Link to="/">Return Home</Link>
      <h2 className="detail-title">{article.title}</h2>
      <h3>{article.byline}</h3>
      <p>{article.section}{subsection}</p>
      <div className="detail-view">
        <img src={article.image} className="detail-view-image" />
        <div className="detail-article">
          <p>{article.abstract}</p>
          <p>To read the full article visit <a href={article.url}>this site</a></p>
        </div>
      </div>
      <p>{article.datePublished}</p>
    </section>
  )
}

export default DetailView
