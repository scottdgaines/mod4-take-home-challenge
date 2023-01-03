import React from 'react'
import Card from '../Card/Card'
import './Container.css'

const Container = ({ articles }) => {
    let counter = 0
    
    const articleCards = articles.map(article => {
        counter = counter + 1
        return (
            <Card 
                key={counter}
                id={counter}
                title={article.title}
                byline={article.byline}
                image={article.image}
            />
        )
    })

    return (
        <section>
            <p>Today's Headlines</p>
            <div className="preview-container">
                {articleCards}
            </div>
        </section>
    )
}

export default Container
