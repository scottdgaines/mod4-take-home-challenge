import React, { useState } from 'react'
import Card from '../Card/Card'
import './Container.css'

const Container = ({ articles, setArticles, searchQuery, setSearchQuery }) => {
    let articleCards = articles.map(article => {
        return (
            <Card 
                key={article.id}
                id={article.id}
                title={article.title}
                byline={article.byline}
                image={article.image}
            />
        )
    })

    const filterArticles = () => {
        
    }

    return (
        <section>
            <p className="container-title">Today's Headlines</p>
            <label>Filter articles by topic:</label>
            <select 
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}>
                <option value="Us">US</option>
                <option value="World">World</option>
                <option value="Business">Business</option>
                <option value="Books">Books</option>
                <option value="Sports">Sports</option>
                <option value="Dining">Dining</option>
                <option value="Opinion">Opinion</option>
                <option value="Climate">Climate</option>
                <option value="Health">Health</option>
                <option value="Well">Wellness</option>
                <option value="Technology">Technology</option>
            </select>
            <button onClick={(event) => filterArticles(event)}>Filter</button>
            <div className="preview-container">
                {articleCards}
            </div>
        </section>
    )
}

export default Container
