import React from 'react'
import Card from '../Card/Card'
import './Container.css'
import fetchData from '../../apiCalls'

const Container = ({ articles, setArticles, searchQuery, setSearchQuery }) => {
    console.log(articles)
    let dynamicHeader = "Today's headlines"

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
  
    const handleClick = () => {
        fetchData(searchQuery)
        .then((cleanedArticles) => setArticles(cleanedArticles))

        dynamicHeader = `Today's headlines in ${searchQuery}`
    }

    return (
        <section>
            <p className="container-title">{dynamicHeader}</p>
            <label>Filter Articles by Topic: </label>
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
            <button onClick={handleClick}>Filter</button>
            <div className="preview-container">
                {articleCards}
            </div>
        </section>
    )
}

export default Container
