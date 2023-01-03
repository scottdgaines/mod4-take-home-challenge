const cleanData = (data) => {
    const cleanedArticles = data.results.map(article => {
        return {
            title: article.title,
            section: article.section,
            subsection: article.subsection,
            abstract: article.abstract,
            url: article.url,
            byline: article.byline,
            datePublished: article.published_date
        }
    })

    return cleanedArticles
}

export default cleanData