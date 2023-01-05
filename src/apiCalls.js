import cleanData from './utilities'

const KEY = process.env.REACT_APP_API_KEY

const fetchData = async (category) => {
    let url = `https://api.nytimes.com/svc/topstories/v2/${category}.json?api-key=${KEY}`

    try {
        const response = await fetch(url)
        const data = await response.json()
        const cleanedArticles = cleanData(data)

        if (!response.ok) {
            return
        }

        return cleanedArticles
    
    }   catch (error) {
        return "there was an error"
    }
}

export default fetchData