import React, { useEffect, useState } from 'react'
import { Link, Route } from 'react-router-dom'
import Container from '../Container/Container'
import DetailView from '../DetailView/DetailView'
import fetchData from '../../apiCalls'

const App = () => {
    const [articles, setArticles] = useState([])


    useEffect (() => {
        fetchData()
        .then((cleanedArticles) => setArticles(cleanedArticles))
    }, [])

    console.log('articles', articles)

    return (
        <main>
            <h1 className="header">The Schenectady Minutes</h1>
            <Route exact path="/">
                <Container />
            </Route>
            <Route path="/:key">
                <DetailView />
            </Route>
        </main>
    )
}

export default App