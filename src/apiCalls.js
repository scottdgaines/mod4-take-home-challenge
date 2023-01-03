import cleanData from './utilities'

const fetchData = async () => {
    try {
        const response = await fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=2MEU8OnzB8NLWNX4AqkTCo13CdBrRjse')
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