import cleanData from './utilities'

const KEY = process.env.REACT_APP_API_KEY

const fetchData = async (category) => {
    console.log('categ', category)
    try {
        const response = await fetch(`https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${KEY}`)
        const data = await response.json()
        const cleanedArticles = cleanData(data)
        console.log(cleanedArticles)

        if (!response.ok || cleanedArticles.length === 0) {
            return
        }

        return cleanedArticles
    
    }   catch (error) {
        return "there was an error"
    }
}

export default fetchData