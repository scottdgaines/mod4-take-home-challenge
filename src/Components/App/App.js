import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import Container from '../Container/Container'
import DetailView from '../DetailView/DetailView'
import fetchData from '../../apiCalls'
import './App.css'

const App = () => {
    const [articles, setArticles] = useState([])

    useEffect (() => {
        fetchData()
        .then((cleanedArticles) => setArticles(cleanedArticles))
    }, [])

    return (
        <main>
            <header>
                <h1 className="page-title">The Schenectady Minutes</h1>
            </header>
            <Route exact path="/">
                <Container articles={articles} />
            </Route>
            <Route 
                exact path="/:id"
                render={({ match }) => {
                    const id = match.params.id
                    return (
                        <DetailView 
                            articles={articles}
                            id={id}
                        />
                    )
                }}>
            </Route>
        </main>
    )
}

export default App