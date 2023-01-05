import React, { useState } from 'react'
import Card from '../Card/Card'
import './Container.css'
import fetchData from '../../apiCalls'

const Container = ({ articles, setArticles, searchQuery, setSearchQuery }) => {
    const [headline, setHeadline] = useState('Today\'s Headlines')
        
    const articleCards = articles.filter(article => {
        return article.byline != ""
    }).map(article => {
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
  
  
    const handleClick = () => {
        fetchData(searchQuery)
        .then((cleanedArticles) => setArticles(cleanedArticles))

        updateHeadline()
    }
    
    const updateHeadline = () => {
         const headlineSection = searchQuery.charAt(0).toUpperCase() + searchQuery.slice(1)
     
         if (headlineSection === "Home") {
             setHeadline('Today\'s Headlines')
         } else {
             setHeadline(`Today's Headlines in ${headlineSection}`)
         }
     }

    return (
        <section>
            <div className="container-header">
                <p className="container-title">{headline}</p>
                <div className="filter">
                    <label>Display Articles by Topic: </label>
                    <select 
                        value={searchQuery}
                        onChange={(event) => setSearchQuery(event.target.value)}>
                        <option value="home">All</option>
                        <option value="arts">Arts</option>
                        <option value="automobiles">Automobiles</option>
                        <option value="books">Books</option>
                        <option value="business">Business</option>
                        <option value="fashion">Fashion</option>
                        <option value="food">Food</option>
                        <option value="health">Health</option>
                        <option value="insider">Insider</option>
                        <option value="magazine">Magazine</option>
                        <option value="movies">Movies</option>
                        <option value="nyregion">NY Region</option>
                        <option value="obituaries">Obituaries</option>
                        <option value="opinion">Opinion</option>
                        <option value="politics">Politics</option>
                        <option value="realestate">Real Estate</option>
                        <option value="science">Science</option>
                        <option value="sports">Sports</option>
                        <option value="sundayreview">Sunday Review</option>
                        <option value="technology">Technology</option>
                        <option value="theater">Theater</option>
                        <option value="t-magazine">T-Magazine</option>
                        <option value="travel">Travel</option>
                        <option value="upshot">Upshot</option>
                        <option value="us">US</option>
                        <option value="world">World</option>
                    </select>
                    <button onClick={handleClick}>Submit</button>
                </div>
            </div>
            <div className="preview-container">
                {articleCards}
            </div>
        </section>
    )
}

export default Container
