const cleanData = (data) => {
    let counter = 0
    
    const cleanedArticles = data.results.map(article => {
        counter = counter + 1
        const section = article.section.charAt(0).toUpperCase() + article.section.slice(1)
        const subsection = article.subsection.charAt(0).toUpperCase() + article.subsection.slice(1)
        
        return {
            id: counter,
            title: article.title,
            section: section,
            subsection: subsection,
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