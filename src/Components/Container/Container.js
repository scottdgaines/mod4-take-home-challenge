import React from 'react'
import Card from '../Card/Card'
import './Container.css'

const Container = ({ articles, id }) => {
    const articleCards = articles.map(article => {
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

    return (
        <section>
            <p className="container-title">Today's Headlines</p>
            <div className="preview-container">
                {articleCards}
            </div>
        </section>
    )
}

export default Container
