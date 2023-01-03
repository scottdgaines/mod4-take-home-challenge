const cleanData = (data) => {
    const cleanedArticles = data.results.map(article => {
        return {
            title: article.title,
            section: article.section,
            subsection: article.subsection,
            abstract: article.abstract,
            url: article.url,
            byline: article.byline,
            datePublished: article.published_date,
            key: article.created_date,
            image: article.multimedia[0].url
        }
    })

    return cleanedArticles
}

export default cleanData